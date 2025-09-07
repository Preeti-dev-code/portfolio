import React, { SVGProps } from 'react';

// --- PROJECTS ---
export const PROJECTS = [
    {
        title: 'Ecommerce Website',
        description: 'A fully functional ecommerce platform built with a modern frontend stack, providing a seamless shopping experience.',
        tags: ['HTML', 'CSS', 'React'],
        imageUrl: 'https://picsum.photos/seed/ecommerce/400/300',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Dreamweavers - Wedding Planner',
        description: 'A beautiful and responsive website for a wedding planning business, designed to attract and inform potential clients.',
        tags: ['HTML', 'CSS', 'React'],
        imageUrl: 'https://picsum.photos/seed/wedding/400/300',
        liveUrl: '#',
        repoUrl: '#',
    },
    {
        title: 'Automatic Streetlight Project',
        description: 'An IoT-based project for my college that automates streetlight operation based on ambient light, saving energy.',
        tags: ['IoT', 'Hardware'],
        imageUrl: 'https://picsum.photos/seed/iot/400/300',
        liveUrl: null,
        repoUrl: '#',
    },
];

// --- CERTIFICATIONS ---
export const CERTIFICATIONS = [
    {
        title: 'Python Workshop',
        issuer: 'University Tech Club',
        description: 'Completed an intensive workshop covering core Python concepts, data structures, and practical applications.',
    },
    {
        title: 'NPTEL - Blockchain & Its Applications',
        issuer: 'NPTEL',
        description: 'Successfully completed a comprehensive online course on blockchain technology, its principles, and real-world uses.',
    },
    {
        title: 'Model Making Competition',
        issuer: 'Annual Tech Fest',
        description: 'Awarded 2nd prize for designing and presenting an innovative technical model, showcasing creativity and engineering skills.',
    },
];

// Fix: Add SVGProps<SVGSVGElement> type to ensure correct prop types for SVG elements.
const commonSvgProps: SVGProps<SVGSVGElement> = {
    className: "w-12 h-12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
};

// --- SKILLS ---
export const SKILLS = [
    { name: 'Python', icon: <svg {...commonSvgProps}><path d="M13.5 9l3 3-3 3M10.5 15l-3-3 3-3"/><path d="M20 11.5v1a8.5 8.5 0 1 1-5.18-7.9"/></svg> },
    { name: 'Java', icon: <svg {...commonSvgProps}><path d="M7 9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9z"></path><path d="M10 13v2a2 2 0 0 0 2 2h2"></path><path d="M12 19H8a2 2 0 0 1-2-2V9"></path><path d="M18 19h-2a4 4 0 0 1-4-4v-2"></path></svg> },
    { name: 'C++', icon: <svg {...commonSvgProps}><path d="M14 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3"></path><path d="M18 9V6a2 2 0 0 0-2-2h-2"></path><path d="M6 9h12v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9z"></path><line x1="10" y1="14" x2="14" y2="14"></line><line x1="12" y1="12" x2="12" y2="16"></line></svg> },
    { name: '.NET', icon: <svg {...commonSvgProps}><path d="M12.56 2.24a10.02 10.02 0 0 0-11.12 9.76c0 5.52 4.48 10 10 10 1.25 0 2.45-.23 3.56-.66"/><path d="M15.22 21.32a9.98 9.98 0 0 0-1.56-5.42L8.24 3.78"/><path d="M3.82 10.16a10 10 0 0 1 11.4-7.92"/><path d="M12.24 10.42 16.6 22"/><path d="m14 4 4.3 7.5"/><path d="M15.5 12.5 20.3 4"/><path d="m22 10-4.5 7.8"/></svg> },
    { name: 'MySQL', icon: <svg {...commonSvgProps}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> },
    { name: 'JavaScript', icon: <svg {...commonSvgProps}><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><path d="M9 9h2v6H9zM15 9h-2v4.5a1.5 1.5 0 0 1-3 0V9"></path></svg> },
    { name: 'HTML', icon: <svg {...commonSvgProps}><path d="m20 12-8-8-8 8 8 8 8-8Z"></path><path d="M4 12H2"></path><path d="M12 20V22"></path><path d="M12 2v-2"></path><path d="M20 12h2"></path></svg> },
    { name: 'CSS', icon: <svg {...commonSvgProps}><path d="m7 11 2-2-2-2"></path><path d="m17 11-2-2 2-2"></path><path d="M14 4s-1 2-2 2-2-2-2-2"></path><path d="M3 20h18v-4H3v4Z"></path></svg> },
    { name: 'React', icon: <svg {...commonSvgProps}><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg> },
    { name: 'Git', icon: <svg {...commonSvgProps}><circle cx="12" cy="12" r="3.5"></circle><circle cx="6" cy="6" r="2"></circle><path d="M6 8v4"></path><path d="m18 18-3.5-3.5"></path><path d="m18 6-3.5 3.5"></path><circle cx="18" cy="18" r="2"></circle><path d="M12 15.5V18"></path><path d="m14.5 14.5-2.5-2.5"></path><path d="m9.5 9.5-2.5-2.5"></path></svg> },
];

// --- ICONS ---
export const ICONS = {
    github: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    linkedin: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    twitter: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>,
    certificate: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline><path d="M12 15l-2 1 2 1 2-1 2 1-2-1z"></path><path d="M12 11v4"></path></svg>,
};
