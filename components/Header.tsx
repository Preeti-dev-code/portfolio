import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navLinks = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-2xl font-bold text-light hover:text-accent transition-colors">
                    P.
                </a>
                <ul className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a 
                                href={`#${link.toLowerCase()}`} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link);
                                }}
                                className="text-light font-medium hover:text-accent transition-colors relative group"
                            >
                                {link}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    {/* Mobile Menu Button can be added here */}
                </div>
            </nav>
        </header>
    );
};

export default Header;