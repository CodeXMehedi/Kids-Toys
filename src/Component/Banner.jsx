import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
     <SwiperSlide>
        <div className='w-full h-[500px] relative'>
          <img src="https://i.ibb.co.com/qFXk8zjF/pexels-yankrukov-8429915.jpg" className='object-cover w-full h-full' alt="" />
          <p className='text-5xl font-bold leading-20 text-[#8B5E3C] absolute top-20 left-20'>Playtime Perfection: <br /> Unleash Your <br /> Inner Child</p>
        </div>
      </SwiperSlide> 

      <SwiperSlide>
        <div className='w-full h-[500px]'>
          <img src="https://i.ibb.co.com/1JKWH9cX/pexels-laurie-ludes-546238-6017193.jpg" className='object-cover w-full h-full relative' alt="" />
          <p className='absolute right-20 top-10 font-semibold text-5xl leading-16'>A World of Wonder <br /> Awaits: <br /> Explore Our <br /> Toy Wonderland</p>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className='w-full h-[500px]'>
          <img src="https://i.ibb.co.com/0pfMNMZ9/pexels-ali-yildirim-69448-243167.jpg" className='object-cover w-full h-full' alt="" />
          <p className='absolute right-20 top-24  text-5xl leading-16 text-white'>Fun Has <br />Unlimited <br />Opportunities With <br /> Toy Galore</p>
        </div>
      </SwiperSlide> 

    </Swiper>

  );
};

export default Banner;