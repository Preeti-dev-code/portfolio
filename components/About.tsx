import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="max-w-4xl mx-auto text-center text-light/80 text-lg leading-relaxed">
                <p className="mb-6">
                    A tech enthusiast with a strong foundation in Python, C++, Java, MySQL, DBMS, DSA, JavaScript, HTML, CSS, and .NET.
                </p>
                <p className="mb-6">
                    I am proficient with a variety of tools and editors, including VS Code, MySQL, Jupyter Notebook, and IntelliJ IDEA, which enables me to tackle diverse development challenges efficiently.
                </p>
                <p>
                    I am eager to apply my skills to contribute to an organization's growth and success, and I am always looking for opportunities to showcase my abilities and learn new technologies.
                </p>
            </div>
        </Section>
    );
};

export default About;