import Link from "next/link";

const GUIDES = [
    {
        id: "how-to-increase-typing-speed",
        title: "How to Increase Typing Speed",
        description: "A Practical Guide That Actually Works",
        readTime: "5 min read",
    },
    {
        id: "how-to-type-80-wpm",
        title: "How to Type 80 WPM",
        description: "A Realistic Guide to Reaching Advanced Typing Speed",
        readTime: "6 min read",
    },
    {
        id: "how-to-type-100-wpm",
        title: "How to Type 100 WPM",
        description: "The Complete Guide to Reaching Expert Typing Speed",
        readTime: "7 min read",
    },
];

export default function ImproveSpeedPage() {
    return (
        <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12 md:py-16">
            <div className="w-full max-w-[800px] space-y-8">
                <header className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                        Improve Speed
                    </h1>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400">
                        Advanced guides and drills to boost your WPM.
                    </p>
                </header>

                <div className="grid gap-4 sm:gap-6 mt-8">
                    {GUIDES.map((guide) => (
                        <Link
                            key={guide.id}
                            href={`/improve-speed/${guide.id}`}
                            className="group block p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/60 shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-400/30 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                        <span>Guide</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                                        <span className="text-zinc-500 dark:text-zinc-400">{guide.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {guide.title}
                                    </h2>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {guide.description}
                                    </p>
                                </div>
                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
