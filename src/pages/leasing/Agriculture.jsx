import React from 'react';
import { motion } from 'framer-motion';

function Agriculture() {
    return (
        <div className="page-content" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold mb-6 text-gray-900">Lease for Agriculture</h1>
                    <div className="prose max-w-none text-gray-700">
                        <p className="text-lg mb-4">
                            Support your agricultural business with our leasing options for tractors, harvesters, and other farming equipment.
                            We understand the seasonal nature of agriculture and offer flexible payment schedules to match your harvest cycles.
                        </p>
                        <p className="text-lg">
                            Grow your yield and efficiency with modern agricultural machinery financed through our ethical leasing solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Agriculture;
