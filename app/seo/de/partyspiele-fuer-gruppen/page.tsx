import SeoPageLayout from "@/components/SeoPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Die Besten Partyspiele für Gruppen am Handy | Guesshh",
  description: "Suchst du kostenlose Online-Spiele mit Freunden? Entdecke Guesshh, das Social-Deduction-Spiel im Browser. Keine App nötig, für 3 bis 25 Spieler.",
};

export default function PartyspieleGruppenPage() {
  return (
    <SeoPageLayout 
      title="Das Ultimative Partyspiel für deine Gruppe" 
      subtitle="Finde den Spion, bluffe deine Freunde und gewinne. Keine App-Downloads, keine Accounts – einfach sofort im Browser spielen."
      lang="de"
      playButtonText="Jetzt Kostenlos Spielen"
      backButtonText="Zurück zur Startseite"
    >
      <h2>Warum Social-Deduction-Spiele die besten sind</h2>
      <p>Egal, ob ihr gemütlich zu Hause sitzt, in einer Bar seid oder über Discord sprecht: Es gibt nichts Besseres als ein Spiel, bei dem man herausfinden muss, wer am Tisch lügt. Das Problem bei den meisten Spielen wie Werwolf oder Spyfall? Man muss entweder mühsam Karten austeilen oder alle zwingen, eine riesige App herunterzuladen.</p>
      
      <h2>Guesshh ist die Lösung</h2>
      <p>Guesshh bringt die Spannung von Social-Deduction-Spielen direkt in deinen Safari- oder Chrome-Browser. Ohne Hürden, ohne Stress:</p>
      <ul>
        <li><strong>Kein Download erforderlich:</strong> Eine Person erstellt den Raum, die anderen treten blitzschnell über einen 6-stelligen Code oder QR-Code bei.</li>
        <li><strong>Für große Runden:</strong> Von 3 bis zu 25 Spielern – Guesshh ist perfekt für jede Gruppengröße.</li>
        <li><strong>Remote-Modus:</strong> Dank der einzigartigen Beschreibungsphase können Spieler ihre Hinweise eintippen, was es zum idealen Spiel für Online-Meetings macht.</li>
      </ul>

      <h3>Wie funktioniert das Spiel?</h3>
      <p>Jeder Spieler erhält ein geheimes Wort auf seinem Display – außer der Spion. Die Spieler stellen sich abwechselnd clevere Fragen. Das Ziel der "Unschuldigen" ist es, zu beweisen, dass sie das Wort kennen, ohne es zu verraten. Das Ziel des Spions ist es, nicht aufzufallen. Am Ende wird abgestimmt. Wenn der Spion enttarnt wird, hat er noch einen letzten Versuch, das Wort zu erraten, um das Spiel doch noch zu gewinnen!</p>
    </SeoPageLayout>
  );
}
