import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { GamePreview } from "@/components/game-preview"
import { Features } from "@/components/features"
import { PlayYourWay } from "@/components/play-your-way"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Guesshh",
  url: "https://play.guesshh.com",
  applicationCategory: "GameApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript. Works in any modern browser.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online multiplayer social deduction party game. Find the spy or bluff your way to victory with up to 25 players.",
  screenshot: "https://guesshh.com/og-image.png",
  featureList: [
    "No account required",
    "Up to 25 players",
    "QR code room sharing",
    "Multiple game modes",
    "Progressive Web App",
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Guesshh free to play?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes \u2014 100% free. No account needed, no hidden costs. Just open the link and play. Optional upgrades are available for players who want more: a 3-day pass, a monthly or yearly subscription, or a one-time lifetime purchase. These unlock all premium categories and remove ads, but are never required to enjoy the game.",
      },
    },
    {
      "@type": "Question",
      name: "How many players can join a Guesshh game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimum of 3 players is needed. Up to 25 players can join a single room.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to download an app to play Guesshh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No download required. Play directly in any browser. You can optionally install it as a PWA for a native app experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can we play Guesshh remotely with friends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enable the Description Phase in settings so everyone types their clues, then discuss over a video call.",
      },
    },
    {
      "@type": "Question",
      name: "How does the spy win in Guesshh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the innocents vote out the wrong person, or if the spy correctly guesses the secret word after being caught, the spy wins.",
      },
    },
    {
      "@type": "Question",
      name: "Does Guesshh have any subscription plans or packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Guesshh has a generous Free tier that lets anyone jump in and play with no account needed. We also offer a Premium plan that unlocks access to over 1,000 words across a wide range of categories \u2014 perfect for groups who play regularly and want more variety.",
      },
    },
    {
      "@type": "Question",
      name: "Will the word library be updated over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We\u2019re continuously growing the word library with new categories and themes. Premium members will always have access to the latest additions as soon as they\u2019re released.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install the Guesshh app on my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Head to the \u201CPlay Your Way\u201D section on this page and follow the steps for your device. Guesshh is a Progressive Web App (PWA) \u2014 no App Store needed. Full installation instructions are listed there for both iPhone and Android.",
      },
    },
    {
      "@type": "Question",
      "name": "Can players join from different devices or browsers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Everyone in the same room can join from any combination of browser, PWA, or native app — on any device. One player on Safari, another on Chrome, another on the installed app — it all works seamlessly. You just need the room code."
      },
    },

  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <GamePreview />
        <Features />
        <PlayYourWay />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
