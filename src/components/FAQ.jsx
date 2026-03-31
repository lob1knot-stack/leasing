import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import './FAQ.css';

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is Islamic finance?',
            answer: 'Islamic finance is a financial system that operates according to Sharia law. It prohibits the charging of interest (riba) and promotes ethical, transparent transactions.'
        },
        {
            question: 'How does car financing work?',
            answer: 'Our car financing uses a Murabaha structure where we purchase the car and sell it to you at a agreed-upon profit margin, payable in installments.'
        },
        {
            question: 'What documents do I need?',
            answer: 'You will need a valid ID, proof of income, bank statements, and proof of residence. Our team will guide you through the complete documentation process.'
        },
        {
            question: 'How long does approval take?',
            answer: 'Most applications are approved within 24 hours. Once approved, you can drive away with your new car in as little as 48 hours.'
        }
    ];

    return (
        <section className="section faq-section">
            <div className="container">
                <motion.div
                    className="faq-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <MessageCircle size={64} className="text-primary" />
                    <h2 className="section-title">Questions?</h2>
                    <p className="section-subtitle">Find answers to common questions</p>
                </motion.div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="faq-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <button
                                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={28} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
