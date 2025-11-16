import React from 'react';


const Footer = () => {
  return (
    <div className='bg-[#C47F4A] text-white'>
      <div className='flex flex-col lg:flex-row gap-10 p-20'>
        <div className='flex-1 lg:ml-16'>
          <div className='flex items-center gap-2'><p className='text-2xl font-bold'>Cats Eye</p></div>
          <p className='mt-6'> © 2025 Cats Eye Toy Market. Bringing joy and learning to every child through our wide range of toys.</p>
        </div>
        <div className='flex-1 '>
          <div className='flex flex-col h-full justify-center items-center gap-2'>
            <a href="">About</a>
            <a href="">Blog</a>
            <a href="">FAQ</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms & Conditions</a>
          </div>
        </div>
        <div className='flex-1 m-auto text-center '>
          <p>Social Links</p>
          <div className='flex  h-full justify-center items-center mt-2  gap-4'>

            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Footer;

