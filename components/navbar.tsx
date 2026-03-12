"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Blog", href: "/blog" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Preview", href: "/#preview" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#faq" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      {/* 
        On mobile: relative layout where logo is absolute centered. 
        On md: standard flex justify-between. 
      */}
      <nav className="relative mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        
        {/* Empty left spacer for mobile to balance the absolute centered logo */}
        <div className="w-8 md:hidden"></div>

        {/* Logo Container */}
        <a 
          href="/" 
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center gap-2.5" 
          aria-label="Guesshh home"
        >
          <Image
            src="/guesshh-logo-nb.webp"
            alt="Guesshh logo"
            width={160}
            height={54}
            priority
            className="h-8 md:h-9 w-auto"
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Guess<span className="text-primary">hh</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Play Button */}
        <a
          href="https://play.guesshh.com"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-[#050816] transition-transform hover:scale-105 md:inline-block shadow-[0_0_15px_rgba(74,222,128,0.2)]"
        >
          Play Now
        </a>

        {/* Mobile Hamburger Menu */}
        <button
          className="relative z-10 flex h-8 w-8 items-center justify-end text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden shadow-2xl">
          <ul className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4 border-t border-white/5 pt-6">
              <a
                href="https://play.guesshh.com"
                className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-4 text-center text-base font-bold text-[#050816] transition-transform active:scale-95"
              >
                Play Now — It's Free
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
