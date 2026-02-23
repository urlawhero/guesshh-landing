"use client"

import Image from "next/image"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screens = [
  {
    src: "/screenshots/home.jpg",
    alt: "Guesshh home screen with New Game, Create, and Join options",
    label: "Home",
  },
  {
    src: "/screenshots/lobby.jpg",
    alt: "Game lobby showing room code, QR sharing, player list, and game settings",
    label: "Lobby",
  },
  {
    src: "/screenshots/categories.jpg",
    alt: "Category selection screen with Food, Movies, Places, Animals, and more",
    label: "Categories",
  },
  {
    src: "/screenshots/setup.jpg",
    alt: "Player setup screen with quick-add, spy count, and difficulty options",
    label: "Setup",
  },
  {
    src: "/screenshots/cards.jpg",
    alt: "Card distribution phase showing pass-phone mechanic",
    label: "Cards",
  },
  {
    src: "/screenshots/spy.jpg",
    alt: "Spy reveal card showing You Are The Spy message",
    label: "Spy Reveal",
  },
  {
    src: "/screenshots/vote.jpg",
    alt: "Voting phase with live vote counts and submitted votes",
    label: "Voting",
  },
  {
    src: "/screenshots/results.jpg",
    alt: "Results screen showing Citizens Win, the secret word, and eliminated spy",
    label: "Results",
  },
]

export function GamePreview() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    return () => el.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = 320
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section id="preview" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            See It in Action
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            A Peek Inside the Game
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            From lobby to reveal, every round is packed with tension, bluffs, and big laughs.
          </p>
        </div>

        {/* Desktop: custom scrolling row with arrow buttons */}
        <div className="relative hidden md:block">
          {/* Left fade + arrow */}
          {canScrollLeft && (
            <>
              <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
              <button
                onClick={() => scroll("left")}
                className="absolute top-1/2 left-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-secondary"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Right fade + arrow */}
          {canScrollRight && (
            <>
              <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
              <button
                onClick={() => scroll("right")}
                className="absolute top-1/2 right-2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card/90 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-secondary"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-none"
          >
            {screens.map((screen) => (
              <div key={screen.label} className="flex-none">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={280}
                    height={560}
                    className="h-[480px] w-auto object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single view with tabs */}
        <div className="md:hidden">
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={screens[activeIdx].src}
                alt={screens[activeIdx].alt}
                width={300}
                height={600}
                className="h-[500px] w-auto object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm font-medium text-foreground">
            {screens[activeIdx].label}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {screens.map((screen, i) => (
              <button
                key={screen.label}
                onClick={() => setActiveIdx(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  i === activeIdx
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
