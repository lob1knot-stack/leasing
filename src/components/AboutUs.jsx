import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import './AboutUs.css';
import carImage from '../assets/img/img_us.png'; // Keeping existing image for now as requested in Option A (partially)

function AboutUs() {
    const stats = [
        { value: "2013", label: "Founded" },
        { value: "$3M+", label: "Capital" },
        { value: "500+", label: "Clients" },
        { value: "10+", label: "Years" }
    ];

    const keyPoints = [
        "Backed by Islamic Corporation for Development (ICD)",
        "Partnership with Eurasia Group AG",
        "Authorized capital of $3 million USD",
        "Supporting SMEs across Tajikistan",
        "100% Sharia-compliant financing"
    ];

    return (
        <section className="section about-us" id="about">
            <div className="container">

                {/* Main Content & Image Split */}
                <div className="about-split-layout">

                    {/* Content Side */}
                    <motion.div
                        className="about-content-side"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-tag">About ASR Leasing</div>
                        <h2 className="about-main-title">
                            Tajikistan's leading provider of Sharia-compliant business financing since 2013
                        </h2>

                        {/* Stats Bar */}
                        <div className="about-stats-bar">
                            {stats.map((stat, index) => (
                                <div key={index} className="about-stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Key Points */}
                        <ul className="about-key-points">
                            {keyPoints.map((point, index) => (
                                <li key={index}>
                                    <CheckCircle size={20} className="point-icon" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="about-focus-text">
                            We specialize in financial leasing (Ijara) for equipment and vehicles,
                            helping small and medium-sized businesses grow through ethical, accessible financing.
                        </p>

                        <motion.button
                            className="btn btn-primary mt-4"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn more <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </motion.button>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        className="about-image-side"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-image-wrapper">
                            <img src={carImage} alt="ASR Leasing" className="about-hero-image" />
                            <div className="founded-badge">
                                <span className="badge-year">2013</span>
                                <span className="badge-text">Since</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mission & Vision Section */}
                <div className="mission-vision-grid">
                    <motion.div
                        className="mv-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="mv-icon-box">
                            <Target size={32} />
                        </div>
                        <h3 className="mv-title">Our Mission</h3>
                        <p className="mv-text">
                            To empower Tajik businesses with fast, reliable, Sharia-compliant leasing - making growth accessible to all
                        </p>
                    </motion.div>

                    <motion.div
                        className="mv-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="mv-icon-box">
                            <Eye size={32} />
                        </div>
                        <h3 className="mv-title">Our Vision</h3>
                        <p className="mv-text">
                            To be the #1 trusted partner for halal financing in Central Asia
                        </p>
                    </motion.div>
                </div>

                {/* Trust Indicators (Placeholder for logos) */}
                {/* Trust Indicators (Partners Conveyor) */}
                <motion.div
                    className="trust-indicators"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                </motion.div>

            </div>
        </section>
    );
}

export default AboutUs;
