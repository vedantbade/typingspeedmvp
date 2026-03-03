"use client";

import React, { useEffect, useRef } from "react";

interface ResultModalProps {
    wpm: number;
    accuracy: number;
    totalChars: number;
    correctChars: number;
    mistakes: number;
    onRestart: () => void;
}

export default function ResultModal({
    wpm,
    accuracy,
    totalChars,
    correctChars,
    mistakes,
    onRestart,
}: ResultModalProps) {
    const restartRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        restartRef.current?.focus();

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onRestart();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onRestart]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="result-title"
        >
            <div
                className="bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-10 w-[90%] max-w-md
          transform animate-scaleIn border border-zinc-100 dark:border-zinc-700
          transition-colors duration-300"
            >
                <h2
                    id="result-title"
                    className="text-2xl sm:text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100 mb-8"
                >
                    Test Complete!
                </h2>

                <div className="space-y-4 mb-8">
                    <ResultRow
                        label="Words Per Minute"
                        value={String(wpm)}
                        accent="text-emerald-600 dark:text-emerald-400"
                    />
                    <ResultRow
                        label="Accuracy"
                        value={`${accuracy}%`}
                        accent="text-blue-600 dark:text-blue-400"
                    />
                    <ResultRow
                        label="Characters Typed"
                        value={String(totalChars)}
                        accent="text-violet-600 dark:text-violet-400"
                    />
                    <ResultRow
                        label="Correct Characters"
                        value={String(correctChars)}
                        accent="text-teal-600 dark:text-teal-400"
                    />
                    <ResultRow
                        label="Mistakes"
                        value={String(mistakes)}
                        accent="text-rose-600 dark:text-rose-400"
                    />
                </div>

                <button
                    ref={restartRef}
                    onClick={onRestart}
                    className="w-full py-3.5 rounded-xl font-semibold text-white 
            bg-gradient-to-r from-emerald-500 to-teal-500
            hover:from-emerald-600 hover:to-teal-600
            active:scale-[0.98] transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
            dark:focus:ring-offset-zinc-800"
                    aria-label="Restart typing test"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}

function ResultRow({
    label,
    value,
    accent,
}: {
    label: string;
    value: string;
    accent: string;
}) {
    return (
        <div className="flex items-center justify-between py-3 px-5 rounded-xl bg-zinc-50 dark:bg-zinc-700/50 transition-colors duration-300">
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {label}
            </span>
            <span className={`text-xl font-bold tabular-nums ${accent}`}>
                {value}
            </span>
        </div>
    );
}
