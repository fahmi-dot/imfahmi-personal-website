import React from 'react'
import { about } from '../data/about'

const About = () => {
  return (
    <div className='about'>
      <div className="heading-section">
        <div className='heading-box' data-aos='fade-up'>
          <span>Introduce</span>
          <h1>About Me</h1>
          <p>Here is some of information about me.</p>
        </div>
      </div>
      <div className='content-box'>
        {about.map((item, i) => (
          <div key={i} className='about-box'>
            <h2 className='text-2xl md:text-4xl' data-aos='fade-up' data-aos-delay={i * 100}>{item.heading}</h2>
            {item.value.map((sub, j) => (
              <div key={j} className='info-box' data-aos='fade-up' data-aos-delay={i * 100}>
                <span>{sub.year}</span>
                <h3>{sub.title}</h3>
                <p>{sub.desc}</p>
                <p className='uppercase font-[500]'>{sub.company}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default About