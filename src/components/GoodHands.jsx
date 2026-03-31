import React from 'react';
import { motion } from 'framer-motion';
import './GoodHands.css';

function GoodHands() {
    // Dynamically import all partner images using Vite's glob import
    const images = import.meta.glob('../assets/img/partners/*.{png,jpg,jpeg,svg}', { eager: true });
    const partnerLogos = Object.values(images).map(img => img.default);

    // Duplicate the array to create a seamless loop
    const duplicatedPartners = [...partnerLogos, ...partnerLogos];

    return (
        <section className="section good-hands">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    You're in <span className="text-primary">good hands</span>
                </motion.h2>

                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        {duplicatedPartners.map((logo, index) => (
                            <div className="brand-item" key={index}>
                                <img src={logo} alt={`Partner ${index + 1}`} className="brand-logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoodHands;