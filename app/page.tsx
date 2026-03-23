"use client";

import Link from "next/link";
import TypingTest from "@/components/TypingTest";
import TypingGuide from "@/components/TypingGuide";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12 md:py-16">
      <div className="w-full max-w-[900px] space-y-8">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
              Typing Speed Test
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">
              Test your speed · 60 seconds · Improve your WPM
            </p>
          </div>
        </header>

        <TypingTest />

        <footer className="text-center text-xs text-zinc-400 dark:text-zinc-600 pt-4 transition-colors duration-300">
          <p>Press any key to start · Backspace to correct · ESC to dismiss results</p>
        </footer>

        {/* Get Certificate CTA */}
        <div className="relative group mt-4">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-500" />
          <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-700/60 transition-colors duration-300">
            {/* Icon */}
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                Get Your Typing Certificate
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 transition-colors duration-300">
                Take a WPM test and earn a downloadable certificate to showcase your typing speed.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/test"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Take Test
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Article section — visually separated */}
      <div className="w-full max-w-[900px] mt-16 sm:mt-24 pt-10 border-t border-zinc-200 dark:border-zinc-700/60">
        <TypingGuide />
      </div>
    </main>
  );
}
