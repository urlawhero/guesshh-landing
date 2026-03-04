import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Guesshh — learn what cookies and local storage we use, why, and how to manage your preferences.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Cookie Policy
        </h1>
        <p className="mb-4 text-sm text-muted-foreground">
          Last updated: March 4, 2026
        </p>
        <p className="mb-10 text-sm leading-relaxed text-zinc-400">
          We keep this simple.
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          <p>
            Guesshh uses a small number of cookies and browser local storage
            items to make the game work and keep the free version running. This
            policy explains what we store, why, and how you can control it.
          </p>

          {/* What we use and why */}
          <section>
            <h2 className="mb-5 text-lg font-bold text-foreground">
              What we use and why
            </h2>

            {/* Strictly necessary */}
            <div className="mb-6">
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Strictly necessary{" "}
                <span className="ml-2 inline-block rounded-full bg-primary/15 px-2.5 py-0.5 text-xs font-medium text-primary">
                  Always on
                </span>
              </h3>
              <p className="mb-3 text-zinc-500">
                These make the game function. You cannot opt out of these.
              </p>
              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <span className="font-medium text-foreground">device_id</span>{" "}
                  — a random UUID stored in localStorage that identifies your
                  device so your game progress and subscription are remembered.
                  When you play in multiplayer mode, this ID is sent to our
                  servers to connect you with other players. It is also sent to
                  verify your premium subscription status when you open the app.
                  It is not linked to your name or email.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    game_preferences
                  </span>{" "}
                  — your chosen language, haptics setting, and similar options.
                  Stored in localStorage on your device only, never sent to our
                  servers.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    premium_status
                  </span>{" "}
                  — a local cache of your plan status to avoid unnecessary
                  server calls. The authoritative check always happens
                  server-side.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    cookie_consent
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-foreground">
                    cookie_consent_ts
                  </span>{" "}
                  — remember whether you accepted or declined cookies so we
                  don&rsquo;t ask you again.
                </li>
              </ul>
            </div>

            {/* Payment processing */}
            <div className="mb-6">
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Payment processing{" "}
                <span className="ml-2 inline-block rounded-full bg-zinc-700/60 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                  Stripe
                </span>
              </h3>
              <p>
                When you purchase a plan, Stripe sets cookies to prevent fraud
                and process your payment securely. These are set only on
                Stripe&rsquo;s checkout pages, not on the game itself. See{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Stripe&rsquo;s Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Advertising */}
            <div>
              <h3 className="mb-1 text-base font-semibold text-foreground">
                Advertising{" "}
                <span className="ml-2 inline-block rounded-full bg-amber-500/15 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                  Optional — not yet active
                </span>
              </h3>
              <p className="mb-3">
                The free version of Guesshh will be supported by adverts served
                by Google AdSense (not yet live). There are two options:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-foreground">
                    Personalised ads (consent required):
                  </span>{" "}
                  If you accept cookies via our banner, Google may set tracking
                  cookies to show you relevant adverts based on your interests.
                  Google&rsquo;s ad cookies typically last up to 13 months.
                </li>
                <li>
                  <span className="font-medium text-foreground">
                    Non-personalised ads (no consent required):
                  </span>{" "}
                  If you decline, we show context-based adverts only — no
                  tracking cookies are set.
                </li>
              </ul>
              <p className="mt-3">
                You can withdraw consent or switch options at any time using the
                &ldquo;Change cookie preferences&rdquo; section below. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Google&rsquo;s Privacy Policy
                </a>{" "}
                for details on what Google collects.
              </p>
            </div>
          </section>

          {/* Cookie lifetime */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              How long are cookies stored?
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">
                  Cookie consent preference:
                </span>{" "}
                remembered for 12 months, then we ask again.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Device ID &amp; preferences (localStorage):
                </span>{" "}
                stored until you clear localStorage — no automatic expiry.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Stripe cookies:
                </span>{" "}
                set and managed by Stripe during checkout only.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Google AdSense cookies (planned):
                </span>{" "}
                typically up to 13 months. See Google&rsquo;s policy for
                details.
              </li>
            </ul>
          </section>

          {/* Browser management */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Managing cookies in your browser
            </h2>
            <p className="mb-3">
              You can control and delete cookies through your browser settings:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Chrome:</span>{" "}
                Settings → Privacy and security → Cookies and other site data
              </li>
              <li>
                <span className="font-medium text-foreground">Firefox:</span>{" "}
                Settings → Privacy &amp; Security → Cookies and Site Data
              </li>
              <li>
                <span className="font-medium text-foreground">Safari:</span>{" "}
                Settings → Safari → Privacy &amp; Security
              </li>
              <li>
                <span className="font-medium text-foreground">Edge:</span>{" "}
                Settings → Privacy, search, and services → Cookies
              </li>
            </ul>
            <p className="mt-3">
              To remove Guesshh&rsquo;s localStorage data specifically, open
              your browser&rsquo;s developer tools (F12), go to Application →
              Local Storage → play.guesshh.com, and delete the entries there.{" "}
              <span className="font-medium text-foreground">
                Note: deleting your device_id will remove premium access from
                this device.
              </span>
            </p>
          </section>

          {/* GDPR */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Your rights (GDPR)
            </h2>
            <p className="mb-3">If you&rsquo;re in the EU, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Withdraw consent at any time</li>
              <li>Ask what data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>
                Lodge a complaint with the Cyprus Commissioner for the
                Protection of Personal Data (
                <a
                  href="https://www.dataprotection.gov.cy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  dataprotection.gov.cy
                </a>
                ) or your local EU supervisory authority
              </li>
            </ul>
            <p className="mt-4">
              Email us at{" "}
              <a
                href="mailto:privacy@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                privacy@guesshh.com
              </a>{" "}
              for any of the above.
            </p>
          </section>

          {/* Change preferences */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Change cookie preferences
            </h2>
            <p>
              You can update your consent at any time by clearing localStorage
              for this site (see &ldquo;Managing cookies in your browser&rdquo;
              above), or by contacting us at{" "}
              <a
                href="mailto:privacy@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                privacy@guesshh.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
