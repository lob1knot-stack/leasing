import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ArrowRight, Fuel, Gauge, Calendar } from 'lucide-react';
import '../styles/Products.css';

// Mock Data
const BRANDS = [
    { id: 'toyota', name: 'Toyota', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Toyota_carlogo.svg/1200px-Toyota_carlogo.svg.png' },
    { id: 'chevrolet', name: 'Chevrolet', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet-logo.png/2560px-Chevrolet-logo.png' },
    { id: 'kia', name: 'Kia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg.png' },
    { id: 'hyundai', name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2560px-Hyundai_Motor_Company_logo.svg.png' },
    { id: 'byd', name: 'BYD', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/BYD_Auto_2022_logo.svg/2560px-BYD_Auto_2022_logo.svg.png' },
];

const CARS = {
    toyota: [
        { id: 1, model: 'Corolla', price: '$22,000', image: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/corolla/le/1852/040/2.png', year: '2024', fuel: 'Hybrid', mileage: '0 km' },
        { id: 2, model: 'Camry', price: '$28,000', image: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2025/camry/le-fwd/2559/1L5/2.png', year: '2025', fuel: 'Hybrid', mileage: '0 km' },
        { id: 3, model: 'RAV4', price: '$30,000', image: 'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2024/rav4/le-fwd/4430/040/2.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
    ],
    chevrolet: [
        { id: 4, model: 'Tracker', price: '$18,000', image: 'https://chevrolet.uz/assets/images/tracker/tracker-red.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
        { id: 5, model: 'Onix', price: '$14,000', image: 'https://chevrolet.uz/assets/images/onix/onix-red.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
        { id: 6, model: 'Monza', price: '$16,000', image: 'https://chevrolet.uz/assets/images/monza/monza-white.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
    ],
    kia: [
        { id: 7, model: 'K5', price: '$26,000', image: 'https://www.kia.com/content/dam/kwcms/kr/en/images/vehicles/k5/dl3/k5_dl3_swp_l.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
        { id: 8, model: 'Seltos', price: '$24,000', image: 'https://www.kia.com/content/dam/kwcms/kr/en/images/vehicles/seltos/sp2/seltos_sp2_swp_l.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
    ],
    hyundai: [
        { id: 9, model: 'Elantra', price: '$23,000', image: 'https://s7d1.scene7.com/is/image/hyundai/2024-elantra-se-atlas-white:Angle?wid=1200&hei=630&fmt=png-alpha', year: '2024', fuel: 'Petrol', mileage: '0 km' },
        { id: 10, model: 'Tucson', price: '$29,000', image: 'https://s7d1.scene7.com/is/image/hyundai/2024-tucson-se-phantom-black:Angle?wid=1200&hei=630&fmt=png-alpha', year: '2024', fuel: 'Petrol', mileage: '0 km' },
    ],
    byd: [
        { id: 11, model: 'Song Plus', price: '$32,000', image: 'https://byd.uz/uploads/cars/song-plus/colors/white.png', year: '2024', fuel: 'EV', mileage: '0 km' },
        { id: 12, model: 'Han', price: '$45,000', image: 'https://byd.uz/uploads/cars/han/colors/white.png', year: '2024', fuel: 'EV', mileage: '0 km' },
    ],
    chery: [
        { id: 13, model: 'Tiggo 7 Pro', price: '$24,000', image: 'https://cheryauto.uz/images/models/tiggo7pro/colors/white.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
        { id: 14, model: 'Arrizo 6 Pro', price: '$21,000', image: 'https://cheryauto.uz/images/models/arrizo6pro/colors/white.png', year: '2024', fuel: 'Petrol', mileage: '0 km' },
    ]
};

function Products() {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleBrandClick = (brandId) => {
        setSelectedBrand(brandId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setSelectedBrand(null);
    };

    return (
        <div className="products-page">
            <section className="products-hero">
                <div className="container">
                    <motion.h1
                        className="products-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        className="products-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Choose from a wide range of vehicles available for Sharia-compliant leasing.
                    </motion.p>
                </div>
            </section>

            <div className="container">
                <AnimatePresence mode="wait">
                    {!selectedBrand ? (
                        <motion.div
                            key="brands"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="brands-grid">
                                {BRANDS.map((brand, index) => (
                                    <motion.div
                                        key={brand.id}
                                        className="brand-card"
                                        onClick={() => handleBrandClick(brand.id)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <img src={brand.logo} alt={brand.name} className="brand-logo" />
                                        <span className="brand-name">{brand.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="cars"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="cars-header">
                                <button className="back-btn" onClick={handleBack}>
                                    <ChevronLeft size={20} />
                                    Back to Brands
                                </button>
                                <h3>{BRANDS.find(b => b.id === selectedBrand)?.name} Models</h3>
                            </div>

                            <div className="cars-grid">
                                {CARS[selectedBrand]?.map((car, index) => (
                                    <motion.div
                                        key={car.id}
                                        className="car-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="car-image-wrapper">
                                            <img src={car.image} alt={car.model} className="car-image" />
                                        </div>
                                        <div className="car-content">
                                            <div className="car-brand">{BRANDS.find(b => b.id === selectedBrand)?.name}</div>
                                            <h4 className="car-model">{car.model}</h4>

                                            <div className="car-specs">
                                                <div className="spec-item">
                                                    <Calendar size={16} />
                                                    <span>{car.year}</span>
                                                </div>
                                                <div className="spec-item">
                                                    <Fuel size={16} />
                                                    <span>{car.fuel}</span>
                                                </div>
                                                <div className="spec-item">
                                                    <Gauge size={16} />
                                                    <span>{car.mileage}</span>
                                                </div>
                                            </div>

                                            <div className="car-price-section">
                                                <div>
                                                    <span className="price-label">Starting from</span>
                                                    <span className="price-value">{car.price}</span>
                                                </div>
                                                <button className="view-btn">
                                                    <ArrowRight size={20} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Products;
