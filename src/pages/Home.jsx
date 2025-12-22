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
              <section id='hero' className='pb-5' data-aos='fade-up'>
                <Hero />
              </section>
              <section id='about' className='my-5 py-5' data-aos='fade-up'>
                <About />
              </section>
              <section id='skills' className='my-5 py-5' data-aos='fade-up'>
                <Skills />
              </section>
              <section id='portfolios' className='my-5 py-5' data-aos='fade-up'>
                <Portfolios />
              </section>
              <section id='footer' className='pt-5' data-aos='fade-up'>
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