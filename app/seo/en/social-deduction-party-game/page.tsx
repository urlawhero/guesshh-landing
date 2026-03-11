import SeoPageLayout from "@/components/SeoPageLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Play the Best Social Deduction Party Game Online | Guesshh",
  description:
    "Find the spy or impostor, bluff your friends, and win the round. Play the ultimate free online social deduction party game directly in your browser.",
}

export default function SocialDeductionPartyGamePage() {
  return (
    <SeoPageLayout
      title="The Ultimate Social Deduction Party Game"
      subtitle="Bluff your way to victory or interrogate your friends to uncover the truth. The classic hidden‑role experience, modernized for your phone."
    >
      <h2>What is a Social Deduction Game?</h2>
      <p>
        A social deduction game is a party game where players are assigned hidden roles. Most players are{" "}
        <strong>innocents</strong> who share a secret word or goal. One or more players are the{" "}
        <strong>spy or impostor</strong> trying to blend in, lie, and manipulate the group without being caught.
      </p>

      <h2>Why Guesshh is the Perfect Hidden‑Role Game</h2>
      <p>
        Classic games like Mafia or Werewolf often need a dedicated narrator and lots of setup. Guesshh removes all
        that friction. The game handles roles, timers, and voting automatically, so{" "}
        <strong>everyone gets to play</strong> instead of someone being “stuck running the game”.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>
          <strong>No Narrator Needed:</strong> All the logic happens inside the browser. Just create a room and start.
        </li>
        <li>
          <strong>The Description Phase:</strong> A unique mode where players type their clues before reading them
          aloud. This stops people from copying each other and is perfect for remote play on Zoom or Discord.
        </li>
        <li>
          <strong>Dynamic Difficulty:</strong> Turn up the Spy difficulty, add multiple spies, or tweak the timer to
          match your group’s experience level.
        </li>
      </ul>

      <p>
        Whether you are in the same room or spread across the globe on a call, Guesshh brings the psychological thrill
        of social deduction directly to your browser—no downloads, no accounts, just pure tension and laughter.
      </p>
    </SeoPageLayout>
  )
}
