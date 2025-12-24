import React from 'react'

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
          <div className='portfolio-box' data-aos='fade-up'>
            <div className='portfolio-image'>
              <a href='/portfolio/1'>
                <img src='/images/t_logo.png' alt='#'/>
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Weather App</p>
              <span>Flutter, GetX, SharedPreferences, HTTP</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='100'>
            <div className='portfolio-image'>
              <a href='/portfolio/2'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Driver App</p>
              <span>Flutter, Riverpod, SharedPreferences, GPS, Biometric</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='200'>
            <div className='portfolio-image'>
              <a href='/portfolio/3'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Chat App</p>
              <span>Flutter, Riverpod, SharedPreferences, Hive, Sqflite</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='300'>
            <div className='portfolio-image'>
              <a href='/portfolio/4'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Chat App API</p>
              <span>Spring Boot, JWT, WebSocket</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='400'>
            <div className='portfolio-image'>
              <a href='/portfolio/5'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Personal Store Web App</p>
              <span>React JS, Redux, Tailwind CSS</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='500'>
            <div className='portfolio-image'>
              <a href='/portfolio/6'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Personal Store API</p>
              <span>Spring Boot, JWT</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='500'>
            <div className='portfolio-image'>
              <a href='/portfolio/6'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>ToDo List App</p>
              <span>Flutter, Riverpod, SharedPreferences</span>
            </div>
          </div>
          <div className='portfolio-box' data-aos='fade-up' data-aos-delay='500'>
            <div className='portfolio-image'>
              <a href='/portfolio/6'>
                <img src='/images/t_logo.png' alt='#' />
              </a>
            </div>
            <div className='portfolio-caption'>
              <p>Rebike API</p>
              <span>Spring Boot, JWT, WebSocket</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolios