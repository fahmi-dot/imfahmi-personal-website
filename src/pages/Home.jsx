import React from 'react'
import { About, Footer, Hero, MenuButton, Navbar, Portfolios, Skills } from '../components'

const Home = () => {
  return (
    <div>
      <MenuButton />
      <div className='flex justify-end'>
        <header className='w-1/6'>
          <Navbar />
        </header>
        <main className='w-5/6'>
          <div className='container'>
            <div className='container-box'>
              <section id='hero' className='border-none mt-0 pt-0 pb-5' data-aos='fade-up'>
                <Hero />
              </section>
              <section id='about' data-aos='fade-up'>
                <About />
              </section>
              <section id='skills' data-aos='fade-up'>
                <Skills />
              </section>
              <section id='portfolios' data-aos='fade-up'>
                <Portfolios />
              </section>
              <section id='footer' className='my-0 pt-5 pb-0' data-aos='fade-up'>
                <Footer />
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home