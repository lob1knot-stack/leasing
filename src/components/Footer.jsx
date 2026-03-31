import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo_asr.svg';
import GoodHands from './GoodHands';

function Footer() {
    const socialLinks = [
        { icon: Facebook, url: '#' },
        { icon: Twitter, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
        { icon: Youtube, url: '#' }
    ];

    return (
        <>
            <GoodHands />
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <div className="logo">
                                <img src={logo} alt="ASR Leasing" className="logo-image" style={{ height: '45px', filter: 'brightness(0) invert(1)' }} />
                            </div>
                            <p className="footer-tagline">
                                Sharia-compliant car financing you can trust
                            </p>
                        </div>

                        <div className="footer-links">
                            <div className="footer-column">
                                <h4>Products</h4>
                                <a href="#personal">Personal Finance</a>
                                <a href="#business">Business Finance</a>
                                <a href="#leasing">Car Leasing</a>
                            </div>

                            <div className="footer-column">
                                <h4>Company</h4>
                                <a href="#about">About Us</a>
                                <a href="#careers">Careers</a>
                                <Link to="/contact">Contact</Link>
                            </div>

                            <div className="footer-column">
                                <h4>Mobile App</h4>
                                <div style={{ background: 'linear-gradient(135deg, #00A74F, #008890)', padding: '15px', borderRadius: '10px', color: 'white', marginTop: '10px', textAlign: 'center' }}>
                                    <h5 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', color: 'white' }}>Скачайте приложение</h5>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#E8F5ED' }}>Релиз совсем скоро!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    className="social-link"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={24} />
                                </motion.a>
                            ))}
                        </div>

                        <p className="copyright">
                            © {new Date().getFullYear()} Halal Finance. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
