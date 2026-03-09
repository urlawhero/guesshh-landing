import Image from "next/image"
import { ArrowRight, Users, Zap, Globe } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #4ade80 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Green radial glow behind content */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full opacity-[0.18]"
        style={{ background: "radial-gradient(circle at center, #4ade80 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Image
          src="/guesshh-logo-nb.webp"
          alt="Guesshh"
          width={240}
          height={240}
          priority
          fetchPriority="high"
          className="mb-8 h-40 w-auto md:h-56 lg:h-64"
        />

        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Find the Spy.
          <br />
          <span className="text-primary">Trust No One.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          The free multiplayer social deduction party game. Bluff, question, and outsmart your friends
          — no downloads, no accounts, just instant fun for up to 25 players.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://play.guesshh.com"
            className="group flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:scale-105 hover:opacity-90"
          >
            Play Now — It{"'"}s Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            How It Works
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm">3-25 Players</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-sm">Instant Setup</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-sm">Play Anywhere</span>
          </div>
        </div>
      </div>
    </section>
  )
}
