import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
    title: "How to Host the Perfect Game Night | Guesshh Blog",
    description: "Learn the essential tips for hosting a successful game night, from choosing the right games to setting the mood.",
}

export default function BlogPostPage() {
    return (
        <div className="min-h-screen bg-background py-20 md:py-32">
            <div className="container mx-auto px-6">
                <Link
                    href="/blog"
                    className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>

                {/* Article Header */}
                <header className="mb-16 max-w-3xl mx-auto">
                    <p className="mb-4 text-xs font-semibold text-primary uppercase tracking-wider">March 11, 2026</p>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">
                        How to Host the Perfect Game Night
                    </h1>
                    <p className="text-xl text-slate-400">
                        A step-by-step guide to organizing a social gathering your friends will be talking about for months.
                    </p>
                </header>

                {/* Article Content */}
                <main className="mx-auto max-w-3xl prose prose-invert prose-slate prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-a:text-primary hover:prose-a:underline mb-20">
                    <p>
                        Game nights are more than just an excuse to play-they're a way to connect, laugh, and create shared memories. But a great game night doesn't just happen by accident. It requires a little bit of planning and a lot of focus on the social experience.
                    </p>

                    <h2>1. Curating the Guest List</h2>
                    <p>
                        Think about how your friends interact. You want a mix of personalities, but try to avoid guests who might feel left out. A group size of 5 to 10 is usually the "sweet spot" for most social deduction and party games.
                    </p>

                    <h2>2. Picking the Right Games</h2>
                    <p>
                        Start with something simple. You don't want to spend the first hour reading a 40-page rulebook. This is why we created <strong>Guesshh</strong>. It's built to be picked up instantly. No downloads, no physical cards-just open your phone and start playing.
                    </p>

                    <h2>3. Setting the Mood</h2>
                    <p>
                        Lighting and snacks matter more than you think. Keep the lighting warm and the snacks easy to eat while playing (nothing too messy or greasy!). Background music should be present but low enough that it doesn't interfere with the game discussion.
                    </p>

                    <h2>4. Managing the Energy</h2>
                    <p>
                        As the host, keep an eye on the room. If a game is dragging, don't be afraid to switch it up. The goal is to keep the energy high and everyone engaged.
                    </p>

                    <p>
                        Remember: the best part of any game night is the conversation that happens <em>between</em> the turns.
                    </p>
                </main>

                {/* CTA Card */}
                <div className="mx-auto max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-white">Ready to play?</h3>
                    <p className="mb-8 text-slate-400">
                        Start a free Guesshh room now and invite your friends instantly. No account required.
                    </p>
                    <Link
                        href="https://play.guesshh.com"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-[#050816] transition-transform hover:scale-105 active:scale-95"
                    >
                        Start Playing Free
                    </Link>
                </div>
            </div>
        </div>
    )
}



