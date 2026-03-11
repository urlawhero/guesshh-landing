import SeoPageLayout from "@/components/SeoPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Play the Best Social Deduction Party Game Online | Guesshh",
  description: "Find the spy, bluff your friends, and win the round. Play the ultimate free online social deduction party game directly in your browser.",
};

export default function SocialDeductionPage() {
  return (
    <SeoPageLayout 
      title="The Ultimate Social Deduction Party Game" 
      subtitle="Bluff your way to victory or interrogate your friends to uncover the truth. The classic hidden-role experience, modernized for your phone."
    >
      <h2>What is a Social Deduction Game?</h2>
      <p>A social deduction game is a party game where players are assigned hidden roles. The majority of the group are the "innocents" who share a common goal or piece of information. A small minority are the "impostors" or "spies" who must blend in, lie, and manipulate the group to survive.</p>
      
      <h2>Why Guesshh is the Perfect Hidden Role Game</h2>
      <p>While classic games like Mafia or Werewolf require a dedicated narrator to moderate the game, Guesshh is completely automated. The game handles the roles, the timer, and the voting, so <strong>everyone gets to play</strong>.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li><strong>No Narrator Needed:</strong> The app does the heavy lifting.</li>
        <li><strong>The Description Phase:</strong> A unique feature where players type their clues before reading them out loud. This prevents players from copying each other's answers and is perfect for remote play.</li>
        <li><strong>Dynamic Difficulty:</strong> Playing with pros? Turn up the Spy difficulty or add multiple spies to the room.</li>
      </ul>

      <p>Whether you are in the same room or spread across the globe on a Zoom call, Guesshh brings the psychological thrill of social deduction directly to your browser.</p>
    </SeoPageLayout>
  );
}
