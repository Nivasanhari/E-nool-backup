'use client'
import React from "react";
import { useState } from "react";
import bgimg from "public/assets/bg1.png";
import Image from "next/image";
import Link from "next/link";
import Staricon from "@/app/Components/staricon/Staricon";
import Lefe from "public/assets/Lefe1.png";
import dash1 from "public/assets/Dashboard/dashimg.png";
import dash2 from "public/assets/Dashboard/dashimg1.png";
import dash3 from "public/assets/Dashboard/dashimg2.png";
import dash4 from "public/assets/Dashboard/dashimg3.png";
import dash5 from "public/assets/Dashboard/dashimg4.png";
import dash6 from "public/assets/Dashboard/dashimg5.png";
import book from "public/assets/book.png";
import DefaultLayout from '@/app/components/DefaultLayout/layout';

const page = () => {
  const [activeContent, setActiveContent] = useState('all'); // Initial state is 'all'

  const handleButtonClick = (contentType) => {
    setActiveContent(contentType);
  };

  return (<DefaultLayout>
    <div className="container mx-auto  sm:p-5 sm:justify-center sm:mx-50 m-auto ml-28">
      {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
      <div className=" container pt-10 pb-8 ">
        <div className="">
          <h3 className="  text-[#015464] text-2xl font-black mt-32 font-graphikBold">
            Welcome, User Name!
          </h3>
          <p className="mt-2 text-[#14adad] text-[12px] font-graphikBold">Quicklinks</p>
        </div>     
        <Image className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 " src={Lefe} alt="" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 sm:items-center sm:justify-center gap-4 lg:gap-3">
        <Link href='/Pages/Userside/mylibrary'>
        <div className=" flex  items-center bg-[#7CC9B5] w-56 rounded-xl">
          <Image
            className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
            src={dash1}
            alt="dash1-img"
          />
          <p className=" text-white px-5 p-6 rounded-xl font-bold">
            My Library
          </p>
        </div>
        </Link>
        <Link href='/Pages/Userside/purchasehistory'>
        <div className=" flex  items-center bg-[#7CC9B5]  w-56 rounded-xl">
          <Image
            className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
            src={dash2}
            alt="dash1-img"
          />
          <button className=" text-white px-3 p-6 rounded-xl font-bold">
            Purchase History
          </button>
        </div>
      </Link>
        <Link href='/Pages/Userside/paymentinfo'>
        <div className=" flex  items-center bg-[#7CC9B5] w-56 rounded-xl">
          <Image
            className=" bg-[#015464] bg-cover p-5 py-7 w-auto rounded-xl"
            src={dash3}
            alt="dash1-img"
          />
          <p className=" text-white px-3 p-6 rounded-xl font-bold">
            Payment Info
          </p>
        </div>
        </Link>
        <Link href='/Pages/Userside/terms&privacy'>
        <div className=" flex  items-center bg-[#7CC9B5] w-56 rounded-xl">
          <Image
            className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
            src={dash4}
            alt="dash1-img"
          />
          <p className=" text-white px-3 p-6 rounded-xl font-bold">
            Terms Of service
          </p>
        </div>
        </Link>

        <div className=" flex  items-center bg-[#7CC9B5] w-56 rounded-xl">
          <Image
            className=" bg-[#015464] bg-cover p-5 w-auto rounded-xl"
            src={dash5}
            alt="dash1-img"
          />
          <p className=" text-white px-5 p-6 rounded-xl font-bold">
            Edit Profile
          </p>
        </div>
        <Link href='/Pages/Userside/subscription'>
        <div className=" flex  items-center bg-[#7CC9B5] w-56 rounded-xl">
          <Image
            className=" bg-[#015464] bg-cover p-5 py-4 w-auto rounded-xl"
            src={dash6}
            alt="dash1-img"
          />
          <p className=" text-white px-5 p-6 rounded-xl font-bold">
            Subscription
          </p>
        </div>
        </Link>

        
      </div>
      {/* <Image className=" hidden lg:block absolute  z-0 bottom-36 w-28 " src={Lefe} alt="" /> */}

      <div className=" mt-40 items-center flex mx-auto container ">
        
        <div className=" bg-white shadow-lg sm:w-4/5  rounded-2xl p-10 mr-40 ">
        <h1 className=" text-[#015464] text-xl font-graphikBold">Activities</h1>
          <div className="">
            <div className="flex mt-8 gap-5 space-x-9">
              <button
                className={`text-lg  ${activeContent === 'all' ? 'bg-[#7CC9B5] px-5 rounded text-white' : 'text-[#145464]'}`}
                onClick={() => handleButtonClick('all')}
              >
                All
              </button>
              <button
                className={`text-lg ${activeContent === 'subscription' ? 'bg-[#7CC9B5] px-5 rounded text-white' : 'text-[#145464]'}`}
                onClick={() => handleButtonClick('subscription')}
              >
                Subscription
              </button>
              <button
                className={`text-lg ${activeContent === 'downloads' ? 'bg-[#7CC9B5] px-5 rounded text-white' : 'text-[#145464]'}`}
                onClick={() => handleButtonClick('downloads')}
              >
                Downloads
              </button>
            </div>

              

              {activeContent === 'all' && (
              <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-1 sm:grid-cols-1 sm:items-center lg:grid-cols-2 gap-4  lg:gap-3">
                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image className=" rounded w-56 object-cover object-center mb-4" src={book} alt="content" />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">Subscription</button>
                    <h1 className=" text-[#015464]  text-xl mt-6 font-graphikBold">King of Battle and Blood</h1>
                      <p className=" text-[#14adad] mt-5">by Scarlett st. clair</p>
                      <p className=" text-[#015464] font-semibold mt-3">May 21,2023</p>
                    </div>
                  </div>

                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image className=" rounded w-56 object-cover object-center mb-4" src={book} alt="content" />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">Subscription</button>
                    <h1 className=" text-[#015464] font text-xl mt-6 font-graphikBold">King of Battle and Blood</h1>
                      <p className=" text-[#14adad] mt-5">by Scarlett st. clair</p>
                      <p className=" text-[#015464] font-semibold mt-3">May 21,2023</p>
                    </div>
                  </div>

                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image className=" rounded w-56 object-cover object-center mb-4" src={book} alt="content" />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">Subscription</button>
                    <h1 className=" text-[#015464] font text-xl mt-6 font-graphikBold">King of Battle and Blood</h1>
                      <p className=" text-[#14adad] mt-5">by Scarlett st. clair</p>
                      <p className=" text-[#015464] font-semibold mt-3">May 21,2023</p>
                    </div>
                  </div>

                  <div className=" flex mt-10 items-center">
                    <div>
                      <Image className=" rounded w-56 object-cover object-center mb-4" src={book} alt="content" />
                    </div>
                    <div className=" ml-10 item-centre ">
                      <button className=" bg-[#7CC9B5] p-2 px-4 text-white rounded-3xl">Subscription</button>
                    <h1 className=" text-[#015464] font text-xl mt-6 font-graphikBold">King of Battle and Blood</h1>
                      <p className=" text-[#14adad] mt-5">by Scarlett st. clair</p>
                      <p className=" text-[#015464] font-semibold mt-3">May 21,2023</p>
                    </div>
                  </div>
                </div>
               
              )}
              {activeContent === 'subscription' && (
                <div>
                  <h3 className="  text-[#015464] text-2xl font-black mt-32 ">
                    No Subscription
                  </h3>
                </div>
              )}
              {activeContent === 'downloads' && (
                <div>
                  <h3 className="  text-[#015464] text-2xl font-black mt-32 ">
                    No downloads
                  </h3>
                </div>
              )}
              
              
              
         

  
           

          </div>
        </div>
      </div>

      <div className=" mb-[100px] mt-28 ml- lg:justify-center lg:p-1">
        <h2 className=" text-[#145464] font-graphikBold text-3xl">
          Currently Reading
        </h2>
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-4">
          <div className=" flex mt-10">
            <div>
              <Image className=" rounded w-56 object-cover object-center mb-4" src={book} alt="content" />
            </div>
            <div className=" ml-14 mt-5">
              <h1 className=" text-[#015464] font-graphikBold text-2xl">King of Battle and Blood</h1>
              <div className="flex flex-wrap mb-2">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p className="tracking-widest text-[#280c0c] text-xs  ">(27)</p>
              </div>
              <p className=" text-[#14adad] mt-5">by Scarlett st. clair</p>
              <p className=" text-[#015464] font-semibold mt-3 max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, ex voluptas perferendis quidem ut veniam repellendus.</p>
              <div className=" mt-5">
                <button className=" bg-[#015464] p-2 px-4 rounded-3xl text-white">Read</button>
                <button className=" bg-[#7CC9B5] ml-7 p-2 px-4 rounded-3xl text-white">Write Review</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </DefaultLayout>
  );
};

export default page;
