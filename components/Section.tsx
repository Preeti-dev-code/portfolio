import React from 'react';

const Section = ({ id, title, children }) => {
    return (
        <section id={id} className="py-20 lg:py-28 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">{title}</h2>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>
            {children}
        </section>
    );
};

export default Section;