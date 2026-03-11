import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface SeoPageLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export function SeoPageLayout({ title, description, children }: SeoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Back to Guesshh home">
            <Image
              src="/guesshh-logo-nb.webp"
              alt="Guesshh logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="https://play.guesshh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Play Free
          </Link>
        </div>
      </header>

      {/* Page hero */}
      <div className="border-b border-white/10 bg-white/[0.02] px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{description}</p>
        </div>
      </div>

      {/* Prose content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <article className="prose prose-invert prose-green max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-li:text-muted-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
          {children}
        </article>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Guesshh &mdash;{" "}
          <Link href="/" className="transition-colors hover:text-foreground">
            guesshh.com
          </Link>
        </p>
      </footer>
    </div>
  )
}
