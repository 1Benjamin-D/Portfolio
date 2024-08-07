"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {

        const navLinks = document.querySelectorAll('.navLinks');

        navLinks.forEach(link => {
            link.addEventListener('mouseleave', function () {
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
        <nav className="relative p-4 text-or font-Luciole">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image src="/images/logo.webp" alt="Logo" className="h-16 w-auto" width={343} height={275} />
                </div>

                {/* Menu */}
                <div className="sm:flex hidden">
                    <a href="#home" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-500 rounded-md relative hover:underline" tabIndex={1}>
                        Home
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-[#9B1D20] transition-shadow duration-300 before:content-before"></span>
                    </a>
                    <a href="#skills" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-500 rounded-md relative hover:underline" tabIndex={2}>
                        Skills
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-[#9B1D20] transition-shadow duration-300 before:content-before"></span>
                    </a>
                    <a href="#projects" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-500 rounded-md relative hover:underline" tabIndex={3}>
                        Projects
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-[#9B1D20] transition-shadow duration-300 before:content-before"></span>
                    </a>
                    <a href="#contact" className="navLinks ease-out transition-colors mx-1 py-2 px-4 hover:bg-gray-500 rounded-md relative hover:underline" tabIndex={4}>
                        Contact
                        <span className="absolute ease-in inset-0 rounded-md hover:shadow-[3px_3px_0px_1px_rgba(0,0,0,0.3)] hover:shadow-[#9B1D20] transition-shadow duration-300 before:content-before"></span>
                    </a>
                </div>

                {/* Menu Burger */}
                <div className="sm:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-or focus:outline-none"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
                <a href="#home" className="block text-or py-4 px-4"><span className="shadow">Home</span></a>
                <a href="#skills" className="block text-or py-4 px-4"><span className="shadow">Skills</span></a>
                <a href="#projects" className="block text-or py-4 px-4"><span className="shadow">Projects</span></a>
                <a href="#contact" className="block text-or py-4 px-4"><span className="shadow">Contact</span></a>
            </div>
        </nav>
    )
}
