import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, Lightbulb } from 'lucide-react';
import '../styles/ApplicationForm.css';

function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    assetType: '',
    assetPrice: '',
    loanTerm: '',
    downPayment: '',
    purpose: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const assetTypes = [
    'Vehicle',
    'Construction Equipment',
    'Agricultural Equipment',
    'Production Machinery',
    'Business Equipment',
    'Other',
  ];

  const loanTerms = ['12 months', '24 months', '36 months', '48 months', '60 months'];

  const steps = [
    {
      title: 'Personal Information',
      description: 'Let\'s start with your contact details',
      fields: ['fullName', 'email', 'phone'],
    },
    {
      title: 'Company Details',
      description: 'Tell us about your organization',
      fields: ['company', 'position'],
    },
    {
      title: 'Asset Information',
      description: 'What would you like to lease?',
      fields: ['assetType', 'assetPrice'],
    },
    {
      title: 'Financing Terms',
      description: 'Choose your preferred terms',
      fields: ['loanTerm', 'downPayment'],
    },
    {
      title: 'Additional Details',
      description: 'Any other information we should know?',
      fields: ['purpose', 'message'],
    },
  ];

  const validateStep = (stepIndex) => {
    const newErrors = {};
    const stepFields = steps[stepIndex].fields;

    stepFields.forEach((field) => {
      if (field === 'fullName' && !formData.fullName.trim())
        newErrors.fullName = 'Full name is required';
      if (field === 'email' && !formData.email.trim())
        newErrors.email = 'Email is required';
      if (field === 'email' && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Invalid email format';
      if (field === 'phone' && !formData.phone.trim())
        newErrors.phone = 'Phone number is required';
      if (field === 'assetType' && !formData.assetType)
        newErrors.assetType = 'Asset type is required';
      if (field === 'assetPrice' && !formData.assetPrice.trim())
        newErrors.assetPrice = 'Asset price is required';
      if (field === 'loanTerm' && !formData.loanTerm)
        newErrors.loanTerm = 'Loan term is required';
      if (field === 'downPayment' && !formData.downPayment.trim())
        newErrors.downPayment = 'Down payment is required';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          position: '',
          assetType: '',
          assetPrice: '',
          loanTerm: '',
          downPayment: '',
          purpose: '',
          message: '',
        });
        setSubmitted(false);
        setCurrentStep(0);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  if (submitted) {
    return (
      <div className="application-page">
        <section className="application-hero">
          <motion.div
            className="success-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            >
              <CheckCircle size={80} className="success-icon" />
            </motion.div>
            <h1 className="success-title">Application Submitted!</h1>
            <p className="success-message">
              Thank you for your application. Our team will review your request and contact you
              within 24 hours.
            </p>
            <p className="success-email">We'll send updates to: <strong>{formData.email}</strong></p>
          </motion.div>
        </section>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="application-page">
      <section className="application-hero">
        <motion.div
          className="application-hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="application-title">Lease Application</h1>
          <p className="application-subtitle">
            Quick and easy application process
          </p>
        </motion.div>
      </section>

      <section className="application-section">
        <div className="container">
          <motion.div
            className="multi-step-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Progress Bar */}
            <div className="progress-bar-container">
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="progress-text">Step {currentStep + 1} of {steps.length}</p>
            </div>

            {/* Form Card */}
            <motion.div
              className="form-card"
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step Header */}
              <div className="step-header">
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
              </div>

              {/* Step Content */}
              <div className="step-content">
                {/* Render fields based on current step */}
                {currentStep === 0 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">Phone number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+998 (90) 123-45-67"
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-hint">
                      <Lightbulb size={16} />
                      This helps us keep you updated
                    </div>
                  </>
                )}

                {currentStep === 1 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Company"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="position" className="form-label">Position</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Position"
                      />
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="assetType" className="form-label">Asset Type *</label>
                      <select
                        id="assetType"
                        name="assetType"
                        value={formData.assetType}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.assetType ? 'error' : ''}`}
                      >
                        <option value="">Select asset type</option>
                        {assetTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.assetType && <span className="form-error">{errors.assetType}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="assetPrice" className="form-label">Asset Price (UZS) *</label>
                      <input
                        type="number"
                        id="assetPrice"
                        name="assetPrice"
                        value={formData.assetPrice}
                        onChange={handleChange}
                        className={`form-input ${errors.assetPrice ? 'error' : ''}`}
                        placeholder="50,000,000"
                      />
                      {errors.assetPrice && <span className="form-error">{errors.assetPrice}</span>}
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="loanTerm" className="form-label">Loan Term *</label>
                      <select
                        id="loanTerm"
                        name="loanTerm"
                        value={formData.loanTerm}
                        onChange={handleChange}
                        className={`form-input form-select ${errors.loanTerm ? 'error' : ''}`}
                      >
                        <option value="">Select loan term</option>
                        {loanTerms.map((term) => (
                          <option key={term} value={term}>{term}</option>
                        ))}
                      </select>
                      {errors.loanTerm && <span className="form-error">{errors.loanTerm}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="downPayment" className="form-label">Down Payment (%) *</label>
                      <input
                        type="number"
                        id="downPayment"
                        name="downPayment"
                        value={formData.downPayment}
                        onChange={handleChange}
                        className={`form-input ${errors.downPayment ? 'error' : ''}`}
                        placeholder="20"
                        min="0"
                        max="100"
                      />
                      {errors.downPayment && <span className="form-error">{errors.downPayment}</span>}
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <div className="form-group">
                      <label htmlFor="purpose" className="form-label">Purpose of Lease</label>
                      <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g., Business expansion"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Additional Details</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input form-textarea"
                        placeholder="Tell us more..."
                        rows="4"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="form-navigation">
                <motion.button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back
                </motion.button>

                <motion.button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNext}
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? 'Submitting...' : currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                  {currentStep < steps.length - 1 && <ChevronRight size={18} />}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ApplicationForm;
