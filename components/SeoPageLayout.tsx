import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Smartphone, Users, Zap } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { SITE_URL } from "@/lib/seo"

export interface SeoFaq {
  q: string
  a: string
}

export interface SeoRelatedLink {
  label: string
  href: string
}

interface SeoPageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  lang?: string               // <-- Added
  playButtonText?: string     // <-- Added
  backButtonText?: string     // <-- Added
  path?: string               // route, used for structured data
  updated?: string            // ISO date of the last content update
  faqs?: SeoFaq[]             // rendered visibly and as FAQPage JSON-LD
  related?: SeoRelatedLink[]  // internal links shown under the article
}

export default function SeoPageLayout({ 
  title, 
  subtitle, 
  children,
  lang,
  playButtonText = "Play Free Now", // Default fallback
  backButtonText = "Back to Home",  // Default fallback
  path,
  updated = "2026-11-02",
  faqs,
  related,
}: SeoPageLayoutProps) {
  
  // Dynamically generate the URL based on the lang prop
  const playUrl = lang ? `https://play.guesshh.com/?lang=${lang}` : "https://play.guesshh.com"

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-primary/30">
      {path && (
        <>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: title,
              description: subtitle,
              url: `${SITE_URL}${path}`,
              inLanguage: lang ?? "en",
              dateModified: updated,
              isPartOf: { "@type": "WebSite", name: "Guesshh", url: SITE_URL },
              about: { "@type": "WebApplication", name: "Guesshh", url: "https://play.guesshh.com" },
            }}
          />
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Guesshh", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: title, item: `${SITE_URL}${path}` },
              ],
            }}
          />
          {faqs && faqs.length > 0 && (
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }}
            />
          )}
        </>
      )}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container relative mx-auto px-6 text-center">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {backButtonText}
          </Link>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
              {subtitle}
            </p>
          )}
          <Link
            href={playUrl}
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-[#050816] transition-transform hover:scale-105 active:scale-95"
          >
            {playButtonText}
          </Link>
        </div>
      </section>

      {/* Why Guesshh Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
              <Zap className="mb-4 h-10 w-10 text-primary" />
              {/* You might want to pass these as props later if you translate the whole UI! */}
              <h3 className="mb-2 text-xl font-bold text-white">No App Download</h3>
              <p className="text-slate-400">Play instantly in your browser. No downloads, no accounts, just pure fun.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
              <Smartphone className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-white">Works on All Devices</h3>
              <p className="text-slate-400">Whether on phone, tablet, or PC, Guesshh delivers a seamless experience.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-colors hover:bg-white/10">
              <Users className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-white">Up to 25 Players</h3>
              <p className="text-slate-400">Perfect for small groups or massive parties. The more, the merrier!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="mx-auto max-w-3xl px-6 py-16 prose prose-invert prose-slate prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-a:text-primary hover:prose-a:underline">
        {children}
        {faqs && faqs.length > 0 && (
          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading">Frequently Asked Questions</h2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </section>
        )}
        {related && related.length > 0 && (
          <nav aria-label="Related guides">
            <h2>More Guides</h2>
            <ul>
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>{r.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <nav
            aria-label="Guesshh blog"
            className="mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm"
          >
            <Link href="/blog" className="text-slate-300 transition-colors hover:text-white">
              Blog
            </Link>
            <Link
              href="/blog/how-to-host-game-night"
              className="text-slate-300 transition-colors hover:text-white"
            >
              How to Host a Game Night
            </Link>
            <Link
              href="/blog/art-of-the-bluff"
              className="text-slate-300 transition-colors hover:text-white"
            >
              The Art of the Bluff
            </Link>
          </nav>
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Guesshh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}


