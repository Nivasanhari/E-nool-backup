"use client"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import Image from 'next/image';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image className=" rounded  object-cover  object-center mb-4 mx-auto" src={TrendingReads1} alt="content" width={250}  /></SwiperSlide>
      <SwiperSlide><Image className=" rounded  object-cover  object-center mb-4 mx-auto" src={TrendingReads1} alt="content" width={250} /></SwiperSlide>

    </Swiper>
  );
};