import { link } from 'react-router-dom'
import './AboutContentStyle.css'
import React from 'react'
function AboutContent() {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Introducing Myself</h1>
                <p>I'm a full Stack Developer</p>
                <link to='/contact'>
                    <button className='btn'>Contact</button>
                </link>
            </div>
            <div className='right'></div>
        </div>
    )
}

export default AboutContent