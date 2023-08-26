'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';


const CategoriesButton = ({ }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSortToggle = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const dropdown = '/icons/dropdown.svg'
    const menuItems1 = [
        { label: 'Antiques & Collectibles', href: '#' },
        { label: 'Architecture', href: '#' },
        { label: 'Art', href: '#' },
        { label: 'Bibles', href: '#' },
        { label: 'Biography & Autobiography', href: '#' },
        { label: 'Business & Economics', href: '#' },
        { label: 'Computers', href: '#' },
        { label: 'Cooking', href: '#' },
        { label: 'Online Stores', href: '#' },
        { label: 'Crafts & Hobbies', href: '#' },
        { label: 'Design', href: '#' },
        { label: 'Online Stores', href: '#' },
        { label: 'Drama', href: '#' },
        { label: 'Education', href: '#' },
    ];
    const menuItems2 = [
        { label: 'Family & Relationships', href: '#' },
        { label: 'Fiction', href: '#' },
        { label: 'Foreign Language Study', href: '#' },
        { label: 'Games & Activities', href: '#' },
        { label: 'Gardening', href: '#' },
        { label: 'Health & Fitness', href: '#' },
        { label: 'History', href: '#' },
        { label: 'House & Home', href: '#' },
        { label: 'Humor', href: '#' },
        { label: 'Juvenile Fiction', href: '#' },
        { label: 'Juvenile Nonfiction', href: '#' },
        { label: 'Language Arts & Disciplines', href: '#' },
        { label: ' Law', href: '#' },
        { label: 'Literary Collections', href: '#' },
    ];
    const menuItems3 = [
        { label: 'Family & Relationships', href: '#' },
        { label: 'Fiction', href: '#' },
        { label: 'Foreign Language Study', href: '#' },
        { label: 'Games & Activities', href: '#' },
        { label: 'Gardening', href: '#' },
        { label: 'Health & Fitness', href: '#' },
        { label: 'History', href: '#' },
        { label: 'House & Home', href: '#' },
        { label: 'Humor', href: '#' },
        { label: 'Juvenile Fiction', href: '#' },
        { label: 'Juvenile Nonfiction', href: '#' },
        { label: 'Language Arts & Disciplines', href: '#' },
        { label: ' Law', href: '#' },
        { label: 'Literary Collections', href: '#' },
    ];
    const menuItems4 = [
        { label: 'Family & Relationships', href: '#' },
        { label: 'Fiction', href: '#' },
        { label: 'Foreign Language Study', href: '#' },
        { label: 'Games & Activities', href: '#' },
        { label: 'Gardening', href: '#' },
        { label: 'Health & Fitness', href: '#' },
        { label: 'History', href: '#' },
        { label: 'House & Home', href: '#' },
        { label: 'Humor', href: '#' },
        { label: 'Juvenile Fiction', href: '#' },
        { label: 'Juvenile Nonfiction', href: '#' },
        { label: 'Language Arts & Disciplines', href: '#' },
        { label: ' Law', href: '#' },
        { label: 'Literary Collections', href: '#' },
    ];

    const dropdownRef = useRef(null);
    const categoriesRef = useRef(null);

    const handleDocumentClick = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
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
    return (
        <div className="absolute   w-full lg:w-3/4    font-graphik" ref={dropdownRef}>
            <div className="w-5 h-5 bg-transparent mt-5 
                    border-l-[130px] border-l-transparent
                    border-b-[200px] border-[#7CC9B5]
                 border-r-[10px] border-r-transparent">
            </div>


            <div className="absolute  z-50 top-12 left-0 w-full bg-[#7CC9B5]  rounded-lg shadow-lg ">
                <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-white  lg:grid-cols-5 grid-cols-3 md:px-6">
                    <Link href='/Pages/Userside/browsecategories'>

                        <ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
                            {/* Map over the menuItems array to generate list items */}
                            {menuItems1.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300"
                                    >                                      {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Link>
                    <ul className="mb-4 space-y-4 md:mb-0">
                        {/* Map over the additionalLinks array to generate list items */}
                        {menuItems2.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300"
                                >                                      {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="mb-4 space-y-4 md:mb-0">
                        {/* Map over the additionalLinks array to generate list items */}
                        {menuItems3.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300"
                                >                                      {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="mb-4 space-y-4 md:mb-0">
                        {/* Map over the additionalLinks array to generate list items */}
                        {menuItems4.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="inline-block px-4  rounded hover:bg-[#015464] hover:text-white hover:font-semibold transition-colors duration-300"
                                >                                      {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="p-8 md:mt-10 md:h-1/2 
                      w-full text-left bg-local bg-[#015464] bg-center bg-no-repeat bg-cover rounded-lg  ">
                        <p className="max-w-xl mb-5 font-extrabold leading-tight text-xl tracking-tight text-white">
                            Join More Than <br />
                            <span className="text-[#7CC9B5]">12000+ Book Lovers</span><br />
                            Worldwide
                        </p>
                        <button
                            type="button"
                            className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center bg-[#7CC9B5] text-white    rounded-lg  hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                        >
                            <h1 className="font-graphik font-semibold">Start Reading Now</h1>

                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CategoriesButton