import React from 'react';
import { motion } from 'framer-motion';
import { Play, Mic } from 'lucide-react';

function AudioVideo() {
    const mediaItems = [
        {
            type: 'video',
            title: "Introduction to Islamic Leasing",
            duration: "15:30",
            thumbnail: "https://placehold.co/600x400?text=Intro+Video"
        },
        {
            type: 'video',
            title: "How Ijara Works",
            duration: "10:45",
            thumbnail: "https://placehold.co/600x400?text=Ijara+Explained"
        },
        {
            type: 'audio',
            title: "Podcast: The Future of Halal Finance",
            duration: "45:00",
            thumbnail: "https://placehold.co/600x400?text=Podcast"
        },
        {
            type: 'video',
            title: "Client Success Stories",
            duration: "05:20",
            thumbnail: "https://placehold.co/600x400?text=Success+Stories"
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
                    <h1 className="section-title text-center mb-4">Audio & Video Resources</h1>
                    <p className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Watch and listen to our latest content on Islamic finance and ASR Leasing services.
                    </p>

                    <div className="media-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {mediaItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="media-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{
                                    background: 'var(--white)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                            >
                                <div style={{
                                    height: '200px',
                                    background: 'var(--gray-200)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    backgroundImage: `url(${item.thumbnail})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: 'rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white'
                                    }}>
                                        {item.type === 'video' ? <Play size={24} fill="white" /> : <Mic size={24} />}
                                    </div>
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '10px',
                                        right: '10px',
                                        background: 'rgba(0,0,0,0.7)',
                                        color: 'white',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem'
                                    }}>{item.duration}</span>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--black)' }}>{item.title}</h3>
                                    <span style={{
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        borderRadius: '100px',
                                        background: item.type === 'video' ? 'var(--light-green)' : '#E0F2F1',
                                        color: item.type === 'video' ? 'var(--primary-green)' : 'var(--accent-teal)',
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        textTransform: 'uppercase'
                                    }}>
                                        {item.type}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AudioVideo;
