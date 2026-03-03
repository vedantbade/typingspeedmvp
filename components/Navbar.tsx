"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import SoundToggle from "./SoundToggle";

const ROUTES = [
    { name: "Home", path: "/" },
    { name: "Lessons", path: "/lessons" },
    { name: "Improve Speed", path: "/improve-speed" },
    { name: "Practice", path: "/practice" },
    { name: "Test", path: "/test" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300">
            <div className="max-w-[900px] mx-auto px-4 h-16 flex items-center justify-between">

                {/* Logo / Brand (Optional) */}
                <div className="flex-shrink-0 font-bold text-lg text-emerald-600 dark:text-emerald-400 mr-8 hidden sm:block">
                    TypeSprint
                </div>

                {/* Navigation Links */}
                <div className="flex-1 flex items-center justify-start gap-1 sm:gap-2 overflow-x-auto no-scrollbar mask-edges">
                    {ROUTES.map((route) => {
                        const isActive = pathname === route.path;
                        return (
                            <Link
                                key={route.path}
                                href={route.path}
                                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap
                  ${isActive
                                        ? "text-zinc-900 dark:text-zinc-100"
                                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                                    }
                `}
                            >
                                {route.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-500 dark:bg-emerald-400 rounded-t-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Global Controls */}
                <div className="flex items-center gap-2 ml-4">
                    <SoundToggle />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
