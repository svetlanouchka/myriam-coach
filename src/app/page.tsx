import TypewriterSlogan from './components/TypeWriterSlogan';
import SousTitre from './components/SousTitre';
import PresentationMyriam from './components/Presentation';
import Video from './components/Video';


export default function Home() {
    return (
    <div>
        <TypewriterSlogan />
        <SousTitre text="Surmontez vos blocages, transformez votre vie, sans culpabiliser" />
        <Video />
        <PresentationMyriam 
    text="Devenir la meilleure version de vous-même, 
ce n’est pas qu’une question de volonté.
C’est une question de motivation profonde.
Et je vous apprends à la trouver et l’entretenir 
contre vent et marée."
    imageUrl="/photo_profil.png" 
/>

    </div>
    );
}