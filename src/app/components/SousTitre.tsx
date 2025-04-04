'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SousTitreProps {
  text: string;
}

export default function SousTitre({ text }: SousTitreProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector('ellipse');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-violet">
      <div className="relative" ref={wrapperRef}>
        <h2 className="text-3xl md:text-4xl font-gotu text-light-gold text-center font-bold px-10 m-10 py-6 z-10 relative">
          {text.split(',').map((phrase, index) => (
            <div key={index} className="m-2">
              {phrase.trim()}
            </div>
          ))}
        </h2>

        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 400 200"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse
            cx="200"
            cy="100"
            rx="170"
            ry="100"
            stroke="#FFD700"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
