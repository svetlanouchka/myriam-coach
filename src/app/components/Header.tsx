'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Parcours", href: "/parcours" },
    { name: "Contact", href: "/contact" },
    { name: "Quizz", href: "/quizz" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/services" },
    { name: "Temoignages", href: "/temoignages" }];

const Header = () => {

    const pathname = usePathname();
    console.log(pathname);

    return (
    <ul>
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
                <li key={link.name}>
                    <Link 
                        href={link.href}
                        className={isActive ? "text-green-500" : "text-blue-500"}
                    >{link.name}</Link>
                </li>
            )
})}
        
    </ul>
    )
}


export default Header
