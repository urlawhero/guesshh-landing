import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
    title: "The Art of the Bluff: How to Win as the Spy | Guesshh",
    description: "Master the secrets behind becoming an unstoppable spy in Guesshh.",
}

export default function BlogPostPage() {
    return (
       <div className="min-h-screen bg-background py-20 md:py-32">
            <div className="container mx-auto px-6">
                <Link href="/blog" className="mb-12 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white">
                    <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <header className="mb-16 max-w-3xl mx-auto">
                    <p className="mb-4 text-xs font-semibold text-[#4ade80] uppercase tracking-wider">March 05, 2026</p>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl leading-tight">The Art of the Bluff</h1>
                    <p className="text-xl text-slate-400">Master the secrets behind becoming an unstoppable spy in Guesshh.</p>
                </header>
                <main className="mx-auto max-w-3xl prose prose-invert prose-slate mb-20">
                    <p>Playing the Spy is the most stressful, adrenaline-pumping role in any social deduction game. When everyone else knows the secret word and you are completely in the dark, one wrong sentence will get you voted out immediately.</p>
                    <h2>1. Answer Questions with Questions</h2>
                    <p>If someone asks you, "Would you find this item in a kitchen?" and you have no idea what the word is, deflect. Say, "It depends on how messy your kitchen is. Would you put yours in a drawer?" This forces them to give <em>you</em> more context.</p>
                    <h2>2. Blend into the Middle</h2>
                    <p>Don't be too quiet, or people will suspect you. Don't be too loud, or you'll draw attention. Agree with the general consensus early on. If someone makes a vague statement about the word, nod and say, "Exactly, that's what I was thinking."</p>
                    <h2>3. The Final Guess is Your Safety Net</h2>
                    <p>Remember, in Guesshh, even if you are caught, you can still win if you guess the secret word. Use the entire game to gather clues. If they catch you, piece together the hints and steal the victory!</p>
                </main>
                <div className="mx-auto max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center">
                    <h3 className="mb-4 text-2xl font-bold text-white">Think you can fool your friends?</h3>
                    <Link href="https://play.guesshh.com" className="inline-flex h-12 items-center justify-center rounded-full bg-[#4ade80] px-8 font-bold text-[#050816] transition-transform hover:scale-105">Play as the Spy Now</Link>
                </div>
            </div>
        </div>
    )
}
