import React from 'react'
import { hero } from '../data/hero'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content-box banner-box mb-9'>
        <div className='w-1/2 lg:w-4/7'>
          <div className='banner-image' data-aos='fade-right'>
            <img src="/images/banner_img.png" alt="ImFahmi Banner" />
          </div>
        </div>
        <div className='w-1/2 lg:w-3/7'>
          <div className='banner-content'>
            <div className='banner-tag' data-aos='fade-left'>
              <span>Fullstack Developer</span>
            </div>
            <h1 className='banner-title' data-aos='fade-in'>Agil Fahmi Raka Saputra</h1>
          </div>
        </div>
      </div>
      <div className='content-box lg:grid-cols-4'>
        {hero.map((item, i) => (
          <div key={i} className='info-box' data-aos='fade-up' data-aos-delay={i * 100}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
        <div>
          <div className='info-btn' data-aos='fade-up' data-aos-delay='300'>
            <a href="#skills" className='btn'>See more</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero