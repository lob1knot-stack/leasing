import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, DollarSign } from 'lucide-react';
import './TrustSection.css';

function TrustSection() {
    const stats = [
        { icon: Award, value: '15 years', label: 'In operation' },
        { icon: Users, value: '10,000+', label: 'Happy customers' },
        { icon: DollarSign, value: '£500m+', label: 'Finance arranged' }
    ];

    return (
        <section className="section trust-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Banking experience <span className="text-primary">you can trust</span>
                </motion.h2>

                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="stat-icon">
                                <stat.icon size={40} />
                            </div>
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustSection;
