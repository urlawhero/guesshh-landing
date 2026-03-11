import { SeoPageLayout } from "@/components/SeoPageLayout"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Best Games to Play with Friends Online | Guesshh",
    description: "Discover the best games to play with friends online. Guesshh is a free, browser-based social deduction party game for any group size.",
}

export default function GamesWithFriendsPage() {
    return (
        <SeoPageLayout
            title="Best Games to Play with Friends Online"
            subtitle="The ultimate list of multiplayer games for your next virtual hangout or party. Low effort, high fun."
        >
            <h2>Top Games for Online Socializing</h2>
            <p>
                Finding the right game for a group of friends can be tough. You want something that's easy to learn, doesn't require a $2,000 gaming PC, and most importantly, keeps everyone engaged.
            </p>

            <h3>1. Guesshh (Social Deduction)</h3>
            <p>
                Guesshh tops our list because it's built for social interaction. It's a game of bluffing, questioning, and intuition. One player is a spy, and everyone else is trying to smoke them out. It's free, works in any browser, and supports massive groups.
            </p>

            <h3>2. Web-Based Drawing Games</h3>
            <p>
                Classical drawing and guessing games are always a hit. They provide a lot of laughs, especially when your best friend tries (and fails) to draw a "platypus" using a trackpad.
            </p>

            <h3>3. Virtual Escape Rooms</h3>
            <p>
                If your group loves puzzles, virtual escape rooms are a great way to collaborate and test your collective brainpower.
            </p>

            <h2>Why Social Deduction is Perfect for Groups</h2>
            <p>
                Unlike traditional competitive games where one person's skill can dominate, social deduction games like Guesshh are all about communication. They allow players of all skill levels to participate equally.
            </p>

            <ul>
                <li><strong>No "Pro" Players:</strong> Everyone starts on an even playing field.</li>
                <li><strong>High Replayability:</strong> Every game is different depending on who the spy is and how they play.</li>
                <li><strong>Built-in Chat:</strong> Uses your existing voice or video call to facilitate the game.</li>
            </ul>

            <p>
                Don't let the distance stop the party. <strong>Open Guesshh in your browser today and host the best virtual game night ever.</strong>
            </p>
        </SeoPageLayout>
    )
}
