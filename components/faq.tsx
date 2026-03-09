"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Guesshh free to play?",
    answer:
      "Yes \u2014 100% free. No account needed, no subscription, no hidden costs. Just open the link and play.",
  },
  {
    question: "How many players can join a Guesshh game?",
    answer:
      "A minimum of 3 players is needed. Up to 25 players can join a single room.",
  },
  {
    question: "Do I need to download an app to play Guesshh?",
    answer:
      "No download required. Play directly in any browser. You can optionally install it as a PWA for a native app experience.",
  },
  {
    question: "Can we play Guesshh remotely with friends?",
    answer:
      "Yes. Enable the Description Phase in settings so everyone types their clues, then discuss over a video call.",
  },
  {
    question: "How does the spy win in Guesshh?",
    answer:
      "If the innocents vote out the wrong person, or if the spy correctly guesses the secret word after being caught, the spy wins.",
  },
  {
    question: "Does Guesshh have any subscription plans or packages?",
    answer:
      "Yes! Guesshh has a generous Free tier that lets anyone jump in and play with no account needed. We also offer a Premium plan that unlocks access to over 1,000 words across a wide range of categories \u2014 perfect for groups who play regularly and want more variety.",
  },
  {
    question: "Will the word library be updated over time?",
    answer:
      "Absolutely. We\u2019re continuously growing the word library with new categories and themes. Premium members will always have access to the latest additions as soon as they\u2019re released.",
  },
  {
    question: "How do I install the Guesshh app on my phone?",
    answer:
      "Head to the \u201CPlay Your Way\u201D section on this page and follow the steps for your device. Guesshh is a Progressive Web App (PWA) \u2014 no App Store needed. Full installation instructions are listed there for both iPhone and Android.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Got Questions?
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
