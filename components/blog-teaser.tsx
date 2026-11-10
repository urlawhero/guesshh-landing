import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Host the Perfect Game Night",
    href: "/blog/how-to-host-game-night",
    excerpt:
      "Everything you need to know about organizing a memorable game night with friends.",
  },
  {
    title: "The Art of the Bluff",
    href: "/blog/art-of-the-bluff",
    excerpt: "Master the secrets behind becoming an unstoppable spy in Guesshh.",
  },
]

export function BlogTeaser() {
  return (
    <section id="blog" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              From the Guesshh Blog
            </h2>
            <p className="mt-2 text-zinc-400">
              Tips, strategy and party ideas for the best social deduction nights.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
          >
            All articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:bg-white/10"
            >
              <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="text-zinc-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
