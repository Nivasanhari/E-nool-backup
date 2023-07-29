import React from 'react'
import Image from 'next/image';
import trendingCurve from 'public/assets/LandingPage/Trending curve.png';
import brand_1 from 'public/assets/LandingPage/brand_1.png';
export default function FeaturedPublishers  ()  {
  return (
      <section className="  text-gray-600 body-font">
          <Image src={trendingCurve} alt="" className="absolute justify-end h-screen w-screen" />

          <div className="w-full md-px-24 relative  container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-10">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                      <h1 className="sm:text-3xl text-2xlads font-bold title-font mb-2 text-[#015464]">Featured Publishers</h1>
                      <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
                  </div>
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-end">
                      <button className=" text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm "><h1 className="items-center">View all</h1></button>
                  </div>
              </div>

              <div className="flex flex-wrap -m-4">
                  <div className="xl:w-1/4 md:w-1/2 p-4 items-center">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                   </div>
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                  </div>
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                  </div>
                  <div className="xl:w-1/4 md:w-1/2 p-4">
                      <Image className=" rounded w-auto object-cover object-center mb-6" src={brand_1} alt="content" />
                  </div>
                  
              </div>


          </div>

      </section>
  )
}
