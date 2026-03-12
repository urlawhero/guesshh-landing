import SeoPageLayout from "@/components/SeoPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Migliori Giochi da Fare in Gruppo sul Telefono | Guesshh",
  description: "Cerchi un gioco divertente da fare con gli amici? Gioca a Guesshh, il miglior gioco di deduzione sociale. Nessuna app da scaricare, gioca subito gratis.",
};

export default function GiochiInGruppoPage() {
  return (
    <SeoPageLayout 
      title="Il Gioco Perfetto da Fare in Gruppo" 
      subtitle="Siete al bar, in casa o su una chiamata Discord e non sapete cosa fare? Giocate direttamente dal browser del vostro telefono. Nessuna app da scaricare."
      lang="it"
      playButtonText="Gioca Ora Gratis"
      backButtonText="Torna alla Home"
    >
      <h2>Perché i giochi di deduzione sociale sono i migliori</h2>
      <p>I classici giochi da tavolo sono fantastici, ma richiedono preparazione. I giochi di deduzione sociale, dove devi capire chi sta mentendo, sono perfetti per animare la serata in pochi secondi. Il problema? Spesso costringono tutti a scaricare un'app pesantissima e creare un account.</p>
      
      <h2>Scopri Guesshh: Zero Stress, Massimo Divertimento</h2>
      <p>Guesshh è stato creato per eliminare ogni ostacolo. È l'alternativa perfetta a giochi come Spyfall o Lupus in Fabula. Ecco perché i gruppi lo adorano:</p>
      <ul>
        <li><strong>Nessun Download:</strong> Un giocatore crea la stanza. Gli altri inseriscono il codice a 6 lettere su Safari o Chrome ed entrano all'istante.</li>
        <li><strong>Fino a 25 Giocatori:</strong> Siete in tanti? Nessun problema. Il gioco supporta stanze enormi, ideali per feste numerose.</li>
        <li><strong>Modalità a Più Spie:</strong> Aumentate la difficoltà aggiungendo più "Spie" per creare il caos totale.</li>
      </ul>

      <h3>Come Funziona?</h3>
      <p>Tutti i giocatori ricevono una Parola Segreta sul proprio schermo... tranne la Spia. A turno, i giocatori si fanno domande a vicenda per capire chi non conosce la parola, senza però renderla troppo ovvia. Alla fine si vota: se la Spia viene scoperta, ha un'ultima possibilità di indovinare la parola per vincere la partita!</p>
    </SeoPageLayout>
  );
}
