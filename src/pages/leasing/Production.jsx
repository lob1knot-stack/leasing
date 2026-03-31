import React from 'react';
import { motion } from 'framer-motion';

function Production() {
    return (
        <div className="page-content" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Lease for Production</h1>
                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg mb-4">
                            Modernize your production lines with our leasing solutions for manufacturing and industrial equipment.
                            From assembly lines to specialized machinery, we support businesses in upgrading their production capabilities.
                        </p>
                        <p className="text-lg">
                            Invest in the latest technology to increase efficiency and output with our tailored leasing plans.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Production;
