'use client';

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface PresentationMyriamProps {
  text: string;
  imageUrl: string;
}

export default function PresentationMyriam({ text, imageUrl }: PresentationMyriamProps) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-light-gold min-h-[70vh] justify-center mx-auto px-4 py-8 sm:px-10 sm:py-12">
      {/* Texte à gauche */}
      <div className="md:w-1/2 text-center md:text-left px-4 sm:pl-10">
        <p className="text-base sm:text-lg md:text-xl text-primary">{text}</p>

        {/* Boutons avec liens */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
          <Link href="/parcours">
            <Button
              idButton="btnParcours"
              text="En savoir plus"
              type="button"
              style={{ background: "linear-gradient(to right, #d6c26f, #cfba3f, #cfba3f)" }}
              onClick={() => {
                window.location.href = "/parcours";
              }}
            />
          </Link>
          <Link href="https://zcal.co/jeudemindset/presentationpro" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-violet text-white rounded-full hover:bg-gold transition text-sm sm:text-base">
              Contactez-moi
            </button>
          </Link>
        </div>
      </div>

      {/* Image ronde à droite */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt="Myriam"
            width={200}
            height={200}
            className="object-cover w-full h-full shadow-md hover:transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}