import type { Metadata } from "next"
import { SeoPageLayout } from "@/components/seo-page-layout"

export const metadata: Metadata = {
  title: "Social Deduction Games: The Complete Guide",
  description:
    "Discover the best social deduction games online and offline. Learn what makes them fun, how they work, and why Guesshh is the easiest way to play free with friends.",
  alternates: { canonical: "/social-deduction-games" },
  openGraph: {
    title: "Social Deduction Games: The Complete Guide | Guesshh",
    description:
      "Everything you need to know about social deduction games — from classic titles to the best free browser options like Guesshh.",
    url: "https://guesshh.com/social-deduction-games",
  },
}

export default function SocialDeductionGamesPage() {
  return (
    <SeoPageLayout
      title="Social Deduction Games: The Complete Guide"
      description="What are social deduction games, why are they so addictive, and how can you play one right now for free?"
    >
      <h2>What Is a Social Deduction Game?</h2>
      <p>
        A social deduction game is a party game where players use conversation, observation, and deception
        to uncover hidden roles. One group knows a secret; another group is trying to hide it. The tension
        between trust and betrayal is what makes these games irresistible.
      </p>
      <p>
        The genre exploded in popularity with titles like <strong>Mafia</strong>, <strong>Werewolf</strong>,
        and <strong>Among Us</strong>. What they all share: someone is lying, and it&apos;s your job to find out who.
      </p>

      <h2>Why Are Social Deduction Games So Popular?</h2>
      <ul>
        <li><strong>No special skills required.</strong> You just need to talk and observe.</li>
        <li><strong>Every game is different.</strong> Player behaviour makes each round unpredictable.</li>
        <li><strong>Perfect for groups.</strong> They scale from 3 players to large parties.</li>
        <li><strong>High replay value.</strong> The hidden role changes everything each time.</li>
        <li><strong>Great for bonding.</strong> Laughter, accusations, and surprise outcomes create shared memories.</li>
      </ul>

      <h2>The Most Popular Social Deduction Games</h2>

      <h3>Mafia / Werewolf</h3>
      <p>
        The original. Players are secretly assigned as Mafia/Werewolves or Villagers. At night, the Mafia
        eliminates a villager. During the day, everyone debates who to eliminate. It&apos;s tense, slow-burn,
        and best with a dedicated moderator.
      </p>

      <h3>The Resistance / Avalon</h3>
      <p>
        A team-based game where Resistance fighters and Government spies go on missions. Spies try to
        sabotage secretly. No eliminations — players stay in until the end. Avalon adds Arthurian roles
        for deeper hidden-information play.
      </p>

      <h3>Secret Hitler</h3>
      <p>
        Liberals and Fascists compete to enact policies. Fascists know each other; Liberals don&apos;t.
        One Fascist is secretly Hitler. Political tension and deduction make this a modern classic.
      </p>

      <h3>Among Us</h3>
      <p>
        The video game that brought social deduction to a global audience. Crewmates complete tasks aboard
        a spaceship while one or more Impostors sabotage and eliminate them. Played online, not in person.
      </p>

      <h3>Spyfall</h3>
      <p>
        The direct inspiration for Guesshh. All players share a secret location except one spy. Players
        ask each other questions about the location; the spy must bluff without knowing it. Fast,
        portable, and endlessly fun.
      </p>

      <h3>One Night Ultimate Werewolf</h3>
      <p>
        A condensed version of Werewolf that plays in about 10 minutes. Roles shift during the night phase,
        meaning your role at the start might not be your role at the end. A great intro for newcomers.
      </p>

      <h2>How to Choose the Right Social Deduction Game</h2>

      <h3>By Group Size</h3>
      <ul>
        <li><strong>3–6 players:</strong> Guesshh, Spyfall, The Resistance</li>
        <li><strong>6–12 players:</strong> Guesshh, One Night Werewolf, Secret Hitler</li>
        <li><strong>12–25 players:</strong> Guesshh, Mafia/Werewolf, large-format party games</li>
      </ul>

      <h3>By Play Setting</h3>
      <ul>
        <li><strong>Online, remote:</strong> Guesshh (browser, no download), Among Us, Jackbox</li>
        <li><strong>In person with phones:</strong> Guesshh, Spyfall app</li>
        <li><strong>In person, card-based:</strong> Werewolf, The Resistance, Secret Hitler</li>
      </ul>

      <h3>By Experience Level</h3>
      <ul>
        <li><strong>Beginners:</strong> Guesshh, Among Us, One Night Werewolf</li>
        <li><strong>Intermediate:</strong> Spyfall, The Resistance, Secret Hitler</li>
        <li><strong>Advanced:</strong> Avalon, Coup, Deception: Murder in Hong Kong</li>
      </ul>

      <h2>What Makes Guesshh Different?</h2>
      <p>
        Most social deduction games require cards, a physical setup, or a dedicated app. Guesshh runs
        entirely in a browser — no download, no account, no setup. You share a link or QR code and you&apos;re
        playing in seconds with up to 25 people anywhere in the world.
      </p>
      <ul>
        <li>Free to play with no account required</li>
        <li>Supports 3 to 25 players simultaneously</li>
        <li>QR code room sharing for instant local sessions</li>
        <li>Online multiplayer across devices</li>
        <li>Single-device pass-and-play mode</li>
        <li>Multiple word categories with a Premium library of 1,000+ words</li>
      </ul>

      <h2>Start Playing Now</h2>
      <p>
        The fastest way to experience social deduction is to just start. No setup, no waiting.
      </p>
      <p>
        <a href="https://play.guesshh.com" target="_blank" rel="noopener noreferrer">
          Play Guesshh free in your browser &rarr;
        </a>
      </p>
    </SeoPageLayout>
  )
}
