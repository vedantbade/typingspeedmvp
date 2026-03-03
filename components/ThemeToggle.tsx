"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme");
        if (
            stored === "dark" ||
            (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDark(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggle = () => {
        const next = !dark;
        setDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggle}
            className="p-2 rounded-xl text-lg
        bg-zinc-100 dark:bg-zinc-800 
        hover:bg-zinc-200 dark:hover:bg-zinc-700
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2
        dark:focus:ring-offset-zinc-900"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {dark ? "☀️" : "🌙"}
        </button>
    );
}
