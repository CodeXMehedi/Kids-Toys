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
        <div className='w-full h-[250px] md:h-[350px] lg:h-[500px] relative'>
          <img src="https://i.ibb.co.com/qFXk8zjF/pexels-yankrukov-8429915.jpg" className='object-cover w-full h-full' alt="" />
          <p className='md:text-3xl lg:text-5xl font-bold lg:leading-20 text-[#8B5E3C] absolute top-1 left-10 md:top-10 md:left-16 lg:top-20 lg:left-20'>Playtime Perfection: <br /> Unleash Your <br /> Inner Child</p>
        </div>
      </SwiperSlide> 

      <SwiperSlide>
        <div className='w-full h-[250px] md:h-[350px] lg:h-[500px] '>
          <img src="https://i.ibb.co.com/1JKWH9cX/pexels-laurie-ludes-546238-6017193.jpg" className='object-cover w-full h-full relative' alt="" />
          <p className='absolute md:right-16 right-10 lg:right-20 lg:top-10 top-1 font-semibold md:text-3xl lg:text-5xl lg:leading-16'>A World of Wonder <br /> Awaits: <br /> Explore Our <br /> Toy Wonderland</p>
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className='w-300px lg:w-full md:h-[350px] h-[250px] lg:h-[500px] '>
          <img src="https://i.ibb.co.com/0pfMNMZ9/pexels-ali-yildirim-69448-243167.jpg" className='object-cover w-full h-full' alt="" />
          <p className='absolute lg:right-20 right-8 md:right-16 lg:top-24 bottom-6 md:text-3xl lg:text-5xl lg:leading-16 lg:text-white text-amber-600 text-bold'>Fun Has <br />Unlimited <br />Opportunities With <br /> Toy Galore</p>
        </div>
      </SwiperSlide> 

    </Swiper>

  );
};

export default Banner;