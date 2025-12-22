import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto px-5 py-9'>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='flex flex-col space-y-2'>
            <h3 className='text-3xl'>ImFahmi</h3>
            <span className='text-sm uppercase'>Fullstack developer</span>
            <span className='mx-4 text-sm list-item'>Available for freelance</span>
          </div>
          <div>
            <h5 className='text-lg font-semibold uppercase'>Links</h5>
            <ul className='mt-4 space-y-2 text-sm'>
              <li><a href='#' className='item-link'>Home</a></li>
              <li><a href='#skills' className='item-link'>Skills</a></li>
              <li><a href='#portfolios' className='itemslink'>Portfolios</a></li>
            </ul>
          </div>
          <div>
            <h5 className='text-lg font-semibold uppercase'>Socials</h5>
            <div className='flex mt-4 space-x-4'>
              <a href='#' className='item-link'>Instagram</a>
              <a href='#' className='item-link'>Twitter</a>
              <a href='#' className='item-link'>GitHub</a>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500'>
          © {new Date().getFullYear()} ImFahmi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer