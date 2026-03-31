import React from 'react';
import AboutUsComponent from '../components/AboutUs';
import Team from '../components/Team';

function About() {
    return (
        <div className="page-about" style={{ paddingTop: '80px' }}>
            <AboutUsComponent />
            <Team />
        </div>
    );
}

export default About;
