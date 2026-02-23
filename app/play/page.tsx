import type { Metadata } from "next"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Coming Soon",
  description:
    "Guesshh is almost ready. Stay tuned for the ultimate social deduction party game.",
}

export default function PlayPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="flex max-w-md flex-col items-center text-center">
        <Image
          src="/guesshh-logo-nb.webp"
          alt="Guesshh"
          width={160}
          height={160}
          priority
          className="mb-10 h-28 w-auto"
        />

        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Coming Soon
        </h1>

        <p className="mt-4 text-pretty text-lg leading-relaxed text-zinc-400">
          The game is almost ready. Stay tuned — it{"'"}s going to be worth the wait.
        </p>

        <a
          href="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-xl border border-primary text-primary px-6 py-3 text-sm font-semibold transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </a>

        <p className="mt-8 text-sm text-zinc-500">
          Follow us on Instagram & TikTok to be the first to know.
        </p>
      </div>
    </div>
  )
}
