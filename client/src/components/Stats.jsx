import React from 'react';

const Stats = () => {
  return (
    <div className='pt-6 px-8'>
      <div className='mt-8 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
          <div className='flex items-center mb-4'>
            <div className='flex-shrink-0'>
              <span className='text-2xl sm:text-3xl leading-none font-bold text-yellow-500'>
                2,340
              </span>
              <h3 className='text-base font-normal text-yellow-500'>
                Pending Applications
              </h3>
            </div>
            <div className='ml-5 w-0 flex items-center justify-end flex-1 text-yellow-500 text-base font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='60'
                viewBox='0 0 24 24'
                fill='currentColor'>
                <path d='M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v3h20V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm5 10h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8v2z'></path>
              </svg>
            </div>
          </div>
        </div>
        <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <span className='text-2xl sm:text-3xl leading-none font-bold text-blue-700'>
                5,355
              </span>
              <h3 className='text-base font-normal text-blue-700'>
                Interviews Scheduled
              </h3>
            </div>
            <div className='ml-5 w-0 flex items-center justify-end flex-1 text-blue-700 text-base font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='60'
                viewBox='0 0 24 24'
                fill='currentColor'>
                <path d='M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm6-3.586-3.707-3.707 1.414-1.414L11 15.586l4.293-4.293 1.414 1.414L11 18.414zM5 7h14v2H5V7z'></path>
              </svg>
            </div>
          </div>
        </div>
        <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 '>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <span className='text-2xl sm:text-3xl leading-none font-bold text-red-500'>
                385
              </span>
              <h3 className='text-base font-normal text-red-500'>
                Job Declined
              </h3>
            </div>
            <div className='ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='60'
                viewBox='0 0 24 24'
                fill='currentColor'>
                <path d='M6.787 7h10.426c-.108-.158-.201-.331-.318-.481l2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812c-.118.151-.21.323-.319.481zM5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58.204.052.411.085.618.118V16h2v5.914a6.23 6.23 0 0 0 .618-.118 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9H5.756z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-16 w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
        <div className='bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4'>
          <div className='flex items-center justify-center mb-4'>
            <div className='flex-shrink-0'>
              <h3 className='text-base text-center text-gray-50text-2xl sm:text-3xl leading-none font-bold text-gray-9000'>
                Monthly Applications
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
