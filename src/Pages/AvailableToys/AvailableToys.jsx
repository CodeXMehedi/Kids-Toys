import React, { use } from 'react';
import AvailableToysCard from '../../Component/AvailableToysCard';


const AvailableToys = ({ toysPromise }) => {
  const toys = use(toysPromise);
  return (
    < >
      <div className='bg-gray-100 h-screen-full'>
        <h1 className='text-6xl font-bold text-center text-gray-700 mt-10' >Cats Eye</h1>
        <h1 className='text-[#B8860B] font-semibold text-3xl text-center'>Explore our toy wonderland</h1>
        <h2 className='text-[#B8860B] font-semibold text-3xl text-center mt-4'>Learning through play, growing through joy! <br /> A colorful world of toys for your little one</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-10/12 gap-8 m-auto my-10'>

          {
            toys.map(toy => <AvailableToysCard key={toy.toyId} toy={toy}></AvailableToysCard>)
          }

        </div>
  </div>
    </>
  );
};

export default AvailableToys;