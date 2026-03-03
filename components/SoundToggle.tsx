"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const SoundContext = createContext({ soundOn: true, toggle: () => { } });

export function useSoundSetting() {
    return useContext(SoundContext);
}

export function SoundProvider({ children }: { children: ReactNode }) {
    const [soundOn, setSoundOn] = useState(true);
    return (
        <SoundContext.Provider value={{ soundOn, toggle: () => setSoundOn((p) => !p) }}>
            {children}
        </SoundContext.Provider>
    );
}

export default function SoundToggle() {
    const { soundOn, toggle } = useSoundSetting();

    return (
        <button
            onClick={toggle}
            className={`p-2 rounded-xl text-sm transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
        dark:focus:ring-offset-zinc-900
        ${soundOn
                    ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/60"
                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
            aria-label={soundOn ? "Mute typing sound" : "Unmute typing sound"}
            title={soundOn ? "Sound ON" : "Sound OFF"}
        >
            {soundOn ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
            )}
        </button>
    );
}
