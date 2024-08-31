import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="theme" />
        </div>
        <div className='about-section'>
            <div className="about-left">
                <img src={profile_img} alt="profile" />
            </div>

        </div>
    </div>
  )
}

export default About