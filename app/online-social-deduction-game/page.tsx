import SeoPageLayout from "@/components/SeoPageLayout"
import type { Metadata } from "next"

const PATH = "/online-social-deduction-game"

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: "Online Social Deduction Game: Play Free With Friends",
  description:
    "Play a free online social deduction game in your browser. One spy hides among your friends: ask questions, bluff, vote. 3-25 players, no download.",
}

const faqs = [
  {
    q: "What is an online social deduction game?",
    a: "It is a party game played over the internet where players have hidden roles. Most players are innocents who share information, and one or more players are spies or impostors who must blend in. Players talk, bluff and vote to find the liar.",
  },
  {
    q: "Can I play a social deduction game online for free?",
    a: "Yes. Guesshh is free to play in a browser with no account and no download. A Premium plan adds more word categories, but the core game is free.",
  },
  {
    q: "How many players do I need?",
    a: "Guesshh needs at least 3 players and supports up to 25 in a single room. Larger groups can add more than one spy.",
  },
  {
    q: "Do I need a narrator or game master?",
    a: "No. The game assigns roles, runs the timer and counts the votes automatically, so everyone gets to play.",
  },
  {
    q: "Can we play remotely on Zoom or Discord?",
    a: "Yes. Turn on the Description Phase so every player types a clue, then discuss and vote while on a call.",
  },
]

export default function OnlineSocialDeductionGamePage() {
  return (
    <SeoPageLayout
      path={PATH}
      faqs={faqs}
      title="Online Social Deduction Game for 3-25 Players"
      subtitle="Bluff your way to victory or interrogate your friends to uncover the truth. The classic hidden-role experience, modernised for your phone."
      related={[
        { label: "Games Like Spyfall", href: "/games-like-spyfall" },
        { label: "Impostor Game Online", href: "/impostor-game-online" },
        { label: "Spyfall Alternative", href: "/seo/en/spyfall-alternative" },
        { label: "More Games to Play With Friends", href: "/seo/en/games-to-play-with-friends" },
      ]}
    >
      <h2>What Is a Social Deduction Game?</h2>
      <p>
        A social deduction game is a party game where players are given hidden roles. Most players are{" "}
        <strong>innocents</strong> who share a secret word or goal. One or more players are the{" "}
        <strong>spy or impostor</strong>, trying to blend in, lie and manipulate the group without being caught. The
        fun comes from talking: questions, accusations, alibis and the moment someone realises who has been lying.
      </p>

      <h2>How an Online Game Works</h2>
      <ol>
        <li>One player opens Guesshh and taps <strong>Create</strong> to open a room.</li>
        <li>The host shares the 6-letter code or QR code. Everyone joins from their own phone or computer.</li>
        <li>The host picks a category and starts. Each player privately sees either the secret word or &ldquo;You are the Spy.&rdquo;</li>
        <li>Players take turns asking and answering questions. Innocents prove they know the word without giving it away.</li>
        <li>Everyone votes. If the spy is caught, they get one last guess at the word to steal the win.</li>
      </ol>
      <p>
        See the full <a href="/how-to-play">how to play guide</a> for settings such as multiple spies, difficulty and
        timers.
      </p>

      <h2>Why Guesshh Works as an Online Hidden-Role Game</h2>
      <p>
        Classic games such as Mafia or Werewolf need a dedicated narrator and lots of setup. Guesshh removes that
        friction. The game handles roles, timers and voting, so <strong>everyone gets to play</strong> instead of
        someone being stuck running the game.
      </p>
      <ul>
        <li>
          <strong>No narrator needed:</strong> everything runs in the browser. Create a room and start.
        </li>
        <li>
          <strong>Description Phase:</strong> players type clues before reading them out. It stops copying and works well
          for remote play on Zoom or Discord.
        </li>
        <li>
          <strong>Scales to big groups:</strong> up to 25 players, with extra spies for larger rooms.
        </li>
        <li>
          <strong>Adjustable difficulty:</strong> change the spy difficulty and the timer to match your group.
        </li>
        <li>
          <strong>No download, no account:</strong> works on iPhone, Android and desktop browsers.
        </li>
      </ul>

      <h2>Tips for Your First Game</h2>
      <ul>
        <li>Start with 5 or 6 players and one spy so the rounds stay tense.</li>
        <li>Ask questions that are specific enough to catch a bluff, but not so specific that they give away the word.</li>
        <li>As the spy, listen first. The best bluffs repeat what others said in different words.</li>
        <li>Do not accuse in the first minute. Wait for someone to hesitate.</li>
      </ul>

      <h2>Ready to Play?</h2>
      <p>
        <a href="https://play.guesshh.com" target="_blank" rel="noopener noreferrer">
          Create a free room and find the spy &rarr;
        </a>
      </p>
    </SeoPageLayout>
  )
}
