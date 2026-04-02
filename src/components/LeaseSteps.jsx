import React from 'react';
import { motion } from 'framer-motion';
import { Car, FileCheck, Clock, Key } from 'lucide-react';

function LeaseSteps() {
    const steps = [
        {
            icon: Car,
            title: "1. Выбираете автомобиль",
            text: "Подберите подходящую модель авто прямо в салоне нашего партнера."
        },
        {
            icon: FileCheck,
            title: "2. Подаете заявку на месте или онлайн",
            text: "Нужен ваш паспорт и подтверждение дохода (выписка с банка или справка с места работы с указанием зп)."
        },
        {
            icon: Clock,
            title: "3. Получаете решение за 40 минут",
            text: "Мы быстро проверим заявку и сообщим результат."
        },
        {
            icon: Key,
            title: "4. Забираете автомобиль",
            text: "После оформления документов вы уезжаете на своем авто."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="section bg-light" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Шаги к вашему новому автомобилю</h2>
                    <p className="text-muted mt-2" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Простой и понятный процесс оформления лизинга без лишних сложностей
                    </p>
                </motion.div>

                <motion.div
                    className="steps-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginTop: '3rem'
                    }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} variants={itemVariants} className="step-card card" style={{ padding: '2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="icon-wrapper" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#E8F5ED', color: '#00A74F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <step.icon size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '700' }}>{step.title}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6', flexGrow: 1 }}>{step.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default LeaseSteps;
