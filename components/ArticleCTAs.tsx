import Link from "next/link";

/**
 * Reusable CTA section for article/lesson pages.
 * Adds links to the Typing Speed Test and Get Certificate sections.
 */
export default function ArticleCTAs() {
    return (
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700/60 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Ready to practice?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
                <Link
                    href="/"
                    className="flex-1 group flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold
                        bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300
                        hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-700 dark:hover:text-emerald-400
                        border border-zinc-200 dark:border-zinc-700/60
                        transition-all duration-200"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Take a Typing Speed Test
                </Link>
                <Link
                    href="/test"
                    className="flex-1 group flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold
                        text-white bg-gradient-to-r from-emerald-500 to-teal-600
                        hover:from-emerald-600 hover:to-teal-700
                        shadow-sm hover:shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20
                        transition-all duration-200"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Get a Typing Speed Certificate
                </Link>
            </div>
        </div>
    );
}
