import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import './Team.css';

function Team() {
    const teamMembers = [
        {
            name: 'Ahmed Rahman',
            position: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
            bio: '15+ years in Islamic finance',
            linkedin: '#',
            email: 'ahmed@asrfinance.com'
        },
        {
            name: 'Fatima Al-Sayed',
            position: 'Head of Sharia Compliance',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
            bio: 'Certified Islamic Finance Expert',
            linkedin: '#',
            email: 'fatima@asrfinance.com'
        },
        {
            name: 'Omar Hassan',
            position: 'Chief Financial Officer',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
            bio: 'MBA in Finance & Economics',
            linkedin: '#',
            email: 'omar@asrfinance.com'
        },
        {
            name: 'Aisha Khan',
            position: 'Head of Customer Relations',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
            bio: 'Dedicated to client success',
            linkedin: '#',
            email: 'aisha@asrfinance.com'
        },
        {
            name: 'Yusuf Mahmoud',
            position: 'Senior Finance Advisor',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
            bio: '10+ years in asset financing',
            linkedin: '#',
            email: 'yusuf@asrfinance.com'
        },
        {
            name: 'Layla Ibrahim',
            position: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
            bio: 'Streamlining processes for efficiency',
            linkedin: '#',
            email: 'layla@asrfinance.com'
        }
    ];

    return (
        <section className="team-section">
            <div className="container">
                <motion.div
                    className="team-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="team-title">Meet Our Team</h2>
                    <p className="team-subtitle">
                        Experienced professionals dedicated to providing you with the best
                        Sharia-compliant financing solutions
                    </p>
                </motion.div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ textAlign: 'center', padding: '2rem' }}
                        >
                            <div className="team-info">
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-position">{member.position}</p>
                                <p className="team-bio">{member.bio}</p>
                                <div className="team-social" style={{ justifyContent: 'center', marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                                    <a
                                        href={member.linkedin}
                                        className="social-link"
                                        aria-label={`${member.name}'s LinkedIn`}
                                        style={{ color: '#00A74F' }}
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="social-link"
                                        aria-label={`Email ${member.name}`}
                                        style={{ color: '#00A74F' }}
                                    >
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
