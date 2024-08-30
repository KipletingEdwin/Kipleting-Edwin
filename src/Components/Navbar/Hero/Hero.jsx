import React from 'react'
import './Hero.css'
import profile_img from '../../../assets/edwin1.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Kipleting Edwin,</span> frontend developer based in Kenya</h1>
        <p>Frontend engineer</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero