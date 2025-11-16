import React from 'react';
import { use } from 'react';
import Banner from '../../Component/Banner';
import SomeToys from '../../Component/SomeToys';
import DocumentMeta from 'react-document-meta';

const Home = ({ toysPromise }) => {
  const data = use(toysPromise);
  const meta = {
    title: "Home | Kids Toys Market",
    description: "Welcome to Kids Toys Market home page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "kids toys, baby toys, home page"
      }
    }
  };

  return (
    <DocumentMeta {...meta}>
    <div className='bg-[#FBE8D3] mt-10 lg:mt-0'>
      
      <Banner></Banner>
      <SomeToys data={data}></SomeToys>

      </div>
    </DocumentMeta>
  );
};

export default Home;