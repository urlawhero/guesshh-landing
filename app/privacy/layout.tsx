import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Guesshh",
  description:
    "GDPR-compliant Privacy Policy for Guesshh. Learn what data we collect, why, and how to exercise your rights as an EU user.",
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
