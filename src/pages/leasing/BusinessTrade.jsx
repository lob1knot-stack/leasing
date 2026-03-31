import React from 'react';
import { motion } from 'framer-motion';

function BusinessTrade() {
    return (
        <div className="page-content" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Lease for Business and Trade</h1>
                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg mb-4">
                            Expand your business operations with our leasing services for commercial vehicles, office equipment, and trade infrastructure.
                            Whether you need a fleet of delivery vans or IT equipment for your office, we have a solution for you.
                        </p>
                        <p className="text-lg">
                            Our leasing products are designed to support businesses of all sizes in various trade sectors.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default BusinessTrade;
