import React from 'react';
import ToyCard from './ToyCard';


const SomeToys = ({ data }) => {
  const someToy = data.slice(0, 6);
  return (
    <>
      <h2 className='text-[#A55E2A] font-bold text-4xl text-center mt-16'>Popular Toys</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 w-10/12 gap-8 m-auto my-10'>

        {
          someToy.map(toy => <ToyCard key={toy.toyId} toy={toy}></ToyCard>)
        }
        
      </div>
    </>
  );
};

export default SomeToys;