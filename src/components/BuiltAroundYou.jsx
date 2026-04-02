import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, CreditCard, PartyPopper, Check } from 'lucide-react';
import './BuiltAroundYou.css';

function BuiltAroundYou() {
    const processSteps = [
        { icon: Search, title: '1. Вы выбираете', subtitle: 'Авто из партнерского автосалона', number: '1' },
        { icon: FileText, title: '2. Мы приообретаем', subtitle: 'И передаем вам в пользование', number: '2' },
        { icon: CreditCard, title: '3. Вносите платежи', subtitle: 'Ежемесячно до конца срока', number: '3' },
        { icon: PartyPopper, title: '4. Автомобиль ваш', subtitle: 'После погашения всех выплат', number: '4' }
    ];

    return (
        <section className="section built-around">
            <div className="container">
                <div className="built-grid">
                    <motion.div
                        className="content-side"
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">
                            Как работает<br />
                            <span className="text-primary">исламский лизинг?</span>
                        </h2>
                        <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                            Понятная схема: вы пользуетесь автомобилем на условиях лизинга, вносите арендные платежи, а после завершения договора автомобиль переходит в вашу собственность.
                        </p>
                        <button className="btn btn-primary mt-4" onClick={() => window.location.href = '/#application-form'}>Оставить заявку</button>

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
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="chart-container">
                            <motion.div
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="tab-content"
                            >
                                {/* Card Content */}

                                {/* Process Steps */}
                                <div className="process-steps">
                                    {processSteps.map((step, index) => (
                                        <React.Fragment key={index}>
                                            <div className="process-step">
                                                <div className="step-icon">
                                                    <step.icon size={32} />
                                                </div>
                                                <div className="step-number" style={{ display: 'none' }}>{step.number}</div>
                                                <div className="step-title" style={{ fontSize: '1.1rem', fontWeight: 700, margin: '15px 0 5px 0', whiteSpace: 'normal', lineHeight: '1.3' }}>{step.title}</div>
                                                <div className="step-subtitle" style={{ fontSize: '0.85rem', whiteSpace: 'normal', lineHeight: '1.4', color: '#777' }}>{step.subtitle}</div>
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
                                        <span>Без скрытых процентов (Без Риба)</span>
                                    </div>
                                    <div className="benefit-item">
                                        <Check size={18} className="benefit-icon" />
                                        <span>100% Соответствие Шариату</span>
                                    </div>
                                    <div className="benefit-item">
                                        <Check size={18} className="benefit-icon" />
                                        <span>Прозрачные условия</span>
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
