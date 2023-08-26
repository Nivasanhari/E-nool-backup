'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules

import Image from 'next/image';

import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import CarouselCardItems from '@/app/components/CarouselCards/CarouselCards';
import CarouselCards from '@/app/components/CarouselCards/CarouselCards';

import leftarrow from 'public/icons/left-arrow.png';
import rightarrow from 'public/icons/right-arrow.png'
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'



function EnoolPicks(props) {
    const bookData = [
        {
            id: '1',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '2',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '3',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '4',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '5',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '6',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '7',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '8',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        },
        {
            id: '9',
            imageSrc: TrendingReads1,
            title: 'King of Battle and Blood',
            rating: '4',
            ratingCount: '27',
            currency: 'Rs',
            price: '50', // This can be a dynamic value, like from an API or state
            author: 'Scarlett St.Clair',
        }
    ];
    return (
        <section className="trending_curve ">
            <div className="mx-auto flex justify-between items-center sm:px-16 px-6 mt-10 mb-20 ">
                <div className="flex flex-col items-center w-full ">
                    <h1 className="sm:text-3xl text-2xl font-graphikBold title-font mb-4 text-[#015464]">
                        100 + Books Genre for Readers
                    </h1>
                    <h2 className="text-xs text-[#565656] tracking-widest  title-font pb-3">
                        Your Next#Enool Read Is Here
                    </h2>
                    <div className="h-1 w-20 bg-[#0FBF61] opacity-20 rounded justify-center"></div>
                    <button className="flex mx-auto mt-3 text-white bg-[#7CC9B5] border-0 py-2 px-8 focus:outline-none hover:bg-[#578f80] rounded-[23px] text-sm">
                        Explore Now
                    </button>
                </div>
            </div>

            <div className=" mx-auto  flex justify-between items-center sm:px-16 px-6 py-4" >
                <div className="  md-px-24 relative  container mx-auto">
                    <div className="flex flex-wrap w-full mb-10">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 ">
                            <h1 className=" text-3xl font-graphikBold title-font mb-2 text-[#015464]">Enool Picks</h1>
                            <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
                            <p className=" font-sm  text-[#4B8787]  mt-2 ">Buzzworthy,bestselling and bingeable.Read the books everyone is talking about right now</p>
                        </div>
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex lg:justify-end ">
                            <Link href='/Pages/Userside/browsecategories'>
                                <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button></Link>
                        </div>
                    </div>

                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,

                            },
                            1024: {
                                slidesPerView: 4,
                            },


                            1536: {
                                slidesPerView: 5,
                            },

                        }}

                        spaceBetween={1}
                        freeMode={true}
                        navigation={{
                            nextEl: '.swiper-button-next-4',
                            prevEl: '.swiper-button-prev-4',
                            hiddenClass: 'swiper-button-hidden',
                        }}

                        modules={[FreeMode, Navigation]}
                        className="mySwiper"
                    >



                        {bookData.map((book) => (
                            <SwiperSlide>

                                <CarouselCardItems
                                    key={book.id}

                                    title={book.title}
                                    author={book.author}
                                    rating={book.rating}
                                    ratingCount={book.ratingCount}
                                    currency={book.currency}
                                    price={book.price}
                                    imageSrc={book.imageSrc} />

                            </SwiperSlide>
                        ))}




                    </Swiper>

                    <div className="swiper-navigation-buttons">
                        <Image src={leftarrow} className="swiper-button-prev-4 absolute lg:top-64 top-96 z-50 cursor-pointer" />
                        <Image src={rightarrow} className="swiper-button-next-4 absolute right-0 lg:top-64 top-96 z-50 cursor-pointer" />
                    </div>

                </div>







            </div>


        </section>
    )
}
export default EnoolPicks;