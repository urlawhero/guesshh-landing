import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#4ade80",
}

export const metadata: Metadata = {
  title: {
    default: "Guesshh \u2013 The Social Deduction Party Game",
    template: "%s | Guesshh",
  },
  description:
    "Play Guesshh free \u2014 the online multiplayer social deduction game. Find the spy, bluff your friends, and outsmart everyone. No account needed.",
  keywords: [
    "spy game",
    "social deduction game",
    "party game online",
    "multiplayer party game",
    "find the spy",
    "word guessing game",
    "free online game",
    "guesshh",
    "play with friends online",
    "spyfall alternative",
  ],
  metadataBase: new URL("https://guesshh.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Guesshh",
    title: "Guesshh \u2013 Can You Find the Spy?",
    description:
      "The free multiplayer social deduction party game. No account needed. Play with up to 25 friends instantly.",
    url: "https://guesshh.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guesshh \u2013 Social Deduction Party Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@guesshh",
    creator: "@guesshh",
    title: "Guesshh \u2013 Can You Find the Spy?",
    description:
      "Free multiplayer social deduction game. Play with friends instantly \u2014 no account, no download.",
    images: [
      {
        url: "/og-image.png",
        alt: "Guesshh game screenshot",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Guesshh",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://play.guesshh.com" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4577534437757816"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
