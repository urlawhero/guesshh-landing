import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section
      className="px-6 py-28 md:py-36"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(74,222,128,0.08) 0%, transparent 70%)",
      }}
    >
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-md md:p-20"
        style={{ boxShadow: "0 0 60px rgba(74,222,128,0.12)" }}
      >
        {/* Background glow inside card */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full opacity-[0.1]"
          style={{
            background: "radial-gradient(circle, #4ade80 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Ready to Find the Spy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Gather your friends and start a game in seconds. No sign-up, no
            download — just pure social deduction chaos.
          </p>
          <a
            href="https://play.guesshh.com"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:scale-105 hover:opacity-90"
          >
            Start Playing Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
