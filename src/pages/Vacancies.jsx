import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import '../styles/Vacancies.css';

function Vacancies() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const vacancies = [
    {
      id: 1,
      title: 'Senior Financial Analyst',
      department: 'Finance',
      location: 'Tashkent, Uzbekistan',
      type: 'Full-time',
      experience: '3+ years',
      description: 'We are looking for an experienced financial analyst to join our growing team. You will be responsible for financial planning, analysis, and reporting.',
      skills: ['Financial Analysis', 'Excel', 'SAP', 'Risk Management']
    },
    {
      id: 2,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Tashkent, Uzbekistan',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Join our dynamic sales team and help us expand our leasing services across the region. Build relationships with corporate clients and drive business growth.',
      skills: ['Sales', 'Negotiation', 'CRM', 'Client Relations']
    },
    {
      id: 3,
      title: 'Software Developer (React)',
      department: 'IT',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'We are seeking a talented React developer to build and maintain our web applications. Work with modern technologies and collaborate with a talented team.',
      skills: ['React', 'JavaScript', 'REST API', 'Git']
    },
    {
      id: 4,
      title: 'Customer Service Representative',
      department: 'Customer Support',
      location: 'Tashkent, Uzbekistan',
      type: 'Full-time',
      experience: '1+ year',
      description: 'Provide excellent customer support to our clients. Handle inquiries, resolve issues, and ensure customer satisfaction with our leasing services.',
      skills: ['Communication', 'Problem Solving', 'CRM', 'Multilingual']
    },
    {
      id: 5,
      title: 'Legal Consultant',
      department: 'Legal',
      location: 'Tashkent, Uzbekistan',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead our legal team in contract negotiation, compliance, and risk management. Ensure all leasing agreements meet regulatory requirements.',
      skills: ['Contract Law', 'Compliance', 'Risk Assessment', 'Negotiation']
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Tashkent, Uzbekistan',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create and execute marketing campaigns to promote our leasing services. Manage social media, content creation, and brand development.',
      skills: ['Digital Marketing', 'Content Creation', 'Social Media', 'Analytics']
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const handleApply = (vacancy) => {
    window.open(window.location.origin + '/apply', '_blank');
  };

  return (
    <div className="vacancies-page">
      <section className="vacancies-hero">
        <motion.div
          className="vacancies-hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="vacancies-title">Join Our Team</h1>
          <p className="vacancies-subtitle">
            Be part of a dynamic organization transforming the leasing industry in Central Asia
          </p>
        </motion.div>
      </section>

      <section className="vacancies-section">
        <div className="container">
          <motion.div
            className="vacancies-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {vacancies.map((vacancy) => (
              <motion.div
                key={vacancy.id}
                className="vacancy-card"
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(vacancy.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="vacancy-card-header">
                  <div className="vacancy-header-top">
                    <h3 className="vacancy-title">{vacancy.title}</h3>
                    <span className="vacancy-type">{vacancy.type}</span>
                  </div>
                  <p className="vacancy-department">{vacancy.department}</p>
                </div>

                <div className="vacancy-info">
                  <div className="info-item">
                    <MapPin size={16} className="info-icon" />
                    <span>{vacancy.location}</span>
                  </div>
                  <div className="info-item">
                    <Briefcase size={16} className="info-icon" />
                    <span>{vacancy.experience}</span>
                  </div>
                </div>

                <p className="vacancy-description">{vacancy.description}</p>

                <div className="vacancy-skills">
                  {vacancy.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="btn btn-primary vacancy-btn"
                  onClick={() => handleApply(vacancy)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Vacancies;
