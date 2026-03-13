import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Guesshh",
  description:
    "Terms and conditions for using Guesshh. Covers premium purchases via Stripe, EU consumer rights, platform-specific payment rules, and acceptable use.",
}

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="mb-3 scroll-mt-24 text-lg font-bold text-[#22c55e]">
    {children}
  </h2>
)

const InfoBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-white/10 bg-white/5 p-4">{children}</div>
)

const AmberBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">{children}</div>
)

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-20 text-gray-300">
      <div className="mx-auto max-w-3xl">
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
          Questions?{" "}
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
              ["how-payments-work", "How Payments Work - All Platforms"],
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
            Welcome to Guesshh. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
            the Guesshh social deduction party game, available at{" "}
            <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
              play.guesshh.com
            </a>{" "}
            and on Google Play (&ldquo;the Service&rdquo;). Please read these Terms carefully.
          </p>

          {/* 1 */}
          <section>
            <SectionHeading id="acceptance">1. Acceptance of Terms</SectionHeading>
            <p className="mb-3">
              By accessing or using Guesshh - including playing the game, making a purchase, or
              browsing the app - you agree to these Terms and our{" "}
              <Link href="/privacy" className="text-[#22c55e] hover:underline">
                Privacy Policy
              </Link>
              . If you do not agree, please stop using the Service immediately.
            </p>
            <p>
              These Terms form a legally binding agreement between you and{" "}
              <span className="font-medium text-white">
                [ANTONIS YOUR-SURNAME]
              </span>{" "}
              (or [YOUR COMPANY NAME] once registered), based in Cyprus
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
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
                A <span className="font-medium text-white">Progressive Web App (PWA)</span>{" "}
                accessible in any modern browser at{" "}
                <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
                  play.guesshh.com
                </a>{" "}
                - no download required.
              </li>
              <li>
                An{" "}
                <span className="font-medium text-white">Android app on Google Play</span>{" "}
                (coming soon). The app is distributed via Google Play for discovery and
                installation. All payments, however, are processed through Stripe - not Google
                Play Billing - as described in Section 5.
              </li>
            </ul>
            <p className="mt-3">
              The Service is available worldwide. Guesshh is not currently distributed through
              the Apple App Store.
            </p>
            <p className="mt-3">
              <span className="font-medium text-white">Eligibility:</span> You must be at least
              13 years old to use Guesshh. If you are under 18, we recommend reviewing these
              Terms with a parent or guardian. By using the Service you confirm you meet these
              requirements.
            </p>
          </section>

          {/* 3 */}
          <section>
            <SectionHeading id="freemium">3. Freemium Model & Advertisements</SectionHeading>
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
            <AmberBox>
              <p className="font-semibold text-amber-400">⚠ Advertisements: Not Yet Active</p>
              <p className="mt-2">
                Advertisements (via Google AdSense) are integrated in the app code but are{" "}
                <strong className="text-white">not currently enabled</strong> pending Google&rsquo;s
                publisher review. When ads are enabled, we will update our{" "}
                <Link href="/cookies" className="text-[#22c55e] hover:underline">
                  Cookie Policy
                </Link>{" "}
                and present a consent banner before any personalised advertising cookies are set.
                Free-tier users will always be able to see non-personalised ads without tracking.
                Premium subscribers will never see ads.
              </p>
            </AmberBox>
          </section>

          {/* 4 */}
          <section>
            <SectionHeading id="premium">4. Premium Purchases & Subscriptions</SectionHeading>

            <h3 className="mb-3 mt-4 text-sm font-semibold text-white">
              Available Plans (prices in EUR, VAT inclusive)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-2 pr-4 font-medium">Plan</th>
                    <th className="py-2 pr-4 font-medium">Price</th>
                    <th className="py-2 pr-4 font-medium">Type</th>
                    <th className="py-2 font-medium">Includes</th>
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
            <p className="mt-3 text-xs text-gray-500">
              Prices shown are for purchases made at play.guesshh.com. Prices displayed within the
              Google Play app may differ due to local currency conversion and applicable taxes. All
              purchases - regardless of where you see them - are processed by Stripe at
              play.guesshh.com.
            </p>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Subscriptions</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Monthly Pro and Yearly Pro auto-renew at the start of each billing period. You
                will be charged automatically unless you cancel beforehand.
              </li>
              <li>
                Cancel at any time from within the app. Your premium access continues to the end
                of your current paid period. No partial refunds are issued for unused days, except
                as required by EU law (see Section 6).
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Purchase Restoration</h3>
            <p>
              Premium access is tied to the device on which you purchased (identified by your
              device ID stored in localStorage). If you change devices, clear your browser data,
              or switch browsers, use the{" "}
              <strong className="text-white">Restore Purchases</strong> feature in the app: enter
              the email address you used at Stripe checkout and we will re-link your premium access
              to your current device. Keep your Stripe checkout email accessible for this purpose.
            </p>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Pricing Changes</h3>
            <p>
              We reserve the right to update pricing at any time. Changes do not affect your
              current billing period. For subscriptions, we will give at least 30 days&rsquo;
              notice of price increases, and you may cancel before the new price takes effect.
            </p>
          </section>

          {/* 5 - KEY NEW SECTION */}
          <section>
            <SectionHeading id="how-payments-work">
              5. How Payments Work - All Platforms
            </SectionHeading>

            <p className="mb-4">
              Regardless of how you access or discover Guesshh - through a browser, an installed
              PWA, or the Google Play Android app - all purchases are processed exclusively through{" "}
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                Stripe
              </a>{" "}
              at{" "}
              <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
                play.guesshh.com
              </a>
              . Guesshh does not use Google Play Billing.
            </p>

            <div className="space-y-4">
              <InfoBox>
                <p className="mb-2 font-semibold text-white">
                  Browser / Installed PWA (play.guesshh.com)
                </p>
                <ul className="list-disc space-y-2 pl-5 text-gray-400">
                  <li>
                    You pay directly via Stripe at play.guesshh.com. The contract is between you
                    and us.
                  </li>
                  <li>
                    Installing the PWA to your home screen via your browser&rsquo;s
                    &ldquo;Add to Home Screen&rdquo; option does not change this - it is still a
                    browser-based purchase processed by Stripe, not a Google Play transaction.
                  </li>
                  <li>We are responsible for your access and all refund requests.</li>
                  <li>EU consumer rights apply in full, including the 14-day right of withdrawal (see Section 6).</li>
                  <li>
                    For refunds or support, contact{" "}
                    <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                      support@guesshh.com
                    </a>
                    .
                  </li>
                </ul>
              </InfoBox>

              <InfoBox>
                <p className="mb-2 font-semibold text-white">
                  Google Play Android App (coming soon)
                </p>
                <ul className="list-disc space-y-2 pl-5 text-gray-400">
                  <li>
                    Google Play is used for app distribution and discovery only. When you tap a
                    &ldquo;Buy&rdquo; or &ldquo;Upgrade&rdquo; option inside the app, you will be
                    directed to a Stripe-powered payment page at play.guesshh.com.
                  </li>
                  <li>
                    <strong className="text-white">
                      You will see a screen from Google informing you that you are leaving the
                      Google Play environment before being taken to the payment page.
                    </strong>{" "}
                    This is a mandatory disclosure screen required by Google&rsquo;s External
                    Offers Program, which enables us to use our own payment infrastructure. Tap
                    &ldquo;Continue&rdquo; to proceed to the Stripe checkout at play.guesshh.com.
                  </li>
                  <li>
                    The contract for your purchase is between you and us - not Google. Google does
                    not process your payment, does not hold your card details, and is not
                    responsible for fulfilling your access.
                  </li>
                  <li>
                    <strong className="text-white">
                      All refund requests must be directed to us
                    </strong>{" "}
                    at{" "}
                    <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                      support@guesshh.com
                    </a>
                    , not to Google. Google has no visibility into or responsibility for these
                    transactions.
                  </li>
                  <li>
                    By completing a purchase you agree to{" "}
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
                    To restore access after changing devices, use the Restore Purchases feature
                    in the app with the email you used at checkout.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-gray-500">
                  Note for EU/EEA users: Guesshh participates in Google Play&rsquo;s External
                  Offers Program, which was introduced under the EU Digital Markets Act (DMA) to
                  allow developers to use alternative payment systems. This program is legally
                  compliant within the EEA. Note for US users: external payment links are
                  permitted on Google Play in the United States under a federal court order (Epic
                  v. Google, October 2025). The availability of this feature may change if the
                  underlying legal requirements change.
                </p>
              </InfoBox>
            </div>

            <p className="mt-4">
              We never see or store your payment card details - all payment data is handled
              exclusively by Stripe. A Stripe customer ID is stored on our servers solely to
              manage your subscription entitlement and enable purchase restoration.
            </p>
          </section>

          {/* 6 */}
          <section>
            <SectionHeading id="eu-rights">6. EU Consumer Rights & Refunds</SectionHeading>
            <p className="mb-1 text-xs text-gray-500">
              This section applies to all purchases processed through Stripe at play.guesshh.com,
              regardless of whether you discovered Guesshh via the browser or through Google Play.
            </p>

            <h3 className="mb-2 mt-4 text-sm font-semibold text-white">
              14-Day Right of Withdrawal
            </h3>
            <p className="mb-4">
              If you are a consumer in the EU, you ordinarily have a 14-day right of withdrawal
              from online purchases (a &ldquo;cooling-off period&rdquo;) under Directive
              2011/83/EU, without giving a reason.
            </p>

            <InfoBox>
              <p className="mb-2 font-semibold text-white">
                One-time purchases (3-Day Pass, Remove Ads, Lifetime)
              </p>
              <p>
                These provide immediate access to digital content. By completing your purchase
                and requesting immediate access, you expressly acknowledge that we begin
                performance immediately. You thereby waive your 14-day right of withdrawal once
                digital access has been granted, in accordance with Article 16(m) of Directive
                2011/83/EU. Your other statutory consumer rights remain unaffected.
              </p>
            </InfoBox>

            <div className="mt-4">
              <InfoBox>
                <p className="mb-2 font-semibold text-white">
                  Subscription plans (Monthly Pro, Yearly Pro)
                </p>
                <p>
                  You have a 14-day right of withdrawal from the date your subscription begins.
                  Because your subscription starts immediately, a pro-rata deduction applies for
                  any days of premium access already used if you exercise your right. To withdraw
                  within the 14-day period, email{" "}
                  <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                    support@guesshh.com
                  </a>{" "}
                  with the subject &ldquo;Withdrawal - [Plan Name]&rdquo; before the period
                  expires.
                </p>
              </InfoBox>
            </div>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Refund Requests</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                One-time purchases are non-refundable once premium features have been accessed,
                except where required by applicable EU consumer law.
              </li>
              <li>
                Email{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>{" "}
                with your purchase details. We review each case individually and aim to respond
                within 5 business days.
              </li>
              <li>
                Since all payments are processed by Stripe - not Google or any other app store -
                refund requests must always come to us directly, regardless of which platform you
                used to access the app.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <SectionHeading id="mature">7. Mature / Adult Content</SectionHeading>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Guesshh includes a &ldquo;Mature / Night Mode&rdquo; category containing content
                intended for adults only (18+).
              </li>
              <li>
                By selecting &ldquo;I&rsquo;m 18 or older,&rdquo; you confirm that you are of
                legal adult age in your country of residence.
              </li>
              <li>
                We are not liable for misuse of the age verification system. If you enable this
                category for a minor, you do so at your own risk and responsibility.
              </li>
              <li>
                The age verification result is stored only on your device and is not transmitted
                to our servers.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <SectionHeading id="acceptable-use">8. Acceptable Use Policy</SectionHeading>
            <p className="mb-3">When using Guesshh, you agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use offensive, hateful, discriminatory, abusive, or impersonating nicknames
                during multiplayer sessions.
              </li>
              <li>
                Attempt to cheat, exploit bugs or vulnerabilities, reverse-engineer, or disrupt
                other players&rsquo; sessions.
              </li>
              <li>
                Use the Service for any unlawful purpose or in violation of applicable laws,
                including the laws of the Republic of Cyprus and the European Union.
              </li>
              <li>
                Attempt to gain unauthorised access to our servers, other users&rsquo; data, or
                any part of the Service infrastructure.
              </li>
              <li>Use automated tools, bots, or scrapers to interact with the Service.</li>
            </ul>
            <p className="mt-3">
              We reserve the right to terminate or restrict access for users who violate this
              policy, without refund.
            </p>
          </section>

          {/* 9 */}
          <section>
            <SectionHeading id="ip">9. Intellectual Property</SectionHeading>
            <p className="mb-3">
              All content, branding, game logic, category word lists, question sets, design
              elements, graphics, and source code in Guesshh are owned by or licensed to{" "}
              <span className="font-medium text-white">[ANTONIS YOUR-SURNAME]</span> and are
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-3">
              We grant you a personal, non-exclusive, non-transferable, and revocable licence to
              use Guesshh solely for personal entertainment. You may not:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Copy, reproduce, or redistribute any part of the Service or its content.</li>
              <li>Reverse-engineer, decompile, or disassemble the app or its code.</li>
              <li>Modify, adapt, or create derivative works based on the Service.</li>
              <li>
                Use any content for commercial purposes without our prior written consent.
              </li>
            </ul>
            <p className="mt-3">
              &ldquo;Guesshh&rdquo; and its logo are our trademarks and may not be used without
              our prior written permission.
            </p>
          </section>

          {/* 10 */}
          <section>
            <SectionHeading id="disclaimers">10. Disclaimers & Limitation of Liability</SectionHeading>
            <p className="mb-3">
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind. To the extent permitted by applicable law, we disclaim all
              implied warranties, including fitness for a particular purpose and merchantability.
            </p>
            <p className="mb-3">
              We are not liable for: service outages; loss of premium access caused by clearing
              localStorage or device changes (use Restore Purchases to recover access); content
              of third-party services; or changes to Google Play&rsquo;s External Offers Program
              policies or the legal framework governing external payments that may affect the
              availability of Stripe-based purchasing within the Google Play app.
            </p>
            <p className="mb-3">
              To the fullest extent permitted by applicable law, our total liability to you shall
              not exceed the amount you paid us in the 12 months preceding your claim. We are
              not liable for indirect, consequential, or incidental losses.
            </p>
            <p>
              Nothing in these Terms excludes liability for death or personal injury caused by
              our negligence, for fraudulent misrepresentation, or for any liability that cannot
              be excluded under Cyprus or EU consumer law.{" "}
              <strong className="text-white">
                Nothing in these Terms limits your statutory rights as an EU consumer.
              </strong>
            </p>
          </section>

          {/* 11 */}
          <section>
            <SectionHeading id="changes">11. Changes to the Service</SectionHeading>
            <p>
              We may update, modify, or discontinue features of Guesshh at any time. We will
              give reasonable advance notice of significant changes, particularly those affecting
              paid features or the payment flow. Continued use of the Service after changes
              constitutes acceptance of the updated Terms. If you do not accept material changes,
              your remedy is to stop using the Service and cancel your subscription if applicable.
            </p>
          </section>

          {/* 12 */}
          <section>
            <SectionHeading id="governing-law">12. Governing Law & Disputes</SectionHeading>
            <p className="mb-3">
              These Terms are governed by the laws of the Republic of Cyprus and applicable
              European Union law. Any disputes arising from these Terms or your use of Guesshh
              shall be subject to the exclusive jurisdiction of the courts of Cyprus, except
              where mandatory EU consumer law provides that you may bring proceedings in your
              country of residence.
            </p>
            <p className="mb-3">
              As an EU consumer, you also have the right to use the EU Online Dispute Resolution
              platform:{" "}
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
              The Cyprus Consumer Protection Service can be reached at{" "}
              <a
                href="https://www.mcit.gov.cy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                mcit.gov.cy
              </a>
              .
            </p>
          </section>

          {/* 13 */}
          <section>
            <SectionHeading id="contact">13. Contact</SectionHeading>
            <InfoBox>
              <p className="font-medium text-white">[ANTONIS YOUR-SURNAME]</p>
              <p>Cyprus, European Union</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>
              </p>
            </InfoBox>
          </section>
        </div>
      </div>
    </div>
  )
}
