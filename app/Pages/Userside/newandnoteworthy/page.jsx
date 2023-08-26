"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// import TrendingCurve from 'public/assets/LandingPage/Trending curve.png';
import TrendingReads1 from "public/assets/LandingPage/TrendingReads1.png";

import { CardsGrid, CardsList } from "@/app/components/CardsGrid/Cards";
import CategoriesButton from "@/app/components/CategoriesButton/CategoriesButton";
import FeaturedAuthors from "../landingPage/FeaturedAuthors";
import FeaturedPublishers from "../landingPage/FeaturedPublishers";
import DefaultLayout from "@/app/components/DefaultLayout/layout";
import publisherbook from "public/assets/trendingbook.png";

import Link from "next/link";

export default function page() {
  const dropdown = "/icons/dropdown.svg";
  const gridEnabled = "/icons/grid-enabled.svg";
  const gridDisabled = "/icons/grid-disabled.svg";
  const listEnabled = "/icons/list-enabled.svg";
  const listdisabled = "/icons/list-disabled.svg";

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
  //Dropdown for categories
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const bookData = {
    imageSrc: TrendingReads1,
    title: "King of Battle and Blood",
    rating: 4, // This can be a dynamic value, like from an API or state
    author: "Scarlett St.Clair",
  };

  //dropdown for filter

  const [isShowOpen, setShowOpen] = useState(false);

  const handleShowToggle = () => {
    setShowOpen(!isSortOpen);
  };
  const [isSortOpen, setSortOpen] = useState(false);

  const handleSortToggle = () => {
    setSortOpen(!isSortOpen);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      <section className=" w-full z-40 ">
        <div className=" pt-12 leading-6">
          <div className=" px-4 sm:px-6 lg:px-8 mt-20 mx-auto max-w-screen-2xl  text-[#015464]">
            <nav>
              <ul className="flex m-0 items-center p-0">
                <li className="flex items-center text-left">
                  <a
                    href="#"
                    title=""
                    className="cursor-pointer text-sm font-normal leading-5 text-[#015464] hover:text-gray-900"
                  >
                    {" "}
                    Browse{" "}
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
                    Categories{" "}
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
                    New & Noteworthy{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  md:text-4xl lg:text-5xl mb-4 font-graphikBold text-[#015464] ">
              UPTO 30% OFF
              <br className="hidden lg:inline-block" />
            </h1>
            <h1 className="title-font  md:text-4xl lg:text-5xl mb-4 font-graphikBold text-[#015464] ">
              {" "}
              START A SERIES{" "}
            </h1>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={publisherbook}
            />
          </div>
        </div>
        <div className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <div className="  md-px-24 relative  container  mx-auto">
            <div className="flex flex-wrap w-full ">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-2">
                <h1 className="text-3xl  font-graphikBold title-font pb-4 text-[#015464]">
                  New & Noteworthy
                </h1>
              </div>
            </div>
            <div className="lg:flex justify-between mb-10 ">
              <button
                type="button"
                onClick={handleDropdownToggle}
                className="flex items-center justify-between w-80 px-4 py-2 bg-[#7CC9B5] text-white rounded-3xl hover:bg-[#7CC9B5]/90 focus:outline-none space-x-2 flex-row"
              >
                <span className="pl-5">Browse By Subject</span>
                <Image
                  src={dropdown}
                  alt="Dropdown"
                  className="w-3 h-3"
                  width={3}
                  height={3}
                />
              </button>

              {isDropdownOpen && (
                <CategoriesButton
                  isDropdownOpen={isDropdownOpen}
                  setDropdownOpen={setDropdownOpen}
                />
              )}
            </div>

            <div className="sm:flex pt-3 sm:space-x-3 mx-auto justify-end ">
              <button
                type="button"
                onClick={handleShowToggle}
                className="flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-xl hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2"
              >
                <span className="pl-5 text-[#015464] text-sm ">Show: All</span>
                <Image
                  src={dropdown}
                  alt="Dropdown"
                  className="w-3 h-3"
                  width={3}
                  height={3}
                />
              </button>
              <div ref={dropdownRef}>
                {isShowOpen && (
                  <ul
                    className="absolute mt-2  right-80 top-44 py-2 w-52 bg-[#EEF2F6] border border-gray-200 shadow-lg rounded-md z-10 "
                    ref={dropdownRef}
                  >
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>{" "}
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>{" "}
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>{" "}
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>
                  </ul>
                )}
              </div>

              <button
                type="button"
                onClick={handleSortToggle}
                className="flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-xl hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2"
              >
                <span className="pl-5 text-[#015464] text-sm">
                  Short By: Publisher
                </span>
                <Image
                  src={dropdown}
                  alt="Dropdown"
                  className="w-3 h-3"
                  width={3}
                  height={3}
                />
              </button>
              <div ref={dropdownRef}>
                {isSortOpen && (
                  <ul className="absolute mt-2  right-10 top-44 py-2 w-52 bg-[#EEF2F6] border border-gray-200 shadow-lg rounded-md z-10">
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>{" "}
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>{" "}
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>{" "}
                    <Link href="#">
                      <li className="pl-5 text-[#015464] text-sm my-3 ">
                        Lorem ipsum{" "}
                      </li>
                    </Link>
                  </ul>
                )}
              </div>

              <button onClick={enableGridView}>
                <Image
                  src={isGridView ? gridEnabled : gridDisabled}
                  alt="gridEnabled"
                  className="px-2 w-10"
                  width={10}
                  height={10}
                />
              </button>
              <button onClick={enableListView}>
                <Image
                  src={!isGridView ? listEnabled : listdisabled}
                  alt="listdisabled"
                  className="px-2 w-9 items-center"
                  width={9}
                  height={10}
                />
              </button>
            </div>
            <div className=" z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>

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
              <div>
                <CardsList />
              </div>
            )}
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center mt-4">
          <nav
            className="inline-flex items-center justify-center rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative  inline-flex items-center rounded-l-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <p className="text-sm  text-[#408080]">Previous</p>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative  z-10 inline-flex items-center bg-[#7CC9B5] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative  hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative  hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative   inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relativem-1    inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative    inline-flex items-center rounded-r-sm px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <p className="text-sm text-[#408080] ">Next</p>
            </a>
          </nav>
        </div>
      </section>
    </DefaultLayout>
  );
}
