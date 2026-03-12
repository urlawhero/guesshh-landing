import SeoPageLayout from "@/components/SeoPageLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Los Mejores Juegos Para Jugar Con Amigos (Sin Descargar)",
  description: "Descubre Guesshh, el mejor juego online de deducción social. Encuentra al espía entre tus amigos. Juega gratis desde tu móvil sin descargar nada.",
};

export default function JuegosConAmigosPage() {
  return (
    <SeoPageLayout 
      title="El Juego Definitivo Para Jugar Con Amigos" 
      subtitle="Sin descargas. Sin cuentas. Crea una sala en segundos y descubre quién de tus amigos es el mejor mintiendo."
      lang="es"
      playButtonText="Juega Gratis Ahora"
      backButtonText="Volver al Inicio"
    >
      <h2>El problema de los juegos para fiestas</h2>
      <p>Estás reunido con tus amigos o en una videollamada y alguien sugiere jugar a algo. De repente, la mitad del grupo tiene que borrar fotos para instalar una aplicación, alguien olvida su contraseña y el momento de diversión se arruina antes de empezar.</p>
      
      <h2>Entra Guesshh: Diversión sin fricciones</h2>
      <p>Guesshh es un juego gratuito de deducción social inspirado en clásicos como Spyfall y Among Us, pero diseñado para jugarse directamente en el navegador del móvil.</p>
      <ul>
        <li><strong>Acceso Instantáneo:</strong> Solo un jugador crea la sala. Los demás escanean un código QR o introducen un pin de 6 letras en la web.</li>
        <li><strong>Grupos Grandes:</strong> Mientras otros juegos limitan a 8 personas, Guesshh permite jugar con hasta <strong>25 jugadores</strong> al mismo tiempo.</li>
        <li><strong>Perfecto para videollamadas:</strong> Gracias a su fase de descripción silenciosa, es el juego ideal para llamadas grupales en Zoom o Discord.</li>
      </ul>

      <h3>¿Cómo se juega?</h3>
      <p>Las reglas son muy sencillas. Todos en la sala reciben una Palabra Secreta en sus pantallas, excepto uno: el Espía. Por turnos, los jugadores se hacen preguntas ingeniosas para desenmascarar al espía sin revelar la palabra. Al final de la ronda, todos votan. Si atrapan al espía, este tiene una última oportunidad de adivinar la palabra para robar la victoria.</p>
    </SeoPageLayout>
  );
}
