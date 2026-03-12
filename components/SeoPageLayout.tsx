import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Smartphone, Users, Zap } from "lucide-react"

interface SeoPageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  lang?: string               // <-- Added
  playButtonText?: string     // <-- Added
  backButtonText?: string     // <-- Added
}

export default function SeoPageLayout({ 
  title, 
  subtitle, 
  children,
  lang,
  playButtonText = "Play Free Now", // Default fallback
  backButtonText = "Back to Home"   // Default fallback
}: SeoPageLayoutProps) {
  
  // Dynamically generate the URL based on the lang prop
  const playUrl = lang ? `https://play.guesshh.com/home/?lang=${lang}` : "https://play.guesshh.com"

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-primary/30">
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
      </main>

      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Guesshh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

