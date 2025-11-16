import React from 'react';
import { use } from 'react';
import Banner from '../../Component/Banner';
import SomeToys from '../../Component/SomeToys';
import DocumentMeta from 'react-document-meta';
import PopularBrands from '../../Component/PopularBrands';
import WhyChooseUs from '../../Component/WhyChooseUs';
import Footer from '../../Component/Footer';

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
        <PopularBrands></PopularBrands>
      <SomeToys data={data}></SomeToys>
       
        <WhyChooseUs></WhyChooseUs>
        <Footer></Footer>
      </div>
    </DocumentMeta>
  );
};

export default Home;