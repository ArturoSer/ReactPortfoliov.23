import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import img2 from '../components/img2.jpg';

function About() {
    return (
        <div>
            <Navbar />
            <img2 heading="ABOUT" text="I am a Full Stack Web Developer" />
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About