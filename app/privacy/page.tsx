"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useCookieConsent } from "@/hooks/useCookieConsent"

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2 id={id} className="mb-3 scroll-mt-24 text-lg font-bold text-[#22c55e]">
    {children}
  </h2>
)

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-1 mt-4 text-sm font-semibold text-white">{children}</h3>
)

const Pill = ({
  children,
  color = "green",
}: {
  children: React.ReactNode
  color?: "green" | "amber" | "zinc"
}) => {
  const styles: Record<string, string> = {
    green: "bg-[#22c55e]/15 text-[#22c55e]",
    amber: "bg-amber-500/15 text-amber-400",
    zinc: "bg-zinc-700/60 text-zinc-300",
  }
  return (
    <span className={`ml-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[color]}`}>
      {children}
    </span>
  )
}

export default function PrivacyPage() {
  const { openPreferences } = useCookieConsent()

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
          Privacy Policy
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
              ["who-we-are", "Who We Are"],
              ["data-collected", "What Data We Collect"],
              ["legal-basis", "Why We Collect It (Legal Basis)"],
              ["cookies", "Cookies & Tracking Technologies"],
              ["advertising", "Advertising"],
              ["third-parties", "Third-Party Services"],
              ["international-transfers", "International Data Transfers"],
              ["your-rights", "Your Rights Under GDPR"],
              ["childrens-privacy", "Children's Privacy"],
              ["retention", "Data Retention"],
              ["contact", "How to Contact Us"],
              ["supervisory", "Supervisory Authority"],
              ["changes", "Changes to This Policy"],
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
            Guesshh (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a social deduction
            party game available at{" "}
            <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
              play.guesshh.com
            </a>{" "}
            and on Google Play. Guesshh is available worldwide, with a primary focus on European
            users. This policy applies to all users regardless of location and covers all data
            collected via the game, the marketing site at{" "}
            <a href="https://guesshh.com" className="text-[#22c55e] hover:underline">
              guesshh.com
            </a>
            , and any associated services.
          </p>

          {/* 1 */}
          <section>
            <SectionHeading id="who-we-are">1. Who We Are</SectionHeading>
            <p className="mb-3">The data controller for Guesshh is:</p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">
                [YOUR FULL NAME]{" "}
                <span className="text-xs font-normal text-gray-500">
                  (or [YOUR COMPANY NAME] once a legal entity is registered)
                </span>
              </p>
              <p>Cyprus, European Union</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>
              </p>
            </div>
            <p className="mt-3">
              As data controller, we determine the purposes and means of processing your personal
              data. For payment processing, Stripe acts as an independent data controller. For
              cloud infrastructure, Supabase acts as our data processor under a signed Data
              Processing Agreement (DPA).
            </p>
          </section>

          {/* 2 */}
          <section>
            <SectionHeading id="data-collected">2. What Data We Collect</SectionHeading>

            <SubHeading>Device Identifier</SubHeading>
            <p>
              A randomly generated UUID created on your device and stored in{" "}
              <code className="rounded bg-white/10 px-1">localStorage</code>. When you play
              multiplayer or purchase a premium plan, this ID is transmitted to our Supabase
              servers to manage your session or verify your subscription. Under GDPR, a
              persistent device ID may qualify as personal data.
            </p>

            <SubHeading>Email Address (Purchase Restoration)</SubHeading>
            <p>
              When you purchase a premium plan, you complete payment via Stripe at
              play.guesshh.com. The email address you enter at Stripe checkout is stored in our
              Supabase database alongside your entitlement record. This email is used{" "}
              <strong className="text-white">solely</strong> to restore your purchase access if
              you change devices, clear your browser data, or lose your device ID via the
              &ldquo;Restore Purchases&rdquo; feature. We do not use this email for marketing
              or any other purpose.
            </p>

            <SubHeading>Game Preferences</SubHeading>
            <p>
              Language, haptics, and similar settings. Stored in{" "}
              <code className="rounded bg-white/10 px-1">localStorage</code> on your device only
              - never sent to our servers.
            </p>

            <SubHeading>Purchase & Entitlement Records</SubHeading>
            <p>
              If you purchase a premium plan we store in Supabase: your device ID, your Stripe
              checkout email, plan type, purchase date, expiry date, and your Stripe customer ID.
              This is required to verify your access, enable purchase restoration, and fulfil our
              EU accounting obligations. All payments are processed exclusively by Stripe - we
              never see or store payment card details.
            </p>

            <SubHeading>Multiplayer Session Data</SubHeading>
            <p>
              Temporary data during multiplayer games: room codes, the nickname you choose, and
              game state. Stored in Supabase and deleted when the session ends or after 24 hours
              of inactivity.
            </p>

            <SubHeading>Age Verification Result</SubHeading>
            <p>
              Whether you confirmed you are 18 or older for the &ldquo;Mature / Night Mode&rdquo;
              category. Stored in{" "}
              <code className="rounded bg-white/10 px-1">localStorage</code> on your device only
              - never sent to our servers.
            </p>

            <SubHeading>Analytics Data (Google Analytics 4)</SubHeading>
            <p>
              When you consent via our cookie banner, GA4 collects anonymised usage data: pages
              visited, session duration, events (e.g. game started, plan purchased), approximate
              country, browser type, and device type. IP addresses are anonymised before storage.
              Loaded via Google Tag Manager (GTM).
            </p>

            <SubHeading>Note on Google Play</SubHeading>
            <p>
              Guesshh uses Google Play for app distribution only. All payments are processed
              through Stripe at play.guesshh.com via Google&rsquo;s External Offers Program.
              Google Play does not process, see, or store any payment data for Guesshh
              transactions. Google Play has access only to standard app distribution and analytics
              data associated with your Google account, which is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                Google&rsquo;s Privacy Policy
              </a>
              .
            </p>

            <SubHeading>What We Do Not Collect</SubHeading>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400">
              <li>We do not collect your name or phone number.</li>
              <li>We do not collect precise GPS location.</li>
              <li>We do not store payment card details.</li>
              <li>We do not sell your data to any third party, ever.</li>
              <li>There are no user accounts - you do not register or log in.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <SectionHeading id="legal-basis">3. Why We Collect It (Legal Basis)</SectionHeading>
            <p className="mb-4">Under GDPR Article 6, we rely on the following legal bases:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-2 pr-4 font-medium">Processing Activity</th>
                    <th className="py-2 pr-4 font-medium">Legal Basis</th>
                    <th className="py-2 font-medium">GDPR Article</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Verifying premium subscription via device ID", "Contract performance", "Art. 6(1)(b)"],
                    ["Storing checkout email for purchase restoration", "Contract performance", "Art. 6(1)(b)"],
                    ["Retaining purchase & entitlement records", "Legal obligation (EU accounting law)", "Art. 6(1)(c)"],
                    ["Running multiplayer sessions (temporary device ID)", "Legitimate interests", "Art. 6(1)(f)"],
                    ["Google Analytics 4 & GTM analytics cookies", "Consent", "Art. 6(1)(a)"],
                    ["Google AdSense personalised ads (not yet active)", "Consent (when enabled)", "Art. 6(1)(a)"],
                    ["Stripe payment processing", "Contract performance", "Art. 6(1)(b)"],
                    ["Age verification for mature content", "Legal obligation", "Art. 6(1)(c)"],
                  ].map(([activity, basis, article]) => (
                    <tr key={activity} className="text-gray-400">
                      <td className="py-2.5 pr-4">{activity}</td>
                      <td className="py-2.5 pr-4 text-white">{basis}</td>
                      <td className="py-2.5 font-mono text-[#22c55e]">{article}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <SectionHeading id="cookies">4. Cookies & Tracking Technologies</SectionHeading>
            <p className="mb-4">
              See our dedicated{" "}
              <Link href="/cookies" className="text-[#22c55e] hover:underline">
                Cookie Policy
              </Link>{" "}
              for the full breakdown. In summary:
            </p>
            <div className="space-y-3">
              <div className="rounded-lg border border-white/10 p-4">
                <p className="mb-1 font-semibold text-white">
                  Strictly Necessary
                  <Pill color="green">Always on</Pill>
                </p>
                <p>
                  <code className="rounded bg-white/10 px-1">device_id</code>,{" "}
                  <code className="rounded bg-white/10 px-1">game_preferences</code>,{" "}
                  <code className="rounded bg-white/10 px-1">premium_status</code>,{" "}
                  <code className="rounded bg-white/10 px-1">cookie_consent</code> - stored in
                  localStorage. Cannot be disabled.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <p className="mb-1 font-semibold text-white">
                  Analytics
                  <Pill color="zinc">Consent required</Pill>
                </p>
                <p>
                  <code className="rounded bg-white/10 px-1">_ga</code> (2 years),{" "}
                  <code className="rounded bg-white/10 px-1">_ga_XXXXX</code> (2 years) - GA4
                  via GTM. Only set with your consent.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 p-4">
                <p className="mb-1 font-semibold text-white">
                  Payment
                  <Pill color="zinc">Stripe</Pill>
                </p>
                <p>
                  <code className="rounded bg-white/10 px-1">__stripe_mid</code> (1 year) - set
                  by Stripe during checkout for fraud prevention only.
                </p>
              </div>
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="mb-1 font-semibold text-amber-400">
                  Advertising - Google AdSense
                  <Pill color="amber">Not yet active</Pill>
                </p>
                <p>
                  Not currently enabled. No advertising cookies are being set. This policy will
                  be updated before AdSense is activated.
                </p>
              </div>

              {/* Cookie preferences link - uses hook, safe because "use client" */}
              <div className="rounded-lg border border-[#22c55e]/20 bg-[#22c55e]/5 p-4">
                <p className="text-sm text-slate-300">
                  You have the right to withdraw consent at any time.{" "}
                  <button
                    onClick={openPreferences}
                    className="text-[#22c55e] underline underline-offset-2 transition-colors hover:text-[#4ade80]"
                  >
                    Update your cookie preferences
                  </button>{" "}
                  at any point - your choice will be saved immediately.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section>
            <SectionHeading id="advertising">5. Advertising</SectionHeading>
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="font-semibold text-amber-400">⚠ Google AdSense: Not Currently Active</p>
              <p className="mt-2">
                The free tier will be supported by Google AdSense. As of this policy&rsquo;s date,
                AdSense is <strong className="text-white">not enabled</strong> - no advertising
                cookies are set. This policy will be updated and a new consent prompt displayed
                before AdSense is activated. Premium subscribers will never see ads.
              </p>
            </div>
            <SubHeading>Note for US Users</SubHeading>
            <p>
              Guesshh is available globally. We may run advertising targeted at US users through
              Google Ads or AdSense. Any such advertising will use Google&rsquo;s infrastructure;
              data transfers to the US are covered by the EU-US Data Privacy Framework and SCCs.
              US users should review{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                Google&rsquo;s Privacy Policy
              </a>{" "}
              for advertising data details. Meta Pixel, TikTok Pixel, and Google Ads Remarketing
              are not installed and not active.
            </p>
          </section>

          {/* 6 */}
          <section>
            <SectionHeading id="third-parties">6. Third-Party Services</SectionHeading>
            <ul className="space-y-4">
              {[
                {
                  name: "Supabase",
                  href: "https://supabase.com/privacy",
                  desc: "Our cloud database and real-time infrastructure, acting as data processor under a signed DPA. EU processing where possible; US transfers via SCCs.",
                },
                {
                  name: "Stripe",
                  href: "https://stripe.com/privacy",
                  desc: "Our exclusive payment processor for all Guesshh purchases - whether initiated via the browser, installed PWA, or the Google Play app. Stripe is an independent data controller under the EU-US DPF. We never see or store card details.",
                },
                {
                  name: "Google Analytics 4 & Tag Manager",
                  href: "https://policies.google.com/privacy",
                  desc: "Used with your consent to measure app usage. IP anonymisation is enabled. Data may transfer to the US via SCCs and EU-US DPF.",
                },
                {
                  name: "Google Play",
                  href: "https://policies.google.com/privacy",
                  desc: "Used for app distribution and discovery only. Google Play does not process payments for Guesshh. When a user taps a purchase link in the Android app, they are directed to Stripe at play.guesshh.com via Google's External Offers Program.",
                },
                {
                  name: "Google Search Console",
                  href: null,
                  desc: "Aggregate search performance data for guesshh.com only. No user PII transmitted.",
                },
              ].map((item) => (
                <li key={item.name}>
                  {item.href ? (
                    <>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-[#22c55e] transition-colors"
                      >
                        {item.name}
                      </a>{" "}
                      - {item.desc}
                    </>
                  ) : (
                    <>
                      <span className="font-medium text-white">{item.name}</span> - {item.desc}
                    </>
                  )}
                </li>
              ))}
              <li>
                <span className="font-medium text-white">
                  Google AdSense{" "}
                  <span className="text-amber-400 font-normal text-xs">(not yet active)</span>
                </span>{" "}
                -{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Google Privacy Policy
                </a>
                . Will be enabled in a future update with a new consent banner before any
                advertising cookies are set.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <SectionHeading id="international-transfers">
              7. International Data Transfers
            </SectionHeading>
            <p className="mb-3">
              Guesshh is operated from Cyprus (EU). Some data is transferred to the US:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-white">Supabase:</span> Safeguarded by SCCs
                under GDPR Art. 46(2)(c).
              </li>
              <li>
                <span className="font-medium text-white">Stripe:</span> EU-US Data Privacy
                Framework (DPF), certified with the US Department of Commerce.
              </li>
              <li>
                <span className="font-medium text-white">
                  Google (GA4, GTM, Play, AdSense):
                </span>{" "}
                SCCs and EU-US DPF.
              </li>
            </ul>
            <p className="mt-3">
              To request a copy of applicable transfer safeguards, email{" "}
              <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                support@guesshh.com
              </a>
              .
            </p>
          </section>

          {/* 8 */}
          <section>
            <SectionHeading id="your-rights">8. Your Rights Under GDPR</SectionHeading>
            <p className="mb-4">
              As an EU/EEA resident, you have the following rights under GDPR Articles 15–22:
            </p>
            <ul className="space-y-3">
              {[
                ["Right of Access (Art. 15)", "Request a copy of the personal data we hold about you, including device ID, checkout email, and entitlement records."],
                ["Right to Rectification (Art. 16)", "Ask us to correct inaccurate data, e.g. if the email stored for purchase restoration is wrong."],
                ["Right to Erasure (Art. 17)", "Request deletion of your data. Note: purchase and entitlement records including checkout email must be retained for 7 years under EU accounting law."],
                ["Right to Restriction (Art. 18)", "Ask us to limit how we process your data while a dispute is resolved."],
                ["Right to Data Portability (Art. 20)", "Receive your personal data in a structured, machine-readable format (e.g. JSON)."],
                ["Right to Object (Art. 21)", "Object to processing based on legitimate interests (e.g. multiplayer session data)."],
                ["Right to Withdraw Consent (Art. 7(3))", "Withdraw consent for analytics or advertising cookies at any time via our cookie banner. Does not affect lawfulness of prior processing."],
                ["Right Not to be Subject to Automated Decisions (Art. 22)", "We do not use automated decision-making or profiling that produces legal or similarly significant effects on you."],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-0.5 text-gray-400">{desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any right, email{" "}
              <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                support@guesshh.com
              </a>{" "}
              with the subject &ldquo;GDPR Request.&rdquo; We will respond within 30 days.
            </p>
          </section>

          {/* 9 */}
          <section>
            <SectionHeading id="childrens-privacy">9. Children&rsquo;s Privacy</SectionHeading>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Guesshh is intended for users aged{" "}
                <strong className="text-white">13 and older</strong>. We do not knowingly collect
                personal data from children under 13.
              </li>
              <li>
                In EU member states with a higher digital consent age (e.g. 16 in some states),
                parental consent may be required for consent-based data processing. We recommend
                parental supervision for users under 16.
              </li>
              <li>
                The &ldquo;Mature / Night Mode&rdquo; category requires in-app confirmation of
                18+ status. This is stored on device only - never sent to our servers.
              </li>
              <li>
                If you believe a child under 13 has used Guesshh, contact{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>{" "}
                and we will take appropriate action.
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <SectionHeading id="retention">10. Data Retention</SectionHeading>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="py-2 pr-4 font-medium">Data Type</th>
                    <th className="py-2 pr-4 font-medium">Location</th>
                    <th className="py-2 font-medium">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-400">
                  {[
                    ["Multiplayer session data", "Supabase", "Deleted on session end or after 24h inactivity"],
                    ["Purchase & entitlement records (incl. checkout email)", "Supabase", "7 years (EU accounting obligation)"],
                    ["Device ID (server-side)", "Supabase", "Up to 7 years with entitlements, or deleted on request where legally permissible"],
                    ["Device ID & preferences", "Your device (localStorage)", "Until you clear localStorage"],
                    ["Age verification result", "Your device (localStorage)", "Until you clear localStorage"],
                    ["GA4 analytics data", "Google servers", "14 months (default GA4 retention)"],
                    ["Stripe customer records", "Stripe", "Per Stripe's own retention policy"],
                  ].map(([data, loc, period]) => (
                    <tr key={data}>
                      <td className="py-2.5 pr-4 text-white">{data}</td>
                      <td className="py-2.5 pr-4">{loc}</td>
                      <td className="py-2.5">{period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 11 */}
          <section>
            <SectionHeading id="contact">11. How to Contact Us</SectionHeading>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">[YOUR FULL NAME]</p>
              <p>Cyprus, European Union</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>
              </p>
            </div>
            <p className="mt-3">We respond to all privacy requests within 30 days.</p>
          </section>

          {/* 12 */}
          <section>
            <SectionHeading id="supervisory">12. Supervisory Authority</SectionHeading>
            <p className="mb-3">
              As a Cyprus-based data controller, our lead supervisory authority is:
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">
                Commissioner for the Protection of Personal Data (Cyprus)
              </p>
              <p>1 Iasonos Street, 1082 Nicosia, Cyprus</p>
              <p>
                Website:{" "}
                <a
                  href="https://www.dataprotection.gov.cy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  dataprotection.gov.cy
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:commissioner@dataprotection.gov.cy"
                  className="text-[#22c55e] hover:underline"
                >
                  commissioner@dataprotection.gov.cy
                </a>
              </p>
            </div>
            <p className="mt-3">
              If you are in another EU member state, you may contact your local authority - full
              list at{" "}
              <a
                href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                edpb.europa.eu
              </a>
              . EU users may also use the EU Online Dispute Resolution platform at{" "}
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
          </section>

          {/* 13 */}
          <section>
            <SectionHeading id="changes">13. Changes to This Policy</SectionHeading>
            <p>
              We may update this Privacy Policy to reflect changes in our services, legal
              requirements, or data practices. We will update the &ldquo;Last updated&rdquo; date
              above. For significant changes - enabling Google AdSense, launching US-targeted
              advertising, or forming a registered legal entity - we will notify users through an
              updated cookie consent banner or in-app notice. Continued use of Guesshh after
              changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
