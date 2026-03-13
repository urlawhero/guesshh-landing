import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "How to Play Guesshh",
  description:
    "Learn how to play Guesshh, the free multiplayer social deduction party game. Step-by-step guide for beginners and advanced players on how to find the spy.",
  alternates: { canonical: "/how-to-play" },
  openGraph: {
    title: "How to Play Guesshh | Social Deduction Party Game Guide",
    description:
      "Learn how to play Guesshh - the free browser-based social deduction game. Find the spy, ask clever questions, and bluff your way to victory.",
    url: "https://guesshh.com/how-to-play",
  },
}

export default function HowToPlayPage() {
  return (
    <SeoPageLayout
      title="How to Play Guesshh"
      description="Everything you need to know to set up and play your first game - from creating a room to catching the spy."
    >
      <h2>What Is Guesshh?</h2>
      <p>
        Guesshh is a free online social deduction party game for 3 to 25 players. One player is secretly
        assigned as the <strong>Spy</strong> - they don&apos;t know the secret word. Everyone else is an
        <strong> Innocent</strong> who does. The goal: innocents must find the spy before the spy figures
        out the word and escapes.
      </p>

      <h2>Setting Up a Game</h2>
      <h3>Online Multiplayer (Recommended)</h3>
      <ol>
        <li>Go to <a href="https://play.guesshh.com" target="_blank" rel="noopener noreferrer">play.guesshh.com</a> and tap <strong>Create</strong>.</li>
        <li>Share the room code or QR code with your friends - they tap <strong>Join</strong> and enter the code.</li>
        <li>Once everyone has joined, the host selects a category and taps <strong>Start Game</strong>.</li>
        <li>Each player privately views their role on their own device.</li>
      </ol>

      <h3>Single Device (Pass &amp; Play)</h3>
      <ol>
        <li>From the home screen tap <strong>New Game</strong>.</li>
        <li>Add player names and choose the number of spies.</li>
        <li>Pass the device to each player in turn - they tap their name, view their role privately, then pass it on.</li>
      </ol>

      <h2>The Three Phases of a Round</h2>
      <h3>1. Role Reveal</h3>
      <p>
        Each player sees either the <strong>secret word</strong> (if innocent) or <strong>&ldquo;You are the Spy!&rdquo;</strong>.
        The spy must memorise that they don&apos;t know the word without revealing their reaction.
      </p>

      <h3>2. Discussion Phase</h3>
      <p>
        Players take turns asking each other questions. Innocents want to prove they know the word without
        being too obvious - the spy is listening and trying to deduce the word. The host can set a custom
        discussion timer (1–10 minutes).
      </p>
      <p>Good example questions:</p>
      <ul>
        <li>&ldquo;Would you find this at a party?&rdquo;</li>
        <li>&ldquo;Is it something you use every day?&rdquo;</li>
        <li>&ldquo;Hot or cold?&rdquo;</li>
      </ul>

      <h3>3. Voting Phase</h3>
      <p>
        After discussion, everyone simultaneously votes for who they think is the spy. The player with the
        most votes is eliminated. If it&apos;s the spy - the innocents win! If it&apos;s not - the spy wins.
      </p>
      <p>
        Before being eliminated, the accused spy gets one chance to guess the secret word. A correct guess
        means the spy wins even if caught.
      </p>

      <h2>Winning Conditions</h2>
      <ul>
        <li><strong>Innocents win</strong> if they vote out the spy and the spy cannot guess the word.</li>
        <li><strong>The Spy wins</strong> if the innocents vote out the wrong player, or if the spy correctly guesses the word after being caught.</li>
      </ul>

      <h2>Tips for Innocents</h2>
      <ul>
        <li>Give answers that prove you know the word - but don&apos;t make it too easy for the spy.</li>
        <li>Watch for vague or deflecting answers from other players.</li>
        <li>Don&apos;t accuse too early - gather evidence first.</li>
      </ul>

      <h2>Tips for the Spy</h2>
      <ul>
        <li>Listen carefully to others&apos; clues to narrow down what the word might be.</li>
        <li>Give answers that sound plausible but could fit many words.</li>
        <li>Try to shift suspicion onto another player without being too aggressive.</li>
      </ul>

      <h2>Game Settings</h2>
      <ul>
        <li><strong>Number of Spies:</strong> 1 spy per 3 players is recommended. You can increase this for larger groups.</li>
        <li><strong>Impostor Difficulty:</strong> Standard (spy sees nothing) or Easy Mode (spy sees a hint).</li>
        <li><strong>Discussion Time:</strong> Set between 1 and 10 minutes.</li>
        <li><strong>Categories:</strong> Choose from Food &amp; Drinks, Movies &amp; TV, Places &amp; Travel, and more - or pick Random.</li>
      </ul>

      <h2>Ready to Play?</h2>
      <p>
        No account, no download, no setup required. Just open your browser and start playing instantly
        with friends anywhere in the world.
      </p>
      <p>
        <a href="https://play.guesshh.com" target="_blank" rel="noopener noreferrer">
          Start your first game now &rarr;
        </a>
      </p>
    </SeoPageLayout>
  )
}
