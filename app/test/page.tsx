"use client";

import { useState } from "react";
import WpmTypingTest from "@/components/WpmTypingTest";

const WPM_OPTIONS = [40, 60, 80, 100, 120, 140] as const;

export default function TestPage() {
    const [targetWpm, setTargetWpm] = useState<number>(40);

    return (
        <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12 md:py-16">
            <div className="w-full max-w-[900px] space-y-8">
                <header>
                    <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                        WPM Typing Test
                    </h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">
                        Choose a target WPM · Type for 60 seconds · Pass or fail
                    </p>
                </header>

                {/* WPM Target Selector */}
                <div className="flex justify-center">
                    <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 transition-colors duration-300">
                        {WPM_OPTIONS.map((wpm) => (
                            <button
                                key={wpm}
                                onClick={() => setTargetWpm(wpm)}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer
                                    ${targetWpm === wpm
                                        ? "bg-white dark:bg-zinc-700 text-emerald-600 dark:text-emerald-400 shadow-sm"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                                    }`}
                                aria-label={`Set target to ${wpm} WPM`}
                            >
                                {wpm} WPM
                            </button>
                        ))}
                    </div>
                </div>

                {/* Target display */}
                <div className="text-center">
                    <span className="text-sm text-zinc-400 dark:text-zinc-500">Target: </span>
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {targetWpm} WPM
                    </span>
                    <span className="text-sm text-zinc-400 dark:text-zinc-500"> in 60 seconds</span>
                </div>

                <WpmTypingTest key={targetWpm} targetWpm={targetWpm} />

                <footer className="text-center text-xs text-zinc-400 dark:text-zinc-600 pt-4 transition-colors duration-300">
                    <p>Press any key to start · Backspace to correct · ESC to dismiss results</p>
                </footer>
            </div>
        </main>
    );
}
