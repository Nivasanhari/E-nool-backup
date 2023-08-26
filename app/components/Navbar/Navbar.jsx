'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import SearchBar from '@/app/components/SearchBar/SearchBar'
import logo from 'public/icons/eNOOL_Logo.svg';
import searchbar from 'public/icons/searchbar.svg';
import searchclose from 'public/icons/searchclose.svg';
import CategoriesButton from '../CategoriesButton/CategoriesButton';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //search bar
    const [isInputVisible, setInputVisible] = useState(false);

    const toggleInput = () => {
        setInputVisible(!isInputVisible);
    }

    const [isDropdownOpen, setDropdownOpen] = useState(false);


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };


    return (
        <header className='w-full  absolute z-30 font-graphikBold'>
            <nav className=" mx-auto flex justify-between items-center sm:px-16 px-6 py-4   bg-white shadow ">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center ">
                            <Link href='/'>

                                <Image className="h-8 w-auto" src={logo} alt="Logo" />

                            </Link>
                            <div className="w-px h-10 bg-[#707070] mx-4 hidden lg:block"></div>
                            {/* Navbar Items */}
                            <div className="hidden lg:flex space-x-4 ">

                                <Link href='/components/browse'>
                                    <button
                                        href="#"
                                        className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                    >
                                        Browse
                                    </button>
                                </Link>
                                <button onClick={handleDropdownToggle}

                                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                >
                                    Categories
                                </button>
                                {isDropdownOpen && <CategoriesButton isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} />}



                                <button
                                    href="#"
                                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                >
                                    How It Works
                                </button>
                                <Link href='/Pages/Userside/publisher'>
                                    <button
                                        href="#"
                                        className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                    >
                                        Publisher
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Hamburger menu for small screens */}
                        <div className="flex items-center lg:hidden">
                            {!isInputVisible && (
                                <button className="px-6" onClick={toggleInput}>
                                    <Image src={searchbar} alt="search" className="h-4 w-4" />
                                </button>
                            )}
                            {isInputVisible && (
                                <div className="ml-2">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="border rounded p-2"
                                    />
                                    <button onClick={toggleInput} className="p-2 ml-2">
                                        <Image src={searchclose} alt="search" className="h-4 w-4" />
                                    </button>
                                </div>
                            )}
                            <button
                                className="text-[#408080] hover:text-[#565656] text-[18px] font-extrabold px-3 py-2"
                                onClick={toggleMenu}
                            >
                                &#9776;
                            </button>
                        </div>

                        {/* Search Bar & Buttons */}
                        <div className="hidden lg:flex items-center space-x-4 ">
                            {!isInputVisible && (
                                <button onClick={toggleInput}>
                                    <Image src={searchbar} alt="search" className="h-4 w-4" />
                                </button>
                            )}
                            {isInputVisible && (
                                <div className="ml-2">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="border rounded p-2"
                                    />
                                    <button onClick={toggleInput} className="p-2 ml-2">
                                        <Image src={searchclose} alt="search" className="h-4 w-4" />
                                    </button>
                                </div>
                            )}

                            <Link href='/Pages/Userside/login'>
                                <button className="rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]">
                                    LOG IN
                                </button>
                            </Link>
                            <Link href='/Pages/Userside/signup1'>
                                <button className="rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]">
                                    SIGN UP

                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Responsive menu items */}
                    {isMenuOpen && (
                        <div className="lg:hidden flex flex-col space-y-4 items-center text-right">
                            <Link href='/components/browse'>
                                <button
                                    href="#"
                                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                >
                                    Browse
                                </button>
                            </Link>
                            <Link href='/Pages/Userside/browsecategories'>
                                <button
                                    href="#"
                                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                >
                                    Categories
                                </button>
                            </Link>
                            <Link href='/Pages/Userside/landingPage'>
                                <button
                                    href="#"
                                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                >
                                    How It Works
                                </button>
                            </Link>
                            <Link href='/Pages/Userside/landingPage'>
                                <button
                                    href="#"
                                    className="text-[#408080] hover:text-[#565656] px-3 py-2 rounded-md text-sm font-extrabold"
                                >
                                    Publisher
                                </button>
                            </Link>
                            <Link href='/Pages/Userside/login'>
                                <button className="rounded-full text-[#565656] text-[12px] px-4 py-1 bg-opacity-0 border font-extrabold border-[#707070]">
                                    LOG IN
                                </button>
                            </Link>
                            <Link href='/Pages/Userside/signup1'>
                                <button className="rounded-full text-white text-[12px] px-4 py-1 bg-[#075A68] font-extrabold hover:bg-[#04404a]">
                                    SIGN UP
                                </button>
                            </Link>

                        </div>
                    )}
                </div>
            </nav>
        </header >

    );
}





