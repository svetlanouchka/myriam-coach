'use client';
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { BsMenuButtonFill } from 'react-icons/bs';
import Link from 'next/link';

const TypewriterSlogan: React.FC = () => {
  const lines = [
    "MOTIVER",
    "TRANSFORMER",
    "RÉVÉLER",
    "la meilleure version de soi",
  ];

  const fonts = [
    "font-titan-one",
    "font-agbalumo",
    "font-codystar",
    "font-gotu",
  ];

  const typingSpeed = 100;
  const delayBetweenLines = 500;

  const [displayedLines, setDisplayedLines] = useState(["", "", "", ""]);
  const [showButton, setShowButton] = useState(false);
  const revealLettersRef = useRef<NodeListOf<Element> | null>(null);
  const bestVersionRef = useRef<HTMLHeadingElement | null>(null);


  // Effet pour l'animation de frappe
  useEffect(() => {
    let currentLine = 0;
    let index = 0;

    const typeLine = () => {
      if (currentLine >= lines.length) {
        setShowButton(true);
        return
        } ;

      const interval = setInterval(() => {
        setDisplayedLines((prevLines) => {
          const newLines = [...prevLines];
          newLines[currentLine] = lines[currentLine].slice(0, index + 1);
          return newLines;
        });

        index++;

        if (index === lines[currentLine].length) {
          clearInterval(interval);
          setTimeout(() => {
            currentLine++;
            index = 0;
            typeLine();
          }, delayBetweenLines);
        }
      }, typingSpeed);
    };

    typeLine();
  }, []);

  // Effet pour le halo sur la dernière ligne
  useEffect(() => {
    if (displayedLines[3] === lines[3] && bestVersionRef.current) {
      gsap.to(bestVersionRef.current, {
        boxShadow: "0 0 40px 10px rgba(255, 215, 0, 0.3)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [displayedLines]);

  // Effet pour les interactions au survol (lettres et dernière ligne)
  useEffect(() => {
    // Gestion des lettres de "RÉVÉLER"
    const letters = document.querySelectorAll('.révéler .letter');
    revealLettersRef.current = letters;

    letters.forEach((letter) => {
      const onMouseEnter = () => {
        gsap.to(letter, {
          textShadow: '0 0 15px 2px rgba(255, 255, 255, 0.8)',
          color: '#fff',
          duration: 0.3,
        });
      };

      const onMouseLeave = () => {
        gsap.to(letter, {
          textShadow: '0 0 0 rgba(0, 0, 0, 0)',
          color: '#FFD700',
          duration: 0.3,
        });
      };

      letter.addEventListener('mouseenter', onMouseEnter);
      letter.addEventListener('mouseleave', onMouseLeave);

      // Nettoyage des événements
      return () => {
        letter.removeEventListener('mouseenter', onMouseEnter);
        letter.removeEventListener('mouseleave', onMouseLeave);
      };
    });

    // Gestion de la dernière ligne
    const element = bestVersionRef.current;
    if (element) {
      const onMouseEnter = () => {
        gsap.to(element, {
          textShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      };

      const onMouseLeave = () => {
        gsap.killTweensOf(element);
        gsap.to(element, {
          textShadow: 'none',
          duration: 0.5,
        });
      };

      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);

      // Nettoyage des événements
      return () => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      };
    }
  }, [displayedLines]); // Dépendance sur displayedLines pour s'assurer que les éléments sont rendus

  const renderLine = (text: string, idx: number) => {
    const className = `${fonts[idx]} sm:text-5xl md:text-6xl lg:text-7xl text-3xl text-gold text-center p-2 transition-opacity duration-500`;

    if (idx < 3) {
      return (
        <h1
          key={idx}
          className={`${className} ${text ? "opacity-100" : "opacity-0"} ${text.toLowerCase()}`}
        >
          {text.split("").map((letter, i) => (
            <span key={i} className="inline-block mx-0.5 letter">
              {letter}
            </span>
          ))}
        </h1>
      );
    }

    return (
      <h1
        key={idx}
        ref={bestVersionRef}
        className={`${className} ${text ? "opacity-100" : "opacity-0"} meilleure-version`}
      >
        {text}
      </h1>
    );
  };

  return (
    <div className="flex flex-col items-center justify-start lg:h-screen sm:h-[90vh] bg-primary space-y-4 px-4 pt-8 pb-8 sm:pt-16 sm:pb-4 mx-auto">
      {displayedLines.map((text, idx) => renderLine(text, idx))}
      {showButton && (
        <Link href="https://docs.google.com/forms/d/1n94YcGUDTIUSqxX3aGIC9Stlq9Fp5v9O_utr6TRDkwQ/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 sm:px-6 sm:py-2 mt-4 sm:mt-6 bg-violet text-white rounded-full hover:bg-light-gold transition duration-300 cursor-pointer text-sm sm:text-base">
            Découvrez votre archétype
          </button>
        </Link>
      )}
    </div>
  );
};

export default TypewriterSlogan;