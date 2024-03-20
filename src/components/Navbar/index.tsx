"use client"
import { useState, useEffect } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {

            const navLinks = document.querySelectorAll('.navLinks');

            navLinks.forEach(link => {
                link.addEventListener('mouseleave', function() {
                    link.classList.add('delay-300');

                    setTimeout(() => {
                        link.classList.remove('delay-300');
                    }, 500);
                });
            });
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <nav className="relative p-4 text-or">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/image/Logo-mon-site.svg" alt="Logo de votre entreprise" className="h-16 w-16"/>
                </div>

                {/* Menu */}
                <div className="sm:flex hidden">
                    <a href="#accueil" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-700 rounded-md relative">
                        Accueil
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-white transition-shadow duration-300 before:content-before"></span>
                    </a>
                    <a href="#aPropos" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-700 rounded-md relative">
                        À Propos
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-white transition-shadow duration-300 before:content-before"></span>
                    </a>
                    <a href="#projets" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-700 rounded-md relative">
                        Projets
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-white transition-shadow duration-300 before:content-before"></span>
                    </a>
                    <a href="#contact" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-700 rounded-md relative">
                        Contact
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-white transition-shadow duration-300 before:content-before"></span>
                    </a>
                </div>

                {/* Menu Burger */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-or focus:outline-none focus:bg-stone-900"
                        aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                        aria-expanded={menuOpen ? 'true' : 'false'}
                    >
                        <svg
                            className="w-6 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu déroulant */}
            <div className={`sm:hidden flex flex-col items-center justify-center absolute top-full right-0 h-80 w-full text-center -mt-4 rounded-md bg-stone-900 ${menuOpen ? 'block' : 'hidden'} shadow-custom`}>
                <a href="#accueil" className="block text-or py-2 px-4"><span className="shadow">Accueil</span></a>
                <a href="#a-propos" className="block text-or py-2 px-4"><span className="shadow">À Propos</span></a>
                <a href="#projets" className="block text-or py-2 px-4"><span className="shadow">Projets</span></a>
                <a href="#contact" className="block text-or py-2 px-4"><span className="shadow">Contact</span></a>
            </div>
        </nav>
    )
}
