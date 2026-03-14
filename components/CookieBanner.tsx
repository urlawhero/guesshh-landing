"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useCookieConsent } from "@/hooks/useCookieConsent"

export function CookieBanner() {
  const {
    bannerVisible,
    preferencesOpen,
    analytics,
    acceptAll,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent()

  const [analyticsToggle, setAnalyticsToggle] = useState(analytics)
  const bannerRef = useRef<HTMLDivElement>(null)

  // Keep modal toggle in sync with stored state when modal opens
  useEffect(() => {
    if (preferencesOpen) setAnalyticsToggle(analytics)
  }, [preferencesOpen, analytics])

  // Add/remove body bottom padding so banner never overlaps CTA buttons
  useEffect(() => {
    const el = bannerRef.current
    if (!bannerVisible || !el) {
      document.body.style.paddingBottom = "0px"
      return
    }

    const observer = new ResizeObserver(() => {
      const h = el.getBoundingClientRect().height
      document.body.style.paddingBottom = `${h}px`
    })
    observer.observe(el)

    return () => {
      observer.disconnect()
      document.body.style.paddingBottom = "0px"
    }
  }, [bannerVisible])

  return (
    <>
      {/* ─── Cookie Banner ─── */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            ref={bannerRef}
            key="cookie-banner"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#1e293b] shadow-[0_-8px_40px_rgba(0,0,0,0.5)]"
            role="region"
            aria-label="Cookie consent notice"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
                We use cookies to analyze site traffic and improve your experience.
                Read our{" "}
                <Link href="/privacy" className="text-[#22c55e] underline underline-offset-2 hover:text-[#4ade80]">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/cookies" className="text-[#22c55e] underline underline-offset-2 hover:text-[#4ade80]">
                  Cookie Policy
                </Link>
                .
              </p>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <button
                  onClick={openPreferences}
                  className="whitespace-nowrap rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="whitespace-nowrap rounded-full bg-[#22c55e] px-5 py-2 text-sm font-bold text-[#050816] shadow-[0_0_18px_rgba(34,197,94,0.3)] transition-transform hover:scale-105 active:scale-95"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Preferences Modal ─── */}
      <AnimatePresence>
        {preferencesOpen && (
          <motion.div
            key="cookie-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            onClick={(e) => { if (e.target === e.currentTarget) closePreferences() }}
          >
            <motion.div
              key="cookie-modal"
              initial={{ scale: 0.94, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1e293b] p-6 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-bold text-white">Cookie Preferences</h2>
                <button
                  onClick={closePreferences}
                  className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close cookie preferences"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Toggle: Strictly Necessary */}
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="mb-1 text-sm font-semibold text-white">
                    Strictly Necessary Cookies
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Required for the website to function. These cannot be disabled.
                  </p>
                </div>
                {/* Always-on toggle, non-interactive */}
                <div
                  className="flex h-6 w-11 shrink-0 cursor-not-allowed items-center justify-end rounded-full bg-[#22c55e] px-1 opacity-60"
                  aria-label="Always enabled"
                  title="Always enabled"
                >
                  <div className="h-4 w-4 rounded-full bg-white shadow" />
                </div>
              </div>

              {/* Toggle: Analytics */}
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-sm font-semibold text-white">
                    Analytics Cookies
                  </p>
                  <p className="text-xs leading-relaxed text-slate-400">
                    Help us understand how visitors use our site. We use Google Analytics 4.
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsToggle}
                  aria-label="Toggle analytics cookies"
                  onClick={() => setAnalyticsToggle((v) => !v)}
                  className={`flex h-6 w-11 shrink-0 items-center rounded-full px-1 transition-colors ${
                    analyticsToggle ? "justify-end bg-[#22c55e]" : "justify-start bg-white/20"
                  }`}
                >
                  <div className="h-4 w-4 rounded-full bg-white shadow transition-transform" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => savePreferences(analyticsToggle)}
                  className="flex-1 rounded-full border border-white/20 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 rounded-full bg-[#22c55e] py-2.5 text-sm font-bold text-[#050816] transition-transform hover:scale-105 active:scale-95"
                >
                  Accept All
                </button>
              </div>

              <p className="mt-5 text-center text-xs text-slate-500">
                Read our{" "}
                <Link
                  href="/privacy"
                  onClick={closePreferences}
                  className="text-[#22c55e] hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/cookies"
                  onClick={closePreferences}
                  className="text-[#22c55e] hover:underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
