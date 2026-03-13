import {
  QrCode,
  Users,
  Gamepad2,
  Smartphone,
  ShieldCheck,
  Layers,
} from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "QR Code Sharing",
    description: "Instantly share your room with a scannable QR code - perfect for in-person gatherings.",
  },
  {
    icon: Users,
    title: "Up to 25 Players",
    description: "From small groups to huge parties. The more friends, the more chaos and fun.",
  },
  {
    icon: Gamepad2,
    title: "Multiple Game Modes",
    description: "Classic spy, description phase for remote play, and more variations coming soon.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description: "Play on phones, tablets, or desktops. No app store visit needed - just open the link.",
  },
  {
    icon: ShieldCheck,
    title: "No Account Required",
    description: "Jump straight into the action. No sign-ups, no passwords, no friction.",
  },
  {
    icon: Layers,
    title: "Install as PWA",
    description: "Add Guesshh to your home screen for a native app experience - works offline-ready.",
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Built for Instant Fun
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need for the perfect social deduction experience, right in your browser.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-primary/40 hover:bg-white/[0.08]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
