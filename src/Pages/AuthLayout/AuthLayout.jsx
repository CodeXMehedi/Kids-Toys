import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';


const AuthLayout = () => {
  return (
    <div className='bg-base-300 min-h-screen'>
      <header >
        <Navbar></Navbar>
      </header>
      <main className='w-11/12 mx-auto lg:py-5'>
        <Outlet></Outlet>

      </main>
<Footer></Footer>
    </div>
  );
};

export default AuthLayout;