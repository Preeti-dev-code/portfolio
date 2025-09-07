import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="bg-primary min-h-screen">
            <Header />
            <main className="container mx-auto px-6 md:px-12 lg:px-20">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;