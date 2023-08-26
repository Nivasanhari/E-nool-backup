'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import Leaf2 from 'public/assets/LandingPage/Leaf2.png'
import cardObject from 'public/assets/LandingPage/testimonial-object.png'
import testimonialProfile from 'public/assets/LandingPage/testimonialProfile.png'

export default function Testimonials() {
    const swiperRef = useRef(null);
    const [isAutoplay, setIsAutoplay] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        const autoplayTimeout = setTimeout(() => {
            setIsAutoplay(true);
            setIsPlaying(true);
        }, 1000);

        return () => {
            clearTimeout(autoplayTimeout);
        };
    }, []);






    const slides = [
        {
            avatarSrc: testimonialProfile,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident,',
            author: 'Jane Doe / india',
            bgColor: '#FEF5F5',
        },
        {
            avatarSrc: testimonialProfile,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident,',
            author: 'Jane Doe / New York',
            bgColor: '#F4FBF2',
        },
        {
            avatarSrc: testimonialProfile,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident,',
            author: 'Jane Doe / New York',
            bgColor: '#F5F7FE',
        },
        {
            avatarSrc: testimonialProfile,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident,',
            author: 'Jane Doe / New York',
            bgColor: '#F5F7FE',
        },
        {
            avatarSrc: testimonialProfile,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident,',
            author: 'Jane Doe / New York',
            bgColor: '#F5F7FE',
        },
        {
            avatarSrc: testimonialProfile,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident,',
            author: 'Jane Doe / New York',
            bgColor: '#F5F7FE',
        },
        // Add more slides in the same format
    ];
    
    return (
        <section className="   relative">
            <div className=" m-auto flex justify-between items-center sm:px-16 py-4 " >

            {/* <Image src={Leaf2} alt="" className='absolute mt-96' /> */}
            <div className="w-full md-px-24 relative  container  py-10 mx-auto ">
                <div className="flex flex-wrap w-full mb-10 md:flex-row flex-col">
                    <div className="md:w-1/2 w-full mb-6 lg:mb-2">
                            <h1 className="text-3xl font-graphikBold title-font pb-4 text-[#015464] lg:w-full">What Readers Says</h1>
                        <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded">
                        </div>

                    </div>
                    
                      

                   <div className="md:w-1/2 w-full mb-6 lg:mb-0 md:flex md:justify-end items-center">
                        <div className="   py-2 px-6  w-36 h-10   ">  <div className="swiper-pagination-2    "></div></div>
                    </div>
                   
                </div>
                
                <div className="container m-auto  text-gray-600 ">

                    <Swiper
                        ref={swiperRef}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            el: '.swiper-pagination-2',
                            clickable: true,
                          
                            renderBullet: (index,className) => {
                                return `<span class="${className}" style="background-color: #015464;"></span>`;
                            },
                        }}
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: { slidesPerView: 1,  },
                            768: { slidesPerView: 3,  },
                            1024: { slidesPerView: 3, },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`row-span-2 p-6 border border-gray-100 rounded-xl text-center sm:p-8`}
                                    style={{ backgroundColor: slide.bgColor }}
                                >
                                    <div className="h-full flex flex-col justify-center space-y-4">
                                        <Image
                                            className="w-20 h-20 mx-auto rounded-full"
                                            src={slide.avatarSrc}
                                            alt="user avatar"
                                            height={220}
                                            width={220}
                                            loading="lazy"
                                        />

                                        <p className="text-[#015464] md:text-xl font-graphik">{slide.text}</p>
                                        <div className="relative text-center">
                                            <Image
                                                src={cardObject}
                                                alt="card-object"
                                                className="mx-auto"
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <h6 className="text-lg font-graphik font-black  leading-none text-[#015464]">
                                                    {slide.author}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
         
         </div>
            </div>
            </div>
            
                <div className=" lg:hidden lg:w-1/2 w-full my-6 lg:mb-0 flex justify-center ">
                    <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
                </div>




        </section>
    )
}
