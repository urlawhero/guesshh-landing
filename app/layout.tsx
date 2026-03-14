import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { CookieConsentProvider } from "@/hooks/useCookieConsent"
import { CookieBanner } from "@/components/CookieBanner"

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
        alt: "Guesshh – Social Deduction Party Game",
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
        {/*
          ─── STEP 1: Consent Mode v2 Default ───────────────────────────
          MUST be beforeInteractive and MUST be the first script that runs.
          This blocks GA4 and GTM from collecting ANY data until the user
          consents. This is what makes the site legally GDPR compliant.
          ──────────────────────────────────────────────────────────────── 
        */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        {/*
          ─── STEP 2: Google Tag Manager ────────────────────────────────
          GTM now loads AFTER consent defaults are set above.
          GTM will respect the denied state automatically.
          ──────────────────────────────────────────────────────────────── 
        */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M26QRVX2');`}
        </Script>

        <link rel="preconnect" href="https://play.guesshh.com" />

        {/* AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4577534437757816"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/*
          ─── STEP 3: GA4 Direct Script ─────────────────────────────────
          We load the gtag.js library but DO NOT call gtag('config') here.
          The config call is intentionally removed because:
          - GTM already handles GA4 firing via your GTM container.
          - Calling config here immediately would send a pageview hit
            BEFORE the user consents, which is a GDPR violation.
          - Our useCookieConsent hook fires gtag('consent', 'update')
            with 'granted' only after the user clicks Accept.
          ──────────────────────────────────────────────────────────────── 
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MFDCQ8G654"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // Note: gtag('config') is intentionally omitted here.
            // GA4 is managed through GTM with Consent Mode v2.
            // Data collection only begins after user grants consent
            // via the CookieBanner component.
          `}
        </Script>
      </head>

      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M26QRVX2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/*
          ─── STEP 4: Wrap children with consent context ─────────────────
          CookieConsentProvider makes consent state available site-wide.
          CookieBanner renders the banner and modal, mounted at root level
          so it is always accessible from footer, /cookies, and /privacy.
          ──────────────────────────────────────────────────────────────── 
        */}
        <CookieConsentProvider>
          {children}
          <CookieBanner />
        </CookieConsentProvider>

        <Analytics />
      </body>
    </html>
  )
}
