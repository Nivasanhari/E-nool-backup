import React, { useState, useRef, useEffect } from 'react';
import moreOption from 'public/icons/more-options-dotted.png';
import Image from 'next/image';
import Link from 'next/link';
const Dropdown1 = ({ isDropdownOpen, setDropdownOpen }) => {
    const dropdownRef = useRef(null);
    const moreOptionRef = useRef(null);

    const handleDocumentClick = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            event.target !== moreOptionRef.current
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
        <div className=" absolute z-50 top-24  " ref={dropdownRef}>


            <div className="">

                <input type="checkbox" className="peer hidden" id="dropdown-open" checked />

                <div className="peer-checked:block z-10 mt-2 hidden w-36 divide-y divide-gray-100 rounded border bg-white shadow">
                    <ul className="py-1 text-sm text-[#7CC9B5]" aria-labelledby="dropdownDefault">
                        <li className="block px-4 py-2 hover:bg-gray-100 text-xs">
                            Buy Now
                        </li>
                        <Link href='/Pages/Userside/productdetail'>
                            <li className="block px-4 py-2 hover:bg-gray-100 text-xs">
                                View Book Details
                            </li>
                        </Link>
                        <li className="block px-4 py-2 hover:bg-gray-100 text-xs">
                            Add to Bookshelf
                        </li>
                        <li className="block px-4 py-2 hover:bg-gray-100 text-xs">
                            Report a Book
                        </li>
                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Dropdown1;




