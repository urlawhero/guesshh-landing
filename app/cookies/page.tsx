import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie Policy - Guesshh",
  description:
    "Full cookie policy for Guesshh. What cookies we use, why, how long they last, and how to manage them.",
}

const SectionHeading = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2
    id={id}
    className="mb-3 scroll-mt-24 text-lg font-bold text-[#22c55e]"
  >
    {children}
  </h2>
)

const Pill = ({
  children,
  color = "green",
}: {
  children: React.ReactNode
  color?: "green" | "amber" | "zinc" | "blue"
}) => {
  const styles: Record<string, string> = {
    green: "bg-[#22c55e]/15 text-[#22c55e]",
    amber: "bg-amber-500/15 text-amber-400",
    zinc: "bg-zinc-700/60 text-zinc-300",
    blue: "bg-blue-500/15 text-blue-400",
  }
  return (
    <span
      className={`ml-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[color]}`}
    >
      {children}
    </span>
  )
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] px-6 py-20 text-gray-300">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Cookie Policy
        </h1>
        <p className="mb-1 text-sm text-gray-500">Last updated: March 2026</p>
        <p className="mb-10 text-sm leading-relaxed text-gray-500">
          We keep this simple and honest. Below is every cookie and localStorage item Guesshh uses,
          why we use it, and how you can control it.
        </p>

        <div className="space-y-12 text-sm leading-relaxed">
          <p>
            Guesshh uses a small number of cookies and browser localStorage items to make the game
            work and (in future) keep the free version running through advertising. This policy
            explains exactly what we store, why, how long we keep it, and how you can manage or
            delete it.
          </p>

          {/* Full cookie table */}
          <section>
            <SectionHeading id="cookie-table">Full Cookie & Storage Reference</SectionHeading>
            <p className="mb-4">
              The table below lists every cookie and localStorage item currently in use or planned
              for Guesshh across both{" "}
              <a href="https://guesshh.com" className="text-[#22c55e] hover:underline">
                guesshh.com
              </a>{" "}
              and{" "}
              <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">
                play.guesshh.com
              </a>
              .
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-3 py-3 font-semibold text-white">Name</th>
                    <th className="px-3 py-3 font-semibold text-white">Category</th>
                    <th className="px-3 py-3 font-semibold text-white">Type</th>
                    <th className="px-3 py-3 font-semibold text-white">Purpose</th>
                    <th className="px-3 py-3 font-semibold text-white">Duration</th>
                    <th className="px-3 py-3 font-semibold text-white">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-gray-400">
                  {/* Strictly necessary */}
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">device_id</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">
                        Strictly Necessary
                      </span>
                    </td>
                    <td className="px-3 py-3">localStorage</td>
                    <td className="px-3 py-3">
                      Randomly generated UUID that identifies your device. Used to verify premium
                      subscription and connect you in multiplayer sessions. Not linked to any
                      personal identity.
                    </td>
                    <td className="px-3 py-3">Until localStorage cleared</td>
                    <td className="px-3 py-3">Guesshh</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">game_preferences</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">
                        Strictly Necessary
                      </span>
                    </td>
                    <td className="px-3 py-3">localStorage</td>
                    <td className="px-3 py-3">
                      Stores your chosen language, haptics preference, and similar game settings.
                      Never sent to our servers.
                    </td>
                    <td className="px-3 py-3">Until localStorage cleared</td>
                    <td className="px-3 py-3">Guesshh</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">premium_status</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">
                        Strictly Necessary
                      </span>
                    </td>
                    <td className="px-3 py-3">localStorage</td>
                    <td className="px-3 py-3">
                      Local cache of your subscription status to avoid an API call on every app
                      open. The authoritative check always happens server-side.
                    </td>
                    <td className="px-3 py-3">Until localStorage cleared</td>
                    <td className="px-3 py-3">Guesshh</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">cookie_consent</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">
                        Strictly Necessary
                      </span>
                    </td>
                    <td className="px-3 py-3">localStorage</td>
                    <td className="px-3 py-3">
                      Records whether you accepted or declined optional cookies so we don&rsquo;t ask
                      again.
                    </td>
                    <td className="px-3 py-3">12 months</td>
                    <td className="px-3 py-3">Guesshh</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">cookie_consent_ts</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-[#22c55e]/15 px-2 py-0.5 text-[10px] font-medium text-[#22c55e]">
                        Strictly Necessary
                      </span>
                    </td>
                    <td className="px-3 py-3">localStorage</td>
                    <td className="px-3 py-3">
                      Timestamp of when you last gave or updated your cookie consent, so we can
                      re-ask after 12 months.
                    </td>
                    <td className="px-3 py-3">12 months</td>
                    <td className="px-3 py-3">Guesshh</td>
                  </tr>
                  {/* Analytics */}
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">_ga</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-zinc-700/60 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                        Analytics
                      </span>
                    </td>
                    <td className="px-3 py-3">Cookie (first-party)</td>
                    <td className="px-3 py-3">
                      Google Analytics 4. Distinguishes unique users by assigning a randomly
                      generated number as a client identifier.
                    </td>
                    <td className="px-3 py-3">2 years</td>
                    <td className="px-3 py-3">Google</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">_ga_XXXXX</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-zinc-700/60 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                        Analytics
                      </span>
                    </td>
                    <td className="px-3 py-3">Cookie (first-party)</td>
                    <td className="px-3 py-3">
                      GA4 session and measurement ID cookie. Used to maintain session state and
                      record specific measurement events.
                    </td>
                    <td className="px-3 py-3">2 years</td>
                    <td className="px-3 py-3">Google</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">_gtm</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-zinc-700/60 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                        Analytics
                      </span>
                    </td>
                    <td className="px-3 py-3">Cookie (first-party)</td>
                    <td className="px-3 py-3">
                      Google Tag Manager session cookie. Manages the loading of tag scripts during
                      a browser session.
                    </td>
                    <td className="px-3 py-3">Session</td>
                    <td className="px-3 py-3">Google</td>
                  </tr>
                  {/* Payment */}
                  <tr>
                    <td className="px-3 py-3 font-mono text-white">__stripe_mid</td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-blue-500/15 px-2 py-0.5 text-[10px] font-medium text-blue-400">
                        Payment
                      </span>
                    </td>
                    <td className="px-3 py-3">Cookie (third-party)</td>
                    <td className="px-3 py-3">
                      Set by Stripe during checkout to prevent payment fraud. Only active on the
                      Stripe-hosted checkout flow.
                    </td>
                    <td className="px-3 py-3">1 year</td>
                    <td className="px-3 py-3">Stripe</td>
                  </tr>
                  {/* Advertising - not active */}
                  <tr className="opacity-60">
                    <td className="px-3 py-3 font-mono text-amber-400">
                      Google AdSense cookies
                    </td>
                    <td className="px-3 py-3">
                      <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                        Advertising
                      </span>
                    </td>
                    <td className="px-3 py-3">Cookie (third-party)</td>
                    <td className="px-3 py-3">
                      <span className="font-medium text-amber-400">Not yet active.</span> When
                      enabled, Google may set cookies for personalised ad targeting (consent
                      required) or for non-personalised ad frequency (no consent required).
                    </td>
                    <td className="px-3 py-3">Up to 13 months</td>
                    <td className="px-3 py-3">Google</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Category explanations */}
          <section>
            <SectionHeading id="categories">Cookie Categories Explained</SectionHeading>

            <div className="space-y-4">
              {/* Strictly necessary */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 flex items-center">
                  <h3 className="font-semibold text-white">Strictly Necessary</h3>
                  <Pill color="green">Always on - cannot be disabled</Pill>
                </div>
                <p>
                  These make Guesshh function. Without them, core features like premium subscription
                  verification, multiplayer connectivity, and your language preference would not work.
                  Because they are essential to the service you have requested, we do not require your
                  consent to set them (Recital 25 of the ePrivacy Directive).
                </p>
                <p className="mt-2">
                  All strictly necessary items are stored in your browser&rsquo;s{" "}
                  <code className="rounded bg-white/10 px-1">localStorage</code>, not as HTTP
                  cookies, meaning they are only accessible to Guesshh scripts - not sent with every
                  HTTP request.
                </p>
              </div>

              {/* Analytics */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 flex items-center">
                  <h3 className="font-semibold text-white">Analytics (Google Analytics 4 & GTM)</h3>
                  <Pill color="zinc">Consent required</Pill>
                </div>
                <p>
                  We use GA4 via Google Tag Manager to understand how players use Guesshh - which
                  screens they visit, how often games are started, and where drop-offs occur. This
                  helps us improve the game. All data is pseudonymous; IP addresses are anonymised
                  before storage. GA4 analytics cookies are only set if you accept via our cookie
                  consent banner.
                </p>
                <p className="mt-2">
                  You can opt out at any time at{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22c55e] hover:underline"
                  >
                    tools.google.com/dlpage/gaoptout
                  </a>{" "}
                  or by withdrawing consent via our cookie banner.
                </p>
              </div>

              {/* Payment */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="mb-2 flex items-center">
                  <h3 className="font-semibold text-white">Payment Processing (Stripe)</h3>
                  <Pill color="zinc">Stripe</Pill>
                </div>
                <p>
                  When you complete a purchase, Stripe sets a cookie (
                  <code className="rounded bg-white/10 px-1">__stripe_mid</code>) on their own domain
                  during the checkout process to detect and prevent fraudulent transactions. This
                  cookie is set and managed by Stripe, not by Guesshh, and is only active during the
                  payment flow. See{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22c55e] hover:underline"
                  >
                    Stripe&rsquo;s Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Advertising */}
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="mb-2 flex items-center">
                  <h3 className="font-semibold text-white">Advertising (Google AdSense)</h3>
                  <Pill color="amber">Not yet active</Pill>
                </div>
                <p>
                  The free tier of Guesshh will be supported by advertisements served by Google
                  AdSense. As of the date of this policy, AdSense is{" "}
                  <strong className="text-white">not enabled</strong> and no advertising cookies are
                  being set on your device.
                </p>
                <p className="mt-2">
                  When AdSense becomes active:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong className="text-white">Personalised ads</strong> - Google sets tracking
                    cookies to show relevant ads based on your interests. Requires your explicit
                    consent via our banner.
                  </li>
                  <li>
                    <strong className="text-white">Non-personalised ads</strong> - Context-based ads
                    with no tracking cookies. Available without consent.
                  </li>
                </ul>
                <p className="mt-2">
                  This policy will be updated before AdSense is enabled. You will see an updated
                  consent banner.
                </p>
                <p className="mt-2">
                  Premium subscribers will never see ads, regardless of cookie preferences.
                </p>
              </div>
            </div>
          </section>

          {/* How long */}
          <section>
            <SectionHeading id="duration">How Long Are Cookies Stored?</SectionHeading>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-white">Cookie consent preference:</span> Remembered
                for 12 months, then we ask again.
              </li>
              <li>
                <span className="font-medium text-white">
                  Device ID & preferences (localStorage):
                </span>{" "}
                Stored until you clear localStorage - no automatic expiry. Note: clearing your
                device_id removes premium access from this device.
              </li>
              <li>
                <span className="font-medium text-white">GA4 cookies:</span> 2 years from last
                activity.
              </li>
              <li>
                <span className="font-medium text-white">GTM session cookie:</span> Expires when you
                close your browser (session).
              </li>
              <li>
                <span className="font-medium text-white">Stripe (__stripe_mid):</span> 1 year, but
                only set during checkout.
              </li>
              <li>
                <span className="font-medium text-white text-amber-400/80">
                  Google AdSense (not yet active):
                </span>{" "}
                Typically up to 13 months. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Google&rsquo;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Managing */}
          <section>
            <SectionHeading id="managing">Managing Cookies in Your Browser</SectionHeading>
            <p className="mb-4">
              You can control and delete cookies at any time through your browser settings. Note that
              deleting strictly necessary localStorage items will affect game functionality.
            </p>

            <h3 className="mb-3 text-sm font-semibold text-white">Browser-specific instructions:</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-white">Chrome:</span> Settings → Privacy and
                security → Cookies and other site data → See all site data and permissions → Search
                for play.guesshh.com → Delete
              </li>
              <li>
                <span className="font-medium text-white">Firefox:</span> Settings → Privacy &
                Security → Cookies and Site Data → Manage Data → Search guesshh.com → Remove
              </li>
              <li>
                <span className="font-medium text-white">Safari:</span> Settings → Safari → Advanced
                → Website Data → Find guesshh.com → Delete
              </li>
              <li>
                <span className="font-medium text-white">Edge:</span> Settings → Cookies and site
                permissions → Manage and delete cookies and site data → See all cookies → Search
                guesshh.com → Delete
              </li>
              <li>
                <span className="font-medium text-white">Mobile Chrome (Android):</span> Chrome
                Settings → Privacy and Security → Clear browsing data → Cookies and site data
              </li>
              <li>
                <span className="font-medium text-white">Mobile Safari (iOS):</span> Settings →
                Safari → Clear History and Website Data (this clears all sites)
              </li>
            </ul>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">
              Deleting Guesshh localStorage specifically:
            </h3>
            <p className="mb-2">
              To remove only Guesshh&rsquo;s stored data without clearing other sites:
            </p>
            <ol className="list-decimal space-y-1 pl-5">
              <li>
                Open <a href="https://play.guesshh.com" className="text-[#22c55e] hover:underline">play.guesshh.com</a>{" "}
                in your browser.
              </li>
              <li>
                Open developer tools (press <code className="rounded bg-white/10 px-1">F12</code> or{" "}
                <code className="rounded bg-white/10 px-1">Cmd+Option+I</code> on Mac).
              </li>
              <li>
                Go to <strong className="text-white">Application</strong> (Chrome/Edge) or{" "}
                <strong className="text-white">Storage</strong> (Firefox) tab.
              </li>
              <li>
                Expand <strong className="text-white">Local Storage</strong> → click
                play.guesshh.com.
              </li>
              <li>
                Select and delete the entries:{" "}
                <code className="rounded bg-white/10 px-1">device_id</code>,{" "}
                <code className="rounded bg-white/10 px-1">game_preferences</code>,{" "}
                <code className="rounded bg-white/10 px-1">premium_status</code>,{" "}
                <code className="rounded bg-white/10 px-1">cookie_consent</code>,{" "}
                <code className="rounded bg-white/10 px-1">cookie_consent_ts</code>.
              </li>
            </ol>
            <p className="mt-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-amber-400">
              ⚠{" "}
              <strong>Warning:</strong> Deleting your{" "}
              <code className="rounded bg-white/10 px-1">device_id</code> will remove premium access
              from this device. Your subscription remains active in our system - contact{" "}
              <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                support@guesshh.com
              </a>{" "}
              if you need help restoring access.
            </p>

            <h3 className="mb-2 mt-6 text-sm font-semibold text-white">Google Analytics opt-out:</h3>
            <p>
              Install the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#22c55e] hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>{" "}
              to prevent GA4 from collecting data across all websites you visit, or simply decline
              analytics cookies via our banner.
            </p>
          </section>

          {/* GDPR */}
          <section>
            <SectionHeading id="your-rights">Your Rights (GDPR)</SectionHeading>
            <p className="mb-3">If you are in the EU, you have the right to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Withdraw your cookie consent at any time by updating preferences in our banner.</li>
              <li>Ask what data we hold about you (right of access).</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to processing based on legitimate interests.</li>
              <li>
                Lodge a complaint with the{" "}
                <a
                  href="https://www.dpa.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Hellenic Data Protection Authority (HDPA)
                </a>{" "}
                (for Greek users) or your local EU supervisory authority.
              </li>
            </ul>
            <p className="mt-4">
              Email us at{" "}
              <a href="mailto:support@guesshh.com" className="text-[#22c55e] hover:underline">
                support@guesshh.com
              </a>{" "}
              for any of the above. We respond within 30 days.
            </p>
          </section>

          {/* Change preferences */}
          <section>
            <SectionHeading id="change-preferences">Changing Your Cookie Preferences</SectionHeading>
            <p>
              You can update your analytics cookie consent at any time by clicking the
              &ldquo;Cookie preferences&rdquo; link in the app footer, which will re-open our consent
              banner. Alternatively, clear the{" "}
              <code className="rounded bg-white/10 px-1">cookie_consent</code> localStorage item as
              described above - the banner will reappear on your next visit.
            </p>
          </section>

          {/* Further reading */}
          <section>
            <SectionHeading id="further">Further Reading</SectionHeading>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <Link href="/privacy" className="text-[#22c55e] hover:underline">
                  Guesshh Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Stripe Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Google Analytics Opt-out Tool
                </a>
              </li>
              <li>
                <a
                  href="https://www.dpa.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22c55e] hover:underline"
                >
                  Hellenic Data Protection Authority (dpa.gr)
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
