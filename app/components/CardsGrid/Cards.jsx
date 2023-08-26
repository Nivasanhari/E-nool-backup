"use client";
import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "../dropdown/Dropdown";
import TrendingReads1 from "public/assets/LandingPage/TrendingReads1.png";
import eye from "public/icons/eye.png";
import heart from "public/icons/heart.png";
import moreOption from "public/icons/more-options-dotted.png";
import arrow from "@/public/icons/arrow.svg";
import heartred from "public/icons/heartred.png";
import CarouselCardItems from "../CarouselCards/CarouselCards";

import Link from "next/link";

export const CardsGrid = ({ title, author, rating, imageSrc, ratingCount, currency, price }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isHeartRed, setIsHeartRed] = useState(false);

  const handleHeartClick = () => {
    setIsHeartRed(!isHeartRed);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };




  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };







  return (
    <div className="mb-40 mx-auto items-center justify-center font-graphik " >

      <Image className=" rounded w-56 object-cover object-center mb-4  " src={imageSrc} alt="content" />
      <h2 className="text-[16px] text-[#1A6270] font-graphikBold  mb-2 ">{title}</h2>
      <div className="flex flex-wrap mb-2  "> {renderStars(rating)}

        <p className="tracking-widest text-[#280c0c] text-xs  ">({ratingCount})</p>
      </div>
      <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2  ">by {author}</p>
      <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2   ">{currency}.{price}</p>

      <div className="flex flex-wrap space-x-4 pt-2 mb-1 text-center relative z-0 ">
        <Link href='https://enoolwebflipbooktest.netlify.app/'>
          <Image src={eye} className="w-8" alt="" />
        </Link>
        <button onClick={handleHeartClick}>
          <Image src={isHeartRed ? heartred : heart} className="w-8" alt="" />
        </button>
        <button onClick={handleDropdownToggle}>
          <Image src={moreOption} className="w-8" alt="" />
        </button>
        {isDropdownOpen && <Dropdown isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} />}
      </div>
    </div>
  );
};

export const CardsList = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isHeartRed, setIsHeartRed] = useState(false);

  const handleHeartClick1 = () => {
    setIsHeartRed(!isHeartRed);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="grid gap-8 grid-cols-1 sm:gap-12 xl:gap-16 ">
      <div className="border border-[#E4E4E4] rounded-[21px] bg-white p-5 flex flex-col md:flex-row">
        <div className="md:w-56">
          <Image
            className="rounded  w-56 object-cover object-center my-auto"
            src={TrendingReads1}
            alt="content"
          />
        </div>
        <div className="flex flex-col justify-between  md:px-6  w-full">
          <div className="h-full">
            <div className="flex lg:flex-row flex-col">
              <h2 className="text-3xl text-[#1A6270] font-graphikBold  w-full">
                King of Battle and Blood
              </h2>
              <div className="flex flex-row  space-x-6 pt-2 mb-1 text-center relative z-0 xl:mx-5">
                <Link href="https://enoolwebflipbooktest.netlify.app/">
                  <Image src={eye} className="w-8" alt="" />
                </Link>
                <button onClick={handleHeartClick1}>
                  <Image
                    src={isHeartRed ? heartred : heart}
                    className="w-8"
                    alt=""
                  />
                </button>
                <button onClick={handleDropdownToggle}>
                  <Image src={moreOption} className="w-8" alt="" />
                </button>
                {isDropdownOpen && (
                  <Dropdown
                    isDropdownOpen={isDropdownOpen}
                    setDropdownOpen={setDropdownOpen}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-wrap mb-2">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <p className="text-[12px] tracking-widest text-[#1A6270] text-xs mb-2">
              by Scarlett St.Clair
            </p>
            <h2 className="font-graphikItalic font-bold text-[#015464] mb-2">
              Describes what being a foster mom is really like, the effects of
              foster care on the whole family, and how the foster care system
              fails severely abused children.
            </h2>
            <p>
              Foster children are society’s throwaway kids, the children no one
              wants—until someone finally does. Saving Michael provides an
              inside look Keri Vellis’ struggle to secure the best possible
              services for two severely abused and traumatized siblings. Some
              doors opened, but too many closed during her ten-year journey as
              the voice for children in her care who have no voice of...…..
            </p>
            <div className="flex flex-wrap">
              <button className="flex items-center text-white bg-[#015464] border-0 py-2 mt-10 px-6 focus:outline-none w-auto h-10 rounded-[21px] text-sm">
                <h1>Read More</h1>
                <Image src={arrow} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
