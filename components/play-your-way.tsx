"use client"

import { useState } from "react"
import { Apple, Smartphone, Monitor, ChevronDown } from "lucide-react"

export function PlayYourWay() {
  const [iosOpen, setIosOpen] = useState(false)
  const [androidOpen, setAndroidOpen] = useState(false)

  return (
    <section id="play-your-way" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Play Your Way
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Add to Your Home Screen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Install Guesshh as a Progressive Web App for a native experience — no App Store visit needed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Install Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Install on Mobile
            </h3>

            {/* iOS */}
            <div className="mb-4">
              <button
                onClick={() => setIosOpen(!iosOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-secondary/50 px-5 py-4 text-left transition-colors hover:bg-secondary"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <Apple className="h-5 w-5" />
                  Install on iPhone / iPad
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${iosOpen ? "rotate-180" : ""}`}
                />
              </button>
              {iosOpen && (
                <ol className="mt-3 space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-400">
                  <li className="list-decimal">
                    Open this page in <span className="text-foreground font-medium">Safari</span> (not Chrome)
                  </li>
                  <li className="list-decimal">
                    Tap the <span className="text-foreground font-medium">Share icon</span> (box with arrow) at the bottom of the screen
                  </li>
                  <li className="list-decimal">
                    Scroll down and tap{" "}
                    <span className="text-foreground font-medium">{"\""}Add to Home Screen{"\""}
                    </span>
                  </li>
                  <li className="list-decimal">
                    Tap <span className="text-foreground font-medium">{"\""}Add{"\""}
                    </span>{" "}in the top-right corner
                  </li>
                  <li className="list-decimal">
                    Guesshh will appear on your home screen like a native app
                  </li>
                </ol>
              )}
            </div>

            {/* Android */}
            <div>
              <button
                onClick={() => setAndroidOpen(!androidOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-secondary/50 px-5 py-4 text-left transition-colors hover:bg-secondary"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <Smartphone className="h-5 w-5" />
                  Install on Android
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform ${androidOpen ? "rotate-180" : ""}`}
                />
              </button>
              {androidOpen && (
                <ol className="mt-3 space-y-1.5 pl-5 text-sm leading-relaxed text-zinc-400">
                  <li className="list-decimal">
                    Open this page in <span className="text-foreground font-medium">Chrome</span>
                  </li>
                  <li className="list-decimal">
                    Tap the <span className="text-foreground font-medium">three-dot menu</span> in the top-right corner
                  </li>
                  <li className="list-decimal">
                    Tap{" "}
                    <span className="text-foreground font-medium">{"\""}Add to Home Screen{"\""}
                    </span>
                  </li>
                  <li className="list-decimal">
                    Tap{" "}
                    <span className="text-foreground font-medium">{"\""}Add{"\""}
                    </span>{" "}to confirm
                  </li>
                  <li className="list-decimal">
                    Guesshh is now installed on your home screen
                  </li>
                </ol>
              )}
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Free &middot; No account &middot; Works offline for lobby
            </p>
          </div>

          {/* Desktop / Browser Card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Monitor className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground">
              Play in Any Browser
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              No installation needed. Just open the link on any device and start playing. Guesshh works
              on Chrome, Safari, Firefox, Edge — any modern browser.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  1
                </span>
                <p className="text-sm text-zinc-400 mt-0.5">
                Visit{" "}
                <a 
                  href="https://play.guesshh.com" 
                  target="_blank"
                  className="font-bold text-[#4ade80] hover:underline"
                >
                  play.guesshh.com
                </a>{" "}
                on your device
              </p>

              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  2
                </span>
                <p className="text-sm text-zinc-400">
                  Create a room or enter a room code to join
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  3
                </span>
                <p className="text-sm text-zinc-400">
                  Share the link or QR code with your friends and start playing
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs text-zinc-500">
              Works on phones, tablets, laptops, and desktops
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
