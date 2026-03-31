import React from 'react';
import { motion } from 'framer-motion';

function Glossary() {
    const terms = [
        {
            term: "Ijara",
            definition: "A leasing agreement where the bank or financier buys an item for a customer and then leases it to them over a specific period."
        },
        {
            term: "Ijara Muntahia Bittamleek",
            definition: "A lease that ends with the transfer of ownership of the asset to the lessee."
        },
        {
            term: "Riba",
            definition: "Interest or usury, which is prohibited in Islamic finance. Money should not generate money without an underlying productive economic activity."
        },
        {
            term: "Sharia",
            definition: "Islamic law derived from the Quran and the teachings of the Prophet Muhammad (Hadith), governing all aspects of life including finance."
        },
        {
            term: "Takaful",
            definition: "Islamic insurance based on the concept of mutual cooperation, where members contribute to a common pool to help those in need."
        },
        {
            term: "Murabaha",
            definition: "A cost-plus financing arrangement where the financier buys an asset and sells it to the client at a marked-up price, to be paid in installments."
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
                    <h1 className="section-title text-center mb-4">Glossary of Islamic Finance Terms</h1>
                    <p className="text-center mb-4" style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Understanding the key terminology used in Islamic finance and leasing.
                    </p>

                    <div className="glossary-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                        {terms.map((item, index) => (
                            <motion.div
                                key={index}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{ padding: '2rem', borderLeft: '4px solid var(--primary-green)' }}
                            >
                                <h3 style={{ color: 'var(--primary-green)', marginBottom: '1rem', fontSize: '1.5rem' }}>{item.term}</h3>
                                <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>{item.definition}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Glossary;
