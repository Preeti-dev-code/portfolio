import React from 'react';
import Section from './Section';
import { CERTIFICATIONS, ICONS } from '../constants';

const Certifications = () => {
    return (
        <Section id="certifications" title="Certifications & Achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="bg-secondary rounded-lg p-6 flex flex-col items-start shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-2">
                        <div className="mb-4">
                            {ICONS.certificate}
                        </div>
                        <h3 className="text-xl font-bold text-light mb-2">{cert.title}</h3>
                        <p className="text-accent font-semibold mb-3">{cert.issuer}</p>
                        <p className="text-light/70 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
