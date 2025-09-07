import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary mt-20 py-6">
            <div className="container mx-auto text-center text-light/60">
                <p>&copy; {new Date().getFullYear()} Preeti. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;