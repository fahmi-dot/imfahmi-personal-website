import React from 'react'

const Portfolios = () => {
  return (
    <div>
      <div className='flex flex-col mb-5'>
        <div className="flex justify-center">
          <div className='title-box w-1/2' data-aos='fade-up'>
            <span>Some of my recent</span>
            <h1 className='text-7xl'>Portfolios</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className='flex flex-wrap py-4'>
          <div className="portfolio-box">
            <div className='portfolio-image'>
              <a href="/portfolio/1">
                <img src="../../public/images/t_logo.png" alt="#"/>
              </a>
            </div>
            <div className='portfolio-title'>
              <span>Weather App</span>
            </div>
          </div>
          <div className="portfolio-box">
            <div className='portfolio-image'>
              <a href="#">
                <img src="../../public/images/t_logo.png" alt="#" />
              </a>
            </div>
            <div className='portfolio-title'>
              <span>Weather App</span>
            </div>
          </div>
          <div className="portfolio-box">
            <div className='portfolio-image'>
              <a href="#">
                <img src="../../public/images/t_logo.png" alt="#" />
              </a>
            </div>
            <div className='portfolio-title'>
              <span>Weather App</span>
            </div>
          </div>
          <div className="portfolio-box">
            <div className='portfolio-image'>
              <a href="#">
                <img src="../../public/images/t_logo.png" alt="#" />
              </a>
            </div>
            <div className='portfolio-title'>
              <span>Weather App</span>
            </div>
          </div>
          <div className="portfolio-box">
            <div className='portfolio-image'>
              <a href="#">
                <img src="../../public/images/t_logo.png" alt="#" />
              </a>
            </div>
            <div className='portfolio-title'>
              <span>Weather App</span>
            </div>
          </div>
          <div className="portfolio-box">
            <div className='portfolio-image'>
              <a href="#">
                <img src="../../public/images/t_logo.png" alt="#" />
              </a>
            </div>
            <div className='portfolio-title'>
              <span>Weather App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios