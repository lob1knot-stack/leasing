import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Car, Smile } from 'lucide-react';
import './StatsCounter.css';

function StatsCounter() {
    const stats = [
        {
            label: "Applications this month",
            value: "127",
            suffix: "",
            icon: <TrendingUp size={24} />,
            color: "#00A651"
        },
        {
            label: "Average approval time",
            value: "18",
            suffix: " hours",
            icon: <Zap size={24} />,
            color: "#FFB800"
        },
        {
            label: "Cars financed this year",
            value: "1,247",
            suffix: "",
            icon: <Car size={24} />,
            color: "#007BFF"
        },
        {
            label: "Happy customers",
            value: "500",
            suffix: "+",
            icon: <Smile size={24} />,
            color: "#9C27B0"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
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
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                        >
                            <div className="stat-icon-wrapper" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="stat-content">
                                <h3 className="stat-value" style={{ color: stat.color }}>
                                    {stat.value}{stat.suffix}
                                </h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default StatsCounter;
