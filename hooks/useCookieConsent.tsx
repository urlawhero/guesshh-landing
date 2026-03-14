"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react"

const CONSENT_KEY = "guesshh_landing_consent"

interface ConsentData {
  consent_given: boolean
  analytics: boolean
  consent_date: string
}

interface CookieConsentContextType {
  consentGiven: boolean
  analytics: boolean
  bannerVisible: boolean
  preferencesOpen: boolean
  acceptAll: () => void
  savePreferences: (analyticsEnabled: boolean) => void
  openPreferences: () => void
  closePreferences: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

function fireGtagConsent(analyticsEnabled: boolean) {
  if (
    typeof window !== "undefined" &&
    typeof (window as Window & { gtag?: Function }).gtag !== "undefined"
  ) {
    ;(window as Window & { gtag?: Function }).gtag?.("consent", "update", {
      analytics_storage: analyticsEnabled ? "granted" : "denied",
    })
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(false)
  const [preferencesOpen, setPreferencesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      try {
        const data: ConsentData = JSON.parse(stored)
        setConsentGiven(data.consent_given)
        setAnalytics(data.analytics)
        fireGtagConsent(data.analytics)
      } catch {
        // Corrupted data — treat as no consent
        localStorage.removeItem(CONSENT_KEY)
        setTimeout(() => setBannerVisible(true), 900)
      }
    } else {
      // Delay banner so it does NOT affect LCP score
      setTimeout(() => setBannerVisible(true), 900)
    }
  }, [])

  const saveConsent = useCallback((analyticsEnabled: boolean) => {
    const data: ConsentData = {
      consent_given: true,
      analytics: analyticsEnabled,
      consent_date: new Date().toISOString(),
    }
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
    setConsentGiven(true)
    setAnalytics(analyticsEnabled)
    setBannerVisible(false)
    setPreferencesOpen(false)
    fireGtagConsent(analyticsEnabled)
  }, [])

  const acceptAll = useCallback(() => saveConsent(true), [saveConsent])
  const savePreferences = useCallback(
    (analyticsEnabled: boolean) => saveConsent(analyticsEnabled),
    [saveConsent]
  )
  const openPreferences = useCallback(() => setPreferencesOpen(true), [])
  const closePreferences = useCallback(() => setPreferencesOpen(false), [])

  // Do not render context until mounted to prevent SSR/hydration mismatch
  if (!mounted) return <>{children}</>

  return (
    <CookieConsentContext.Provider
      value={{
        consentGiven,
        analytics,
        bannerVisible,
        preferencesOpen,
        acceptAll,
        savePreferences,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error("useCookieConsent must be used inside CookieConsentProvider")
  return ctx
}
