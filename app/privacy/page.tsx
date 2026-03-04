import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Guesshh handles your data. GDPR-compliant privacy policy for EU users — minimal data, no user accounts.",
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
          Last updated: March 4, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          <p>
            Guesshh (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the
            app&rdquo;) is operated by{" "}
            <span className="font-medium text-foreground">
              [YOUR COMPANY NAME]
            </span>
            , based in Cyprus. We are the data controller for personal data
            processed in connection with Guesshh. There are no user accounts and
            no email collection — we keep data to the absolute minimum needed to
            run the game.
          </p>

          {/* Data we collect */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Data We Collect
            </h2>
            <ul className="list-disc space-y-4 pl-5">
              <li>
                <span className="font-medium text-foreground">Device ID:</span>{" "}
                A randomly generated UUID created on your device and stored in
                your browser&rsquo;s localStorage. When you play in multiplayer
                mode or purchase a premium plan, this ID is sent to our servers
                (Supabase) to manage your game session or verify your
                subscription. Under GDPR, a device ID may qualify as personal
                data.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Game preferences:
                </span>{" "}
                Language, haptics, and similar settings. Stored in localStorage
                on your device only — never sent to our servers.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Purchase &amp; entitlement records:
                </span>{" "}
                If you buy a premium plan, we store in Supabase: your device ID,
                plan type, purchase date, expiry date, and your Stripe customer
                ID. This is necessary to verify your access and fulfil our legal
                accounting obligations.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Game session data:
                </span>{" "}
                Temporary data during multiplayer games — room codes, the
                nickname you choose, and game state. Stored in Supabase and
                automatically deleted when the session ends or after 24 hours of
                inactivity.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Age verification result:
                </span>{" "}
                Whether you confirmed you are 18 or older. Stored in localStorage
                on your device only — never sent to our servers.
              </li>
            </ul>
          </section>

          {/* Lawful basis */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Why We Process Your Data (Lawful Basis)
            </h2>
            <p className="mb-3">
              Under GDPR, we rely on the following legal bases:
            </p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <span className="font-medium text-foreground">
                  Contract performance (Art. 6(1)(b)):
                </span>{" "}
                Processing your device ID and entitlement records is necessary
                to deliver the premium features you have purchased.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Legitimate interests (Art. 6(1)(f)):
                </span>{" "}
                Running multiplayer game sessions requires temporary device
                identification so players can connect in real time.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Legal obligation (Art. 6(1)(c)):
                </span>{" "}
                Retaining payment and entitlement records for 7 years as
                required by EU accounting law.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Consent (Art. 6(1)(a)):
                </span>{" "}
                For personalised advertising cookies (Google AdSense), where you
                have given explicit consent via our cookie banner.
              </li>
            </ul>
          </section>

          {/* What we don't collect */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Data We Do Not Collect
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                We do not collect your name, email address, phone number, or any
                directly identifying information.
              </li>
              <li>We do not collect precise location data.</li>
              <li>
                We do not store payment card details — these are handled
                entirely by Stripe.
              </li>
              <li>
                We do not sell your data to any third party, ever.
              </li>
            </ul>
          </section>

          {/* Third-party processors */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Third-Party Processors
            </h2>
            <ul className="list-disc space-y-4 pl-5">
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
                ): Our cloud database and real-time infrastructure. Acts as a
                data processor on our behalf. Data is processed in the EU. See{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Supabase&rsquo;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="font-medium text-foreground">Stripe</span> (
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  stripe.com
                </a>
                ): Our payment processor. Stripe handles all payment card data
                and is an independent data controller for payment processing
                purposes. We never see or store your card details. Stripe
                maintains its own GDPR-compliant Data Processing Agreement. See{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Stripe&rsquo;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Google AdSense
                </span>{" "}
                (planned — not yet active): When our ad-supported free tier
                launches, free-tier users will see adverts served by Google. If
                you consent to personalised ads via our cookie banner, Google
                may set tracking cookies. Non-personalised ads are available
                without tracking. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Google&rsquo;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Data retention */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Data Retention
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">
                  Game session data:
                </span>{" "}
                Automatically deleted when the session ends or after 24 hours of
                inactivity.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Purchase &amp; entitlement records:
                </span>{" "}
                Retained for 7 years to comply with EU accounting and legal
                obligations.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Device ID &amp; preferences (localStorage):
                </span>{" "}
                Stored on your device until you clear your browser&rsquo;s
                localStorage for play.guesshh.com.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Device ID (Supabase):
                </span>{" "}
                Retained alongside entitlement records (up to 7 years for legal
                purposes), or deleted on request where legally permissible.
              </li>
            </ul>
          </section>

          {/* Children */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Children&rsquo;s Privacy
            </h2>
            <p>
              Guesshh is rated for users aged 13 and older. Users who indicate
              they are under 18 during the age verification step will have adult
              content permanently disabled on their device. We do not knowingly
              collect or process data from children under 13. If you believe a
              child under 13 has used the app, contact us at{" "}
              <a
                href="mailto:privacy@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                privacy@guesshh.com
              </a>{" "}
              and we will take appropriate action.
            </p>
          </section>

          {/* GDPR rights */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Your Rights (GDPR)
            </h2>
            <p className="mb-3">
              If you are in the EU, you have the following rights:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Access:</span>{" "}
                Request a copy of the data we hold about you.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Rectification:
                </span>{" "}
                Ask us to correct inaccurate data.
              </li>
              <li>
                <span className="font-medium text-foreground">Erasure:</span>{" "}
                Ask us to delete your data. Note that purchase/entitlement
                records may need to be kept for legal accounting purposes.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Restriction:
                </span>{" "}
                Ask us to limit how we process your data.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Portability:
                </span>{" "}
                Receive your personal data in a structured, machine-readable
                format.
              </li>
              <li>
                <span className="font-medium text-foreground">Objection:</span>{" "}
                Object to processing based on legitimate interests.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Withdraw consent:
                </span>{" "}
                At any time for consent-based processing (e.g. advertising
                cookies). This does not affect the lawfulness of processing
                before withdrawal.
              </li>
            </ul>
            <p className="mt-4">
              <span className="font-medium text-foreground">
                Deleting local data:
              </span>{" "}
              You can delete all data stored on your device (device ID,
              preferences, age verification) at any time by clearing localStorage
              for play.guesshh.com in your browser settings. To request deletion
              of data held on our servers (Supabase), email{" "}
              <a
                href="mailto:privacy@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                privacy@guesshh.com
              </a>
              .
            </p>
            <p className="mt-3">
              To exercise any right, email{" "}
              <a
                href="mailto:privacy@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                privacy@guesshh.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* Supervisory authority */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Supervisory Authority
            </h2>
            <p>
              You have the right to lodge a complaint with the Cyprus
              Commissioner for the Protection of Personal Data (
              <a
                href="https://www.dataprotection.gov.cy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:underline"
              >
                dataprotection.gov.cy
              </a>
              ), or with the supervisory authority in your EU country of
              residence.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. We will update the
              &ldquo;Last updated&rdquo; date above. Continued use of the app
              after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">Contact</h2>
            <p>
              For privacy questions, contact:{" "}
              <a
                href="mailto:privacy@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                privacy@guesshh.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
