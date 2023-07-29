'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LeafBg from 'public/assets/LandingPage/Leaf-Bg.png'

export default function Testimonials () {
  return (
      <section className="  text-gray-600 body-font">
          <Image src={LeafBg} alt=""  className='absolute'/>
          <div className="w-full md-px-24 relative  container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-10">
                  <div className="lg:w-1/2 w-full my-6 lg:mb-0">
                      <h1 className="sm:text-3xl text-2xlads font-bold title-font mb-2 text-[#015464]">What Readers Says</h1>
                      <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
                  </div>
                  <div className="hidden  lg:w-1/2 w-full my-6 lg:mb-0  lg:flex lg:justify-end "> 
                      <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
                  </div>
              </div>
              <div className="container m-auto  text-gray-600 ">
                  <div className="grid gap-7 sm:grid-rows-1 md:grid-rows-2  lg:grid-cols-3">
                      <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FEF5F5] text-center sm:p-8">
                          <div className="h-full flex flex-col justify-center space-y-4">
                              <Image className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />

                              {/* <p className="text-[#015464] md:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, "</p> */}
                              <div>
                                  <h6 className="text-lg font-semibold leading-none">Jane Doe/New York</h6>

                              </div>
                          </div>
                      </div>
                      <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#F4FBF2] text-center sm:p-8">
                          <div className="h-full flex flex-col justify-center space-y-4">
                              <Image className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />

                              {/* <p className="text-[#015464] md:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, "</p> */}
                              <div>
                                  <h6 className="text-lg font-semibold leading-none">Jane Doe/New York</h6>

                              </div>
                          </div>
                      </div>
                      <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-[#FEF5F5] text-center sm:p-8">
                          <div className="h-full flex flex-col justify-center space-y-4">
                              <Image className="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy" />

                              {/* <p className="text-[#015464] md:text-xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, "</p> */}
                              <div>
                                  <h6 className="text-lg font-semibold leading-none">Jane Doe/New York</h6>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className=" lg:hidden lg:w-1/2 w-full my-6 lg:mb-0 flex justify-center ">
                  <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
              </div>
              
         
          </div>
         
      </section>
  )
}
