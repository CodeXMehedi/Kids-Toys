import React, { use } from 'react';
import AvailableToysCard from '../../Component/AvailableToysCard';
import DocumentMeta from 'react-document-meta'

const AvailableToys = ({ toysPromise }) => {

  const toys = use(toysPromise);
  const meta = {
    title: "Available Toys | Kids Toys Market",
    description: "Browse all available toys from our collection.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "toys, kids toys, available toys, toy store"
      }
    }
  };
  return (
    < >
      <DocumentMeta {...meta}>
      <div className=' h-screen-full '>
        <h1 className='text-6xl font-bold text-center text-gray-700 mt-10' >Cats Eye</h1>
        <h1 className='text-[#B8860B] font-semibold text-3xl text-center'>Explore our toy wonderland</h1>
        <h2 className='text-[#B8860B] font-semibold text-3xl text-center mt-4'>Learning through play, growing through joy! <br /> A colorful world of toys for your little one</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 gap-8 m-auto my-10'>

          {
            toys.map(toy => <AvailableToysCard key={toy.toyId} toy={toy}></AvailableToysCard>)
          }

        </div>
        </div>
      </DocumentMeta>
    </>
  );
};

export default AvailableToys;