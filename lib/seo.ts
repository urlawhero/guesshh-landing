export const SITE_URL = "https://guesshh.com"

export const LOCALE_PAGES = {
  en: "/seo/en/games-to-play-with-friends",
  el: "/seo/el/paixnidia-me-filous",
  fr: "/seo/fr/jeux-entre-amis",
  it: "/seo/it/giochi-da-fare-in-gruppo",
  es: "/seo/es/juegos-para-jugar-con-amigos",
  de: "/seo/de/partyspiele-fuer-gruppen",
} as const

/** Self-referencing canonical plus the reciprocal hreflang cluster for the "games with friends" pages. */
export function localeAlternates(canonical: string) {
  return {
    canonical,
    languages: { ...LOCALE_PAGES, "x-default": LOCALE_PAGES.en },
  }
}

export const GUIDE_LINKS = [
  { label: "Games to Play With Friends", href: "/seo/en/games-to-play-with-friends" },
  { label: "Spyfall Alternative", href: "/seo/en/spyfall-alternative" },
  { label: "Online Social Deduction Game", href: "/online-social-deduction-game" },
  { label: "Games Like Spyfall", href: "/games-like-spyfall" },
  { label: "Impostor Game Online", href: "/impostor-game-online" },
  { label: "IO Games With Friends", href: "/io-games-to-play-with-friends" },
  { label: "How to Play", href: "/how-to-play" },
]
