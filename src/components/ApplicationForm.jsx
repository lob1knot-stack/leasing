import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, DollarSign, Calendar, FileText } from 'lucide-react';
import './ApplicationForm.css';

function ApplicationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        amount: '',
        term: '',
        assetType: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                amount: '',
                term: '',
                assetType: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1500);
    };

    return (
        <section className="application-form-section" id="application-form">
            <div className="container">
                <motion.div
                    className="form-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="form-title">Ready to get started?</h2>
                    <p className="form-subtitle">
                        Fill out the form below and our team will contact you within 24 hours
                    </p>
                </motion.div>

                <motion.div
                    className="form-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="application-form">
                        <div className="form-grid">
                            {/* Full Name */}
                            <div className="form-group">
                                <label htmlFor="fullName" className="form-label">
                                    <User size={18} />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    <Mail size={18} />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="form-group">
                                <label htmlFor="phone" className="form-label">
                                    <Phone size={18} />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="+992 XX XXX XXXX"
                                    required
                                />
                            </div>

                            {/* Financing Amount */}
                            <div className="form-group">
                                <label htmlFor="amount" className="form-label">
                                    <DollarSign size={18} />
                                    Financing Amount *
                                </label>
                                <select
                                    id="amount"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                >
                                    <option value="">Select amount range</option>
                                    <option value="0-10000">Up to $10,000</option>
                                    <option value="10000-30000">$10,000 - $30,000</option>
                                    <option value="30000-50000">$30,000 - $50,000</option>
                                    <option value="50000+">$50,000+</option>
                                </select>
                            </div>

                            {/* Term */}
                            <div className="form-group">
                                <label htmlFor="term" className="form-label">
                                    <Calendar size={18} />
                                    Financing Term *
                                </label>
                                <select
                                    id="term"
                                    name="term"
                                    value={formData.term}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                >
                                    <option value="">Select term</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5-7">5-7 years</option>
                                    <option value="7+">7+ years</option>
                                </select>
                            </div>

                            {/* Asset Type */}
                            <div className="form-group">
                                <label htmlFor="assetType" className="form-label">
                                    <FileText size={18} />
                                    Asset Type *
                                </label>
                                <select
                                    id="assetType"
                                    name="assetType"
                                    value={formData.assetType}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                >
                                    <option value="">Select asset type</option>
                                    <option value="agricultural">Agricultural Equipment</option>
                                    <option value="medical">Medical Equipment</option>
                                    <option value="printing">Printing Equipment</option>
                                    <option value="construction">Construction Equipment</option>
                                    <option value="production">Production Equipment</option>
                                    <option value="vehicles">Commercial Vehicles</option>
                                    <option value="textile">Textile Equipment</option>
                                    <option value="office">Office Equipment</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="form-group form-group-full">
                            <label htmlFor="message" className="form-label">
                                <FileText size={18} />
                                Additional Information
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Tell us more about your financing needs..."
                                rows="4"
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="form-submit-btn"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send size={20} />
                                    Submit Application
                                </>
                            )}
                        </motion.button>

                        {/* Success Message */}
                        {submitStatus === 'success' && (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                ✓ Thank you! Your application has been submitted successfully.
                                We'll contact you within 24 hours.
                            </motion.div>
                        )}
                    </form>

                    {/* Trust Indicators */}
                    <div className="form-trust-indicators">
                        <div className="trust-item">
                            <span className="trust-icon">🔒</span>
                            <span className="trust-text">Secure & Confidential</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">⚡</span>
                            <span className="trust-text">24-Hour Response</span>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <span className="trust-text">No Obligation</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ApplicationForm;
