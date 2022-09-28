import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='bg-white border-b border-gray-200 fixed z-30 w-full'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <button
              id='toggleSidebarMobile'
              aria-expanded='true'
              aria-controls='sidebar'
              className='lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded'>
              <svg
                id='toggleSidebarMobileHamburger'
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'></path>
              </svg>
              <svg
                id='toggleSidebarMobileClose'
                className='w-6 h-6 hidden'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
            </button>
            <Link
              to='/'
              className='text-xl font-bold flex items-center lg:ml-2.5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 mr-2'
                viewBox='0 0 47.5 47.5'>
                <defs>
                  <clipPath id='a'>
                    <path d='M0 38h38V0H0v38Z' />
                  </clipPath>
                </defs>
                <g clipPath='url(#a)' transform='matrix(1.25 0 0 -1.25 0 47.5)'>
                  <path
                    fill='#3b88c3'
                    d='M37 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V5Z'
                  />
                  <path
                    fill='#fff'
                    d='M24.102 14.201c0-5.209-3.318-6.573-6.139-6.573-2.14 0-5.705.837-5.705 3.534 0 .838.713 1.892 1.736 1.892 1.24 0 2.325-1.148 3.721-1.148 1.736 0 1.736 1.613 1.736 2.606v13.332c0 1.55.993 2.418 2.325 2.418 1.334 0 2.326-.868 2.326-2.418V14.201Z'
                  />
                </g>
              </svg>
              <span className='self-center whitespace-nowrap'>Jober</span>
            </Link>
            <form action='#' method='GET' className='hidden lg:block lg:pl-32'>
              <label htmlFor='topbar-search' className='sr-only'>
                Search
              </label>
              <div className='mt-1 relative lg:w-64'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='w-5 h-5 text-gray-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clipRule='evenodd'></path>
                  </svg>
                </div>
                <input
                  type='text'
                  name='email'
                  id='topbar-search'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5'
                  placeholder='Search'
                />
              </div>
            </form>
          </div>
          <div className='flex items-center'>
            <button
              id='toggleSidebarMobileSearch'
              type='button'
              className='lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg'>
              <span className='sr-only'>Search</span>
              <svg
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'></path>
              </svg>
            </button>
            <Link
              to='/login'
              className='hidden sm:inline-flex ml-5 text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-3 py-2.5 text-center items-center mr-3'>
              <span className='inline-flex items-center justify-center mr-1 text-lg text-gray-900'>
                <i className='bx bx-log-out'></i>
              </span>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
