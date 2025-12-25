import React, { useEffect, useState } from 'react'
import { About, Footer, Hero, MenuButton, Navbar, Portfolios, Skills } from '../components'

const Home = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <div className={navActive ? 'nav-active' : ''}>
      <MenuButton navActive={navActive} setNavActive={setNavActive} />

      <div className='flex justify-end'>
        <header>
          <Navbar activeSection={activeSection} />
        </header>
        <main className='w-full lg:w-5/6'>
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
        </main>
      </div>
    </div>
  )
}

export default Home