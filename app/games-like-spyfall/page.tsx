import SeoPageLayout from "@/components/SeoPageLayout"
import type { Metadata } from "next"
import { JsonLd } from "@/components/json-ld"

const PATH = "/games-like-spyfall"

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: "Games Like Spyfall: 8 Free Online Alternatives",
  description:
    "Looking for games like Spyfall? 8 hidden-role and spy games to play with friends, from Guesshh (in your browser) to The Chameleon and Insider.",
}

const faqs = [
  {
    q: "What are the best games like Spyfall?",
    a: "Popular picks are Guesshh (an online spy game for 3-25 players), The Chameleon, Insider, Secret Hitler, Werewolf or Mafia, and Among Us. They all revolve around a hidden role and a group discussion.",
  },
  {
    q: "Is there a free online version of Spyfall?",
    a: "Several fan-made web versions of Spyfall exist. If you want a similar game that needs no setup, Guesshh is free in the browser: one player creates a room and the others join with a 6-letter code.",
  },
  {
    q: "What is the best Spyfall-like game for large groups?",
    a: "Guesshh supports up to 25 players in one room. Many other spy games are designed for smaller groups, so check the player count before you invite everyone.",
  },
  {
    q: "Which games like Spyfall work online without downloads?",
    a: "Guesshh and browser versions of Spyfall and Secret Hitler run in a normal web browser. Among Us and the board games need to be installed or bought.",
  },
]

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Games like Spyfall",
  itemListElement: [
    "Guesshh",
    "The Chameleon",
    "Insider",
    "Fakin' It (Jackbox)",
    "Werewolf and Mafia",
    "Secret Hitler",
    "Among Us",
    "Spyfall (original)",
  ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
}

export default function GamesLikeSpyfallPage() {
  return (
    <SeoPageLayout
      path={PATH}
      faqs={faqs}
      title="Games Like Spyfall: 8 Free Online Alternatives"
      subtitle="Spyfall made the spy format famous. These games give you the same bluffing and accusations, and several run right in your browser."
      related={[
        { label: "Guesshh vs Spyfall", href: "/seo/en/spyfall-alternative" },
        { label: "Online Social Deduction Game", href: "/online-social-deduction-game" },
        { label: "Impostor Game Online", href: "/impostor-game-online" },
        { label: "Games to Play With Friends", href: "/seo/en/games-to-play-with-friends" },
      ]}
    >
      <JsonLd data={itemList} />

      <h2>What Makes a Game &ldquo;Like Spyfall&rdquo;?</h2>
      <p>
        In Spyfall, everyone except one player knows the location, and the spy has to work it out from the questions
        people ask. Games in the same family share a hidden role, a discussion where players try to prove they are in the
        know, and a vote at the end. Below are eight that fit, with notes on how each differs. If you want a direct
        comparison with Guesshh, read our <a href="/seo/en/spyfall-alternative">Spyfall alternative guide</a>.
      </p>

      <h2>8 Games Like Spyfall</h2>

      <h3>1. Guesshh</h3>
      <p>
        The closest match if you want to play online with no setup. One player creates a room, everyone joins with a
        6-letter code, and the whole group except the spy sees the same word. It runs in a browser, supports 3 to 25
        players, offers multiple spies for big rooms, and has a Description Phase for calls. It is free, with optional
        Premium word packs.{" "}
        <a href="https://play.guesshh.com" target="_blank" rel="noopener noreferrer">
          Try it free
        </a>
        .
      </p>

      <h3>2. The Chameleon</h3>
      <p>
        A tabletop game where everyone sees a secret word on a grid except the chameleon, who has to bluff. Each player
        gives a one-word clue, which makes it quick. You need the physical game or a version of it.
      </p>

      <h3>3. Insider</h3>
      <p>
        A small hidden-role game in which a Master and a secret Insider both know the word, and the rest of the group asks
        yes-or-no questions to guess it. Afterwards everyone votes on who the Insider was. It is a good pick for small
        groups at a table.
      </p>

      <h3>4. Fakin&rsquo; It (Jackbox)</h3>
      <p>
        A Jackbox party game in which one player does not know what the others are doing and has to fake it. Jackbox
        is played with phones as controllers, and the host needs to own the pack.
      </p>

      <h3>5. Werewolf and Mafia</h3>
      <p>
        The classic hidden-role games. A secret group tries to eliminate everyone else without being found. They usually
        need a narrator, which means one person misses the fun, although some online versions automate it.
      </p>

      <h3>6. Secret Hitler</h3>
      <p>
        A longer hidden-role game for 5 to 10 players with a political theme. It is more strategic than Spyfall and takes
        an evening, not a few minutes. Free browser versions exist.
      </p>

      <h3>7. Among Us</h3>
      <p>
        A video game version of the same idea, with tasks and sabotage. You need to install it, but many people already
        have it. If you want the impostor feeling without any download, see our{" "}
        <a href="/impostor-game-online">impostor game online</a> guide.
      </p>

      <h3>8. Spyfall (the original)</h3>
      <p>
        Still worth knowing. The original card game works well in person, and fan-made web versions exist for online
        play. Their features and quality vary, so try one before you invite everyone.
      </p>

      <h2>Which One Should You Pick?</h2>
      <ul>
        <li>
          <strong>You want to start in under a minute:</strong> Guesshh, in the browser.
        </li>
        <li>
          <strong>You have a big group (10+):</strong> Guesshh, which supports up to 25 players.
        </li>
        <li>
          <strong>You are around a table:</strong> The Chameleon or Insider.
        </li>
        <li>
          <strong>You want a long, strategic evening:</strong> Secret Hitler or Werewolf.
        </li>
      </ul>
    </SeoPageLayout>
  )
}
