import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Guesshh handles your data. We collect minimal anonymous data and never share it with third parties.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </a>

        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Last updated: February 23, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          <p>
            Guesshh (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is a party
            game application.
          </p>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Data We Collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Device ID:</span> A randomly generated
                anonymous identifier stored on your device. It is never linked to your name, email,
                or personal identity.
              </li>
              <li>
                <span className="font-medium text-foreground">Game session data:</span> Temporary
                room codes, nicknames chosen by you, and game results. These are stored in our
                database (Supabase) and automatically deleted when a game session ends or after 24
                hours of inactivity.
              </li>
              <li>
                <span className="font-medium text-foreground">Age verification result:</span> Stored
                locally on your device only. We never transmit your age to our servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Data We Do Not Collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                We do not collect names, emails, phone numbers, or any personally identifiable
                information.
              </li>
              <li>We do not use advertising tracking.</li>
              <li>We do not sell or share data with third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Children{"'"}s Privacy
            </h2>
            <p>
              This app is rated for users aged 13 and older. Users who indicate they are under 18
              during the age verification step will have adult content permanently disabled on their
              device. We do not knowingly collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Third-Party Services</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Supabase</span> (
                <a
                  href="https://supabase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  supabase.com
                </a>
                ): Used for real-time game synchronization. Anonymous session data only. See
                Supabase{"'"}s privacy policy at{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  supabase.com/privacy
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Contact</h2>
            <p>
              For privacy questions, contact:{" "}
              <a
                href="mailto:support@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                support@guesshh.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
