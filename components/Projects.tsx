import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;