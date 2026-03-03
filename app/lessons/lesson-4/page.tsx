import Link from "next/link";
import Image from "next/image";

export default function Lesson4Page() {
    return (
        <main className="min-h-screen flex flex-col items-center px-4 py-8 sm:py-12 md:py-16">
            <article className="w-full max-w-[800px] prose-section">

                <Link
                    href="/lessons"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to Lessons
                </Link>

                <div className="mb-2 text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-500 uppercase">
                    Module 4
                </div>
                <h1>Finger Placement Chart: The Complete Guide to Proper Typing Technique</h1>

                <p>
                    If you want to type faster and more accurately, learning correct finger placement is not optional — it’s essential.
                </p>

                <p>
                    Many people try to improve their typing speed by practicing random paragraphs or taking repeated typing tests. But without proper finger positioning, progress becomes slow and inconsistent. The real secret behind fast typing is using all ten fingers correctly.
                </p>

                <p>
                    This guide will walk you through the complete finger placement chart, explain which finger presses which key, and help you build a strong foundation for touch typing.
                </p>

                <h2>Why Finger Placement Matters</h2>
                <p>Correct finger placement helps you:</p>
                <ul>
                    <li>Build muscle memory</li>
                    <li>Reduce typing mistakes</li>
                    <li>Increase typing speed naturally</li>
                    <li>Avoid unnecessary hand movement</li>
                    <li>Prevent wrist and finger strain</li>
                </ul>

                <p>
                    When each finger has a specific responsibility, your hands move efficiently instead of randomly searching for keys. Touch typing works best when every finger knows its job.
                </p>

                <div className="my-8 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-800 flex justify-center p-4">
                    <div className="relative w-full max-w-2xl">
                        <Image
                            src="/images/keyboard typing.jpeg"
                            alt="Keyboard layout showing correct finger placement for touch typing"
                            width={800}
                            height={400}
                            className="rounded-lg w-full h-auto"
                            priority
                        />
                    </div>
                </div>

                <h2>The Home Row: Your Starting Position</h2>
                <p>
                    Before understanding the full chart, you must know the home row. Your fingers should always return to these keys after pressing any letter:
                </p>

                <ul>
                    <li><strong>Left Hand:</strong> A – S – D – F</li>
                    <li><strong>Right Hand:</strong> J – K – L – ;</li>
                </ul>

                <p>Your thumbs rest on the spacebar.</p>
                <p>
                    The F and J keys have small raised bumps to help you position your index fingers without looking down.
                </p>

                <h2>Complete Finger Placement Chart</h2>
                <p>
                    Below is the standard finger-to-key assignment used in professional touch typing.
                </p>

                <div className="my-8 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700/60 bg-zinc-100 dark:bg-zinc-800 flex justify-center p-4">
                    <div className="relative w-full max-w-2xl">
                        <Image
                            src="/images/typing keyboard colors.jpeg"
                            alt="Color-coded finger placement chart showing which fingers press which keys"
                            width={800}
                            height={600}
                            className="rounded-lg w-full h-auto"
                        />
                    </div>
                </div>

                <h3>Left Hand Responsibilities</h3>
                <ul>
                    <li><strong>Left Pinky Finger:</strong> Q, A, Z, Left Shift, Tab, Caps Lock</li>
                    <li><strong>Left Ring Finger:</strong> W, S, X</li>
                    <li><strong>Left Middle Finger:</strong> E, D, C</li>
                    <li><strong>Left Index Finger:</strong> R, T, F, G, V, B</li>
                </ul>

                <h3>Right Hand Responsibilities</h3>
                <ul>
                    <li><strong>Right Index Finger:</strong> Y, U, H, J, N, M</li>
                    <li><strong>Right Middle Finger:</strong> I, K, , (comma)</li>
                    <li><strong>Right Ring Finger:</strong> O, L, . (period)</li>
                    <li><strong>Right Pinky Finger:</strong> P, ;, /, Right Shift, Enter, Backspace</li>
                </ul>

                <h3>Thumbs</h3>
                <p>
                    Both thumbs are used for the spacebar. Most people prefer using the dominant thumb, but using either is acceptable as long as it feels natural.
                </p>

                <h2>How to Use the Chart Correctly</h2>
                <p>Reading the chart once is not enough. You need to apply it consistently. Follow these steps:</p>
                <ol>
                    <li>Place your fingers on the home row.</li>
                    <li>When pressing a key, use only the assigned finger.</li>
                    <li>Immediately return that finger to its home position.</li>
                    <li>Keep your wrists slightly elevated.</li>
                    <li>Avoid looking at the keyboard.</li>
                </ol>
                <p>
                    In the beginning, it may feel slower. That’s normal. Your brain is learning new movement patterns.
                </p>

                <h2>Common Finger Placement Mistakes</h2>
                <p>Even small habits can slow down your progress.</p>
                <ul>
                    <li><strong>Using One Hand for Everything:</strong> Some beginners rely too heavily on one hand. Balanced usage is essential.</li>
                    <li><strong>Letting Fingers Hover Randomly:</strong> Always return to the home row. Floating fingers create inconsistency.</li>
                    <li><strong>Ignoring the Pinky Finger:</strong> The pinky handles many keys, including Shift and punctuation. Train it early.</li>
                    <li><strong>Pressing Keys Too Hard:</strong> Typing should feel light and controlled, not forceful.</li>
                </ul>
                <p>Correcting these mistakes early prevents long-term bad habits.</p>

                <h2>How Long Does It Take to Adjust?</h2>
                <p>
                    Most beginners need 1–2 weeks of daily practice to feel comfortable with proper finger placement.
                </p>
                <p>If you practice for 15 minutes daily:</p>
                <ul>
                    <li><strong>Week 1:</strong> Focus on accuracy</li>
                    <li><strong>Week 2:</strong> Build rhythm</li>
                    <li><strong>Week 3:</strong> Notice speed improvement</li>
                </ul>
                <p>Do not rush the process. Accuracy should always come before speed.</p>

                <h2>Simple Finger Placement Practice Drill</h2>
                <p>Start with controlled repetition exercises like:</p>

                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg font-mono text-center my-6 text-zinc-800 dark:text-zinc-200">
                    asdf jkl;<br />
                    sad lad fad;<br />
                    qwer uiop;<br />
                    zxcv nm,.
                </div>

                <p>Type slowly and correctly. Speed will increase naturally as muscle memory develops.</p>

                <h2>Why Proper Finger Placement Improves Typing Speed</h2>
                <p>
                    Typing speed is not about moving faster — it’s about moving efficiently. When every finger handles specific keys:
                </p>
                <ul>
                    <li>Hand travel distance reduces</li>
                    <li>Movement becomes predictable</li>
                    <li>Errors decrease</li>
                    <li>Rhythm improves</li>
                </ul>
                <p>
                    This is why professional typists can reach 70–100+ WPM without strain. It’s not talent. It’s technique.
                </p>

                <h2>Final Thoughts</h2>
                <p>
                    The finger placement chart may look structured and strict at first, but it exists for a reason. It has been refined over decades to maximize efficiency on the QWERTY keyboard.
                </p>
                <p>
                    If you want long-term improvement in typing speed and accuracy, commit to using the correct fingers from the beginning. Even if it feels slow today, it will pay off in the future.
                </p>
                <p className="font-medium text-emerald-600 dark:text-emerald-400">
                    Master the fundamentals. Practice consistently. Let muscle memory do the work.
                </p>

                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-700/60 flex justify-between">
                    <Link
                        href="/lessons/lesson-3"
                        className="group flex flex-col items-start gap-1 text-sm text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-emerald-500 transition-colors">Previous</span>
                        <span className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Module 3
                        </span>
                    </Link>
                    {/* Placeholder for Next link when Module 5 arrives */}
                    <div />
                </div>
            </article>
        </main>
    );
}
