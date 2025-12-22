import React from 'react'

const About = () => {
  return (
    <div className='content-box' data-aos='fade-up'>
      <div className='about-box'>
        <h2 className='text-5xl'>Education</h2>
        <div className='info-box' data-aos='fade-up'>
          <span>1998 - 2004</span>
          <h3>Bachelors in Engineering in Information Technology</h3>
          <p>Harvard School of Science and management</p>
        </div>
        <div className='info-box' data-aos='fade-up' data-aos-delay='100'>
          <span>2004 - 2006</span>
          <h3>Masters in Data Analysis</h3>
          <p>Harvard School of Science and management</p>
        </div>
      </div>
      <div className='about-box'>
        <h2 className='text-5xl'>Experience</h2>
        <div className='info-box' data-aos='fade-up' data-aos-delay='200'>
          <span>1998 - 2004</span>
          <h3>Bachelors in Engineering in Information Technology</h3>
          <p>Harvard School of Science and management</p>
        </div>
        <div className='info-box' data-aos='fade-up' data-aos-delay='300'>
          <span>2004 - 2006</span>
          <h3>Masters in Data Analysis</h3>
          <p>Harvard School of Science and management</p>
        </div>
      </div>
    </div>
  )
}

export default About