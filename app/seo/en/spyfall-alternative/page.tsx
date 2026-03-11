import { SeoPageLayout } from "@/components/SeoPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "The Best Free Spyfall Alternative | Guesshh",
    description: "Looking for a free Spyfall alternative? Guesshh is the ultimate online social deduction game you can play in your browser with up to 25 friends.",
}

export default function SpyfallAlternativePage() {
    return (
        <SeoPageLayout
            title="The Best Free Spyfall Alternative"
            subtitle="Discover the ultimate social deduction experience. No downloads, no accounts—just pure tactical bluffing with your friends."
        >
            <h2>Why Guesshh is the Best Spyfall Alternative</h2>
            <p>
                If you love the classic game of <strong>Spyfall</strong>, you'll feel right at home with Guesshh. We've taken the core mechanics of social deduction and hidden roles and built a modern, browser-based platform that makes playing easier than ever.
            </p>

            <h3>Instant Play, Anywhere</h3>
            <p>
                Unlike original Spyfall which often requires physical cards or specialized apps, Guesshh works entirely in your mobile or desktop browser. Whether you're at a house party, on a Discord call, or waiting in line, you can start a game in seconds.
            </p>

            <h3>How it Works</h3>
            <ul>
                <li><strong>Hidden Roles:</strong> One player is the Spy; everyone else knows the secret location/word.</li>
                <li><strong>Strategic Questioning:</strong> Ask clever questions to identify the spy without giving away the secret word.</li>
                <li><strong>The Guess:</strong> The Spy wins if they figure out the secret word, or if the group fails to catch them.</li>
            </ul>

            <blockquote>
                "The best party games are the ones that require zero setup and maximum interaction. Guesshh delivers exactly that."
            </blockquote>

            <h2>Features You'll Love</h2>
            <ul>
                <li><strong>Cross-Platform:</strong> Play on iOS, Android, Windows, or Mac.</li>
                <li><strong>Massive Groups:</strong> Support for up to 25 players (perfect for large gatherings).</li>
                <li><strong>Custom Categories:</strong> From "Travel" to "Movies", choose the themes your group loves most.</li>
            </ul>

            <p>
                Ready to catch the spy? <strong>Start your free Guesshh room now and see why thousands of players are making the switch.</strong>
            </p>
        </SeoPageLayout>
    )
}
