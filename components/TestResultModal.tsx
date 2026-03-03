"use client";

import React, { useState, useEffect, useRef } from "react";
import CertificateModal from "./CertificateModal";

interface TestResultModalProps {
    wpm: number;
    accuracy: number;
    totalChars: number;
    correctChars: number;
    mistakes: number;
    targetWpm: number;
    onRestart: () => void;
}

export default function TestResultModal({
    wpm,
    accuracy,
    totalChars,
    correctChars,
    mistakes,
    targetWpm,
    onRestart,
}: TestResultModalProps) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const passed = wpm >= targetWpm;
    const [showCertificate, setShowCertificate] = useState(false);

    useEffect(() => {
        btnRef.current?.focus();

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onRestart();
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onRestart]);

    return (
        <>
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
                role="dialog"
                aria-modal="true"
                aria-labelledby="test-result-title"
            >
                <div
                    className={`bg-white dark:bg-zinc-800 rounded-3xl shadow-2xl p-8 sm:p-10 w-[90%] max-w-md
                        transform animate-scaleIn border transition-colors duration-300
                        ${passed
                            ? "border-emerald-200 dark:border-emerald-700/60"
                            : "border-rose-200 dark:border-rose-700/60"
                        }`}
                >
                    {/* Status Icon */}
                    <div className="flex justify-center mb-4">
                        <div
                            className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl
                                ${passed
                                    ? "bg-emerald-100 dark:bg-emerald-900/30"
                                    : "bg-rose-100 dark:bg-rose-900/30"
                                }`}
                        >
                            {passed ? "🎉" : "💪"}
                        </div>
                    </div>

                    {/* Title */}
                    <h2
                        id="test-result-title"
                        className={`text-2xl sm:text-3xl font-bold text-center mb-2
                            ${passed
                                ? "text-emerald-600 dark:text-emerald-400"
                                : "text-rose-600 dark:text-rose-400"
                            }`}
                    >
                        {passed ? "Congratulations!" : "Keep Practicing!"}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400 mb-6">
                        {passed
                            ? `You passed the ${targetWpm} WPM test!`
                            : `You needed ${targetWpm} WPM but scored ${wpm} WPM.`}
                    </p>

                    {/* Stats */}
                    <div className="space-y-3 mb-8">
                        <StatRow
                            label="Your WPM"
                            value={String(wpm)}
                            accent={
                                passed
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : "text-rose-600 dark:text-rose-400"
                            }
                        />
                        <StatRow
                            label="Target WPM"
                            value={String(targetWpm)}
                            accent="text-zinc-700 dark:text-zinc-300"
                        />
                        <StatRow
                            label="Accuracy"
                            value={`${accuracy}%`}
                            accent="text-blue-600 dark:text-blue-400"
                        />
                        <StatRow
                            label="Characters Typed"
                            value={String(totalChars)}
                            accent="text-violet-600 dark:text-violet-400"
                        />
                        <StatRow
                            label="Correct Characters"
                            value={String(correctChars)}
                            accent="text-teal-600 dark:text-teal-400"
                        />
                        <StatRow
                            label="Mistakes"
                            value={String(mistakes)}
                            accent="text-rose-600 dark:text-rose-400"
                        />
                    </div>

                    {/* Pass / Fail badge */}
                    <div className="flex justify-center mb-6">
                        <span
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold
                                ${passed
                                    ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300"
                                    : "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300"
                                }`}
                        >
                            {passed ? "✓ PASSED" : "✗ FAILED"}
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className={`flex ${passed ? "gap-3" : ""}`}>
                        <button
                            ref={btnRef}
                            onClick={onRestart}
                            className={`flex-1 py-3.5 rounded-xl font-semibold text-white
                                active:scale-[0.98] transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                dark:focus:ring-offset-zinc-800
                                ${passed
                                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 focus:ring-emerald-400"
                                    : "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 focus:ring-rose-400"
                                }`}
                            aria-label={passed ? "Try another test" : "Try again"}
                        >
                            {passed ? "Try Again" : "Try Again"}
                        </button>

                        {passed && (
                            <button
                                onClick={() => setShowCertificate(true)}
                                className="flex-1 py-3.5 rounded-xl font-semibold text-white
                                    bg-gradient-to-r from-amber-500 to-orange-500
                                    hover:from-amber-600 hover:to-orange-600
                                    active:scale-[0.98] transition-all duration-200
                                    focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
                                    dark:focus:ring-offset-zinc-800"
                                aria-label="Download certificate"
                            >
                                🎓 Certificate
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showCertificate && (
                <CertificateModal
                    targetWpm={targetWpm}
                    wpm={wpm}
                    accuracy={accuracy}
                    onClose={() => setShowCertificate(false)}
                />
            )}
        </>
    );
}

function StatRow({
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
