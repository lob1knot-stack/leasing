import React from 'react';
import { motion } from 'framer-motion';

function Construction() {
    return (
        <div className="page-content" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Lease for Construction</h1>
                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg mb-4">
                            We offer specialized leasing solutions for the construction industry. Whether you need heavy machinery,
                            excavators, cranes, or specialized construction vehicles, our Sharia-compliant leasing options are designed
                            to help you grow your fleet and take on bigger projects.
                        </p>
                        <p className="text-lg">
                            Our flexible terms and competitive rates ensure that you can acquire the equipment you need without
                            compromising your cash flow.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Construction;
