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
    if (svgRef.current && window.innerWidth >= 640) { // Only run on sm+ screens
      const path = svgRef.current.querySelector('ellipse');
      if (path) {
        try {
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
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          });
        } catch (error) {
          console.error('Error setting up SVG animation:', error);
        }
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-start lg:min-h-[60vh] h-[50vh] bg-violet px-4 pt-8 sm:pt-16 pb-8 mx-auto">
      <div className="relative" ref={wrapperRef}>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-gotu text-gold text-center font-bold px-4 sm:px-10 m-4 sm:m-10 py-4 sm:py-6 z-10 relative">
          {text.split(',').map((phrase, index) => (
            <div key={index} className="m-2">
              {phrase.trim()}
            </div>
          ))}
        </h2>

        <svg
          ref={svgRef}
          className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
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