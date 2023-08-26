'use client'
import React from 'react'

import Image from 'next/image';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import rs from 'public/assets/rs.png'
import tick from 'public/assets/tick.png'
import TrendingReads2 from 'public/assets/LandingPage/TrendingReads2.png';
import TrendingReads3 from 'public/assets/LandingPage/TrendingReads3.png';
import TrendingReads4 from 'public/assets/LandingPage/TrendingReads4.png';
import TrendingReads5 from 'public/assets/LandingPage/TrendingReads5.png';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import moreOption from 'public/icons/more-options-dotted.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
export default function CarouselCardItems() {
    return (
        <div>
            <div>
                <div className=' mt-28 bg-white '>
                <div className=' flex flex-col m-auto ml-80'>
                    <h1 className=' text-[#015464] font-extrabold text-4xl'>Silver</h1>
                    <p className=" mt-2 text-[14px]  text-[#01adad] font-bold">Low-cost affordable reading to get you started.</p>
                </div>

                    <div className=' flex justify-center items-center'>
                        <div className="w-[300px] h-96  lg:mt-16 max-w-sm mb-52">
                            <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center items-center flex">
                                <div className=' text-start'>
                                    <h2 className=" mt-1 text-[#015464] ml-7 text-center text-2xl font-extrabold pt-6">SILVER PLAN 01</h2>
                                    <p className="text-center ml-5 mt-2 text-[14px]  text-[#015464] font-bold">Low-cost affordable reading to get you started.</p>
                                    <div className=' flex justify-center items-center mt-10'>
                                        <Image src={rs} className=' ' alt='rs' />
                                        <p className="text-center text-7xl  text-[#14adad] font-bold">5</p>
                                    </div>
                                    <p className=' text-center ml-6 text-[#015464] font-semibold'>PRE MONTH</p>
                                    <p className=' text-sm m-auto ml-3 mt-3  bg-[#7CC9B5] text-[#015464] '>Renews june 2023 for ₹5.00/mo (₹ 60.00total)</p>
                                    <button className=' bg-[#015464] text-white mt-10 p-2 px-8 rounded-xl mx-auto ml-12'>SUBSCRIBR NOW</button>
                                    <div className=' flex flex-col justify-center items-center'>
                                        <div className=' flex gap-5 mt-10'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                        <div className=' flex gap-5 mt-3'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                        <div className=' flex gap-5 mt-3'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[300px] h-96 mt-[50px] ml-10 lg:mt-16 max-w-sm mb-52">
                            <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                                <div className=' text-start'>
                                    <h2 className=" mt-1 text-[#015464] ml-7 text-center text-2xl font-extrabold pt-6">SILVER PLAN 02</h2>
                                    <p className="text-center ml-5 mt-2 text-[14px]  text-[#015464] font-bold">Low-cost affordable reading to get you started.</p>
                                    <div className=' flex justify-center items-center mt-10'>
                                        <Image src={rs} className=' ' alt='rs' />
                                        <p className="text-center text-7xl  text-[#14adad] font-bold">15</p>
                                    </div>
                                    <p className=' text-center ml-6 text-[#015464] font-semibold'>PRE MONTH</p>
                                    <p className=' text-sm m-auto ml-3 mt-3  bg-[#7CC9B5] text-[#015464] '>Renews june 2023 for ₹5.00/mo (₹ 60.00total)</p>
                                    <button className=' bg-[#015464] text-white mt-10 p-2 px-8 rounded-xl ml-12'>SUBSCRIBR NOW</button>
                                    <div className=' flex flex-col justify-center items-center'>
                                        <div className=' flex gap-5 mt-10'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                        <div className=' flex gap-5 mt-3'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                        <div className=' flex gap-5 mt-3'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] h-96 mt-[50px] ml-10 lg:mt-16 max-w-sm mb-52">
                            <div className="bg-white shadow-2xl rounded-b-3xl pb-6 pr-8 justify-center flex">
                                <div className=' text-start'>
                                    <h2 className=" mt-1 text-[#015464] ml-7 text-center text-2xl font-extrabold pt-6">SILVER PLAN 03</h2>
                                    <p className="text-center ml-5 mt-2 text-[14px]  text-[#015464] font-bold">Low-cost affordable reading to get you started.</p>
                                    <div className=' flex justify-center items-center mt-10'>
                                        <Image src={rs} className=' ' alt='rs' />
                                        <p className="text-center text-7xl  text-[#14adad] font-bold">25</p>
                                    </div>
                                    <p className=' text-center ml-6 text-[#015464] font-semibold'>PRE MONTH</p>
                                    <p className=' text-sm m-auto ml-3 mt-3  bg-[#7CC9B5] text-[#015464] '>Renews june 2023 for ₹5.00/mo (₹ 60.00total)</p>
                                    <button className=' bg-[#015464] text-white mt-10 p-2 px-8 rounded-xl ml-12'>SUBSCRIBR NOW</button>
                                    <div className=' flex flex-col justify-center items-center'>
                                        <div className=' flex gap-5 mt-10'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                        <div className=' flex gap-5 mt-3'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                        <div className=' flex gap-5 mt-3'>
                                            <Image src={tick} alt='tick' />
                                            <p className=' text-[#015464] font-semibold'>lorem ipsum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}


export const CarouselCards = () => {
    return (
        <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3">
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />
            <CarouselCardItems />






        </div>
    )
}





