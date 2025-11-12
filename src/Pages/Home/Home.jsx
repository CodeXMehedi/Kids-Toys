import React from 'react';
import { use } from 'react';
import Banner from '../../Component/Banner';
import SomeToys from '../../Component/SomeToys';


const Home = ({ toysPromise }) => {
  const data = use(toysPromise);
  return (
    <div className='bg-[#FBE8D3]'>
      <Banner></Banner>
      <SomeToys data={data}></SomeToys>
    </div>
  );
};

export default Home;