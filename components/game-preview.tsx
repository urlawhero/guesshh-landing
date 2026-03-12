"use client"

import Image from "next/image"
import { useRef, useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const screens = [
  { src: "/screenshots/home.jpg", label: "Home" },
  { src: "/screenshots/lobby.jpg", label: "Lobby" },
  { src: "/screenshots/categories.jpg", label: "Categories" },
  { src: "/screenshots/setup.jpg", label: "Setup" },
  { src: "/screenshots/cards.jpg", label: "Cards" },
  { src: "/screenshots/spy.jpg", label: "Spy Reveal" },
  { src: "/screenshots/vote.jpg", label: "Voting" },
  { src: "/screenshots/results.jpg", label: "Results" },
]

export function GamePreview() {
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
    // Ensure initial state is correct after render
    setTimeout(checkScroll, 100) 
    return () => el.removeEventListener("scroll", checkScroll)
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8 // Scroll 80% of container width
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" })
  }

  return (
    <section id="preview" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#4ade80]">
            See It in Action
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            A Peek Inside the Game
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-slate-400">
            From lobby to reveal, every round is packed with tension, bluffs, and big laughs.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Left fade + arrow */}
          {canScrollLeft && (
            <>
              <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-[#050816] to-transparent" />
              <button
                onClick={() => scroll("left")}
                className="hidden md:flex absolute top-1/2 left-2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#050816]/80 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Desktop Right fade + arrow */}
          {canScrollRight && (
            <>
              <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-[#050816] to-transparent" />
              <button
                onClick={() => scroll("right")}
                className="hidden md:flex absolute top-1/2 right-2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#050816]/80 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/10"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* The Scroll Container (Works for Mobile swipe and Desktop arrows) */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory px-4 md:px-12 pb-8"
          >
            {screens.map((screen) => (
              <div key={screen.label} className="flex-none snap-center">
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-slate-900 bg-slate-950 shadow-xl">
                  {/* Fake Notch */}
                  <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 rounded-b-lg w-24 mx-auto z-20"></div>
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    width={260}
                    height={520}
                    className="h-[420px] md:h-[520px] w-auto object-cover"
                  />
                </div>
                <p className="mt-4 text-center text-sm font-bold text-white tracking-wide">
                  {screen.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
