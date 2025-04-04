'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    text: "Très bonne expérience à travers cette session SERUM. Ça a confirmé ce que j'avais commencé à mettre en place dans mes nouveaux objectifs de vie. Mon accompagnatrice a été géniale. Elle m'a accompagné lors du test mais aussi pour la compréhension des résultats. Elle m'a expliqué des choses que je n'aurais pas vues sans elle. Je recommande vraiment cette session et l'accompagnatrice qui a été très professionnelle et à l'écoute.",
    name: "Samia",
  },
  {
    text: "J’ai contacté MaryamSensei pour mon fils actuellement en seconde, et comme beaucoup de parents, je souhaite que mon fils puisse faire le bon choix dans son orientation. Mon fils a tout de suite accroché avec Maryam ! Et il a compris par lui-même la nécessité de ce coaching. Il est maintenant acteur dans cette démarche. Je suis très épatée par le professionnalisme de Maryame et je suis très reconnaissante pour ces recherches, tout le travail qu’elle a fourni en un temps record ! Je me sens totalement rassurée pour son orientation et allégée de toutes ces démarches. J’ai enfin trouvé une solution pour que mon fils puisse faire son juste choix et prendre son envol en toute confiance. Un grand merci à toi Maryam.",
    name: "Karima"
  },
  {
    text: "1/ Ce qui m’a poussé à te faire confiance ma chère Myriam, c’est avant tout la sérénité que tu portes en toi. L’habitude que tu as vis-à-vis de tes enfants, de tes proches, c’est ce qui m’inspire en toi et me mène à une totale confiance en toi. Les moyens que tu déployes pour la réussite de l’autre et bien sur pour déployer ses moyens il faut un savoir-faire une grande connaissance du domaine et donc de l’expérience, chose que j’ai trouvé chez toi. 2/ La clé qui m’a servi, c’est le dialogue avec mon enfant, la pose des limites car sans ces limites l’enfant est perdu et c’est la source de problèmes. 3/ J’ai vécu cette expérience avec une grande paix intérieure car en tant que parent on essaie de trouver des solutions pour apporter une atmosphère agréable à la maison avec nos enfants donc on cherche une bouée de sauvetage et je te remercie Myriam pour m’avoir apporté tes précieux conseils, qui ne peuvent être que les fruits d’une société meilleure.",
    name: "Sonia",
  },
  {
    text: "Un grand merci à toi pour ton aide précieuse, tu as su me cerner et m’apporter l’aide dont j’avais besoin, tu m’as permis de me reconnecter à moi-même en me faisant prendre conscience de mes besoins vitaux qui me permettent d’aller de l’avant sereinement. Tu m’as permis de faire une véritable introspection bienveillante, toujours à l’écoute disponible ! une expérience exceptionnelle qui fleurit jour après jour !",
    name: "Farès",
  },
  {
    text: "Finalisation de parcousup pour mon fils ainé. Après avoir identifié son mo2i, il a été accompagné efficacement dans sa recherche d’orientation par MyriamSensei je vous la recommande à 1000%.",
    name: "Hayat",
  }, 
  {
    text: "Myriam m’a proposé de faire une modélisation de stratégie autour du passage à l’action pour lutter contre la procrastination. Je n’y avais pas pensé. Après les 2 sessions j’ai eu le tilt dont j’avais besoin.",
    name: "Marie",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
      once: true, // L'animation ne se joue qu'une seule fois
    });
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl py-12 px-12">
        <h1 className="text-4xl font-titan-one font-bold text-violet mb-6">
          Témoignages
        </h1>
        <div 
          className="bg-white rounded-lg shadow-lg p-8 mb-6"
          data-aos="fade-up"
        >
          <div className="relative">
            {/* Témoignage */}
           <div className="font-gotu text-center transition-all duration-500 ease-in-out">
              <p className="text-lg text-gray-600 italic p-10 mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-right text-sm font-semibold text-gray-800">
                - {testimonials[currentIndex].name}
              </p>
            </div>

            {/* Boutons de navigation */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary p-2 rounded-full hover:text-gold"
            >
              ❮
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary p-2 rounded-full hover:text-gold"
            >
              ❯
            </button>
          </div>

          {/* Indicateurs de position */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gold'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}