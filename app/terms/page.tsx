import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Guesshh party game application.",
}

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Last updated: February 23, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          <p>By using Guesshh you agree to these terms.</p>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Use of the App</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>You must be at least 13 years old to use this app.</li>
              <li>
                You agree not to use offensive, hateful, or impersonating nicknames.
              </li>
              <li>The app is provided for entertainment purposes only.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">In-App Purchases</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Premium features are available via one-time or subscription purchases.
              </li>
              <li>
                All purchases are final. Refunds are handled according to Apple App Store or Google
                Play Store refund policies.
              </li>
              <li>
                Subscription plans auto-renew unless cancelled before the renewal date.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Adult Content</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                The &ldquo;After Dark 18+&rdquo; category contains mature content intended for
                adults only.
              </li>
              <li>
                By selecting &ldquo;I{"'"}m 18 or older&rdquo; during age verification, you confirm
                you are of legal age.
              </li>
              <li>
                We are not responsible for misuse of the age verification system.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Disclaimer</h2>
            <p>
              The app is provided &ldquo;as is&rdquo; without warranty. We are not liable for any
              issues arising from use of the app.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Contact</h2>
            <p>
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
