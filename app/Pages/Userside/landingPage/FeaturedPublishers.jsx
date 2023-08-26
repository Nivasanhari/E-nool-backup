import React from 'react'
import Image from 'next/image';
import trendingCurve from 'public/assets/LandingPage/Trending curve.png';
import brand_1 from 'public/assets/LandingPage/brand-1.png';
import brand_2 from 'public/assets/LandingPage/brand-2.png';
import brand_3 from 'public/assets/LandingPage/brand-3.png';
import brand_4 from 'public/assets/LandingPage/brand-4.png';
import brand_5 from 'public/assets/LandingPage/brand-5.png';
import brand_6 from 'public/assets/LandingPage/brand-6.png';
export default function FeaturedPublishers  ()  {
  return (
      <section className=" w-full mt-10">



          <div className=" m-auto flex justify-between items-center sm:px-16 px-6 py-4 " >
              <div className="  md-px-24 relative  container pt-24 mx-auto">
              <div className="flex flex-wrap w-full mb-10 lg:flex-row flex-col">
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
                          <h1 className="text-3xl font-graphikBold title-font pb-4 text-[#015464] lg:w-full">
                          Featured Publishers
                      </h1>
                      <div className="h-1 w-48 bg-[#0FBF61] opacity-20 rounded"></div>
                  </div>
                  <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:flex md:justify-end items-center">
                      <button className="text-white bg-[#015464] border-0 py-2 px-6 focus:outline-none w-28 h-10 rounded-[21px] text-sm">
                          <h1 className="items-center">View all</h1>
                      </button>
                  </div>
              </div>

              <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 ">
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-96 object-cover object-center mb-6" src={brand_1} alt="content" />
                   </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-96 object-cover object-center mb-6" src={brand_2} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-96 object-cover object-center mb-6" src={brand_3} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-96 object-cover object-center mb-6" src={brand_4} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-96 object-cover object-center mb-6" src={brand_5} alt="content" />
                  </div>
                  <div className="p-4 flex flex-col items-center">
                      <Image className=" rounded w-96 object-cover object-center mb-6" src={brand_6} alt="content" />
                  </div>

                  
                </div> 
              </div>


          </div>

      </section>
  )
}
