import React from 'react';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center">
            <div className="space-y-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
                    <img
                        src="https://picsum.photos/seed/portrait/150/150"
                        alt="Preeti"
                        className="w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto border-4 border-accent shadow-lg"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-light animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0 }}>
                    Preeti
                </h1>
                <p className="text-lg md:text-2xl text-light/80 animate-fade-in-up" style={{ animationDelay: '500ms', opacity: 0 }}>
                    Software Engineer
                </p>
                <p className="max-w-2xl mx-auto text-light/70 animate-fade-in-up" style={{ animationDelay: '700ms', opacity: 0 }}>
                    I build beautiful, responsive, and highly performant web applications with a focus on user experience and clean code.
                </p>
                <div className="flex justify-center space-x-4 pt-4 animate-fade-in-up" style={{ animationDelay: '900ms', opacity: 0 }}>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-8 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        View My Work
                    </a>
                    <button
                        onClick={scrollToContact}
                        className="px-8 py-3 bg-secondary text-light font-semibold rounded-full hover:bg-secondary/80 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;