export default function TypingGuide() {
    return (
        <article className="w-full rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-zinc-100 dark:border-zinc-700 p-6 sm:p-10 transition-colors duration-300">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 leading-tight">
                Increasing Typing Speed: A Practical Guide to Becoming Faster and More
                Accurate
            </h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mb-8" />

            {/* Intro */}
            <div className="prose-section">
                <p>
                    In today&apos;s digital world, typing is no longer just a useful skill
                    — it&apos;s essential. Whether you&apos;re a student writing
                    assignments, a programmer building applications, a business owner
                    replying to emails, or an entrepreneur building your next startup,
                    typing speed directly impacts your productivity. The faster and more
                    accurately you type, the more efficiently you can turn your thoughts
                    into action.
                </p>
                <p>
                    But increasing typing speed is not about smashing the keyboard
                    randomly. It&apos;s about technique, consistency, and smart practice.
                    Below is a complete, practical guide that will help you systematically
                    improve your typing speed and accuracy.
                </p>
            </div>

            {/* Sections */}
            <Section number={1} title="Start With Proper Finger Placement">
                <p>
                    The foundation of fast typing is correct finger positioning. This is
                    called touch typing — typing without looking at the keyboard.
                </p>
                <p>Place your fingers on the home row keys:</p>
                <ul>
                    <li>
                        <strong>Left hand:</strong> A, S, D, F
                    </li>
                    <li>
                        <strong>Right hand:</strong> J, K, L, ;
                    </li>
                </ul>
                <p>Your thumbs should rest lightly on the spacebar.</p>
                <p>
                    Each finger is responsible for specific keys. When you train your
                    muscle memory to use the correct finger for each key, your speed
                    naturally increases over time. Avoid using only two or three fingers —
                    that limits your potential speed significantly.
                </p>
            </Section>

            <Section number={2} title="Stop Looking at the Keyboard">
                <p>
                    One of the biggest mistakes beginners make is constantly looking down
                    at the keyboard. This slows you down and prevents muscle memory from
                    developing.
                </p>
                <p>
                    At first, this will feel uncomfortable. You will make mistakes. You
                    will feel slower. That&apos;s normal.
                </p>
                <p>
                    Improvement comes when you allow your fingers to learn the layout
                    naturally. Within a few weeks of consistent practice, you will notice
                    that your hands begin to &quot;remember&quot; key positions
                    automatically.
                </p>
                <p>
                    If needed, cover your keyboard with a thin cloth during practice
                    sessions.
                </p>
            </Section>

            <Section number={3} title="Focus on Accuracy Before Speed">
                <p>
                    Many people try to increase speed immediately. This is a mistake.
                    Speed without accuracy creates bad habits.
                </p>
                <p>Instead:</p>
                <ul>
                    <li>Type slowly.</li>
                    <li>Focus on correct finger placement.</li>
                    <li>Minimize errors.</li>
                    <li>Maintain rhythm.</li>
                </ul>
                <p>
                    Once your accuracy consistently reaches 95% or higher, your speed will
                    naturally increase. Think of it like learning to play a musical
                    instrument — first clean notes, then faster tempo.
                </p>
            </Section>

            <Section number={4} title="Practice Daily — Even 15 Minutes Helps">
                <p>
                    Consistency beats intensity. Practicing 15–20 minutes daily is far
                    better than practicing two hours once a week. Regular exposure helps
                    strengthen neural pathways and improves muscle memory.
                </p>
                <p>Break your practice into small sections:</p>
                <ul>
                    <li>5 minutes of warm-up</li>
                    <li>10 minutes of focused typing exercises</li>
                    <li>5 minutes of real-world typing (paragraphs, articles, coding, etc.)</li>
                </ul>
                <p>Improvement compounds over time.</p>
            </Section>

            <Section number={5} title="Use Structured Typing Exercises">
                <p>
                    Instead of randomly typing sentences, practice structured drills:
                </p>
                <ul>
                    <li>Single letters (to build accuracy)</li>
                    <li>Common letter combinations (th, ing, er, re)</li>
                    <li>Full words</li>
                    <li>Paragraphs</li>
                    <li>Numbers and symbols</li>
                </ul>
                <p>
                    Gradually increase difficulty. Start with simple lowercase text, then
                    move to uppercase, punctuation, and special characters.
                </p>
                <p>This structured approach trains both speed and versatility.</p>
            </Section>

            <Section number={6} title="Improve Posture and Ergonomics">
                <p>
                    Your physical setup affects your typing speed more than you think.
                    Follow these guidelines:
                </p>
                <ul>
                    <li>Sit upright with back supported.</li>
                    <li>Keep elbows at a 90-degree angle.</li>
                    <li>
                        Wrists should float slightly above the keyboard (not resting
                        heavily).
                    </li>
                    <li>Keep screen at eye level.</li>
                </ul>
                <p>
                    Good posture reduces fatigue and allows longer, more comfortable
                    typing sessions.
                </p>
            </Section>

            <Section number={7} title="Develop a Steady Rhythm">
                <p>
                    Fast typists don&apos;t type in bursts — they maintain rhythm.
                </p>
                <div className="my-4 space-y-2">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Instead of:{" "}
                        <span className="text-red-500 dark:text-red-400 font-medium">
                            Fast-fast-fast-stop-correct-error
                        </span>
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Aim for:{" "}
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                            Smooth-consistent-even pace
                        </span>
                    </p>
                </div>
                <p>
                    Think of typing like running. Sprinters slow down quickly, but steady
                    runners maintain performance longer.
                </p>
                <p>
                    Use light keystrokes. Avoid hitting keys too hard — it slows you down
                    and tires your fingers.
                </p>
            </Section>

            <Section number={8} title="Train Your Brain, Not Just Your Fingers">
                <p>
                    Typing speed is not only physical — it&apos;s cognitive. To improve:
                </p>
                <ul>
                    <li>Read slightly ahead of what you&apos;re typing.</li>
                    <li>Anticipate words.</li>
                    <li>Practice common phrases.</li>
                    <li>Expand vocabulary.</li>
                </ul>
                <p>
                    The faster your brain processes language, the faster your fingers can
                    follow. This is why writers and programmers often type faster over time
                    — their minds predict patterns.
                </p>
            </Section>

            <Section number={9} title="Track Your Progress">
                <p>
                    Measure your Words Per Minute (WPM) regularly, but don&apos;t obsess
                    over it. Track:
                </p>
                <ul>
                    <li>WPM</li>
                    <li>Accuracy percentage</li>
                    <li>Improvement over weeks</li>
                </ul>
                <p>
                    Small improvements (2–3 WPM per week) add up significantly over
                    months.
                </p>
                <div className="my-4 rounded-xl bg-zinc-50 dark:bg-zinc-700/50 p-4 text-sm text-zinc-600 dark:text-zinc-300 space-y-1">
                    <p>
                        40 WPM → 55 WPM in <strong>2 months</strong>
                    </p>
                    <p>
                        55 WPM → 75 WPM in <strong>4 months</strong>
                    </p>
                </div>
                <p>Consistency compounds growth.</p>
            </Section>

            <Section number={10} title="Eliminate Bad Habits Early">
                <p>Watch out for:</p>
                <ul>
                    <li>Using only index fingers</li>
                    <li>Looking at the keyboard</li>
                    <li>Slouching posture</li>
                    <li>Ignoring punctuation practice</li>
                    <li>Rushing before mastering basics</li>
                </ul>
                <p>
                    Correcting bad habits later is harder than learning correctly from the
                    beginning.
                </p>
            </Section>

            <Section number={11} title="Push Beyond Your Comfort Zone">
                <p>Once you&apos;re comfortable, challenge yourself:</p>
                <ul>
                    <li>Increase difficulty.</li>
                    <li>Try longer paragraphs.</li>
                    <li>Add numbers and symbols.</li>
                    <li>Practice technical text.</li>
                </ul>
                <p>
                    Growth happens slightly outside your comfort zone — not in it.
                </p>
            </Section>

            {/* Final Thoughts */}
            <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-700">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    Final Thoughts
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    Increasing typing speed is a skill that rewards patience and
                    discipline. It&apos;s not about shortcuts. It&apos;s about daily
                    practice, correct technique, and gradual improvement.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    If you follow these lessons consistently:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-300 mb-6 ml-1">
                    <li>Focus on accuracy first</li>
                    <li>Practice daily</li>
                    <li>Use proper finger placement</li>
                    <li>Maintain good posture</li>
                    <li>Track progress</li>
                </ul>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    You will see measurable improvement within weeks.
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
                    Typing is a lifelong skill. Whether you&apos;re building software,
                    writing assignments, running a business, or launching a startup,
                    faster typing means faster execution — and in today&apos;s world,
                    speed matters.
                </p>
                <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800/40 p-5">
                    <p className="text-emerald-800 dark:text-emerald-300 font-medium text-center text-sm sm:text-base leading-relaxed">
                        Start small. Stay consistent. Let your fingers learn.
                        <br />
                        <span className="text-emerald-600 dark:text-emerald-400">
                            Your future productivity depends on it.
                        </span>
                    </p>
                </div>
            </div>
        </article>
    );
}

/* ─── Reusable section component ─── */

function Section({
    number,
    title,
    children,
}: {
    number: number;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-700/60">
            <h3 className="flex items-baseline gap-3 text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-sm font-bold shrink-0">
                    {number}
                </span>
                {title}
            </h3>
            <div className="prose-section">{children}</div>
        </section>
    );
}
