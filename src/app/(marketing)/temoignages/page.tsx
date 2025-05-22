'use client';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const testimonials = [
  {
    type: 'text',
    text: "Tres bonne experience a travers cette session SERUM. Ca a confirme ce que j'avais commence a mettre en place dans mes nouveaux objectifs de vie. Mon accompagnatrice a ete geniale. Elle m'a accompagne lors du test mais aussi pour la comprehension des resultats. Elle m'a explique des choses que je n'aurais pas vues sans elle. Je recommande vraiment cette session et l'accompagnatrice qui a ete tres professionnelle et a l'ecoute.",
    name: "Samia",
  },
  {
    type: 'text',
    text: "J'ai contacte MaryamSensei pour mon fils actuellement en seconde, et comme beaucoup de parents, je souhaite que mon fils puisse faire le bon choix dans son orientation. Mon fils a tout de suite accroche avec Maryam ! Et il a compris par lui-meme la necessite de ce coaching. Il est maintenant acteur dans cette demarche. Je suis tres epatee par le professionnalisme de Maryame et je suis tres reconnaissante pour ces recherches, tout le travail qu'elle a fourni en un temps record ! Je me sens totalement rassuree pour son orientation et allegee de toutes ces demarches. J'ai enfin trouve une solution pour que mon fils puisse faire son juste choix et prendre son envol en toute confiance. Un grand merci a toi Maryam.",
    name: "Karima",
  },
  {
    type: 'text',
    text: "1/ Ce qui m'a pousse a te faire confiance ma chere Myriam, c'est avant tout la serenite que tu portes en toi. L'habitude que tu as vis-a-vis de tes enfants, de tes proches, c'est ce qui m'inspire en toi et me mene a une totale confiance en toi. Les moyens que tu deploies pour la reussite de l'autre et bien sur pour deployer ses moyens il faut un savoir-faire une grande connaissance du domaine et donc de l'experience, chose que j'ai trouve chez toi. 2/ La cle qui m'a servi, c'est le dialogue avec mon enfant, la pose des limites car sans ces limites l'enfant est perdu et c'est la source de problemes. 3/ J'ai vecu cette experience avec une grande paix interieure car en tant que parent on essaie de trouver des solutions pour apporter une atmosphere agreable a la maison avec nos enfants donc on cherche une bouee de sauvetage et je te remercie Myriam pour m'avoir apporte tes precieux conseils, qui ne peuvent etre que les fruits d'une societe meilleure.",
    name: "Sonia",
  },
  {
    type: 'text',
    text: "Un grand merci a toi pour ton aide precieuse, tu as su me cerner et m'apporter l'aide dont j'avais besoin, tu m'as permis de me reconnecter a moi-meme en me faisant prendre conscience de mes besoins vitaux qui me permettent d'aller de l'avant sereinement. Tu m'as permis de faire une veritable introspection bienveillante, toujours a l'ecoute disponible ! une experience exceptionnelle qui fleurit jour apres jour !",
    name: "Fares",
  },
  {
    type: 'text',
    text: "Finalisation de parcousup pour mon fils aine. Apres avoir identifie son mo2i, il a ete accompagne efficacement dans sa recherche d'orientation par MyriamSensei je vous la recommande a 1000%.",
    name: "Hayat",
  },
  {
    type: 'text',
    text: "Myriam m'a propose de faire une modelisation de strategie autour du passage a l'action pour lutter contre la procrastination. Je n'y avais pas pense. Apres les 2 sessions j'ai eu le tilt dont j'avais besoin.",
    name: "Marie",
  },
  {
    type: 'image',
    images: [
      "/1myriam.jpg",
      "/2myriam.jpg",
      "/3myriam.jpg",
      "/4myriam.jpg",
      "/5myriam.jpg",
      "/6myriam.jpg",
    ],
    name: "Galerie d'images",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-titan-one font-bold text-violet mb-6 text-center">
          Témoignages
        </h1>
        <div
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-6"
          data-aos="fade-up"
        >
          <div className="relative">
            {testimonials[currentIndex].type === 'text' ? (
              <div className="font-gotu text-center transition-all duration-500 ease-in-out">
                <p className="text-base sm:text-lg text-gray-600 italic px-4 sm:px-10 py-6 sm:py-10 mb-6">
                  {`"${testimonials[currentIndex].text}"`}
                </p>
                <p className="text-right text-sm sm:text-base font-semibold text-gray-800">
                  - {testimonials[currentIndex].name}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {testimonials[currentIndex].images?.map((image, index) => (
                  <div key={index} className="relative w-full h-48 sm:h-64">
                    <Image
                      src={image}
                      alt={`Témoignage image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary p-2 sm:p-3 rounded-full hover:text-gold"
              aria-label="Témoignage précédent"
            >
              ❮
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-primary p-2 sm:p-3 rounded-full hover:text-gold"
              aria-label="Témoignage suivant"
            >
              ❯
            </button>
          </div>

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