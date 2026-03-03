import React from "react";

interface StatsBarProps {
    timeLeft: number;
    wpm: number;
    accuracy: number;
    hasStarted: boolean;
}

export default function StatsBar({
    timeLeft,
    wpm,
    accuracy,
    hasStarted,
}: StatsBarProps) {
    return (
        <div
            className="flex items-center justify-center gap-6 sm:gap-10 py-4 px-6 rounded-2xl 
        bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700
        transition-colors duration-300"
            role="status"
            aria-label="Typing test statistics"
        >
            <StatItem
                label="Time"
                value={`${timeLeft}s`}
                color={
                    timeLeft <= 10 && hasStarted
                        ? "text-red-500"
                        : "text-zinc-900 dark:text-zinc-100"
                }
            />
            <Divider />
            <StatItem
                label="WPM"
                value={String(wpm)}
                color="text-emerald-600 dark:text-emerald-400"
            />
            <Divider />
            <StatItem
                label="Accuracy"
                value={`${accuracy}%`}
                color="text-blue-600 dark:text-blue-400"
            />
        </div>
    );
}

function StatItem({
    label,
    value,
    color,
}: {
    label: string;
    value: string;
    color: string;
}) {
    return (
        <div className="flex flex-col items-center min-w-[60px]">
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                {label}
            </span>
            <span
                className={`text-2xl sm:text-3xl font-bold tabular-nums transition-colors duration-200 ${color}`}
            >
                {value}
            </span>
        </div>
    );
}

function Divider() {
    return (
        <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-600 transition-colors duration-300" />
    );
}
