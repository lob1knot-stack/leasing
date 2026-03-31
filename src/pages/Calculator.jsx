import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calculator as CalculatorIcon, TrendingUp } from 'lucide-react';
import '../styles/Calculator.css';

// Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(36);
  const [interestRate, setInterestRate] = useState(8.5);
  const [downPayment, setDownPayment] = useState(10000);

  // Debounce values for heavy calculations
  const debouncedLoanAmount = useDebounce(loanAmount, 50);
  const debouncedLoanTerm = useDebounce(loanTerm, 50);
  const debouncedInterestRate = useDebounce(interestRate, 50);
  const debouncedDownPayment = useDebounce(downPayment, 50);

  const calculateMonthlyPayment = () => {
    const principal = debouncedLoanAmount - debouncedDownPayment;
    const monthlyRate = debouncedInterestRate / 100 / 12;
    const numberOfPayments = debouncedLoanTerm;

    if (monthlyRate === 0) {
      return principal / numberOfPayments;
    }

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment;
  };

  // Memoize calculations based on DEBOUNCED values
  const monthlyPayment = useMemo(() => calculateMonthlyPayment(), [debouncedLoanAmount, debouncedLoanTerm, debouncedInterestRate, debouncedDownPayment]);
  const totalPayment = useMemo(() => monthlyPayment * debouncedLoanTerm, [monthlyPayment, debouncedLoanTerm]);
  const totalInterest = useMemo(() => totalPayment - (debouncedLoanAmount - debouncedDownPayment), [totalPayment, debouncedLoanAmount, debouncedDownPayment]);

  // Handle input changes
  const handleLoanAmountChange = (e) => {
    const newAmount = Number(e.target.value);
    setLoanAmount(newAmount);
    // Adjust down payment immediately if needed to maintain logic, but calculation will wait
    if (downPayment > newAmount * 0.5) {
      setDownPayment(Math.floor(newAmount * 0.5));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Simplified variants for items to reduce overhead during re-renders
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="calculator-page">
      <section className="calculator-hero">
        <motion.div
          className="calculator-hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CalculatorIcon size={48} className="hero-icon" />
          <h1 className="calculator-title">Leasing Calculator</h1>
          <p className="calculator-subtitle">
            Calculate your monthly leasing payments and understand your financial commitment
          </p>
        </motion.div>
      </section>

      {/* Currency Rates Section */}
      <section className="currency-rates-section">
        <div className="container">
          <motion.div
            className="currency-rates-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="currency-title">Exchange Rates (CBU)</h3>
            <div className="currency-grid">
              <div className="currency-item">
                <span className="currency-flag">🇺🇸</span>
                <span className="currency-code">USD</span>
                <span className="currency-value">12,850.00</span>
                <span className="currency-change positive">+12.50</span>
              </div>
              <div className="currency-item">
                <span className="currency-flag">🇪🇺</span>
                <span className="currency-code">EUR</span>
                <span className="currency-value">13,950.00</span>
                <span className="currency-change negative">-5.00</span>
              </div>
              <div className="currency-item">
                <span className="currency-flag">🇷🇺</span>
                <span className="currency-code">RUB</span>
                <span className="currency-value">135.50</span>
                <span className="currency-change positive">+0.50</span>
              </div>
            </div>
            <p className="currency-note">* Rates are for informational purposes only</p>
          </motion.div>
        </div>
      </section>

      <section className="calculator-section">
        <div className="container">
          <motion.div
            className="calculator-wrapper"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Input Section */}
            <motion.div className="calculator-inputs" variants={itemVariants}>
              <h2 className="section-title">Enter Your Details</h2>

              <div className="input-group">
                <label htmlFor="loanAmount" className="input-label">
                  Asset Price (UZS)
                </label>
                <div className="input-wrapper">
                  <input
                    type="range"
                    id="loanAmount"
                    min="10000"
                    max="500000"
                    step="5000"
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                    className="range-input"
                  />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                    className="number-input"
                  />
                </div>
                <div className="input-hint">Range: 10,000 - 500,000 UZS</div>
              </div>

              <div className="input-group">
                <label htmlFor="downPayment" className="input-label">
                  Down Payment (UZS)
                </label>
                <div className="input-wrapper">
                  <input
                    type="range"
                    id="downPayment"
                    min="0"
                    max={loanAmount * 0.5}
                    step="1000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="range-input"
                  />
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="number-input"
                  />
                </div>
                <div className="input-hint">
                  {loanAmount > 0 ? ((downPayment / loanAmount) * 100).toFixed(1) : 0}% of asset price
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="loanTerm" className="input-label">
                  Lease Term (Months)
                </label>
                <div className="input-wrapper">
                  <input
                    type="range"
                    id="loanTerm"
                    min="12"
                    max="60"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="range-input"
                  />
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="number-input"
                  />
                </div>
                <div className="input-hint">{(loanTerm / 12).toFixed(1)} years</div>
              </div>

              <div className="input-group">
                <label htmlFor="interestRate" className="input-label">
                  Annual Interest Rate (%)
                </label>
                <div className="input-wrapper">
                  <input
                    type="range"
                    id="interestRate"
                    min="3"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="range-input"
                  />
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    step="0.1"
                    className="number-input"
                  />
                </div>
                <div className="input-hint">Range: 3% - 15%</div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div className="calculator-results" variants={itemVariants}>
              <h2 className="section-title">Your Lease Summary</h2>

              <div className="results-grid">
                <div className="result-card primary">
                  <div className="result-label">Monthly Payment</div>
                  <div className="result-value">
                    {monthlyPayment.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                    })}
                  </div>
                  <div className="result-hint">UZS {(monthlyPayment * 12500).toLocaleString()}</div>
                </div>

                <div className="result-card">
                  <div className="result-label">Total Amount</div>
                  <div className="result-value">
                    {totalPayment.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                    })}
                  </div>
                  <div className="result-hint">Over {loanTerm} months</div>
                </div>

                <div className="result-card">
                  <div className="result-label">Total Interest</div>
                  <div className="result-value">
                    {totalInterest.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                    })}
                  </div>
                  <div className="result-hint">Total cost of leasing</div>
                </div>

                <div className="result-card">
                  <div className="result-label">Financed Amount</div>
                  <div className="result-value">
                    {(debouncedLoanAmount - debouncedDownPayment).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                    })}
                  </div>
                  <div className="result-hint">After down payment</div>
                </div>
              </div>

              <div className="calculator-breakdown">
                <h3 className="breakdown-title">
                  <TrendingUp size={20} />
                  Payment Breakdown
                </h3>
                <div className="breakdown-items">
                  <div className="breakdown-item">
                    <span className="breakdown-label">Principal</span>
                    <span className="breakdown-value">
                      {totalPayment > 0 ? ((debouncedLoanAmount - debouncedDownPayment) / totalPayment * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                  <div className="breakdown-item">
                    <span className="breakdown-label">Interest</span>
                    <span className="breakdown-value">
                      {totalPayment > 0 ? (totalInterest / totalPayment * 100).toFixed(1) : 0}%
                    </span>
                  </div>
                </div>
              </div>

              <motion.button
                className="btn btn-primary calculator-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(window.location.origin + '/apply', '_blank')}
              >
                Apply for Lease
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Calculator;
