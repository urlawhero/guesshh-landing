import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - Guesshh",
  description:
    "Full cookie policy for Guesshh. What cookies we use, why, how long they last, and how to manage them.",
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
