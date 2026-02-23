import { UserPlus, MessageCircleQuestion, Vote, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create or Join a Room",
    description:
      "One player creates a room and shares the link or QR code. Everyone else joins in seconds — no sign-up required.",
  },
  {
    icon: MessageCircleQuestion,
    step: "02",
    title: "Get Your Role & Clue",
    description:
      "Everyone receives the same secret word — except the spy, who gets nothing. Blend in or figure out who is faking it.",
  },
  {
    icon: Vote,
    step: "03",
    title: "Discuss & Vote",
    description:
      "Ask questions, give subtle clues, and watch for suspicious answers. When time is up, vote on who you think the spy is.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Reveal & Score",
    description:
      "If the spy is caught, they get one last chance to guess the word. Guess right? Spy wins. Wrong? Innocents take the round.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Four Steps to Deception
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From room creation to the final reveal, every round is a battle of wits.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-3xl font-extrabold text-border group-hover:text-primary/20">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
