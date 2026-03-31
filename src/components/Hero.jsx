import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { Check, Star } from 'lucide-react';

function Hero() {
    return (
        <section className="hero-wrapper">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="halal-badge">
                        <span className="halal-icon"></span>
                        <span className="halal-text">Финансирование по нормам Ислама</span>
                    </div>

                    <h1 className="hero-title">
                        Introducing<br />
                        <span className="hero-title-accent">Halal Car Finance</span>
                    </h1>

                    <div className="trustpilot-widget">
                        <div className="tp-stars">
                            <div className="tp-star-box"><Star size={16} fill="white" color="white" /></div>
                            <div className="tp-star-box"><Star size={16} fill="white" color="white" /></div>
                            <div className="tp-star-box"><Star size={16} fill="white" color="white" /></div>
                            <div className="tp-star-box"><Star size={16} fill="white" color="white" /></div>
                            <div className="tp-star-box"><Star size={16} fill="white" color="white" /></div>
                        </div>
                        <span className="tp-text">Excellent 4.9 out of 5</span>
                    </div>

                    <p className="hero-subtitle">
                        Честная рассрочка без скрытых комиссий и штрафов. Одобрение за 24 часа.
                    </p>

                    <ul className="hero-benefits">
                        <li><Check size={20} /> Без процентов (Риба)</li>
                        <li><Check size={20} /> Первый взнос от 30%</li>
                        <li><Check size={20} /> Срок до 5 лет</li>
                    </ul>

                    <motion.button
                        className="hero-btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Apply now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
