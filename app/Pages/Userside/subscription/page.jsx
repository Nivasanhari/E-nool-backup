
'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import Image from 'next/image';

import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import CarouselCardItems from '@/app/components/subscriptionCard/page';
import CarouselCards from '@/app/components/CarouselCards/CarouselCards';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import moreOption from 'public/icons/more-options-dotted.png';
import leftarrow from 'public/icons/left-arrow.png';
import rightarrow from 'public/icons/right-arrow.png'
import Aboutbg from 'public/assets/aboutbg.png'
import Leaf from 'public/assets/LandingPage/Leaf1.png'
import LefeBg from 'public/assets/lefe1.png'
import pricing from 'public/assets/Pricing.png'
import pricingimg from 'public/assets/pricingimg.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import img1 from 'public/assets/img1.png'
import Ellipse from 'public/assets/Ellipse.png'
import Leaf2 from 'public/assets/leaf2.png'
import DefaultLayout from '@/app/components/DefaultLayout/layout';




export default function TrendingReads() {
  const bookData = {
    imageSrc: TrendingReads1,
    title: 'King of Battle and Blood',
    rating: 4, // This can be a dynamic value, like from an API or state
    author: 'Scarlett St.Clair',
  };
  return (<DefaultLayout>
    <div className="min-[2000px]:container min-[2000px]:mx-auto">
      <div className="mx-auto absolute top-10 mt-20 z-50  text-[#015464] md:ml-44">
        <nav>
          <ul className="flex m-0 items-center p-0">
            <li className="flex items-center text-left">
              <a
                href="#"
                title=""
                className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
              >
                {" "}
                Home{" "}
              </a>
            </li>

            <li className="flex items-center text-left">
              <svg
                className="block h-5 w-5 align-middle text-[#015464] "
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
              </svg>

              <a
                href="#"
                title=""
                className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
              >
                {" "}
                Privacy Policy{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>


        <div>
          <Image className=' relative h-[450px]' src={Aboutbg} />
          <Image className=" absolute z-0 top-24 w-16 " src={Leaf} alt="" />

          <div className='  justify-center items-center flex top-48 z-0 absolute '>

            <div className=' max-w-3xl ml-52'>
              <Image src={pricing} alt='pricing-img' />
              <h1 className=' text-[#015464] font-extrabold text-5xl'>Subscription</h1>
            </div>
            <Image className=' max-w-md' src={pricingimg} alt='pricingimg-img' />
          </div>
          <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 " src={LefeBg} alt="" />
        </div>

        <div className=" mx-auto flex justify-between items-center sm:px-16" >
          <Swiper


            slidesPerView={1}
            spaceBetween={1}
            freeMode={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="justify-center m-auto ">
              <Image className="swiper-button-prev  " src={leftarrow} />
              <Image className="swiper-button-next" src={rightarrow} />

            </div>

            <SwiperSlide>

              <CarouselCardItems />
            </SwiperSlide>
          </Swiper>
          <div className=' xl:max-w-sm'>
            <Image className=" hidden lg:block absolute top-[650px] z-0 bottom-36 right-0 w-28 " src={Leaf2} />
            <Image className=" hidden lg:block absolute top-[900px] z-0 bottom-36 right-0 w-72 " src={img1} />
            <Image className=" hidden lg:block absolute top-[1180px] z-0 bottom-36 right-20 w-20 " src={Ellipse} />
          </div>
        </div>

      </div>

    </div>
  </DefaultLayout>
  )
}











