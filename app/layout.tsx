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
    default: "Guesshh | Find the Spy & Impostor Party Game",
    template: "%s | Guesshh",
  },
  description:
    "Play Guesshh, the ultimate free online social deduction party game. Find the spy or impostor among your friends in this browser game for 3-25 players. No downloads, instant fun.",
  keywords: [
    "social deduction game",
    "impostor game",
    "find the imposter",
    "hidden role game",
    "multiplayer party game",
    "online browser game",
    "spy game",
    "play with friends online",
    "free party game",
    "no download multiplayer game",
    "Guesshh",
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
    title: "Guesshh | Find the Impostor in this Free Party Game",
    description:
      "Gather your friends, ask questions, and find the hidden spy or impostor. Free browser-based social deduction game for 3-25 players. No account required.",
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
    title: "Guesshh | Free Multiplayer Party Game",
    description:
      "Can you find the impostor before they escape? Instant browser play for 3-25 players.",
    images: ["/og-image.png"],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MFDCQ8G654"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MFDCQ8G654');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
