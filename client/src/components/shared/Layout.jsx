import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className='h-screen flex overflow-hidden bg-white pt-16'>
        <Navbar />
        <div className='bg-gray-900 opacity-50 hidden fixed inset-0 z-10'></div>
        <div className='w-full bg-gray-50 relative overflow-y-hidden lg:ml-64'>
          {<Outlet />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
