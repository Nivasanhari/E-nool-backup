"use client"
import Image from 'next/image'
import React, { Fragment, useState, useEffect, useRef } from 'react'
import Mywishlist from '@/app/components/mywishlist/page'
import Addbook from '@/app/components/addBook/page'
import DefaultLayout from '@/app/components/DefaultLayout/layout';
import bgimg from 'public/assets/bg1.png'
import book from 'public/assets/book.png'
import Staricon from '@/app/components/staricon/Staricon'
import Lefe from 'public/assets/Lefe1.png'
import img1 from 'public/assets/img1.png'
import Add from 'public/assets/Add.png'
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import moreOption from 'public/icons/more-options-dotted.png';
import arrow from '@/public/icons/arrow.svg';
import { Menu, Transition } from '@headlessui/react'
import Bookshelves from '@/app/components/bookshelves/page'
import { CardsGrid, CardsList } from "@/app/components/CardsGrid/Cards";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


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





const page = () => {
    const [showModal, setShowModal] = useState(false);


    const dropdown = '/icons/dropdown.svg'
    const gridEnabled = '/icons/grid-enabled.svg'
    const gridDisabled = '/icons/grid-disabled.svg'
    const listEnabled = '/icons/list-enabled.svg'
    const listdisabled = '/icons/list-disabled.svg'

    const [isGridView, setGridView] = useState(true);
    const [isMyWishlist, setisMyWishlist] = useState(true);

    const enableGridView = () => {
        if (!isGridView) {
            setGridView(true);
        }
    };
    const enableListView = () => {
        if (isGridView) {
            setGridView(false);
        }
    }
    const enableWishView = () => {
        if (!isMyWishlist) {
            setisMyWishlist(true);
        }
    };
    const enableBookView = () => {
        if (isMyWishlist) {
            setisMyWishlist(false);
        }
    };

    ;
    const [isSortOpen, setSortOpen] = useState(false);

    const handleSortToggle = () => {
        setSortOpen(!isSortOpen);
    };
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
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

    // Data from json

    return (<DefaultLayout>
        <Fragment>
            <div className='rounded-3xl  container mx-auto'>
                {/* <Image className=' absolute ml-[460px] w-[1200px]' src={bgimg} alt='bgimg' /> */}
                <div className=' container justify-start pt-10 pb-8'>
                    <div className=' ml-10'>
                        <h3 className=' text-[#015464] text-3xl font-extrabold mt-20 '>My Library</h3>
                    </div>
                    <div className=' mt-8'>
                        <div className="absolute left-0 right-0 z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>

                        <button className=' mt-4 mb-4 ml-10  text-[#015464] text-sm font-semibold'>Current Reading</button>
                        <hr className=' absolute w-24 p-1 ml-10 bg-[#015464] mt-[-2]' />
                        <div className=" absolute z-0 h-[2px] left-0 right-0 w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2   md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3 ml-10 mt-20">
                    <div >
                        <Image className=" rounded w-56 object-cover object-center mb-4" src={TrendingReads1} alt="content" />
                        <h2 className="text-[16px] text-[#1A6270] font-bold   mb-2">King of Battle and Blood</h2>
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
                        <p className="text-[12px] tracking-widest text-[#1A6270] text-xs  mb-2  ">by Scarlett St.Clair</p>
                        <p className=' text-[#015464] text-sm opacity-60'>Read 47%</p>
                        <div className=' flex mb-3'><div className=' bg-[#408080] p-1 w-20'></div><div className=' bg-[#7CC9B5] p-1 w-20'></div></div>
                        <button className=' bg-[#015464] text-white p-2 px-3 rounded-xl'>Continue Reading</button>
                    </div>
                    <div>
                        <Image className=" rounded w-56 object-cover object-center mb-4" src={TrendingReads1} alt="content" />
                        <h2 className="text-[16px] text-[#1A6270] font-bold   mb-2">King of Battle and Blood</h2>
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
                        <p className="text-[12px] tracking-widest text-[#1A6270] text-xs  mb-2  ">by Scarlett St.Clair</p>
                        <p className=' text-[#015464] text-sm opacity-60'>Read 47%</p>
                        <div className=' flex mb-3'><div className=' bg-[#408080] p-1 w-20'></div><div className=' bg-[#7CC9B5] p-1 w-20'></div></div>
                        <button className=' bg-[#015464] text-white p-2 px-3 rounded-xl'>Continue Reading</button>

                    </div>
                    <div>
                        <Image className=" rounded w-56 object-cover object-center mb-4" src={TrendingReads1} alt="content" />
                        <h2 className="text-[16px] text-[#1A6270] font-bold   mb-2">King of Battle and Blood</h2>
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
                        <p className="text-[12px] tracking-widest text-[#1A6270] text-xs  mb-2  ">by Scarlett St.Clair</p>
                        <p className=' text-[#015464] text-sm opacity-60'>Read 47%</p>
                        <div className=' flex mb-3'><div className=' bg-[#408080] p-1 w-20'></div><div className=' bg-[#7CC9B5] p-1 w-20'></div></div>
                        <button className=' bg-[#015464] text-white p-2 px-3 rounded-xl'>Continue Reading</button>

                    </div>
                    <div>
                        <Image className=" rounded w-56 object-cover object-center mb-4" src={TrendingReads1} alt="content" />
                        <h2 className="text-[16px] text-[#1A6270] font-bold   mb-2">King of Battle and Blood</h2>
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
                        <p className="text-[12px] tracking-widest text-[#1A6270] text-xs  mb-2  ">by Scarlett St.Clair</p>
                        <p className=' text-[#015464] text-sm opacity-60'>Read 47%</p>
                        <div className=' flex mb-3'><div className=' bg-[#408080] p-1 w-20'></div><div className=' bg-[#7CC9B5] p-1 w-20'></div></div>
                        <button className=' bg-[#015464] text-white p-2 px-3 rounded-xl'>Continue Reading</button>

                    </div>
                    <div>
                        <Image className=" rounded w-56 object-cover object-center mb-4" src={TrendingReads1} alt="content" />
                        <h2 className="text-[16px] text-[#1A6270] font-bold   mb-2">King of Battle and Blood</h2>
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
                        <p className="text-[12px] tracking-widest text-[#1A6270] text-xs  mb-2  ">by Scarlett St.Clair</p>
                        <p className=' text-[#015464] text-sm opacity-60'>Read 47%</p>
                        <div className=' flex mb-3'><div className=' bg-[#408080] p-1 w-20'></div><div className=' bg-[#7CC9B5] p-1 w-20'></div></div>
                        <button className=' bg-[#015464] text-white p-2 px-3 rounded-xl'>Continue Reading</button>

                    </div>
                </div>
                <div className="absolute left-0 right-0  z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded my-3"></div>

                <div className=' mt-8'>
                    <div className=' flex ml-10 text-center gap-4'>
                        <button className=' text-[#015464] font-bold'
                            onClick={enableWishView}
                        >
                            My Wishlist</button>
                        <button className=' text-[#015464] font-bold'
                            onClick={enableBookView}
                        >
                            My Bookshelves

                        </button>

                        <div className="sm:flex pt- sm:space-x-3 mx-auto justify-end mb-5" >


                        </div>


                        <div ref={dropdownRef}>

                            <button
                                type="button"
                                onClick={handleSortToggle}
                                className="flex items-center justify-between w-80 sm:w-52 px-4 py-2 bg-[#EEF2F6] text-white rounded-lg hover:bg-[#EEF2F6]/90 focus:outline-none space-x-2 flex-row mb-2"
                            >
                                <span className="p-1 text-[#015464] text-sm">
                                    Short By: Date Added
                                </span>
                                <Image src={dropdown} alt="Dropdown" className="w-3 h-3"
                                    width={3}
                                    height={3} />
                            </button>
                            {isSortOpen && (
                                <ul className="absolute  mt-2   mr-96 z-50 py-2 w-52 bg-[#EEF2F6] border border-gray-200 shadow-lg rounded-md ">

                                    <li className="pl-5 text-[#015464] text-sm my-3 ">
                                        Lorem ipsum{" "}
                                    </li>


                                    <li className="pl-5 text-[#015464] text-sm my-3 ">
                                        Lorem ipsum{" "}
                                    </li>
                                    {" "}

                                    <li className="pl-5 text-[#015464] text-sm my-3 ">
                                        Lorem ipsum{" "}
                                    </li>
                                    {" "}

                                    <li className="pl-5 text-[#015464] text-sm my-3 ">
                                        Lorem ipsum{" "}
                                    </li>
                                    {" "}

                                    <li className="pl-5 text-[#015464] text-sm my-3 ">
                                        Lorem ipsum{" "}
                                    </li>

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
                    <div className="absolute left-0 right-0 z-0 h-[2px] w-full bg-[#0FBF61] opacity-20 rounded mb-5"></div>


                </div>

            </div>


            {isMyWishlist ? (
                <div className='mx-auto container mt-5 '>


                    {isGridView ?
                        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-3">
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
                        </div> : <CardsList />}
                </div>
            ) : (
                <div className=' mx-auto container pl-50'>



                    <div className=' ml-36'>
                        <Image className=" rounded w-56 object-cover object-center mb-4" src={Add} alt="content" />
                        <button className=' bg-[#015464] p-3 px-5 text-white rounded-xl items-center ' onClick={() => setShowModal(true)}>+ Add New</button>
                    </div>
                </div>
            )}

            <Addbook isVisivle={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    </DefaultLayout>
    )
}




export default page





