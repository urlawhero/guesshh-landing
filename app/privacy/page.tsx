import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy — Guesshh",
  description:
    "GDPR-compliant Privacy Policy for Guesshh. Learn what data we collect, why, and how to exercise your rights as an EU user.",
}

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2
    id={id}
    className="mb-3 scroll-mt-24 text-lg font-bold text-[#22c55e]"
  >
    {children}
  </h2>
)

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-1 mt-4 text-sm font-semibold text-white">{children}</h3>
)

const Pill = ({ children, color = "green" }: { children: React.ReactNode; color?: "green" | "amber" | "zinc" }) => {
  const styles = {
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
          Privacy Policy
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
            Guesshh (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a social deduction party
            game available at{" "}
            <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
              play.guesshh.com
            </a>{" "}
            and (soon) on Google Play. We are committed to protecting your personal data and being
            transparent about how we use it. This policy applies to all users of Guesshh and covers
            data collected via the game PWA, the marketing site at{" "}
            <a href="https://guesshh.com" className="text-[#22c55e] hover:underline">
              guesshh.com
            </a>
            , and any associated services.
          </p>

          {/* 1 */}
          <section>
            <SectionHeading id="who-we-are">1. Who We Are</SectionHeading>
            <p className="mb-3">
              The data controller for Guesshh is:
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-gray-300">
              <p>
                <span className="font-medium text-white">[YOUR FULL NAME OR COMPANY NAME]</span>
              </p>
              <p>[YOUR REGISTERED ADDRESS]</p>
              <p>Greece, European Union</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>
              </p>
            </div>
            <p className="mt-3">
              As a data controller, we determine the purposes and means of processing your personal
              data in connection with Guesshh. For payment data, Stripe acts as an independent data
              controller. For infrastructure, Supabase acts as our data processor.
            </p>
          </section>

          {/* 2 */}
          <section>
            <SectionHeading id="data-collected">2. What Data We Collect</SectionHeading>

            <SubHeading>Device Identifier</SubHeading>
            <p>
              A randomly generated UUID (universally unique identifier) is created on your device and
              stored in your browser&rsquo;s <code className="rounded bg-white/10 px-1">localStorage</code>.
              When you play multiplayer or purchase a premium plan, this ID is transmitted to our
              Supabase servers to manage your session or verify your subscription. Under GDPR, a
              persistent device ID may qualify as personal data.
            </p>

            <SubHeading>Game Preferences</SubHeading>
            <p>
              Language selection, haptics preferences, and similar app settings. Stored in{" "}
              <code className="rounded bg-white/10 px-1">localStorage</code> on your device only —
              never sent to our servers.
            </p>

            <SubHeading>Purchase & Entitlement Records</SubHeading>
            <p>
              If you purchase a premium plan, we store the following in Supabase: your device ID,
              plan type, purchase date, expiry date, and your Stripe customer ID. This is required to
              verify your access and fulfil our legal accounting obligations. We never see or store
              your payment card details — these are handled entirely by Stripe.
            </p>

            <SubHeading>Multiplayer Session Data</SubHeading>
            <p>
              Temporary data during multiplayer games: room codes, the nickname you choose in-session,
              and game state. Stored in Supabase and automatically deleted when the session ends or
              after 24 hours of inactivity.
            </p>

            <SubHeading>Age Verification Result</SubHeading>
            <p>
              Whether you confirmed you are 18 or older when accessing the &ldquo;Mature / Night
              Mode&rdquo; category. Stored in <code className="rounded bg-white/10 px-1">localStorage</code>{" "}
              on your device only — never sent to our servers.
            </p>

            <SubHeading>Analytics Data (Google Analytics 4)</SubHeading>
            <p>
              When you consent via our cookie banner, Google Analytics 4 (GA4) collects anonymised
              usage data: pages visited, session duration, events (e.g. game started, plan purchased),
              approximate country, browser type, and device type. Your IP address is anonymised by
              Google before storage. We use GA4 via Google Tag Manager (GTM).
            </p>

            <SubHeading>What We Do Not Collect</SubHeading>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-400">
              <li>We do not collect your name, email address, or phone number.</li>
              <li>We do not collect precise GPS location data.</li>
              <li>We do not store payment card details.</li>
              <li>We do not sell your data to any third party, ever.</li>
              <li>There are no user accounts — you do not register or log in.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <SectionHeading id="legal-basis">3. Why We Collect It (Legal Basis)</SectionHeading>
            <p className="mb-4">
              Under GDPR Article 6, we rely on the following legal bases for processing personal data:
            </p>
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
                    ["Retaining purchase & entitlement records", "Legal obligation (EU accounting law)", "Art. 6(1)(c)"],
                    ["Running multiplayer sessions (temp. device ID)", "Legitimate interests", "Art. 6(1)(f)"],
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
            <p className="mt-4 text-gray-500">
              Where we rely on legitimate interests (Art. 6(1)(f)), we have assessed that our
              interests do not override your fundamental rights and freedoms, in particular because
              the data is minimal, temporary, and necessary only to connect players in real time.
            </p>
          </section>

          {/* 4 */}
          <section>
            <SectionHeading id="cookies">4. Cookies & Tracking Technologies</SectionHeading>
            <p className="mb-4">
              See our full{" "}
              <Link href="/cookies" className="text-[#22c55e] hover:underline">
                Cookie Policy
              </Link>{" "}
              for a detailed breakdown. In summary:
            </p>

            <div className="mb-4 rounded-lg border border-white/10 p-4">
              <p className="mb-2 font-semibold text-white">
                Strictly Necessary{" "}
                <Pill color="green">Always on</Pill>
              </p>
              <p>
                <code className="rounded bg-white/10 px-1">device_id</code>,{" "}
                <code className="rounded bg-white/10 px-1">game_preferences</code>,{" "}
                <code className="rounded bg-white/10 px-1">premium_status</code>,{" "}
                <code className="rounded bg-white/10 px-1">cookie_consent</code> — stored in
                localStorage. Required for core game functionality. Cannot be disabled.
              </p>
            </div>

            <div className="mb-4 rounded-lg border border-white/10 p-4">
              <p className="mb-2 font-semibold text-white">
                Analytics
                <Pill color="zinc">Consent required</Pill>
              </p>
              <p>
                <code className="rounded bg-white/10 px-1">_ga</code> (2 years),{" "}
                <code className="rounded bg-white/10 px-1">_ga_XXXXX</code> (2 years) set by Google
                Analytics 4 via GTM. Only set if you consent via our cookie banner.
              </p>
            </div>

            <div className="mb-4 rounded-lg border border-white/10 p-4">
              <p className="mb-2 font-semibold text-white">
                Payment
                <Pill color="zinc">Stripe</Pill>
              </p>
              <p>
                <code className="rounded bg-white/10 px-1">__stripe_mid</code> (1 year) — set by
                Stripe during checkout for fraud prevention. Only active on the payment flow.
              </p>
            </div>

            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="mb-2 font-semibold text-amber-400">
                Advertising — Google AdSense
                <Pill color="amber">Not yet active</Pill>
              </p>
              <p>
                Google AdSense is integrated in the codebase but is <strong className="text-white">not
                currently active</strong> pending Google&rsquo;s publisher review. When enabled,
                personalised ad cookies will only be set if you give explicit consent. Non-personalised
                ads will be available without tracking cookies. This policy will be updated before
                AdSense is enabled.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section>
            <SectionHeading id="advertising">5. Advertising</SectionHeading>
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="font-semibold text-amber-400">
                ⚠ Google AdSense: Not Currently Active
              </p>
              <p className="mt-2">
                Guesshh plans to support itself on a free tier through non-intrusive advertisements
                served by Google AdSense. As of the date of this policy, AdSense is{" "}
                <strong className="text-white">not enabled</strong> and no advertising cookies are
                being set on your device.
              </p>
              <p className="mt-2">
                When AdSense becomes active, we will update this policy and notify users through an
                updated cookie banner. You will be able to choose between personalised ads (requires
                consent) and non-personalised ads (no tracking). Premium subscribers will not see ads
                regardless.
              </p>
            </div>
            <p className="mt-3 text-gray-500">
              Meta Pixel, TikTok Pixel, and Google Ads Remarketing are not installed and not currently
              planned. If this changes, this policy will be updated accordingly.
            </p>
          </section>

          {/* 6 */}
          <section>
            <SectionHeading id="third-parties">6. Third-Party Services</SectionHeading>
            <ul className="space-y-4">
              <li>
                <span className="font-medium text-white">Supabase</span> —{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Privacy Policy
                </a>
                . Our cloud database and real-time infrastructure, acting as a data processor on our
                behalf. We have a Data Processing Agreement (DPA) with Supabase. Data is processed in
                the EU where possible; US transfers are covered by Standard Contractual Clauses (SCCs).
              </li>
              <li>
                <span className="font-medium text-white">Stripe</span> —{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Privacy Policy
                </a>
                . Our payment processor. Stripe is an independent data controller for payment
                processing under the EU-US Data Privacy Framework. We share your Stripe customer ID
                with Stripe to manage your subscription; we never see or store card details.
              </li>
              <li>
                <span className="font-medium text-white">Google Analytics 4 & Tag Manager</span> —{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Google Privacy Policy
                </a>
                . Used (with your consent) to measure how the app is used. Google acts as a data
                processor under a signed DPA. IP anonymisation is enabled. Data may be transferred to
                the US under SCCs and the EU-US DPF.
              </li>
              <li>
                <span className="font-medium text-white">Google Search Console</span> — measures
                organic search performance for guesshh.com (impressions, clicks, rankings). No user
                PII is transmitted; this is aggregate data only.
              </li>
              <li>
                <span className="font-medium text-white">Google AdSense</span>{" "}
                <span className="text-amber-400">(not yet active)</span> —{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Google Privacy Policy
                </a>
                . Will be enabled in a future update. Consent will be sought before any advertising
                cookies are set.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <SectionHeading id="international-transfers">7. International Data Transfers</SectionHeading>
            <p className="mb-3">
              Guesshh is based in Greece (EU). We process data within the EU where possible. In some
              cases, data is transferred to the United States:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-white">Supabase:</span> US-based infrastructure.
                Transfers are safeguarded by Standard Contractual Clauses (SCCs) adopted under GDPR
                Article 46(2)(c).
              </li>
              <li>
                <span className="font-medium text-white">Stripe:</span> Operates under the EU-US Data
                Privacy Framework (DPF), certified with the US Department of Commerce.
              </li>
              <li>
                <span className="font-medium text-white">Google (GA4, GTM):</span> Transfers covered
                by SCCs and participation in the EU-US DPF.
              </li>
            </ul>
            <p className="mt-3">
              You can request a copy of the applicable safeguards by contacting us at{" "}
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
                ["Right of Access (Art. 15)", "Request a copy of the personal data we hold about you."],
                ["Right to Rectification (Art. 16)", "Ask us to correct inaccurate or incomplete data."],
                ["Right to Erasure (Art. 17)", "Request deletion of your data. Note: purchase and entitlement records must be retained for 7 years to comply with EU accounting law."],
                ["Right to Restriction (Art. 18)", "Ask us to limit how we process your data while a dispute is resolved."],
                ["Right to Data Portability (Art. 20)", "Receive your personal data in a structured, machine-readable format (e.g. JSON)."],
                ["Right to Object (Art. 21)", "Object to processing based on legitimate interests (e.g. multiplayer session data)."],
                ["Right to Withdraw Consent (Art. 7(3))", "Withdraw consent for analytics or advertising cookies at any time via our cookie banner. This does not affect the lawfulness of prior processing."],
                ["Right Not to be Subject to Automated Decisions (Art. 22)", "We do not use automated decision-making or profiling that produces legal or similarly significant effects on you."],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-0.5 text-gray-400">{desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              <span className="font-medium text-white">Deleting device data:</span> Clear{" "}
              <code className="rounded bg-white/10 px-1">localStorage</code> for play.guesshh.com in
              your browser settings. Note: this will remove premium access from your device.
            </p>
            <p className="mt-2">
              To exercise any right, email{" "}
              <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                support@guesshh.com
              </a>{" "}
              with the subject line &ldquo;GDPR Request.&rdquo; We will respond within 30 days.
            </p>
          </section>

          {/* 9 */}
          <section>
            <SectionHeading id="childrens-privacy">9. Children&rsquo;s Privacy</SectionHeading>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Guesshh is intended for users aged <strong className="text-white">13 and older</strong>.
                We do not knowingly collect personal data from children under 13.
              </li>
              <li>
                In EU member states with a higher digital consent age (e.g. 16 in some states), parental
                consent may be required for consent-based processing. We recommend parental supervision
                for users under 16.
              </li>
              <li>
                The &ldquo;Mature / Night Mode&rdquo; category requires in-app confirmation that the
                user is <strong className="text-white">18 or older</strong>. The age verification
                result is stored only on the user&rsquo;s device and is not transmitted to our servers.
              </li>
              <li>
                If you believe a child under 13 has used Guesshh, please contact us at{" "}
                <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                  support@guesshh.com
                </a>{" "}
                and we will take appropriate remedial action.
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
                    ["Purchase & entitlement records", "Supabase", "7 years (EU accounting obligation)"],
                    ["Device ID (Supabase)", "Supabase", "Up to 7 years (with entitlements), or deleted on request"],
                    ["Device ID & preferences", "Your device (localStorage)", "Until you clear localStorage"],
                    ["Age verification result", "Your device (localStorage)", "Until you clear localStorage"],
                    ["GA4 analytics data", "Google servers", "14 months (default GA4 retention)"],
                    ["Stripe customer ID & records", "Stripe", "Per Stripe's own retention policy"],
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
            <p>
              For any privacy-related questions, data requests, or concerns, contact us at:
            </p>
            <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-4">
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
            <p className="mt-3">We aim to respond to all privacy requests within 30 days.</p>
          </section>

          {/* 12 */}
          <section>
            <SectionHeading id="supervisory">12. Supervisory Authority</SectionHeading>
            <p className="mb-3">
              If you are based in Greece, you have the right to lodge a complaint with the Hellenic
              Data Protection Authority (HDPA):
            </p>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="font-medium text-white">
                Hellenic Data Protection Authority (HDPA / ΑΠΔΠΧ)
              </p>
              <p>Kifissias 1–3, 115 23 Athens, Greece</p>
              <p>
                Website:{" "}
                <a
                  href="https://www.dpa.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  dpa.gr
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:contact@dpa.gr" className="text-[#22c55e] hover:underline">
                  contact@dpa.gr
                </a>
              </p>
            </div>
            <p className="mt-3">
              If you are in another EU member state, you may also contact your local supervisory
              authority. A full list is available at{" "}
              <a
                href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                edpb.europa.eu
              </a>
              .
            </p>
            <p className="mt-2">
              EU users may also use the EU Online Dispute Resolution platform:{" "}
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
              We may update this Privacy Policy from time to time to reflect changes in our services,
              legal requirements, or data practices. We will update the &ldquo;Last updated&rdquo;
              date at the top of this page. For significant changes (such as enabling Google AdSense),
              we will notify users through an updated cookie consent banner. Continued use of Guesshh
              after changes constitutes acceptance of the revised policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
