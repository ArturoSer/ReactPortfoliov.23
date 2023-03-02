import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img2png from '../components/img2.png';
import Work from '../components/Work';
function Project() {
    return (
        <div>
            <Navbar />
            <img2png heading='PROJECTS.' text="Some of the recents projects I've done!"/>
            <Work />
            <Footer/>
        </div>
    )
}

export default Project