import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';



const Root = () => {
  
  return (
    <div className='bg-[#FBE8D3] '>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;