import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './AssetsCarousel.css';

function AssetsCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const slides = [
        {
            icon: '🚜',
            title: 'Agricultural Equipment',
            description: 'Tractors, harvesters, irrigation systems, plows, seeders, and other farming machinery for modern agriculture',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '🏥',
            title: 'Medical Equipment',
            description: 'Imaging equipment, surgical instruments, diagnostic devices, patient monitors, and healthcare technology',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '🖨️',
            title: 'Printing Equipment',
            description: 'Offset presses, digital printers, binding machines, cutting equipment, and commercial printing technology',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '🏗️',
            title: 'Construction Equipment',
            description: 'Excavators, cranes, loaders, bulldozers, concrete mixers, and heavy construction machinery',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '⚙️',
            title: 'Production Equipment',
            description: 'CNC machines, assembly lines, automation systems, industrial robots, and manufacturing technology',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '🚚',
            title: 'Commercial Vehicles',
            description: 'Trucks, vans, buses, delivery vehicles, cargo transporters, and fleet vehicles for business use',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '🧵',
            title: 'Textile Equipment',
            description: 'Industrial looms, knitting machines, dyeing equipment, cutting tables, and garment production machinery',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '💼',
            title: 'Office Equipment',
            description: 'Computers, servers, furniture, telecommunications, security systems, and workplace technology',
            cta: 'Learn more about financing',
            special: false
        },
        {
            icon: '✨',
            title: 'Need Something Else?',
            description: 'We offer flexible financing for many other types of business assets. Contact us to discuss your specific needs',
            cta: 'Contact us for custom financing',
            special: true
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(prev => prev - 1);
        }
    };

    const goToSlide = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    // Autoplay with ping-pong effect
    useEffect(() => {
        const timer = setInterval(() => {
            if (direction === 0 || direction === 1) {
                if (currentSlide < slides.length - 1) {
                    setDirection(1);
                    setCurrentSlide(prev => prev + 1);
                } else {
                    setDirection(-1);
                    setCurrentSlide(prev => prev - 1);
                }
            } else {
                if (currentSlide > 0) {
                    setDirection(-1);
                    setCurrentSlide(prev => prev - 1);
                } else {
                    setDirection(1);
                    setCurrentSlide(prev => prev + 1);
                }
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [currentSlide, direction, slides.length]);

    // Touch/Swipe support
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide();
        }
        if (touchStart - touchEnd < -50) {
            prevSlide();
        }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section className="assets-carousel-section">
            <div className="container">
                <motion.div
                    className="carousel-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="carousel-title">We finance a wide range of business assets</h2>
                    <p className="carousel-subtitle">Sharia-compliant leasing for equipment and vehicles</p>
                </motion.div>

                <div className="carousel-wrapper">
                    <button
                        className={`carousel-arrow carousel-arrow-left ${currentSlide === 0 ? 'disabled' : ''}`}
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        className="carousel-container"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        onMouseEnter={() => setDirection(0)} // Pause on hover (optional, but good UX)
                    >
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentSlide}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className={`carousel-slide ${slides[currentSlide].special ? 'special-slide' : ''}`}
                            >
                                <motion.div
                                    className="slide-icon"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1
                                    }}
                                >
                                    {slides[currentSlide].icon}
                                </motion.div>
                                <motion.h3
                                    className="slide-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {slides[currentSlide].title}
                                </motion.h3>
                                <motion.p
                                    className="slide-description"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {slides[currentSlide].description}
                                </motion.p>
                                <motion.button
                                    className={`slide-cta ${slides[currentSlide].special ? 'special-cta' : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {slides[currentSlide].cta}
                                    <ArrowRight size={18} />
                                </motion.button>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        className={`carousel-arrow carousel-arrow-right ${currentSlide === slides.length - 1 ? 'disabled' : ''}`}
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AssetsCarousel;
