import { UserPlus, MessageCircleQuestion, Vote, Trophy } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create or Join a Room",
    description:
      "One player creates a room. Everyone else joins on their own phones, or you can add players locally to play on a single device.",
  },
  {
    icon: MessageCircleQuestion,
    step: "02",
    title: "Get Your Role & Clue",
    description:
      "Everyone receives the secret word — except the spy. Keep your screen hidden, blend in, or figure out who is faking it.",
  },
  {
    icon: Vote,
    step: "03",
    title: "Discuss & Vote",
    description:
      "Ask questions out loud, or use the Description Phase to type your clues secretly. When time is up, vote for the spy.",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Reveal & Score",
    description:
      "If the spy is caught, they get one final chance to guess the word. Guess right? The spy wins. Wrong? Innocents take the round.",
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
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/[0.08]"
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
