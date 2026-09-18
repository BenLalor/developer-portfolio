import React, { useContext } from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { aboutData } from '../../data/aboutData'
import { wattlyUrl } from '../../data/projectsData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
              <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.tertiary80}}>
                      {aboutData.description1}
                      <br/><br/>
                      I am the founder of{" "}
                      <a
                        href={wattlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: theme.primary }}
                      >
                        Wattly
                      </a>
                      , Title 24 BEM and Energy Code compliance software,
                      currently awaiting CEC certification for the 2025 Energy
                      Code.
                    </p>
                </div>
                <div className="about-img">
                    <img 
                        src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}  
                        alt="" 
                    />
                </div>
            </div>
        </div>

    )
}

export default About
