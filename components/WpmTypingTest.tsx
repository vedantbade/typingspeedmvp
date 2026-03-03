"use client";

import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
    useMemo,
} from "react";
import { getRandomParagraph } from "@/lib/paragraphs";
import {
    calculateGrossWPM,
    calculateNetWPM,
    calculateAccuracy,
} from "@/lib/typingLogic";
import StatsBar from "./StatsBar";
import TestResultModal from "./TestResultModal";
import { useTypingSound } from "@/hooks/useTypingSound";
import { useSoundSetting } from "./SoundToggle";

const DURATION = 60; // Fixed 1-minute test

interface CharSpanProps {
    char: string;
    status: "correct" | "incorrect" | "current" | "neutral";
}

const CharSpan = React.memo(function CharSpan({ char, status }: CharSpanProps) {
    let className = "transition-colors duration-100 ";
    switch (status) {
        case "correct":
            className += "text-emerald-600 dark:text-emerald-400";
            break;
        case "incorrect":
            className += "text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/30 rounded-sm";
            break;
        case "current":
            className +=
                "text-zinc-900 dark:text-zinc-100 border-b-2 border-emerald-500 dark:border-emerald-400";
            break;
        case "neutral":
            className += "text-zinc-400 dark:text-zinc-500";
            break;
    }
    return <span className={className}>{char}</span>;
});

interface WpmTypingTestProps {
    targetWpm: number;
}

