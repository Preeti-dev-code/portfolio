import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills = () => {
    return (
        <Section id="skills" title="My Tech Stack">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {SKILLS.map((skill, index) => (
                    <div
                        key={skill.name}
                        className="group flex flex-col items-center gap-3 p-6 bg-secondary rounded-xl w-32 h-32 justify-center transition-all duration-300 hover:bg-secondary/70 hover:scale-110 transform"
                    >
                        <div className="text-light transition-colors duration-300 group-hover:text-accent">
                            {skill.icon}
                        </div>
                        <p className="font-semibold text-light/90">{skill.name}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;