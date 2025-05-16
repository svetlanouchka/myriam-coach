'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offres = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Offre 1 */}
      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-extrabold bg-text text-purple-700 mb-6">Mieux se connaître pour mieux avancer</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/offre1.jfif" alt="Illustration SERUM" className="w-4/6 mx-auto h-auto rounded-md shadow-md hover:transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <p className="text-lg mb-4">Vous vous sentez bloqué·e et vous avez besoin de comprendre comment vous fonctionnez vraiment ?</p>
            <p className="mb-4">Grâce à la méthode <strong>SERUM</strong>, faites un bilan de votre situation personnelle et professionnelle :</p>
            <ul className="list-disc list-inside mb-4">
              <li>Vos forces et leviers de motivation</li>
              <li>Vos schémas comportementaux et blocages invisibles</li>
              <li>Comment aligner vos actions avec votre fonctionnement naturel</li>
            </ul>
            <p className="mb-4"><strong>Ce que vous obtenez :</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Un profil d’analyse comportementale (PCM et MBTI)</li>
              <li>Un débrief personnalisé d’1h30</li>
              <li>Une meilleure compréhension de vous-même</li>
            </ul>
            <p className="mb-4">Pour kids (10-15 ans), adultes (16+), et groupes. Contactez-moi pour les groupes.</p>
            <p className="mb-4"><strong>Processus :</strong> Paiement → Test en ligne → Débrief (distanciel ou présentiel à Lyon).</p>
            <p className="mb-4 italic">Note : Pas de remboursement après le test.</p>
            <a href="https://zcal.co/jeudemindset/SERUM" className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition">Acheter maintenant</a>
          </div>
        </div>
      </section>

      {/* Offre 2 */}
      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-extrabold bg-text text-purple-700 mb-6">Débloquez Votre Situation avec la Méthode SPASA</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/offre2.jfif" alt="Illustration SPASA" className="w-4/6 mx-auto h-auto rounded-md shadow-md hover:transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <p className="text-lg mb-4">Vous vous sentez bloqué·e par une décision ou un projet ?</p>
            <p className="mb-4">Avec la méthode <strong>SPASA</strong>, débloquez-vous grâce à un questionnement puissant :</p>
            <ul className="list-disc list-inside mb-4">
              <li>Nouvelles perspectives</li>
              <li>Prise de conscience immédiate</li>
              <li>Plan d’action concret</li>
            </ul>
            <p className="mb-4"><strong>Ce que vous obtenez :</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Session unique de 60-90 min</li>
              <li>Questionnement ciblé</li>
              <li>Plan d’action immédiat</li>
            </ul>
            <p className="mb-4 italic">Attention : Pas de solution miracle, mais des clés pour avancer.</p>
            <p className="mb-4"><strong>Processus :</strong> Paiement → Questionnaire (48h avant) → Rendez-vous.</p>
            <p className="mb-4 italic">Pas de remboursement sauf cas exceptionnel.</p>
            <a href="https://zcal.co/jeudemindset/SPASA" className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition">Acheter maintenant</a>
          </div>
        </div>
      </section>

      {/* Offre 3 */}
      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-extrabold bg-text text-purple-700 mb-6">Transform’Actions : 90 jours pour tout changer</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/offre3.jfif" alt="Illustration Transform’Actions" className="w-4/6 mx-auto h-auto rounded-md shadow-md hover:transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <p className="text-lg mb-4">Marre des méthodes sans résultats durables ?</p>
            <p className="mb-4"><strong>Transform’Actions</strong> vous aide à maîtriser motivation et énergie en 90 jours :</p>
            <ul className="list-disc list-inside mb-4">
              <li>Générez votre propre motivation</li>
              <li>Dirigez votre énergie efficacement</li>
              <li>Devenez autonome après le programme</li>
            </ul>
            <p className="mb-4"><strong>Ce que vous obtenez :</strong></p>
            <ul className="list-disc list-inside mb-4">
              <li>Accompagnement personnalisé (90 jours + 1 mois suivi)</li>
              <li>Groupe restreint (4 max)</li>
              <li>Sessions hebdo individuelles et collectives</li>
              <li>Soutien WhatsApp</li>
            </ul>
            <p className="mb-4 italic">Garantie : Remboursée sous 7 jours si insatisfaite.</p>
            <p className="mb-4">Disponible 3 fois/an. Suivez @jeudemindset pour les dates.</p>
            <a href="https://zcal.co/jeudemindset/pretransformactions" className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition">Réserver un appel gratuit</a>
          </div>
        </div>
      </section>

      {/* Atelier */}
      <section data-aos="fade-up" className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-extrabold bg-text text-purple-700 mb-6">Atelier : Trouver sa voie</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/offre4.jfif" alt="Illustration Atelier" className="w-4/6 mx-auto rounded-md shadow-md hover:transform hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <p className="text-lg mb-4"><strong>3h intenses</strong> avec workbook pour ados ou personnes en reconversion.</p>
            <p className="mb-4">Contactez-moi pour plus d’infos.</p>
            <p className="mb-4">D’autres ateliers à venir. Suivez @jeudemindset.</p>
            <a href="mailto:votre@email.com" className="inline-block bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition">Me contacter</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offres;