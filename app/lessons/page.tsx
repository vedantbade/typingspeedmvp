import Link from "next/link";

const LESSONS = [
    {
        id: "lesson-1",
        title: "What Is Touch Typing?",
        description: "A Complete Beginner’s Guide to Typing Without Looking",
        readTime: "4 min read",
    },
    {
        id: "lesson-2",
        title: "Correct Typing Posture",
        description: "How to Sit and Type Without Pain",
        readTime: "5 min read",
    },
    {
        id: "lesson-3",
        title: "Home Row Keys Guide",
        description: "The Foundation of Fast and Accurate Typing",
        readTime: "6 min read",
    },
    {
        id: "lesson-4",
        title: "Finger Placement Chart",
        description: "The Complete Guide to Proper Typing Technique",
        readTime: "7 min read",
    },
];

export default function LessonsIndexPage() {
    return (
        <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12 md:py-16">
            <div className="w-full max-w-[800px] space-y-8">
                <header className="space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                        Typing Lessons
                    </h1>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400">
                        Master the fundamentals of touch typing with our step-by-step guides.
                    </p>
                </header>

                <div className="grid gap-4 sm:gap-6 mt-8">
                    {LESSONS.map((lesson, index) => (
                        <Link
                            key={lesson.id}
                            href={`/lessons/${lesson.id}`}
                            className="group block p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/60 shadow-sm hover:shadow-md hover:border-emerald-500/30 dark:hover:border-emerald-400/30 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                        <span>Module {index + 1}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                                        <span className="text-zinc-500 dark:text-zinc-400">{lesson.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {lesson.title}
                                    </h2>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {lesson.description}
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
