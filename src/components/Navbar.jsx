import React from 'react'
import { navs } from '../data/navs'
import { socials } from '../data/socials'

const Navbar = ({ activeSection }) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        <div className='my-3 py-3'>
          <a href="#">
            <img src="/images/t_logo.png" alt="imFahmi" className='w-full'/>
          </a>
        </div>
        <nav id='one-page-menu'>
          <ul className='list-none'>
            {navs.map((item, i) => (
              <li key={i} className='item-list' data-aos='fade-right' data-aos-delay={i * 100}>
                <a href={`#${item.link}`} className={`nav-link ${activeSection === item.link ? 'active' : ''}`}>
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        <div id='social-menu'>
          <ul className='flex flex-wrap justify-start gap-3 list-none'>
            {socials.map((item, i) => (
              <li key={i} className='item-list text-sm'><a href={item.link}>{item.platform}</a></li>
            ))}
          </ul>
        </div>
        <div className='my-5 pt-6 flex justify-center text-sm border-t text-gray-400 border-gray-400 border-opacity-70'>
          <p className='text-sm'>© ImFahmi</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar