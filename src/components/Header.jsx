import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo_asr.svg';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = React.useState(false);
  const [isLeasingMobileSubmenuOpen, setIsLeasingMobileSubmenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileSubmenuOpen(false); // Reset submenu when closing main menu
    setIsLeasingMobileSubmenuOpen(false);
  };

  const toggleMobileSubmenu = (e) => {
    e.stopPropagation();
    setIsMobileSubmenuOpen(!isMobileSubmenuOpen);
  };

  const toggleLeasingMobileSubmenu = (e) => {
    e.stopPropagation();
    setIsLeasingMobileSubmenuOpen(!isLeasingMobileSubmenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-wrapper">
        <div className="header-content">
          <div className="logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="ASR Leasing" className="logo-image" style={{ height: '40px' }} />
            </Link>
          </div>

          <nav className="nav desktop-nav">
            <Link to="/" className="nav-link">{t('header.home')}</Link>
            <Link to="/about" className="nav-link">{t('header.about')}</Link>
            <div className="nav-item-dropdown">
              <span className="nav-link">{t('header.leasingItems')} <ChevronDown size={16} /></span>
              <div className="dropdown-menu">
                <Link to="/leasing/auto" className="dropdown-item">{t('header.leaseForAuto')}</Link>
                <Link to="/leasing/construction" className="dropdown-item">{t('header.leaseForConstruction')}</Link>
                <Link to="/leasing/production" className="dropdown-item">{t('header.leaseForProduction')}</Link>
                <Link to="/leasing/agriculture" className="dropdown-item">{t('header.leaseForAgriculture')}</Link>
                <Link to="/leasing/business-trade" className="dropdown-item">{t('header.leaseForBusiness')}</Link>
              </div>
            </div>


            <div className="nav-item-dropdown">
              <span className="nav-link">{t('header.knowledgeCenter')} <ChevronDown size={16} /></span>
              <div className="dropdown-menu">
                <Link to="/knowledge-center/articles" className="dropdown-item">{t('header.articles')}</Link>
              </div>
            </div>

            <Link to="/calculator" className="nav-link">{t('header.calculator')}</Link>
            <Link to="/product" className="nav-link">{t('header.products')}</Link>
            <Link to="/vacancies" className="nav-link">{t('header.vacancies')}</Link>
            <Link to="/contact" className="nav-link">{t('header.contacts')}</Link>
          </nav>

          <div className="header-actions">
            <div className="lang-switcher">
              <button
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <span className="lang-divider">|</span>
              <button
                className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
              >
                RU
              </button>
            </div>

            <button className="btn btn-primary desktop-btn" onClick={() => { window.location.href = '/#application-form'; }}>{t('header.applyNow')}</button>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>{t('header.home')}</Link>
          <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>{t('header.about')}</Link>
          <div className="mobile-nav-group">
            <span className="mobile-nav-link" onClick={toggleLeasingMobileSubmenu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {t('header.leasingItems')}
              <ChevronDown size={20} style={{ transform: isLeasingMobileSubmenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
            </span>
            <div className={`mobile-subnav ${isLeasingMobileSubmenuOpen ? 'open' : ''}`}>
              <Link to="/leasing/construction" className="mobile-nav-sublink" onClick={toggleMenu}>{t('header.leaseForConstruction')}</Link>
              <Link to="/leasing/production" className="mobile-nav-sublink" onClick={toggleMenu}>{t('header.leaseForProduction')}</Link>
              <Link to="/leasing/agriculture" className="mobile-nav-sublink" onClick={toggleMenu}>{t('header.leaseForAgriculture')}</Link>
              <Link to="/leasing/business-trade" className="mobile-nav-sublink" onClick={toggleMenu}>{t('header.leaseForBusiness')}</Link>
            </div>
          </div>
          <Link to="/calculator" className="mobile-nav-link" onClick={toggleMenu}>{t('header.calculator')}</Link>
          <Link to="/vacancies" className="mobile-nav-link" onClick={toggleMenu}>{t('header.vacancies')}</Link>

          <div className="mobile-nav-group">
            <span className="mobile-nav-link text-primary" onClick={toggleMobileSubmenu} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {t('header.knowledgeCenter')}
              <ChevronDown size={20} style={{ transform: isMobileSubmenuOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
            </span>
            <div className={`mobile-subnav ${isMobileSubmenuOpen ? 'open' : ''}`}>
              <Link to="/knowledge-center/articles" className="mobile-nav-sublink" onClick={toggleMenu}>{t('header.articles')}</Link>
            </div>
          </div>

          <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>{t('header.contacts')}</Link>

          <div className="mobile-lang-switcher" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button
              className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
              onClick={() => changeLanguage('ru')}
            >
              Русский
            </button>
          </div>

          <button className="btn btn-primary mobile-btn" onClick={() => { toggleMenu(); window.location.href = '/#application-form'; }}>{t('header.applyNow')}</button>
        </nav>
      </div>
    </motion.header>
  );
}

export default Header;
