'use client';

import React, { useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Answer {
  question: string;
  options: string[];
}

const questions: Answer[] = [
  {
    question: "Vous avez enfin dégagé du temps pour aller à votre séance de sport. En plein échauffement, vous recevez un appel urgent du dentiste pour décaler le rendez-vous d'un de ses enfants. Comment réagiriez-vous ?",
    options: [
      "Vous décrochez et répondez : « C'est n'importe quoi ! Vous auriez pu prévenir plus tôt. Vous ne respectez pas du tout mon planning ! »",
      "Vous décrochez en pensant que « ce n'est pas si grave », qu'il faut gérer immédiatement la situation et que vous reviendrez plus tard. Vous arrangez même la secrétaire au bout du fil.",
      "Vous décrochez, dépité, vous demandant « pourquoi c'est toujours sur vous que ça tombe ! » Vous compatissez quand même avec la secrétaire au bout du fil.",
      "Vous êtes occupé pour le moment, votre téléphone reste à sonner dans votre sac, et si c'est si urgent que cela, il rappellera."
    ]
  },
  {
    question: "Vous demandez à votre ado de faire ses devoirs, mais il repousse encore : « Plus tard, t'inquiète pas je gère », alors qu'il est « occupé » sur son téléphone depuis 2h déjà.",
    options: [
      "« T'es sérieux là ? Tu vas encore avoir des mauvaises notes si tu continues comme ça ! »",
      "« Je vais t'aider à t'organiser, on va faire un planning pour que tu ne sois plus pris de cours le dimanche soir. »",
      "« Je suis épuisée, je n'ai pas le temps de m'occuper de tes devoirs. Pourquoi est-ce que c'est toujours à moi de tout gérer ? »",
      "Vous pensez : « Il semble repousser constamment ses devoirs. Peut-être qu'il a des difficultés qu'il n'ose pas partager. » Et vous attendez le moment opportun pour en rediscuter."
    ]
  },
  {
    question: "Lors d'une réunion de travail, un collègue propose une idée avec laquelle vous n'êtes pas d'accord. Vous estimez que son approche est inefficace.",
    options: [
      "« C'est une idée absurde, ça ne fonctionnera jamais ! Tu ne réfléchis pas avant de proposer quelque chose ? »",
      "« Je vais reprendre ton idée et l'améliorer. Je vais m'en occuper à ta place, mais ne t'inquiète pas. »",
      "« Pourquoi est-ce toujours à moi de corriger les mauvaises idées des autres ? J'en ai marre, je suis déjà tellement débordé. »",
      "« Je vois que cette idée pourrait poser des défis. Quelles alternatives pouvons-nous explorer pour mieux répondre aux besoins du projet ? »"
    ]
  }
];

interface ResultDetails {
  title: string;
  analysis: string;
  advice: string;
  image: string;
}

const results: Record<'persecutor' | 'savior' | 'victim' | 'observer', ResultDetails> = {
  persecutor: {
    title: "Le Persécuteur",
    analysis: "Vous avez tendance à critiquer ou à accuser les autres.",
    advice: "Essayez de comprendre les besoins des autres et de communiquer avec bienveillance.",
    image: '/persécuteur.png'
  },
  savior: {
    title: "Le Sauveur",
    analysis: "Vous cherchez souvent à aider même sans qu'on vous le demande.",
    advice: "Apprenez à respecter les limites des autres et à vous concentrer sur vos propres besoins.",
    image: '/sauveur.png'
  },
  victim: {
    title: "La Victime",
    analysis: "Vous vous sentez souvent impuissant ou maltraité.",
    advice: "Travaillez sur votre confiance en vous et votre capacité à prendre des initiatives.",
    image: '/victime.png'
  },
  observer: {
    title: "L'Observateur",
    analysis: "Vous préférez rester neutre et éviter les conflits.",
    advice: "Essayez de participer activement et de prendre position lorsque nécessaire.",
    image: '/observateur.png'
  }
};

interface KarpmanQuizProps {
  onClose: () => void;
}

interface SubscribeResponse {
  success?: boolean;
  error?: string;
}

const KarpmanQuiz: React.FC<KarpmanQuizProps> = ({ onClose }) => {
  const router = useRouter();
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(0 | 1 | 2 | 3)[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState<'persecutor' | 'savior' | 'victim' | 'observer' | null>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers: (0 | 1 | 2 | 3)[] = [...answers, answerIndex as 0 | 1 | 2 | 3];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
      setShowEmailForm(true);
    }
  };

  const calculateResult = (finalAnswers: (0 | 1 | 2 | 3)[]) => {
    const counts = { 0: 0, 1: 0, 2: 0, 3: 0 };
    finalAnswers.forEach((answer: 0 | 1 | 2 | 3) => counts[answer]++);
    
    const maxCount = Math.max(...Object.values(counts));
    const dominantRole = 
      counts[0] === maxCount ? 'persecutor' :
      counts[1] === maxCount ? 'savior' :
      counts[2] === maxCount ? 'victim' : 'observer';
    
    setResult(dominantRole);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('loading');
    setEmailError(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${text.slice(0, 100)}...`);
      }

      const data: SubscribeResponse = await response.json();

      if (data.success) {
        setEmailStatus('success');
        setShowEmailForm(false);
        setShowModal(true);
      } else {
        throw new Error(data.error || 'Failed to subscribe');
      }
    } catch (error: unknown) {
      setEmailStatus('error');
      if (error instanceof Error) {
        setEmailError(error.message || 'Une erreur s’est produite. Veuillez réessayer.');
      } else {
        setEmailError('Une erreur s’est produite. Veuillez réessayer.');
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowModal(false);
    setShowEmailForm(false);
    setResult(null);
    setEmail('');
    setEmailStatus('idle');
    setEmailError(null);
    onClose();
  };

  const startQuiz = () => {
    setIsStarted(true);
  };

  return (
    <div className="fixed inset-0 bg-light-gold/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 font-nunito-sans rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h1 className="text-2xl text-center font-extrabold text-primary mb-4">Quel rôle jouez-vous dans vos relations ?</h1>
        <p className="mb-6 mx-auto text-center">Découvrez si vous êtes plutôt Victime, Persécuteur, Sauveur ou Observateur selon le triangle de Karpman.<br /><br />Voici la situation :</p>

        {!isStarted ? (
          <div className="flex flex-col items-center">
            <button
              onClick={startQuiz}
              className="px-3 py-3 bg-violet text-white rounded-full hover:bg-light-gold mb-4"
            >
              Lancer le quiz
            </button>
            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-gold cursor-pointer"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            {currentQuestion < questions.length && !showEmailForm && (
              <div>
                <h2 className="text-xl p-5 mb-2">{questions[currentQuestion].question}</h2>
                <div className="space-y-4 p-5">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className="w-full text-left p-3 bg-gray-100 hover:bg-light-gold rounded"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showEmailForm && (
              <div className="p-5">
                <h2 className="text-xl font-bold text-primary mb-4 text-center">
                  Entrez votre email pour voir vos résultats
                </h2>
                <p className="mb-4 text-center text-gray-600">
                  Recevez des conseils personnalisés directement dans votre boîte mail !
                </p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="w-full max-w-md p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet"
                    required
                  />
                  <button
                    type="submit"
                    disabled={emailStatus === 'loading'}
                    className="px-6 py-3 bg-violet text-white rounded-full hover:bg-light-gold disabled:opacity-50"
                  >
                    {emailStatus === 'loading' ? 'Envoi...' : 'Voir mes résultats'}
                  </button>
                  {emailStatus === 'error' && (
                    <p className="mt-2 text-red-600">{emailError}</p>
                  )}
                  {emailStatus === 'success' && (
                    <p className="mt-2 text-green-600">Inscription réussie ! Voici vos résultats.</p>
                  )}
                </form>
              </div>
            )}

            {showModal && result && (
              <Modal onClose={resetQuiz}>
                <h2 className="text-2xl font-extrabold font-gotu text-primary mb-4">{results[result].title}</h2>
                <img
                  src={results[result].image}
                  alt={results[result].title}
                  className="w-full max-w-xs mx-auto mb-4 rounded"
                />
                <p className="mb-4"><strong>Analyse :</strong> {results[result].analysis}</p>
                <p className="mb-4"><strong>Piste :</strong> {results[result].advice}</p>
                <p className="mb-4">Ce jeu est une première étape pour prendre conscience de vos comportements dans vos relations. Pour aller plus loin, contactez-moi !</p>
                <Link href="https://zcal.co/jeudemindset/presentationpro" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 bg-violet text-white rounded-full hover:bg-light-gold transition">
                    Contactez-moi
                  </button>
                </Link>
              </Modal>
            )}

            {!showModal && !showEmailForm && currentQuestion >= questions.length ? null : (
              <button
                onClick={() => router.back()}
                className="px-4 py-2 text-gold cursor-pointer"
              >
                Fermer
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default KarpmanQuiz;