export default function WpmTypingTest({ targetWpm }: WpmTypingTestProps) {
    const [paragraph, setParagraph] = useState("");
    const [typed, setTyped] = useState("");
    const [timeLeft, setTimeLeft] = useState(DURATION);
    const [hasStarted, setHasStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const startTimeRef = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const playKeySound = useTypingSound();
    const { soundOn } = useSoundSetting();

    // Generate text on mount
    useEffect(() => {
        setParagraph(getRandomParagraph());
        inputRef.current?.focus();
    }, []);

    // Auto-focus input when paragraph changes
    useEffect(() => {
        if (!isFinished) {
            inputRef.current?.focus();
        }
    }, [paragraph, isFinished]);

    const stopTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startTimer = useCallback(() => {
        startTimeRef.current = Date.now();
        setHasStarted(true);
        intervalRef.current = setInterval(() => {
            const elapsed = Math.floor(
                (Date.now() - startTimeRef.current) / 1000
            );
            const remaining = Math.max(0, DURATION - elapsed);
            setTimeLeft(remaining);
            if (remaining <= 0) {
                setIsFinished(true);
            }
        }, 100);
    }, []);

    // Cleanup interval on unmount
    useEffect(() => {
        return () => stopTimer();
    }, [stopTimer]);

    // Stop timer when finished
    useEffect(() => {
        if (isFinished) {
            stopTimer();
        }
    }, [isFinished, stopTimer]);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (isFinished) return;

            const value = e.target.value;

            // Cap input at paragraph length
            if (value.length > paragraph.length) return;

            if (!hasStarted && value.length > 0) {
                startTimer();
            }

            setTyped(value);
            if (soundOn) playKeySound();

            // If user typed entire paragraph, finish early
            if (value.length === paragraph.length) {
                setIsFinished(true);
            }
        },
        [isFinished, hasStarted, startTimer, paragraph, soundOn, playKeySound]
    );

    const handlePaste = useCallback((e: React.ClipboardEvent) => {
        e.preventDefault();
    }, []);

    const handleRestart = useCallback(() => {
        stopTimer();
        setParagraph(getRandomParagraph());
        setTyped("");
        setTimeLeft(DURATION);
        setHasStarted(false);
        setIsFinished(false);
        startTimeRef.current = 0;
        setTimeout(() => inputRef.current?.focus(), 50);
    }, [stopTimer]);

    // Compute stats
    const { correctChars, totalTyped } = useMemo(() => {
        let correct = 0;
        for (let i = 0; i < typed.length; i++) {
            if (typed[i] === paragraph[i]) {
                correct++;
            }
        }
        return { correctChars: correct, totalTyped: typed.length };
    }, [typed, paragraph]);

    const elapsedSeconds = hasStarted
        ? Math.max(1, DURATION - timeLeft)
        : 0;
    const uncorrectedErrors = totalTyped - correctChars;
    const grossWPM = calculateGrossWPM(totalTyped, elapsedSeconds);
    const netWPM = calculateNetWPM(grossWPM, uncorrectedErrors, elapsedSeconds);
    const accuracy = calculateAccuracy(correctChars, totalTyped);

    // Character status array
    const charStatuses = useMemo(() => {
        return paragraph.split("").map((char, i) => {
            let status: "correct" | "incorrect" | "current" | "neutral";
            if (i < typed.length) {
                status = typed[i] === char ? "correct" : "incorrect";
            } else if (i === typed.length) {
                status = "current";
            } else {
                status = "neutral";
            }
            return { char, status };
        });
    }, [paragraph, typed]);

    // Auto-scroll to keep the current character visible
    useEffect(() => {
        if (cursorRef.current && containerRef.current) {
            cursorRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [typed.length]);

    // Track cursor position for hidden input placement
    const [inputStyle, setInputStyle] = useState<React.CSSProperties>({
        top: 0,
        left: 0,
    });

    useEffect(() => {
        if (cursorRef.current && containerRef.current) {
            setInputStyle({
                top: cursorRef.current.offsetTop,
                left: cursorRef.current.offsetLeft,
            });
        } else {
            setInputStyle({ top: 0, left: 0 });
        }
    }, [typed.length, paragraph]);

    // Click anywhere on paragraph area to focus input
    const handleContainerClick = useCallback(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="w-full space-y-6">
            <StatsBar
                timeLeft={timeLeft}
                wpm={hasStarted ? netWPM : 0}
                accuracy={accuracy}
                hasStarted={hasStarted}
            />

            <div
                ref={containerRef}
                className="relative rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border 
                    border-zinc-100 dark:border-zinc-700 p-6 sm:p-8 cursor-text
                    transition-colors duration-300 max-h-[420px] overflow-y-auto"
                onClick={handleContainerClick}
                role="textbox"
                aria-label="Typing area. Click here and start typing."
            >
                <p
                    className="text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed md:leading-loose 
                        font-mono tracking-wide select-none"
                    aria-hidden="true"
                >
                    {charStatuses.map((item, i) => (
                        <span key={i} ref={item.status === "current" ? cursorRef : undefined}>
                            <CharSpan char={item.char} status={item.status} />
                        </span>
                    ))}
                </p>

                <input
                    ref={inputRef}
                    type="text"
                    value={typed}
                    onChange={handleChange}
                    onPaste={handlePaste}
                    disabled={isFinished}
                    className="absolute opacity-0 w-2 h-6"
                    style={inputStyle}
                    aria-label="Type the paragraph shown above"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                />

                {!hasStarted && !isFinished && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/60 dark:bg-zinc-800/60 backdrop-blur-[2px] rounded-2xl transition-opacity duration-300">
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base font-medium animate-pulse">
                            Click here and start typing...
                        </p>
                    </div>
                )}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleRestart}
                    className="px-6 py-2.5 text-sm font-medium rounded-xl
                        text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-700 
                        hover:bg-zinc-200 dark:hover:bg-zinc-600
                        active:scale-[0.97] transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
                        dark:focus:ring-offset-zinc-900"
                    aria-label="Restart typing test with a new paragraph"
                >
                    ↻ New Test
                </button>
            </div>

            {isFinished && (
                <TestResultModal
                    wpm={netWPM}
                    accuracy={accuracy}
                    totalChars={totalTyped}
                    correctChars={correctChars}
                    mistakes={uncorrectedErrors}
                    targetWpm={targetWpm}
                    onRestart={handleRestart}
                />
            )}
        </div>
    );
}
