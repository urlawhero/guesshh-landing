"use client"

import { useEffect } from "react"

const UTM_KEY = "gh_utm"
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
const PLAY_HOST = "play.guesshh.com"

function readStored(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(UTM_KEY) || "{}")
  } catch {
    return {}
  }
}

/**
 * Remembers utm_* from the landing URL and appends them to every link that
 * leaves for play.guesshh.com, so the game can attribute the visit.
 * Stores only campaign tags, no personal data, and no analytics cookie.
 */
export function UtmLinkTagger() {
  useEffect(() => {
    try {
      const query = new URLSearchParams(window.location.search)
      const found: Record<string, string> = {}
      for (const key of UTM_PARAMS) {
        const value = query.get(key)
        if (value) found[key] = value.slice(0, 100)
      }
      if (found.utm_source) localStorage.setItem(UTM_KEY, JSON.stringify(found))
    } catch {
      // storage unavailable: links stay untagged
    }

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a") as HTMLAnchorElement | null
      if (!anchor?.href) return
      let url: URL
      try {
        url = new URL(anchor.href)
      } catch {
        return
      }
      if (url.hostname !== PLAY_HOST) return
      const stored = readStored()
      for (const [key, value] of Object.entries(stored)) {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value)
      }
      anchor.href = url.toString()
    }

    document.addEventListener("click", onClick, true)
    document.addEventListener("auxclick", onClick, true)
    return () => {
      document.removeEventListener("click", onClick, true)
      document.removeEventListener("auxclick", onClick, true)
    }
  }, [])

  return null
}
