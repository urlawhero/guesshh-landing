import SeoPageLayout from "@/components/SeoPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les Meilleurs Jeux à Jouer Entre Amis (Sans Téléchargement)",
  description: "Découvrez Guesshh, le meilleur jeu de société et de bluff gratuit sur mobile. Jouez de 3 à 25 joueurs sans télécharger d'application.",
};

export default function JeuxEntreAmisPage() {
  return (
    <SeoPageLayout 
      title="Les Meilleurs Jeux à Jouer Entre Amis" 
      subtitle="Pas besoin de télécharger d'application. Rejoignez une partie directement depuis votre navigateur et trouvez l'espion."
      lang="fr"
      playButtonText="Jouer Gratuitement"
      backButtonText="Retour à l'Accueil"
    >
      <h2>Le Jeu de Soirée Parfait</h2>
      <p>Vous êtes en soirée, dans un bar ou sur un appel Discord avec vos amis, et vous cherchez un jeu rapide pour mettre l'ambiance ? Les jeux de déduction sociale (bluff et mystère) sont la meilleure solution. Mais forcer tout le monde à créer un compte et télécharger une application casse toujours le rythme.</p>
      
      <h2>Pourquoi choisir Guesshh ?</h2>
      <p>Guesshh est une alternative gratuite aux jeux comme le Loup-Garou, Among Us ou Spyfall. Il est conçu pour être 100% sans friction :</p>
      <ul>
        <li><strong>Zéro Téléchargement :</strong> Jouez directement sur Safari ou Chrome.</li>
        <li><strong>Grands Groupes :</strong> Jusqu'à 25 joueurs peuvent rejoindre le même salon.</li>
        <li><strong>Jouez à distance :</strong> Parfait pour les appels vidéo grâce à la phase de description silencieuse.</li>
      </ul>

      <h3>Comment jouer ?</h3>
      <p>Une personne crée un salon. Les autres scannent le QR code ou entrent le code à 6 lettres. Tout le monde reçoit un mot secret, sauf l'Espion. Posez des questions subtiles pour démasquer l'Espion sans révéler le mot. Si l'Espion est démasqué, il a une dernière chance de deviner le mot pour gagner !</p>
    </SeoPageLayout>
  );
}
