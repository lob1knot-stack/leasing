import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

function NewsBlock() {
    const newsItems = [
        {
            id: 1,
            title: 'Новая программа лизинга специальной техники для сельского хозяйства',
            date: '15 Октября, 2023',
            excerpt: 'Мы рады объявить о запуске новой программы льготного лизинга для фермерских хозяйств с низким первоначальным взносом.',
            image: 'https://images.unsplash.com/photo-1592982537447-6f2c4cbacfc6?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            title: 'ASR Leasing расширяет партнерство с международными дилерами',
            date: '02 Ноября, 2023',
            excerpt: 'Подписано новое соглашение о сотрудничестве с ведущими производителями строительной техники в регионе.',
            image: 'https://images.unsplash.com/photo-1541888081622-4a006cbd96c5?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            title: 'Открытие нового филиала для обслуживания малого бизнеса',
            date: '28 Ноября, 2023',
            excerpt: 'Мы становимся ближе к нашим клиентам. В следующем месяце планируется открытие дополнительного офиса.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
        }
    ];

    return (
        <section className="section bg-light py-5">
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Последние новости</h2>
                    <p className="text-muted mt-2">Будьте в курсе наших новых программ и специальных предложений</p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {newsItems.map((news, index) => (
                        <motion.div
                            key={news.id}
                            className="card"
                            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={news.image} alt={news.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#879097', fontSize: '0.85rem', marginBottom: '1rem' }}>
                                    <Calendar size={14} style={{ marginRight: '6px' }} />
                                    <span>{news.date}</span>
                                </div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{news.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '1.5rem', flexGrow: 1 }}>{news.excerpt}</p>
                                <a href="#" style={{ display: 'flex', alignItems: 'center', color: '#00A74F', fontWeight: '600', textDecoration: 'none', marginTop: 'auto' }}>
                                    Читать полностью <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewsBlock;
