// app/quiz/page.tsx
'use client'; // Ajoutez ceci pour en faire un Client Component

import { useRouter } from 'next/navigation'; // Pour gérer la navigation
import KarpmanQuiz from '../components/KarpmanQuiz';
import Link from 'next/link';

export default function QuizPage() {
  const router = useRouter(); // Hook pour naviguer programmatiquement

  const handleClose = () => {
    router.back(); // Revient à la page précédente
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative">
        <KarpmanQuiz onClose={handleClose} />
        <Link href="/" className="absolute top-4 right-4 text-blue-500 hover:underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}