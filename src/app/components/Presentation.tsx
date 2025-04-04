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
    <div className="flex flex-col md:flex-row items-center bg-primary h-screen justify-center mx-auto p-30">
      {/* Texte à gauche */}
      <div className="md:w-1/2 text-center md:text-left pl-15">
        <p className="text-lg text-light-gold">{text}</p>

        {/* Boutons avec liens */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          <Link href="/parcours">
            <Button 
              idButton="btnParcours"
              text="En savoir plus"
              type="button"
              style={{ background: "linear-gradient(to right, #d6c28f, #C8AE6A, #d6c28f)" }}
              onClick={() => {
                window.location.href = "/parcours";
              }}
              />
            
          </Link>
          <Link href="https://zcal.co/jeudemindset/presentationpro">
            <button className="px-6 py-2 bg-violet text-white rounded-full hover:bg-light-gold transition">
              Contactez-moi
            </button>
          </Link>
        </div>
      </div>

      {/* Image ronde à droite */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg">
          <Image src={imageUrl} alt="Myriam" width={200} height={200} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}
