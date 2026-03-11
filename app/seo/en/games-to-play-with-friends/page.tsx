import SeoPageLayout from "@/components/SeoPageLayout"
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
           <h2>Why Browser Games are the Best Choice for Game Night</h2>
            <p>When you get a group of friends together—whether in the same living room or on a Discord call—the last thing you want to do is spend 20 minutes troubleshooting app downloads and forgotten passwords. The best party games are frictionless. Here are our top picks for free browser-based games you can start instantly.</p>
            
            <h3>1. Guesshh (Social Deduction / Hidden Role)</h3>
            <p>If your group loves games like Among Us, Mafia, or Spyfall, Guesshh is a must-play. One player creates a room, and everyone joins instantly via a 6-letter code. Everyone gets a secret word except for the Spy. Players take turns asking questions to figure out who is bluffing. It supports up to 25 players, making it perfect for massive groups.</p>
            <p><strong>Best for:</strong> Groups of 4-10+ who love talking, bluffing, and arguing.<br/>
            <strong>Cost:</strong> Free (Premium word packs available)</p>
            
            <h3>2. Skribbl.io (Drawing & Pictionary)</h3>
            <p>A classic for a reason. One person draws a word while everyone else races to type the correct guess in the chat. You don't need to be a good artist—in fact, being terrible at drawing usually makes the game much funnier.</p>
            <p><strong>Best for:</strong> Voice calls and creative groups.<br/>
            <strong>Cost:</strong> Free</p>
            
            <h3>3. Gartic Phone (The Telephone Game)</h3>
            <p>A digital version of the "Telephone" game, but with drawings. You write a prompt, the next person draws it, the next person describes the drawing, and so on. The final results are almost always hilarious and completely disconnected from the original prompt.</p>
            <p><strong>Best for:</strong> Close friends looking for pure comedy.<br/>
            <strong>Cost:</strong> Free</p>
            
            <h3>4. Codenames Online (Word Association)</h3>
            <p>The official web version of the massive hit board game. Two teams compete to guess all their team's words based on single-word clues given by their Spymaster. It requires a bit more brainpower and teamwork than the others on this list.</p>
            <p><strong>Best for:</strong> Competitive groups who like puzzle-solving.<br/>
            <strong>Cost:</strong> Free</p>
            
            <h2>Start Playing Now</h2>
            <p>Don't let the momentum of your game night die. If you want a fast-paced game of deception that works on any phone, tablet, or computer, gather your friends and find the Spy.</p>

        </SeoPageLayout>
    )
}


