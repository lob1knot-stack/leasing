import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Car, Building2, CreditCard, PartyPopper, Check, Star, Users } from 'lucide-react';
import './BuiltAroundYou.css';

function BuiltAroundYou() {
    const processSteps = [
        { icon: Car, title: 'Choose', subtitle: 'your car', number: '1' },
        { icon: Building2, title: 'We buy', subtitle: 'it for you', number: '2' },
        { icon: CreditCard, title: 'You pay', subtitle: 'back in installments', number: '3' },
        { icon: PartyPopper, title: 'You own', subtitle: 'it', number: '4' }
    ];

    return (
        <section className="section built-around">
            <div className="container">
                <div className="built-grid">
                    <motion.div
                        className="content-side"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">
                            Car finance built<br />
                            <span className="text-primary">around you</span>
                        </h2>
                        <p className="mt-3">
                            We understand that everyone's financial situation is unique.
                            That's why we offer flexible, Sharia-compliant financing solutions
                            tailored to your needs.
                        </p>
                        <button className="btn btn-primary mt-4">Get started</button>

                        <div className="floating-elements">
                            <motion.div
                                className="floating-card"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                            >

                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="chart-side"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="chart-container">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="tab-content"
                            >
                                <h3 className="tab-title">How does Islamic financing work?</h3>

                                {/* Process Steps */}
                                <div className="process-steps">
                                    {processSteps.map((step, index) => (
                                        <React.Fragment key={index}>
                                            <div className="process-step">
                                                <div className="step-icon">
                                                    <step.icon size={32} />
                                                </div>
                                                <div className="step-number">{step.number}</div>
                                                <div className="step-title">{step.title}</div>
                                                <div className="step-subtitle">{step.subtitle}</div>
                                            </div>
                                            {index < processSteps.length - 1 && (
                                                <div className="step-arrow">→</div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>

                                {/* Benefits */}
                                <div className="benefits-row">
                                    <div className="benefit-item">
                                        <Check size={18} className="benefit-icon" />
                                        <span>No interest (Riba-free)</span>
                                    </div>
                                    <div className="benefit-item">
                                        <Check size={18} className="benefit-icon" />
                                        <span>100% Sharia-compliant</span>
                                    </div>
                                    <div className="benefit-item">
                                        <Check size={18} className="benefit-icon" />
                                        <span>Transparent pricing</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default BuiltAroundYou;
