import SeoPageLayout from "@/components/SeoPageLayout"
import type { Metadata } from "next"

const PATH = "/impostor-game-online"

export const metadata: Metadata = {
  alternates: { canonical: PATH },
  title: "Impostor Game Online: Play Free With Friends (No App)",
  description:
    "Play an impostor game online in your browser. One player is the impostor, everyone else knows the word. Free, 3-25 players, no download or account.",
}

const faqs = [
  {
    q: "Is there an impostor game I can play in the browser?",
    a: "Yes. In Guesshh one player is the impostor (called the spy) and does not know the secret word. Everyone else does. It is free, needs no download or account, and runs in any modern browser.",
  },
  {
    q: "How is it different from Among Us?",
    a: "Among Us is a video game with tasks and sabotage that you install. Guesshh is a conversation game: you ask questions and bluff to find the impostor. It needs no install, and it supports up to 25 players.",
  },
  {
    q: "How many people can play?",
    a: "From 3 to 25 players. For bigger rooms you can add more than one impostor.",
  },
  {
    q: "Can we play it over a call?",
    a: "Yes. Turn on the Description Phase so every player types a clue, then talk it through on Zoom, Discord or WhatsApp before voting.",
  },
]

export default function ImpostorGameOnlinePage() {
  return (
    <SeoPageLayout
      path={PATH}
      faqs={faqs}
      title="Impostor Game Online: Free, in Your Browser"
      subtitle="One player is the impostor. Everyone else knows the secret word. Ask questions, spot the bluff and vote them out. No download, no account."
      related={[
        { label: "Online Social Deduction Game", href: "/online-social-deduction-game" },
        { label: "Games Like Spyfall", href: "/games-like-spyfall" },
        { label: "How to Play Guesshh", href: "/how-to-play" },
        { label: "Games to Play With Friends", href: "/seo/en/games-to-play-with-friends" },
      ]}
    >
      <h2>What Is an Impostor Game?</h2>
      <p>
        In an impostor game, a group has a secret and one player is trying to fake knowing it. Everyone else has to work
        out who is bluffing before time runs out. It is the same tension that made hidden-role games popular, without
        the need for a game master.
      </p>

      <h2>Play It in Your Browser</h2>
      <p>
        Guesshh turns the idea into a short, loud party game. One person opens a room and shares a 6-letter code or QR
        code. Everyone joins from their phone. Each player privately sees either the secret word or the message that they
        are the impostor, which the game calls the Spy. Then the questions begin.
      </p>
      <ol>
        <li>Create a room at play.guesshh.com and share the code.</li>
        <li>Everyone checks their role privately.</li>
        <li>Take turns asking each other questions about the word.</li>
        <li>Vote for the player you think is the impostor.</li>
        <li>If the impostor is caught, they still win if they guess the word correctly.</li>
      </ol>

      <h2>Guesshh vs Among Us</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Guesshh</th>
            <th>Among Us</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Install</td>
            <td>None, runs in the browser</td>
            <td>App or game install</td>
          </tr>
          <tr>
            <td>Style</td>
            <td>Questions, bluffing, voting</td>
            <td>Tasks, sabotage, meetings</td>
          </tr>
          <tr>
            <td>Players</td>
            <td>3 to 25</td>
            <td>Up to 15 per lobby</td>
          </tr>
          <tr>
            <td>Round length</td>
            <td>A few minutes</td>
            <td>Longer rounds</td>
          </tr>
        </tbody>
      </table>
      <p>
        They suit different moods. Among Us is a video game. Guesshh is closer to a party game you can start the moment
        everyone is in the same room or the same call.
      </p>

      <h2>Tips for the Impostor</h2>
      <ul>
        <li>Listen first. Let two or three people answer before you say anything.</li>
        <li>Repeat the idea of someone else&rsquo;s answer in different words.</li>
        <li>Avoid being the only vague voice. Add one concrete detail that could fit many words.</li>
        <li>If you are caught, use the last guess. A well-listened impostor can often name the word.</li>
      </ul>

      <h2>Tips for Everyone Else</h2>
      <ul>
        <li>Prove you know the word without saying anything a stranger could repeat back.</li>
        <li>Ask questions that need a specific answer.</li>
        <li>Notice who answers a beat late or copies the last person.</li>
      </ul>

      <p>
        <a href="https://play.guesshh.com" target="_blank" rel="noopener noreferrer">
          Start a free game now &rarr;
        </a>
      </p>
    </SeoPageLayout>
  )
}
