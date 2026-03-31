import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

function Presentation() {
    const presentations = [
        {
            title: "ASR Leasing Corporate Profile 2024",
            description: "An overview of our company, mission, vision, and services.",
            size: "2.5 MB"
        },
        {
            title: "Understanding Ijara Financing",
            description: "A detailed guide on how the Ijara leasing model works for businesses.",
            size: "1.8 MB"
        },
        {
            title: "SME Financing Opportunities",
            description: "Presentation on financing options available for Small and Medium Enterprises.",
            size: "3.2 MB"
        },
        {
            title: "Annual Report 2023",
            description: "Financial performance and operational highlights of the past year.",
            size: "5.1 MB"
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
                    <h1 className="section-title text-center mb-4">Presentations & Documents</h1>
                    <p className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Download our corporate presentations and informational documents.
                    </p>

                    <div className="presentation-list" style={{ display: 'grid', gap: '1.5rem' }}>
                        {presentations.map((item, index) => (
                            <motion.div
                                key={index}
                                className="doc-card"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{
                                    background: 'var(--white)',
                                    padding: '2rem',
                                    borderRadius: '16px',
                                    boxShadow: 'var(--shadow-sm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '2rem',
                                    border: '1px solid var(--gray-200)'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'var(--light-green)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary-green)',
                                    flexShrink: 0
                                }}>
                                    <FileText size={32} />
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--black)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--gray-600)', marginBottom: '0.5rem' }}>{item.description}</p>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--gray-500)' }}>PDF • {item.size}</span>
                                </div>

                                <button className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Download size={18} /> Download
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Presentation;
