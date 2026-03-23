import ArticleCTAs from "@/components/ArticleCTAs";

export default function PracticePage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    Practice Mode
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400">
                    (Coming soon) Untimed free practice with custom texts.
                </p>
            </div>

            <div className="w-full max-w-[600px] mt-8">
                <ArticleCTAs />
            </div>
        </main>
    );
}
