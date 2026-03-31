import React from 'react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import AssetsCarousel from '../components/AssetsCarousel';
import BuiltAroundYou from '../components/BuiltAroundYou';
import NewsBlock from '../components/NewsBlock';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ApplicationForm from '../components/ApplicationForm';
import SecurityBadges from '../components/SecurityBadges';

function Home() {
    return (
        <>
            <Hero />
            <StatsCounter />
            <AssetsCarousel />
            <BuiltAroundYou />
            <NewsBlock />
            <Testimonials />
            <FAQ />
            <ApplicationForm />
            <SecurityBadges />
        </>
    );
}

export default Home;
