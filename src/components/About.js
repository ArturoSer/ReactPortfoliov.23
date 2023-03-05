import React from 'react';
import Avatar from '../assets/images/Avatar.JPG'

function About() {
    return (
        <div className="about">
            <img id='avatar' src={Avatar} alt='My Avatar :)'/>
            <p id='about-me'>
                Full Stack web dev :D 
            </p>
        </div>
    )
}

export default About;