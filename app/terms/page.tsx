import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Guesshh",
  description:
    "Terms and conditions for using Guesshh, the social deduction party game. Covers premium purchases, EU consumer rights, acceptable use, and more.",
}

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2
    id={id}
    className="mb-3 scroll-mt-24 text-lg font-bold text-[#22c55e]"
  >
    {children}
  </h2>
)

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-20 text-gray-300">
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Terms of Service
        </h1>
        <p className="mb-1 text-sm text-gray-500">Last updated: March 2026</p>
        <p className="mb-10 text-sm text-gray-500">
          Questions? Email{" "}
          <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
            support@guesshh.com
          </a>
        </p>

        {/* TOC */}
        <nav className="mb-12 rounded-xl border border-white/10 bg-white/5 p-5 text-sm">
          <p className="mb-3 font-semibold text-white">Contents</p>
          <ol className="list-decimal space-y-1 pl-5 text-gray-400">
            {[
              ["acceptance", "Acceptance of Terms"],
              ["description", "Description of Service"],
              ["freemium", "Freemium Model & Advertisements"],
              ["premium", "Premium Purchases & Subscriptions"],
              ["eu-rights", "EU Consumer Rights & Refunds"],
              ["mature", "Mature / Adult Content"],
              ["acceptable-use", "Acceptable Use Policy"],
              ["ip", "Intellectual Property"],
              ["disclaimers", "Disclaimers & Limitation of Liability"],
              ["changes", "Changes to the Service"],
              ["governing-law", "Governing Law & Disputes"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-[#22c55e] hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-12 text-sm leading-relaxed">
          <p>
            Welcome to Guesshh. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
            Guesshh social deduction party game, available at{" "}
            <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
              play.guesshh.com
            </a>{" "}
            and (soon) on Google Play (&ldquo;the Service&rdquo;). Please read these Terms carefully.
          </p>

          {/* 1 */}
          <section>
            <SectionHeading id="acceptance">1. Acceptance of Terms</SectionHeading>
            <p className="mb-3">
              By accessing or using Guesshh in any way - including playing the game, making a
              purchase, or simply browsing the app - you agree to be bound by these Terms and our{" "}
              <Link href="/privacy" className="text-[#22c55e] hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree, please stop using the Service immediately.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and{" "}
              <span className="font-medium text-white">[YOUR FULL NAME OR COMPANY NAME]</span>,
              based in Greece (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
            </p>
          </section>

          {/* 2 */}
          <section>
            <SectionHeading id="description">2. Description of Service</SectionHeading>
            <p className="mb-3">
              Guesshh is a social deduction party game where players try to identify an odd one out
              among a group. It is available as:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                A <span className="font-medium text-white">Progressive Web App (PWA)</span> accessible
                in any modern browser at{" "}
                <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
                  play.guesshh.com
                </a>{" "}
                - no download required.
              </li>
              <li>
                An <span className="font-medium text-white">Android app</span> (coming soon to Google
                Play). These Terms apply equally to both platforms.
              </li>
            </ul>
            <p className="mt-3">
              The Service is not distributed through the Apple App Store, and Apple&rsquo;s policies
              do not apply to purchases made on play.guesshh.com.
            </p>
            <p className="mt-3">
              <span className="font-medium text-white">Eligibility:</span> You must be at least 13
              years old to use Guesshh. If you are under 18, we recommend reviewing these Terms with
              a parent or guardian. By using the Service, you confirm you meet these age requirements.
            </p>
          </section>

          {/* 3 */}
          <section>
            <SectionHeading id="freemium">3. Freemium Model & Advertisements</SectionHeading>
            <p className="mb-3">
              Guesshh operates on a freemium model:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-white">Free tier:</span> Access to a limited
                selection of game categories, supported by advertisements.
              </li>
              <li>
                <span className="font-medium text-white">Premium tier:</span> Full access to all
                categories and an ad-free experience, unlocked via a paid plan (see Section 4).
              </li>
            </ul>
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="font-semibold text-amber-400">⚠ Advertisements: Not Yet Active</p>
              <p className="mt-2">
                Advertisements (served via Google AdSense) are integrated in the app code but are{" "}
                <strong className="text-white">not currently enabled</strong> pending Google&rsquo;s
                publisher review. Free-tier users are not currently shown any ads. When advertisements
                are enabled, we will update our{" "}
                <Link href="/cookies" className="text-[#22c55e] hover:underline">
                  Cookie Policy
                </Link>{" "}
                and present a consent banner before any personalised advertising cookies are set. You
                will always have the option to see non-personalised ads without tracking.
              </p>
            </div>
            <p className="mt-3">
              We reserve the right to change the scope of the free tier at any time. We will give
              reasonable notice of any material reduction in free-tier features.
            </p>
          </section>

          {/* 4 */}
          <section>
            <SectionHeading id="premium">4. Premium Purchases & Subscriptions</SectionHeading>

            <h3 className="mb-2 mt-4 text-sm font-semibold text-white">Available Plans (prices in EUR, VAT inclusive)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-2 pr-4 font-medium">Plan</th>
                    <th className="py-2 pr-4 font-medium">Price</th>
                    <th className="py-2 pr-4 font-medium">Type</th>
                    <th className="py-2 font-medium">What&rsquo;s included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-400">
                  {[
                    ["3-Day Pass", "€2.99", "One-time", "All categories for 3 days, no ads"],
                    ["Remove Ads", "€1.99", "One-time", "Removes ads permanently (limited categories)"],
                    ["Monthly Pro", "€5.99/mo", "Auto-renewing subscription", "All categories, no ads"],
                    ["Yearly Pro", "€19.99/yr", "Auto-renewing subscription", "All categories, no ads"],
                    ["Lifetime", "€39.99", "One-time", "All categories, no ads, forever"],
                  ].map(([plan, price, type, includes]) => (
                    <tr key={plan}>
                      <td className="py-2.5 pr-4 font-medium text-white">{plan}</td>
                      <td className="py-2.5 pr-4 text-[#22c55e]">{price}</td>
                      <td className="py-2.5 pr-4">{type}</td>
                      <td className="py-2.5">{includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Payment Processing</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                All payments are processed by{" "}
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Stripe
                </a>
                . We never see or store your payment card details.
              </li>
              <li>
                By completing a purchase, you also agree to{" "}
                <a
                  href="https://stripe.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Stripe&rsquo;s Terms of Service
                </a>
                .
              </li>
              <li>
                A Stripe customer ID is stored on our servers solely to manage your entitlements.
              </li>
              <li>
                Premium access is tied to the device on which the purchase was made (identified by
                your device ID). We do not currently support transferring a subscription between
                devices. If you clear your browser&rsquo;s localStorage, premium access on that device
                will be lost.
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Subscriptions</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Monthly Pro and Yearly Pro are auto-renewing subscriptions. You will be billed
                automatically at the start of each billing period unless you cancel beforehand.
              </li>
              <li>
                You can cancel at any time from within the app. Your premium access continues until
                the end of the current paid period. No partial refunds are issued for unused days,
                except as required under Section 5.
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Pricing Changes</h3>
            <p>
              We reserve the right to update pricing at any time. Changes will not affect your current
              billing period. For subscriptions, we will give at least 30 days&rsquo; notice of price
              increases, and you may cancel before the new price takes effect.
            </p>
          </section>

          {/* 5 */}
          <section>
            <SectionHeading id="eu-rights">5. EU Consumer Rights & Refunds</SectionHeading>

            <h3 className="mb-2 text-sm font-semibold text-white">14-Day Right of Withdrawal</h3>
            <p className="mb-4">
              If you are a consumer in the EU, you ordinarily have a 14-day right of withdrawal from
              online purchases (a &ldquo;cooling-off period&rdquo;) under Directive 2011/83/EU,
              without giving a reason.
            </p>

            <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="mb-2 font-semibold text-white">One-time purchases (3-Day Pass, Remove Ads, Lifetime)</p>
              <p>
                These purchases provide immediate access to digital content. By completing your
                purchase and requesting immediate access, you expressly acknowledge that we begin
                performance immediately. You thereby waive your 14-day right of withdrawal once
                digital access has been granted, in accordance with Article 16(m) of Directive
                2011/83/EU. Your other statutory consumer rights are not affected.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="mb-2 font-semibold text-white">Subscription plans (Monthly Pro, Yearly Pro)</p>
              <p>
                You have a 14-day right of withdrawal from the date your subscription begins. Because
                your subscription starts immediately, you acknowledge that a pro-rata deduction applies
                for any days of premium access already used if you exercise your right of withdrawal.
                To withdraw within the 14-day period, email{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>{" "}
                before the period expires with the subject line &ldquo;Withdrawal - [Plan Name].&rdquo;
              </p>
            </div>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Refund Requests</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                One-time purchases are non-refundable once premium features have been accessed, except
                where required by applicable EU consumer law.
              </li>
              <li>
                To request a refund for any reason, email{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>{" "}
                with your purchase details. We aim to respond within 5 business days. We review each
                case individually and may issue refunds at our discretion.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <SectionHeading id="mature">6. Mature / Adult Content</SectionHeading>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Guesshh includes a &ldquo;Mature / Night Mode&rdquo; category containing content
                intended for adults only (18+).
              </li>
              <li>
                Access to this category requires an in-app age verification step. By selecting
                &ldquo;I&rsquo;m 18 or older,&rdquo; you confirm that you are of legal adult age in
                your country of residence.
              </li>
              <li>
                If you enable this category for a minor, you do so at your own risk and responsibility.
                We are not liable for misuse of the age verification system.
              </li>
              <li>
                The age verification result is stored only on your device and is not transmitted to
                our servers.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <SectionHeading id="acceptable-use">7. Acceptable Use Policy</SectionHeading>
            <p className="mb-3">When using Guesshh, you agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use offensive, hateful, discriminatory, abusive, or impersonating nicknames during
                multiplayer sessions.
              </li>
              <li>
                Attempt to cheat, exploit bugs or vulnerabilities, reverse-engineer, or otherwise
                disrupt other players&rsquo; sessions.
              </li>
              <li>
                Use the Service for any unlawful purpose or in violation of applicable laws, including
                but not limited to laws of the Republic of Greece and the European Union.
              </li>
              <li>
                Attempt to gain unauthorised access to our servers, other users&rsquo; data, or any
                part of the Service infrastructure.
              </li>
              <li>
                Use automated tools, bots, or scrapers to interact with the Service.
              </li>
            </ul>
            <p className="mt-3">
              We reserve the right to terminate or restrict access for users who violate this policy,
              without refund.
            </p>
          </section>

          {/* 8 */}
          <section>
            <SectionHeading id="ip">8. Intellectual Property</SectionHeading>
            <p className="mb-3">
              All content, branding, game logic, category word lists, question sets, design elements,
              graphics, and source code in Guesshh are owned by or licensed to{" "}
              <span className="font-medium text-white">[YOUR FULL NAME OR COMPANY NAME]</span> and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-3">
              We grant you a personal, non-exclusive, non-transferable, and revocable licence to use
              Guesshh solely for personal entertainment. This licence does not permit you to:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Copy, reproduce, or redistribute any part of the Service or its content.</li>
              <li>Reverse-engineer, decompile, or disassemble the app or its code.</li>
              <li>Modify, adapt, translate, or create derivative works based on the Service.</li>
              <li>Use any content for commercial purposes without our prior written consent.</li>
            </ul>
            <p className="mt-3">
              &ldquo;Guesshh&rdquo; and its logo are our trademarks and may not be used without our
              prior written permission.
            </p>
          </section>

          {/* 9 */}
          <section>
            <SectionHeading id="disclaimers">9. Disclaimers & Limitation of Liability</SectionHeading>
            <p className="mb-3">
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, express or implied. To the extent permitted by applicable law,
              we disclaim all implied warranties, including fitness for a particular purpose,
              merchantability, and non-infringement.
            </p>
            <p className="mb-3">
              We aim to keep Guesshh available at all times but cannot guarantee uninterrupted,
              error-free service. We are not liable for service outages, data loss due to clearing
              localStorage, or loss of premium access caused by device changes.
            </p>
            <p className="mb-3">
              To the fullest extent permitted by applicable law, our total liability to you for any
              claim arising from your use of the Service shall not exceed the amount you paid us in
              the 12 months preceding your claim. We are not liable for indirect, consequential, or
              incidental losses.
            </p>
            <p>
              Nothing in these Terms excludes liability for death or personal injury caused by our
              negligence, for fraudulent misrepresentation, or for any liability that cannot be
              excluded under Greek or EU consumer law.{" "}
              <strong className="text-white">
                Nothing in these Terms limits your statutory rights as an EU consumer.
              </strong>
            </p>
          </section>

          {/* 10 */}
          <section>
            <SectionHeading id="changes">10. Changes to the Service</SectionHeading>
            <p>
              We may update, modify, or discontinue features of Guesshh at any time. We will give
              reasonable advance notice of significant changes, particularly those that affect paid
              features. Continued use of the Service after changes constitutes your acceptance of the
              updated Terms. If you do not accept material changes, your remedy is to stop using the
              Service and, if applicable, cancel your subscription.
            </p>
          </section>

          {/* 11 */}
          <section>
            <SectionHeading id="governing-law">11. Governing Law & Disputes</SectionHeading>
            <p className="mb-3">
              These Terms are governed by and construed in accordance with the laws of the Hellenic
              Republic (Greece) and applicable European Union law. Any disputes arising from or
              relating to these Terms or your use of Guesshh shall be subject to the exclusive
              jurisdiction of the courts of Greece, except where mandatory EU consumer law provides
              that you may bring proceedings in the courts of your country of residence.
            </p>
            <p className="mb-3">
              As an EU consumer, you also have the right to use the EU Online Dispute Resolution
              platform for out-of-court dispute resolution:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
            <p>
              Greek users may also contact the Hellenic Consumers&rsquo; Ombudsman:{" "}
              <a
                href="https://www.synigoroskatanaloti.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                synigoroskatanaloti.gr
              </a>
              .
            </p>
          </section>

          {/* 12 */}
          <section>
            <SectionHeading id="contact">12. Contact</SectionHeading>
            <p className="mb-3">
              For any questions or concerns about these Terms, please contact us:
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">[YOUR FULL NAME OR COMPANY NAME]</p>
              <p>[YOUR REGISTERED ADDRESS]</p>
              <p>Greece, EU</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
