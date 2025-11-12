import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Component/Navbar';


const Root = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;