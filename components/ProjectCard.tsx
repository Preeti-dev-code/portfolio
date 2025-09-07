import React from 'react';

const ProjectCard = ({ project }) => {
    const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;

    return (
        <div className="bg-secondary rounded-lg overflow-hidden shadow-xl group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-light">{title}</h3>
                <p className="text-light/70 mb-4 h-24">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary text-accent text-sm font-medium rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex items-center justify-end space-x-4 mt-6">
                    {repoUrl && (
                         <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-light hover:text-accent font-medium transition-colors">
                            Code
                         </a>
                    )}
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-accent text-primary font-semibold rounded-full hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                           Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;