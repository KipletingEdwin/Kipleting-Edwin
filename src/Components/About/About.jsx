import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/edwin1.png'

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
            <div className="about-right">
                <div className="about-para">
                    <p> I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations,contributing to their sucess and growth  </p>
                    <p> My passion for Fontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                        <p>React JS</p><hr style={{width:"70%"}}/>
                        <p>JavaScript</p><hr style={{width:"60%"}}/>
                        <p>Java</p><hr style={{width:"50%"}}/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About