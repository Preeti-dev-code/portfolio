import React, { useState } from 'react';
import Section from './Section';
import { ICONS } from '../constants';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send to an API endpoint.
        alert('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-3xl mx-auto">
                <p className="text-center text-light/80 mb-10 text-lg">
                    Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full bg-secondary border-2 border-transparent focus:border-accent rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none transition-colors"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full bg-secondary border-2 border-transparent focus:border-accent rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none transition-colors"
                        />
                    </div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows={5}
                        className="w-full bg-secondary border-2 border-transparent focus:border-accent rounded-lg px-4 py-3 text-light placeholder-light/50 focus:outline-none transition-colors"
                    ></textarea>
                    <div className="text-center">
                        <button type="submit" className="px-10 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Send Message
                        </button>
                    </div>
                </form>
                <div className="mt-12 flex justify-center space-x-6">
                    <a href="#" className="text-light/70 hover:text-accent transition-colors">{ICONS.github}</a>
                    <a href="#" className="text-light/70 hover:text-accent transition-colors">{ICONS.linkedin}</a>
                    <a href="#" className="text-light/70 hover:text-accent transition-colors">{ICONS.twitter}</a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;