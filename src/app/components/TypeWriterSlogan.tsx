'use client';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

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

  useEffect(() => {
    let currentLine = 0;
    let index = 0;

    const typeLine = () => {
      if (currentLine >= lines.length) return;

      let interval = setInterval(() => {
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

  useEffect(() => {
    // Halo effect sur la dernière ligne après apparition
    if (displayedLines[3] === lines[3]) {
      gsap.to(".meilleure-version", {
        boxShadow: "0 0 40px 10px rgba(255, 215, 0, 0.3)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [displayedLines]);

  document.querySelectorAll('.révéler .letter').forEach((letter) => {
  letter.addEventListener('mouseenter', () => {
    gsap.to(letter, {
      textShadow: '0 0 15px 2px rgba(255, 255, 255, 0.8)',
      color: '#fff',
      duration: 0.3,
    });
  });
  letter.addEventListener('mouseleave', () => {
    gsap.to(letter, {
      textShadow: '0 0 0 rgba(0, 0, 0, 0)',
      color: '#FFD700',
      duration: 0.3,
    });
  });
});

const element = document.querySelector('.meilleure-version');

if (element) {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      textShadow: '0 0 20px rgba(255, 215, 0, 0.8)', // halo doré
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.killTweensOf(element);
    gsap.to(element, {
      textShadow: 'none',
      duration: 0.5,
    });
  });
}

  const renderLine = (text: string, idx: number) => {
    const className = fonts[idx] + " text-4xl md:text-7xl/15 text-gold text-center p-2 transition-opacity duration-500";

    // Pour les 3 premiers mots : on découpe en lettres
    if (idx < 3) {
      return (
        <h1 key={idx} className={`${className} ${text ? "opacity-100" : "opacity-0"} ${text.toLowerCase()}`}>
          {text.split("").map((letter, i) => (
            <span key={i} className="inline-block mx-0.5 letter">{letter}</span>
          ))}
        </h1>
      );
    }

    // Pour la dernière ligne : pas de découpage
    return (
      <h1 key={idx} className={`${className} ${text ? "opacity-100" : "opacity-0"} meilleure-version`}>
        {text}
      </h1>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary space-y-4">
      {displayedLines.map((text, idx) => renderLine(text, idx))}
    </div>
  );
};

export default TypewriterSlogan;
