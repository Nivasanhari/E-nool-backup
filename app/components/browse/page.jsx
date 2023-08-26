"use client";
import Image from "next/image";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Addbook from "@/app/components/addBook/page";
import bgimg from "public/assets/bg1.png";
import book from "public/assets/book.png";
import Staricon from "@/app/components/staricon/Staricon";
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';

import Lefe from "public/assets/Lefe1.png";
import img1 from "public/assets/img1.png";
import Add from "public/assets/Add.png";
import Ellipse from "public/assets/Ellipse.png";
import CategoriesButton from "../CategoriesButton/CategoriesButton";
import { CardsGrid, CardsList } from "@/app/components/CardsGrid/Cards";
import DefaultLayout from "../DefaultLayout/layout";
const dropdown = "/icons/dropdown.svg";
const gridEnabled = "/icons/grid-enabled.svg";
const gridDisabled = "/icons/grid-disabled.svg";
const listEnabled = "/icons/list-enabled.svg";
const listdisabled = "/icons/list-disabled.svg";

const page = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [showModal, setShowModal] = useState(false);
  const [isGridView, setGridView] = useState(true);

  const enableGridView = () => {
    if (!isGridView) {
      setGridView(true);
    }
  };

  const enableListView = () => {
    if (isGridView) {
      setGridView(false);
    }
  };
  const categoriesRef = useRef(null);
  const handleDocumentClick = (event) => {
    if (
      categoriesRef.current &&
      !categoriesRef.current.contains(event.target) &&
      event.target !== categoriesRef.current
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);


  const bookgrid = [
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
    <DefaultLayout>
      <Fragment>
        <div className="rounded-3xl  container mx-auto ">
          {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
          <div className=" pt-1 pb-8">
            <div className="">
              <div className="  text-[#015464] text-xl font-graphik mt-32  ">
                <ul className="flex m-0 items-center p-0">
                  <li className="flex items-center text-left">
                    <a
                      href="#"
                      title=""
                      className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li className="flex items-center text-left">
                    <svg
                      className="block h-5 w-5 align-middle text-[#015464]"
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
                      className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                    >
                      {" "}
                      Browse{" "}
                    </a>
                  </li>
                </ul>
              </div>


            </div>
            <div className=' container justify-start '>
              <div className=' '>
                <h3 className=" text-[#015464] text-3xl font-graphikBold mt-2  ">
                  Browse
                </h3>
              </div>

              <div className='flex '>

                <button className=' my-4    text-[#015464] text-sm font-semibold'>New Releases</button>
                <button className='ml-10 my-4    text-[#015464] text-sm font-semibold ' onClick={handleDropdownToggle} ref={handleDocumentClick}>Categories </button>

                <div className="sm:flex  sm:space-x-3 ml-auto mb-2 justify-end  ">
                  <button onClick={enableGridView}>
                    <Image
                      width={10}
                      height={10}
                      src={isGridView ? gridEnabled : gridDisabled}
                      alt="gridEnabled"
                      className="px-2 w-10"
                    />
                  </button>
                  <button onClick={enableListView}>
                    <Image
                      width={10}
                      height={10}
                      src={!isGridView ? listEnabled : listdisabled}
                      alt="listdisabled"
                      className="px-2 w-9 items-center"
                    />
                  </button>
                </div>


              </div>
              <div className="  mr-10 top-1 ">
                {" "}
                {isDropdownOpen && <CategoriesButton />}
              </div>
              <div className=" absolute z-0 h-[2px] left-0 right-0 w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>
              <hr className=' absolute w-24 p-1  bg-[#015464] mt-[-2]' />


            </div>

          </div>

          <div className=" conatiner justify-center items-center mt-10  gap-10 flex">
            {isGridView ? (
              <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 lg:gap-3 w-full">

                {bookgrid.map((book) => (
                  <CardsGrid
                    key={book.id}

                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    ratingCount={book.ratingCount}
                    currency={book.currency}
                    price={book.price}
                    imageSrc={book.imageSrc} />
                ))}
              </div>
            ) : (
              <div className="md:px-2 xl:px-0">
                <CardsList />
              </div>
            )}
          </div>
        </div>
        <Addbook isVisivle={showModal} onClick={() => setShowModal(false)} />
      </Fragment>
    </DefaultLayout>
  );
};

export default page;
