import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content-box banner-box mb-9'>
        <div className='w-4/7'>
          <div className='banner-image' data-aos='fade-right'>
            <img src="../../public/images/banner_img.png" alt="ImFahmi Banner" />
          </div>
        </div>
        <div className='w-3/7'>
          <div className='banner-content' data-aos='fade-in'>
            <div className='banner-tag mb-5'>
              <span>Fullstack Developer</span>
            </div>
            <h1 className='banner-title'>Agil Fahmi Raka Saputra</h1>
          </div>
        </div>
      </div>
      <div className='content-box'>
        <div className='w-1/4'>
          <div className='info-box' data-aos='fade-up'>
            <span>01</span>
            <h3>Mobile Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos aut quis, distinctio similique ut doloremque?</p>
          </div>
        </div> 
        <div className='w-1/4'>
          <div className='info-box' data-aos='fade-up' data-aos-delay='100'>
            <span>02</span>
            <h3>Backend Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos aut quis, distinctio similique ut doloremque?</p>
          </div>
        </div>
        <div className='w-1/4'>
          <div className='info-box' data-aos='fade-up' data-aos-delay='200'>
            <span>03</span>
            <h3>Web Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos aut quis, distinctio similique ut doloremque?</p>
          </div>
        </div>
        <div className='w-1/4'>
          <div className='info-btn p-5'>
            <a href="#skills" className='btn'>See more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero