import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-wrap flex-col justify-between h-full'>
      <div>
        <div className='my-5 py-5'>
          <a href="#">
            <img src="../../public/images/t_logo.png" alt="imFahmi" className='w-full'/>
          </a>
        </div>
        <nav id='one-page-menu'>
          <ul className='list-none'>
            <li className='item-list'><a href="#" className='nav-link'>Home</a></li>
            <li className='item-list'><a href="#about" className='nav-link'>About</a></li>
            <li className='item-list'><a href="#" className='nav-link'>Skills</a></li>
            <li className='item-list'><a href="#" className='nav-link'>Portfolios</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <div id='social-menu'>
          <ul className='flex flex-wrap justify-start gap-3 list-none'>
            <li className='item-list'><a href="#">LinkedIn</a></li>
            <li className='item-list'><a href="#">GitHub</a></li>
            <li className='item-list'><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className='my-5 pt-5 flex justify-center border-t border-gray-200'>
          <p className='text-sm'>ImFahmi</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar