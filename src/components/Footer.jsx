import React from 'react'
import { navs } from '../data/navs';
import { socials } from '../data/socials';

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto p-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='flex flex-col space-y-2' data-aos='fade-up'>
            <h3 className='text-3xl'>ImFahmi</h3>
            <span className='pt-2 text-sm uppercase tracking-wide'>Fullstack developer</span>
            <span className='ml-4 text-sm list-item'>Available for freelance</span>
          </div>
          <div data-aos='fade-up' data-aos-delay='100'>
            <h5 className='text-lg font-semibold uppercase'>Links</h5>
            <ul className='pt-2 md:mt-4 space-y-1 md:space-y-2 text-sm'>
              {navs.map((item, i) => (
                <li key={i} data-aos='fade-up' data-aos-delay={i * 100}>
                  <a href={`#${item.link}`} className='item-link'>{item.nav}</a>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos='fade-up' data-aos-delay='200'>
            <h5 className='text-lg font-semibold uppercase'>Socials</h5>
            <div className='flex pt-2 md:pt-4 space-x-4 text-sm'>
              {socials.map((item, i) => (
                <a key={i} href={item.link} className='item-link' data-aos='fade-left' data-aos-delay={i * 100}>{item.platform}</a>
              ))}
            </div>
          </div>
        </div>
        <div className='border-t border-gray-400 border-opacity-70 mt-10 pt-6 text-center text-sm text-gray-400'>
          © 2025 ImFahmi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer