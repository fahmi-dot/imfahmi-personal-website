import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto p-5'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='flex flex-col space-y-2'>
            <h3 className='text-3xl'>ImFahmi</h3>
            <span className='pt-2 text-sm uppercase tracking-wide'>Fullstack developer</span>
            <span className='ml-4 text-sm list-item'>Available for freelance</span>
          </div>
          <div>
            <h5 className='text-lg font-semibold uppercase'>Links</h5>
            <ul className='pt-2 md:mt-4 space-y-1 md:space-y-2 text-sm'>
              <li><a href='#' className='item-link'>Home</a></li>
              <li><a href='#skills' className='item-link'>Skills</a></li>
              <li><a href='#portfolios' className='itemslink'>Portfolios</a></li>
            </ul>
          </div>
          <div>
            <h5 className='text-lg font-semibold uppercase'>Socials</h5>
            <div className='flex pt-2 md:pt-4   space-x-4 text-sm'>
              <a href='#' className='item-link'>GitHub</a>
              <a href='#' className='item-link'>LinkedIn</a>
              <a href='#' className='item-link'>Instagram</a>
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