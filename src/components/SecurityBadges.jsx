import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Landmark, ScrollText, ShieldCheck } from 'lucide-react';
import './SecurityBadges.css';

function SecurityBadges() {
    const badges = [
        {
            icon: <Lock size={24} />,
            label: "SSL Secured",
            description: "256-bit Encryption"
        },
        {
            icon: <Landmark size={24} />,
            label: "FCA Regulated",
            description: "Authorized Firm"
        },
        {
            icon: <ScrollText size={24} />,
            label: "Sharia Board",
            description: "Certified Compliant"
        },
        {
            icon: <ShieldCheck size={24} />,
            label: "Data Protected",
            description: "GDPR Compliant"
        }
    ];

    return (
        <section className="security-section">
            <div className="container">
                <motion.div
                    className="security-content"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="security-header">
                        <h2 className="security-title">Your data is safe with us</h2>
                        <p className="security-subtitle">
                            We use bank-level encryption to protect your information
                        </p>
                    </div>

                    <div className="badges-grid">
                        {badges.map((badge, index) => (
                            <motion.div
                                key={index}
                                className="security-badge"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="badge-icon">
                                    {badge.icon}
                                </div>
                                <div className="badge-info">
                                    <span className="badge-label">{badge.label}</span>
                                    <span className="badge-desc">{badge.description}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default SecurityBadges;
