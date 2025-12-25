import React from 'react'

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
            <li className='item-list'>
              <a href="#hero"className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>
                Home
              </a>
            </li>
            <li className='item-list'>
              <a href="#about"className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
                About
              </a>
            </li>
            <li className='item-list'>
              <a href="#skills"className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
                Skills
              </a>
            </li>
            <li className='item-list'>
              <a href="#portfolios"className={`nav-link ${activeSection === 'portfolios' ? 'active' : ''}`}>
                Portfolios
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div id='social-menu'>
          <ul className='flex flex-wrap justify-start gap-3 list-none'>
            <li className='item-list'><a href="#">GitHub</a></li>
            <li className='item-list'><a href="#">LinkedIn</a></li>
            <li className='item-list'><a href="#">Instagram</a></li>
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