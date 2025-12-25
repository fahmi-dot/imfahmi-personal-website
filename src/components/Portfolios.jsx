import React from 'react'
import { portfolios } from '../data/portfolios'

const Portfolios = () => {
  return (
    <div className='portfolios'>
      <div className='flex flex-col'>
        <div className='heading-section'>
          <div className='heading-box' data-aos='fade-up'>
            <span>Some of my recent</span>
            <h1>Portfolios</h1>
            <p>Here are some projects I have worked on.</p>
          </div>
        </div>
        <div className='content-box lg:grid-cols-4'>
          {portfolios.map((item, i) => (
            <div key={i} className='portfolio-box' data-aos='fade-up' data-aos-delay={i * 100}>
              <div className='portfolio-image'>
                <a href={`https://github.com/fahmi-dot/${item.link}`}>
                  <img src={item.image === '' ? '/images/t_logo.png' : `/images/${item.image}`} alt={item.title}/>
                </a>
              </div>
              <div className='portfolio-caption'>
                <p>{item.title}</p>
                <span>{item.tools}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolios