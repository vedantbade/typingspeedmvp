"use client";

import { useRef, useCallback, useEffect } from "react";

/**
 * Ultra-low-latency mechanical keyboard sound using the Web Audio API.
 *
 * Three layers combine to mimic a real mechanical switch:
 *   1. Noise click  – filtered white noise burst for the sharp "clack"
 *   2. Resonant ping – mid-frequency oscillator for the spring/plate ring
 *   3. Low thud      – sine wave for the bottom-out impact
 *
 * A pre-generated noise buffer is reused across all keystrokes so there is
 * zero per-keystroke allocation overhead.
 */
export function useTypingSound() {
    const ctxRef = useRef<AudioContext | null>(null);
    const noiseRef = useRef<AudioBuffer | null>(null);

    const getCtx = useCallback(() => {
        if (!ctxRef.current) {
            ctxRef.current = new AudioContext();
        }
        if (ctxRef.current.state === "suspended") {
            ctxRef.current.resume();
        }
        return ctxRef.current;
    }, []);

    // Build (or reuse) a short white-noise buffer
    const getNoise = useCallback(() => {
        const ctx = getCtx();
        if (!noiseRef.current) {
            const sr = ctx.sampleRate;
            const len = Math.ceil(sr * 0.04); // 40 ms buffer
            const buf = ctx.createBuffer(1, len, sr);
            const data = buf.getChannelData(0);
            for (let i = 0; i < len; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            noiseRef.current = buf;
        }
        return noiseRef.current;
    }, [getCtx]);

    const play = useCallback(() => {
        const ctx = getCtx();
        const now = ctx.currentTime;

        // ── Layer 1: Filtered noise click (the sharp "clack") ──
        const noiseSrc = ctx.createBufferSource();
        noiseSrc.buffer = getNoise();

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = "bandpass";
        bandpass.frequency.setValueAtTime(3500 + Math.random() * 1500, now);
        bandpass.Q.setValueAtTime(1.2, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.18, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        noiseSrc.connect(bandpass);
        bandpass.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noiseSrc.start(now);
        noiseSrc.stop(now + 0.03);

        // ── Layer 2: Resonant ping (spring / plate ring) ──
        const ping = ctx.createOscillator();
        const pingGain = ctx.createGain();

        ping.type = "sine";
        ping.frequency.setValueAtTime(4200 + Math.random() * 800, now);

        pingGain.gain.setValueAtTime(0.05, now);
        pingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

        ping.connect(pingGain);
        pingGain.connect(ctx.destination);

        ping.start(now);
        ping.stop(now + 0.022);

        // ── Layer 3: Low thud (bottom-out impact) ──
        const thud = ctx.createOscillator();
        const thudGain = ctx.createGain();

        thud.type = "sine";
        thud.frequency.setValueAtTime(80 + Math.random() * 40, now);

        thudGain.gain.setValueAtTime(0.07, now);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        thud.connect(thudGain);
        thudGain.connect(ctx.destination);

        thud.start(now);
        thud.stop(now + 0.035);
    }, [getCtx, getNoise]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            ctxRef.current?.close();
            ctxRef.current = null;
            noiseRef.current = null;
        };
    }, []);

    return play;
}
