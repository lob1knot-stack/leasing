import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, Percent, Clock, Coins } from 'lucide-react';
import './StatsCounter.css';

function StatsCounter() {
    const stats = [
        {
            label: "Сумма лизинга",
            value: "600",
            suffix: " тыс",
            icon: <Banknote size={24} />
        },
        {
            label: "Надбавка",
            value: "от 8",
            suffix: "%",
            icon: <Percent size={24} />
        },
        {
            label: "Срок лизинга",
            value: "3-4",
            suffix: " года",
            icon: <Clock size={24} />
        },
        {
            label: "Предоплата",
            value: "15",
            suffix: "%",
            icon: <Coins size={24} />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 1 }, // Fallback to visible if observer fails
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 1, y: 0 }, // Fallback
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="stats-counter-section">
            <div className="container">
                <div className="stats-header" style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111', marginBottom: '10px' }}>Условия финансирования</h2>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>Конкурентные условия для вашего роста</p>
                </div>
                <motion.div
                    className="stats-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-card"
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 166, 81, 0.2)" }}
                        >
                            <div className="stat-card-deco"></div>
                            <div className="stat-icon-wrapper">
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-value" style={{ color: '#ffffff', display: 'block', fontSize: '28px', marginBottom: '8px' }}>
                                    {stat.value}{stat.suffix}
                                </h3>
                                <p className="stat-label" style={{ color: '#ffffff', display: 'block', opacity: 0.9 }}>{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default StatsCounter;
