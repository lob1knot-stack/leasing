import React from 'react';
import { motion } from 'framer-motion';
import { Video, Phone, MapPin, ArrowRight } from 'lucide-react';
import './ComeSeeUs.css';

function ComeSeeUs() {
    const contactOptions = [
        {
            icon: Video,
            title: 'Video call',
            desc: 'Talk to us face-to-face',
            action: 'Book a video call',
            link: '#'
        },
        {
            icon: Phone,
            title: 'Call centre',
            desc: 'Available 24/7',
            info: '+992 XX XXX XXXX',
            action: 'Call now',
            link: 'tel:+992XXXXXXX'
        },
        {
            icon: MapPin,
            title: 'In person',
            desc: 'Visit our locations',
            info: 'Dushanbe, Rudaki Avenue 123',
            action: 'Get directions',
            link: '#'
        }
    ];

    return (
        <section className="section come-see-us">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title text-center">
                        Contact Us
                    </h2>
                    <p className="section-subtitle text-center">
                        We are here to help you
                    </p>
                </motion.div>

                <div className="contact-content-wrapper">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.673856526132!2d68.7833333!3d38.5666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM0JzAwLjAiTiA2OMKwNDcnMDAuMCJF!5e0!3m2!1sen!2s!4v1635789000000!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '16px' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="contact-cards-grid">
                        {contactOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                className="contact-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="contact-card-icon">
                                    <option.icon size={32} />
                                </div>
                                <h3 className="contact-card-title">{option.title}</h3>
                                <p className="contact-card-desc">{option.desc}</p>
                                {option.info && (
                                    <p className="contact-card-info">{option.info}</p>
                                )}
                                <a href={option.link} className="contact-button">
                                    {option.action}
                                    <ArrowRight size={18} />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComeSeeUs;
