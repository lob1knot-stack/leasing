import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Articles() {
    const articles = [
        {
            title: "The Benefits of Islamic Leasing for SMEs",
            excerpt: "Discover how Ijara financing can help small businesses acquire essential assets without compromising their ethical values.",
            date: "August 28, 2025",
            category: "Business",
            image: "https://placehold.co/600x400?text=SME+Leasing"
        },
        {
            title: "Understanding the Difference Between Conventional Loan and Ijara",
            excerpt: "A comprehensive comparison between traditional interest-based loans and the asset-backed nature of Islamic leasing.",
            date: "July 15, 2025",
            category: "Education",
            image: "https://placehold.co/600x400?text=Islamic+vs+Conventional"
        },
        {
            title: "ASR Leasing Expands Operations to Khatlon Region",
            excerpt: "We are proud to announce the opening of our new branch to better serve our customers in the south.",
            date: "June 02, 2025",
            category: "Company News",
            image: "https://placehold.co/600x400?text=New+Branch"
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
                    <h1 className="section-title text-center mb-4">Articles & Insights</h1>
                    <p className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Read our latest news, educational articles, and market insights.
                    </p>

                    <div className="articles-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                        {articles.map((item, index) => (
                            <motion.div
                                key={index}
                                className="article-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{
                                    background: 'var(--white)',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: 'var(--shadow-md)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                        className="article-image"
                                    />
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                                        <span style={{ color: 'var(--primary-green)', fontWeight: '600' }}>{item.category}</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--black)', lineHeight: '1.3' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem', flex: 1 }}>{item.excerpt}</p>

                                    <a href="#" style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--primary-green)',
                                        fontWeight: '700',
                                        textDecoration: 'none'
                                    }}>
                                        Read More <ArrowRight size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Articles;
