import React from 'react'

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
      <div className='content-box' data-aos='fade-up'>
        <div className='about-box'>
          <h2 className='text-2xl md:text-4xl'>Education</h2>
          <div className='info-box' data-aos='fade-up'>
            <span>2020 - 2024</span>
            <h3>Bachelors of Computer Science</h3>
            <p>GPA 3.68/4.00</p>
            <p className='uppercase font-[500]'>Yogyakarta University of Technology</p>
          </div>
        </div>
        <div className='about-box'>
          <h2 className='text-2xl md:text-4xl'>Experience</h2>
          <div className='info-box' data-aos='fade-up' data-aos-delay='200'>
            <span>2023 - 2024</span>
            <h3>Android Developer Intern</h3>
            <p>Develop an goods data management application</p>
            <p className='uppercase font-[500]'>Elektro Jogja</p>
          </div>
          <div className='info-box' data-aos='fade-up' data-aos-delay='100'>
            <span>2022 - 2023</span>
            <h3>Assistant Lecturer of Object-Oriented Programming Course</h3>
            <p>OOP - Java Programming Language</p>
            <p className='uppercase font-[500]'>Yogyakarta University of Technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About