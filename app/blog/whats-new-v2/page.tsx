import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
    title: "What's New in Guesshh v2.0 | Updates",
    description: "Check out the latest features, categories, and improvements we've added to Guesshh.",
}

export default function BlogPostPage() {
    return (
        <div className="min-h-screen bg-[#050816] py-20 md:py-32">
            <div className="container mx-auto px-6">
                <Link href="/blog" className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <header className="mb-16 max-w-3xl mx-auto">
                    <p className="mb-4 text-xs font-semibold text-[#4ade80] uppercase tracking-wider">February 28, 2026</p>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">What's New in Guesshh v2.0</h1>
                    <p className="text-xl text-slate-400">Massive lobby upgrades, new languages, and the Description Phase.</p>
                </header>
                <main className="mx-auto max-w-3xl prose prose-invert prose-slate mb-20">
                    <p>We've been listening to your feedback, and v2.0 is our biggest update yet. We focused on making game nights smoother, especially for remote players.</p>
                    <h2>The Description Phase</h2>
                    <p>This is the game-changer. You can now enable a "Description Phase" where everyone types their clue on their phone before reading them out loud. This stops people from just copying what the person next to them said!</p>
                    <h2>More Languages</h2>
                    <p>Guesshh is now fully playable in English, Greek, French, Italian, Spanish, and German. Gather your international friends!</p>
                    <h2>Up to 25 Players</h2>
                    <p>We rewrote our netcode. You can now cram up to 25 people into a single lobby without the server breaking a sweat. Perfect for large Discord communities or massive house parties.</p>
                </main>
                <div className="mx-auto max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-white">Try the new features</h3>
                    <Link href="/play" className="inline-flex h-12 items-center justify-center rounded-full bg-[#4ade80] px-8 font-bold text-[#050816] transition-transform hover:scale-105">Start a v2.0 Game</Link>
                </div>
            </div>
        </div>
    )
}
