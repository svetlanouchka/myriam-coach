'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type ButtonProps = {
  idButton: string;
  text: string;
  type: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  onClick: () => void;
};

export default function ButtonMain({ idButton, text, type, style, onClick }: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (button) {
      // Animation au survol
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Brillance blanche
          duration: 0.3,
        });
      });

      // Retour à l'état initial
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          boxShadow: 'none',
          duration: 0.3,
        });
      });

      // Nettoyage des écouteurs pour éviter les fuites mémoire
      return () => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      };
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      id={idButton}
      type={type}
      onClick={onClick}
      style={{
        ...style,
        background: 'linear-gradient(to right, #d6c28f, #C8AE6A, #d6c28f)', // Dégradé inline
      }}
      
      className="px-4 py-2 font-semibold rounded-3xl transition-all cursor-pointer"
    >
      {text}
    </button>
  );
}