import React from 'react';
import Banner from '../../src/Component/Banner';
import SomeToys from '../../src/Component/SomeToys';
import { use } from 'react';


const Home = ({ toysPromise }) => {
  const data = use(toysPromise);
  return (
    <div className='bg-[#1C1F26]'>
      <Banner></Banner>
      <SomeToys data={data}></SomeToys>
    </div>
  );
};

export default Home;