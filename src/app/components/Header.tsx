'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import "../styles.css";
import ButtonMain from "./Button";

const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Parcours", href: "/parcours" },
    { name: "Contact", href: "/contact" },
    { name: "Quizz", href: "/quizz" },
    { name: "Offres", href: "/offres" },
    { name: "Temoignages", href: "/temoignages" }];

const Header = () => {

    const pathname = usePathname();

    const logoRef = useRef<HTMLImageElement>(null); // Référence pour le logo

    useEffect(() => {
    const logo = logoRef.current;

    if (logo) {
      // Animation GSAP pour le logo au survol
        logo.addEventListener('mouseenter', () => {
        gsap.to(logo, {
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Brillance blanche
            duration: 0.3,
        });
        });

        logo.addEventListener('mouseleave', () => {
        gsap.to(logo, {
            boxShadow: 'none',
            duration: 0.3,
            });
        });

      // Nettoyage des écouteurs
        return () => {
        logo.removeEventListener('mouseenter', () => {});
        logo.removeEventListener('mouseleave', () => {});
        };
    }
    }, []);

    return (
        <header>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
            <img
                ref={logoRef}
                src="/logoJdM.png"
                alt="Logo JeuDeMindset"
                className="w-12 h-12 p-2 cursor-pointer"
            />
        </div>
        <nav>    
            <ul className="flex space-x-6 ">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <li key={link.name}>
                            <Link 
                                href={link.href}
                                className={isActive ? "text-white" : "text-light-gold"}
                            >{link.name}</Link>
                        </li>
                    )
        })}
            </ul>
                </nav>
    <ButtonMain
        idButton="btnHeader"
        text="Réserver un appel"
        type="button"
        style={{ background: "linear-gradient(to right, #d6c28f, #C8AE6A, #d6c28f)" }}
        onClick={() => {
            window.location.href = "https://zcal.co/jeudemindset/presentationpro";
        }}
    />

    </div>
    </header>
    )
}


export default Header
