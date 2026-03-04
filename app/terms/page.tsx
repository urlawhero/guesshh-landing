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
          Last updated: March 4, 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-zinc-400">
          <p>
            Welcome to Guesshh. By accessing or using the app at{" "}
            <a
              href="https://play.guesshh.com"
              className="text-primary transition-colors hover:underline"
            >
              play.guesshh.com
            </a>
            , you agree to these Terms of Service. If you do not agree, please
            stop using the app.
          </p>

          {/* 1 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              1. About Guesshh
            </h2>
            <p>
              Guesshh is a social deduction party game operated by{" "}
              <span className="font-medium text-foreground">
                [YOUR COMPANY NAME]
              </span>
              , based in Cyprus (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;). It is available as a Progressive Web App
              (PWA) at play.guesshh.com — it is not distributed through the
              Apple App Store or Google Play Store, and those platforms&rsquo;
              policies do not apply to purchases made here.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              2. Eligibility
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>You must be at least 13 years old to use Guesshh.</li>
              <li>
                If you are under 18, we recommend reviewing these terms with a
                parent or guardian.
              </li>
              <li>
                By using the app, you confirm that you meet these requirements.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              3. Licence to Use
            </h2>
            <p>
              We grant you a personal, non-exclusive, non-transferable, and
              revocable licence to use Guesshh for personal entertainment. You
              may not copy, reverse-engineer, modify, distribute, or
              commercially exploit any part of the app or its content.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              4. Acceptable Use
            </h2>
            <p className="mb-3">When using Guesshh, you agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use offensive, hateful, discriminatory, or impersonating
                nicknames.
              </li>
              <li>
                Attempt to cheat, exploit vulnerabilities, or disrupt other
                players&rsquo; sessions.
              </li>
              <li>
                Use the app for any unlawful purpose or in violation of
                applicable law.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              5. Premium Features &amp; Pricing
            </h2>
            <p className="mb-3">
              Guesshh is free to play with limited categories and adverts.
              Premium plans unlock all categories and remove adverts. Current
              pricing (EUR, inclusive of applicable VAT):
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">3-Day Pass</span>{" "}
                — €2.99 one-time
              </li>
              <li>
                <span className="font-medium text-foreground">Remove Ads</span>{" "}
                — €1.99 one-time
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Monthly Pro
                </span>{" "}
                — €5.99/month (auto-renewing subscription)
              </li>
              <li>
                <span className="font-medium text-foreground">Yearly Pro</span>{" "}
                — €19.99/year (auto-renewing subscription)
              </li>
              <li>
                <span className="font-medium text-foreground">Lifetime</span> —
                €39.99 one-time
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to update pricing at any time. Changes will
              not affect your current billing period.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              6. Payments
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                All payments are processed by{" "}
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Stripe
                </a>
                . We never see or store your card details.
              </li>
              <li>
                A Stripe customer ID is stored on our servers solely to manage
                your entitlements.
              </li>
              <li>
                By completing a purchase you also agree to{" "}
                <a
                  href="https://stripe.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary transition-colors hover:underline"
                >
                  Stripe&rsquo;s Terms of Service
                </a>
                .
              </li>
              <li>
                Premium access is tied to your device. We do not currently
                support transferring a subscription between devices.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              7. EU Right of Withdrawal
            </h2>
            <p className="mb-3">
              If you are a consumer in the EU, you ordinarily have a 14-day
              right of withdrawal from online purchases (a &ldquo;cooling-off
              period&rdquo;) without giving a reason.
            </p>

            <p className="mb-2 font-medium text-foreground">
              One-time purchases (3-Day Pass, Remove Ads, Lifetime)
            </p>
            <p className="mb-4">
              These purchases provide immediate access to digital content. By
              completing your purchase and requesting immediate access, you
              expressly agree that we begin performance immediately and you
              acknowledge that you thereby waive your 14-day right of
              withdrawal once access has been granted. Your other statutory
              consumer rights are not affected.
            </p>

            <p className="mb-2 font-medium text-foreground">
              Subscription plans (Monthly Pro, Yearly Pro)
            </p>
            <p>
              You have a 14-day right of withdrawal from the date your
              subscription begins. Because your subscription starts immediately
              by default, you acknowledge that a pro-rata charge applies for any
              days of premium access already used if you withdraw. To exercise
              your right of withdrawal within the 14-day period, email us at{" "}
              <a
                href="mailto:support@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                support@guesshh.com
              </a>{" "}
              before the period expires.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              8. Cancellations &amp; Refunds
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">
                  Cancelling a subscription:
                </span>{" "}
                You can cancel at any time from within the app. Your premium
                access continues until the end of the current billing period. No
                partial refunds are issued for unused days.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  One-time purchases:
                </span>{" "}
                Non-refundable once premium features have been accessed, except
                where required by applicable law.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Refund requests:
                </span>{" "}
                Email{" "}
                <a
                  href="mailto:support@guesshh.com"
                  className="text-primary transition-colors hover:underline"
                >
                  support@guesshh.com
                </a>{" "}
                and we will review your case. We aim to respond within 5
                business days.
              </li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              9. Adult Content
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                The &ldquo;After Dark 18+&rdquo; category contains mature
                content intended for adults only.
              </li>
              <li>
                By selecting &ldquo;I&rsquo;m 18 or older&rdquo; during age
                verification, you confirm that you are of legal age in your
                country.
              </li>
              <li>
                We are not responsible for misuse of the age verification
                system.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              10. Intellectual Property
            </h2>
            <p>
              All content, branding, game logic, category words, and design
              elements in Guesshh belong to us or our licensors. These terms do
              not grant you any rights beyond the limited licence in Section 3.
              &ldquo;Guesshh&rdquo; and its logo are our trademarks.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              11. Service Availability &amp; Changes
            </h2>
            <p>
              We aim to keep Guesshh available at all times but cannot guarantee
              uninterrupted service. We may update, modify, or discontinue
              features at any time. We will give reasonable notice of significant
              changes. Continued use after an update constitutes acceptance of
              the revised terms.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              12. Disclaimer
            </h2>
            <p>
              The app is provided &ldquo;as is&rdquo; without warranties of any
              kind. To the extent permitted by law, we disclaim all implied
              warranties, including fitness for a particular purpose. Nothing in
              these terms limits your statutory rights as an EU consumer.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              13. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, our total
              liability to you shall not exceed the amount you paid us in the 12
              months before your claim arose. We are not liable for indirect,
              consequential, or incidental losses. Nothing in these terms
              excludes liability for death or personal injury caused by our
              negligence, or for fraudulent misrepresentation.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              14. Governing Law &amp; Disputes
            </h2>
            <p className="mb-3">
              These terms are governed by the laws of the Republic of Cyprus.
              Any disputes shall be subject to the jurisdiction of the courts of
              Cyprus, except where mandatory EU consumer law provides otherwise.
            </p>
            <p>
              As an EU consumer you may also resolve disputes through the EU
              Online Dispute Resolution platform:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-colors hover:underline"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="mb-3 text-lg font-bold text-foreground">
              15. Contact
            </h2>
            <p>
              For questions about these terms, email{" "}
              <a
                href="mailto:support@guesshh.com"
                className="text-primary transition-colors hover:underline"
              >
                support@guesshh.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
