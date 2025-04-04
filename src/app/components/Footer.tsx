
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-violet text-light-gold py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section Logo et Descriptif */}
        <div>
          <div className="mb-4">
            {/* Placeholder pour le logo - remplacez par votre image */}
            <Link href="/">
              <span className="text-2xl font-bold">Myriam Saï, Coach Motivation</span>
              <img src="/logo_slogan.png" alt="Logo JeuDeMindset" className="w-64 mt-2" />
            </Link>
          </div>
          
        </div>

        {/* Section Sitemap */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Plan du site</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/parcours" className="hover:text-gray-300">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/quiz" className="hover:text-gray-300">
                Quiz Karpman
              </Link>
            </li>
            <li>
              <Link href="/offres" className="hover:text-gray-300">
                Offres
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-moi</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/jeudemindset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@jeudemindset"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeudemindset/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne de copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Myriam Saï, Coach Motivation. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;