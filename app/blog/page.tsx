import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Guesshh Blog | Stories, Tips & Updates",
    description: "The latest news, strategy guides, and party tips from the Guesshh team.",
}

const posts = [
    {
        title: "How to Host the Perfect Game Night",
        slug: "how-to-host-game-night",
        date: "March 11, 2026",
        excerpt: "Everything you need to know about organizing a memorable game night with friends.",
        image: "/og-image.png"
    },
    {
        title: "The Art of the Bluff",
        slug: "art-of-the-bluff",
        date: "March 05, 2026",
        excerpt: "Master the secrets behind becoming an unstoppable spy in Guesshh.",
        image: "/og-image.png"
    },
    {
        title: "What's New in Guesshh v2.0",
        slug: "whats-new-v2",
        date: "February 28, 2026",
        excerpt: "Check out the latest features, categories, and improvements we've added.",
        image: "/og-image.png"
    }
]

export default function BlogIndexPage() {
    return (
        <div className="min-h-screen bg-[#050816] py-20 md:py-32">
            <div className="container mx-auto px-6">
                <header className="mb-16 text-center">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">Guesshh Blog</h1>
                    <p className="text-lg text-slate-400">Insights, tips, and updates for the best social deduction experience.</p>
                </header>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all hover:bg-white/10 hover:-translate-y-1"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="mb-2 text-xs font-semibold text-primary uppercase tracking-wider">{post.date}</p>
                                <h2 className="mb-3 text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-400 line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
