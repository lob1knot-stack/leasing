import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vacancies from './pages/Vacancies';
import Calculator from './pages/Calculator';
import ApplicationForm from './pages/ApplicationForm';
import Articles from './pages/knowledge-center/Articles';
import Construction from './pages/leasing/Construction';
import Production from './pages/leasing/Production';
import Agriculture from './pages/leasing/Agriculture';
import BusinessTrade from './pages/leasing/BusinessTrade';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ScrollToTop from './components/ScrollToTop'; // We'll need this to scroll to top on route change

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vacancies" element={<Vacancies />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/knowledge-center/articles" element={<Articles />} />
            <Route path="/leasing/construction" element={<Construction />} />
            <Route path="/leasing/production" element={<Production />} />
            <Route path="/leasing/agriculture" element={<Agriculture />} />
            <Route path="/leasing/business-trade" element={<BusinessTrade />} />
            <Route path="/product" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
