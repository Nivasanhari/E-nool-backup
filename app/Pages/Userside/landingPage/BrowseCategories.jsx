"use client";
import React from "react";
import Image from "next/image";
import Leaf2 from '@/public/assets/LandingPage/Leaf-Bg.png'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


import 'swiper/css/navigation';

import leftarrow from 'public/icons/left-arrow.png';
import rightarrow from 'public/icons/right-arrow.png'
import browseCategories1 from "public/assets/LandingPage/browse-categories1.png";
import browseCategories2 from "public/assets/LandingPage/browse-categories2.png";
import browseCategories3 from "public/assets/LandingPage/browse-categories3.png";
import browseCategories4 from "public/assets/LandingPage/browse-categories4.png";
import browseCategories5 from "public/assets/LandingPage/browse-categories5.png";

export default function BrowseCategories() {
  return (
    <section className="w-full">
       <Image
        className=" hidden lg:block absolute z-0   md:w-28 mt-18"
        src={Leaf2}
        alt=""
      /> 

      <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 ">
        <div className="  md-px-24 relative  container  mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
              <h1 className="sm:text-3xl text-2xlads font-graphikBold title-font mb-2 text-[#015464]">
                Browse Book Categories
              </h1>
              <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
         
            </div>
            
 
              <div className="swiper-navigation-buttons-1 lg:w-1/2 w-full mb-6 lg:mb-0 flex lg:justify-end space-x-3">
              <Image src={leftarrow} className=" swiper-button-prev-3 cursor-pointer" />
              <Image src={rightarrow} className=" swiper-button-next-3 cursor-pointer" />
              </div> 
            

          
          </div>
          
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 5,
              },
            }}
            freeMode={true}
            
            navigation={{ 
              nextEl: '.swiper-button-next-3',
              prevEl: '.swiper-button-prev-3',
            }}
            modules={[Autoplay,Navigation]}

            
          >
            <SwiperSlide>     
              <div className="p-4">
              <div className="p-6 rounded-lg ">
                <Image
                  className="rounded w-auto object-cover object-center mb-6"
                  src={browseCategories1}
                  alt="content"
                />
                <h2 className="text-lg text-[#015464]  text-center font-bold mb-1">
                  Young Adult
                </h2>
              </div>
            </div>
             </SwiperSlide>
             
            <SwiperSlide> 
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories2}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Romance
                  </h2>
                </div>
              </div>
               </SwiperSlide>
            <SwiperSlide> 
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover  object-center mb-6"
                    src={browseCategories3}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Science & Fantasy
                  </h2>
                </div>
              </div> </SwiperSlide>
            <SwiperSlide> 

              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories4}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464]  text-center font-bold mb-1">
                    Mystry & Crime
                  </h2>
                </div>
              </div> </SwiperSlide>
            <SwiperSlide>  
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories5}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Trillers & Horror
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories1}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Young Adult
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories1}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Young Adult
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-4">
                <div className="p-6 rounded-lg">
                  <Image
                    className="rounded w-auto object-cover object-center mb-6"
                    src={browseCategories1}
                    alt="content"
                  />
                  <h2 className="text-lg text-[#015464] text-center font-bold mb-1">
                    Young Adult
                  </h2>
                </div>
              </div>
            </SwiperSlide>
        

          </Swiper>
        
      
   
     
     
          </div>
        </div>
    
 
    </section>
  );
}

{
  /* <div className="xl:w-1/4 md:w-1/2 p-4">
    <div className=" p-6 rounded-lg ">
        <Image className=" rounded w-auto object-cover object-center mb-6" src={browseCategories} alt="content" />
        <h2 className="text-lg text-[#015464] font-bold   mb-1">Young Adult</h2>
    </div>
</div> */
}
