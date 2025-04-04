"use client";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// export const metadata = {
//   title: "Parcours de Myriam Saï",
//   description: "Myriam",
// };

export default function Parcours() {
  useEffect(() => {
    AOS.init({ duration: 800 }); // Durée des animations : 800ms
  }, []);

  return (
    <div className="container mx-auto font-nunito-sans px-32 py-12 space-y-12 bg-white">
      {/* Section 1: Qui suis-je ? */}
      <section data-aos="fade-up" className="text-justify">
        <h1 className="text-4xl font-titan-one font-bold text-violet pl-12 mb-6">Qui suis-je ?</h1>
        <div className="max-w-2xl mx-auto space-y-4 text-lg leading-relaxed text-gray-700">
          <p >Je suis Myriam, fondatrice de JeuDeMindset.</p>
          <p>Devenir coach en motivation n’était pas dans mes plans initiaux.</p>
          <div className="max-w-3xl mx-auto space-y-4 text-lg leading-relaxed text-gray-700">
          <p>
            Mon parcours a débuté dans le monde associatif, où <b>j’ai passé 15 ans à accompagner des femmes âgées de 14 à 40 ans.</b>
          </p>
          </div>
          <p>
            En travaillant avec les familles, j’ai remarqué un problème fréquent : <b>les jeunes sont souvent perdus dans leur orientation</b>, créant des tensions avec leurs parents qui ont de grandes attentes.
          </p>
          <p>
            Malgré mon dévouement, je me sentais frustrée : je n’arrivais pas à transformer les mentalités de manière durable.
          </p>
          <p>
            J’ai pris une pause pour me recentrer sur ma famille. Puis, le Covid a tout changé. C’est là que j’ai découvert les stratégies comportementales.
          </p>
          <p>
            Tout s’est éclairci : <b>je voulais aider les jeunes à trouver du sens et à devenir acteurs de leur avenir.</b>
          </p>
        </div>
        <img
          src="/photo_profil.png"
          alt="Myriam Saï"
          className="w-32 h-32 mx-auto mt-6 rounded-full shadow-lg"
        />
      </section>

      {/* Section 2: Pourquoi JeuDeMindset existe ? */}
      <section data-aos="fade-up" className="bg-light-gold p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold pb-4 text-dark-violet">Pourquoi JeuDeMindset existe ?</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            JeuDeMindset est né d’un constat : libérer le potentiel des jeunes demande de s’attaquer à la racine du problème.
          </p>
          <p>
            Derrière un manque de motivation, il y a souvent des <b>influences invisibles : attentes oppressantes, croyances limitantes ou non-dits.</b>
          </p>
          <p>
            Je crois que la motivation est le moteur du changement. Ma mission est double :
          </p>
          <p>
            <i>Accompagner les femmes actives, souvent des mères débordées, à se libérer de leurs blocages, tout en inspirant une nouvelle génération.</i>
          </p>
        </div>
        <img
          src="/motivation.jfif"
          alt="Symbole de motivation"
          className="w-80 h-80 mx-auto mt-6 hover:transform hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg"
        />
      </section>

      {/* Section 3: Vision, Objectif, Mission */}
      <section data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-violet text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-agbalumo mb-2">Ma vision</h2>
          <p>
            La motivation est la clé d’un changement durable. Une femme motivée transforme positivement sa vie entière.
          </p>
        </div>
        <div className="bg-primary text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-agbalumo mb-2">Mon objectif</h2>
          <p>
            Faire de chaque femme un modèle inspirant pour elle-même et sa famille, grâce à ses ambitions.
          </p>
        </div>
        <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-agbalumo mb-2">Ma mission</h2>
          <p>
            Avec JeuDeMindset, je propose des outils et un accompagnement pour transformer vos doutes en forces.
          </p>
        </div>
      </section>

      {/* Section 4: Appel à l’action */}
      <section data-aos="fade-up" className="text-center">
        <h2 className="text-3xl font-bold font-nunito-sans text-primary mb-6">Prête à passer à l’action ?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="https://www.youtube.com/@jeudemindset" target="_blank">
            <button className="px-6 py-3 border-2 border-primary text-red-600 rounded-full hover:bg-violet hover:text-white transition transform hover:scale-105">
              Découvrir sur YouTube
            </button>
          </Link>
          <Link href="https://docs.google.com/forms/d/1n94YcGUDTIUSqxX3aGIC9Stlq9Fp5v9O_utr6TRDkwQ/viewform?edit_requested=true">
            <button className="px-6 py-3 bg-gold text-white rounded-full hover:bg-light-gold transition transform hover:scale-105">
              Découvrez votre Archétype
            </button>
          </Link>
          <Link href="/quizz">
            <button className="px-6 py-3 bg-violet text-white rounded-full hover:bg-gold transition transform hover:scale-105">
              Quiz : Triangle Karpman
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}