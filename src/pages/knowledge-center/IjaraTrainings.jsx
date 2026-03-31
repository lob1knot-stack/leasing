import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

function IjaraTrainings() {
    const trainings = [
        {
            title: "Fundamentals of Islamic Banking & Finance",
            date: "October 15, 2025",
            time: "09:00 AM - 05:00 PM",
            location: "ASR Leasing HQ, Dushanbe",
            status: "Upcoming"
        },
        {
            title: "Advanced Ijara Structuring Workshop",
            date: "November 05, 2025",
            time: "10:00 AM - 02:00 PM",
            location: "Hyatt Regency Dushanbe",
            status: "Registration Open"
        },
        {
            title: "SME Financial Literacy Seminar",
            date: "September 10, 2025",
            time: "02:00 PM - 06:00 PM",
            location: "Khujand Branch",
            status: "Completed"
        }
    ];

    return (
        <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="section-title text-center mb-4">Ijara Trainings & Workshops</h1>
                    <p className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Join our expert-led sessions to deepen your understanding of Islamic finance and leasing products.
                    </p>

                    <div className="training-list" style={{ display: 'grid', gap: '2rem' }}>
                        {trainings.map((item, index) => (
                            <motion.div
                                key={index}
                                className="training-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{
                                    background: 'var(--white)',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-md)',
                                    borderLeft: `6px solid ${item.status === 'Completed' ? 'var(--gray-400)' : 'var(--primary-green)'}`
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                                    <div>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '4px 12px',
                                            borderRadius: '100px',
                                            background: item.status === 'Completed' ? 'var(--gray-200)' : 'var(--light-green)',
                                            color: item.status === 'Completed' ? 'var(--gray-600)' : 'var(--primary-green)',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            marginBottom: '1rem'
                                        }}>
                                            {item.status}
                                        </span>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--black)' }}>{item.title}</h3>

                                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', color: 'var(--gray-600)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Calendar size={18} /> {item.date}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Clock size={18} /> {item.time}
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <MapPin size={18} /> {item.location}
                                            </div>
                                        </div>
                                    </div>

                                    {item.status !== 'Completed' && (
                                        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
                                            Register Now
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default IjaraTrainings;
