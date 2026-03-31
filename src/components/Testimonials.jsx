import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
    const reviews = [
        {
            name: "Ahmad K.",
            text: "Amazing service, transparent pricing. I finally found a finance option that aligns with my values.",
            rating: 5,
            role: "Business Owner"
        },
        {
            name: "Fatima M.",
            text: "Got approved in 24 hours! The process was so smooth and the team was incredibly helpful.",
            rating: 5,
            role: "Teacher"
        },
        {
            name: "Ibrahim S.",
            text: "True halal finance! No hidden fees, no riba. Just honest business. Highly recommended.",
            rating: 5,
            role: "Software Engineer"
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="testimonials-title">What our clients say</h2>
                    <div className="trustpilot-badge">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} fill="#00b67a" color="#00b67a" />
                            ))}
                        </div>
                        <span className="trust-score">Rated 4.7/5 on Trustpilot</span>
                    </div>
                </motion.div>

                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="quote-icon">
                                <Quote size={40} />
                            </div>
                            <p className="testimonial-text">"{review.text}"</p>
                            <div className="testimonial-footer">
                                <div className="testimonial-rating">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                                    ))}
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">{review.name}</span>
                                        <span className="author-role">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
