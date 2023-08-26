import React, { useState } from "react";
import Image from "next/image";
import searchbar from 'public/icons/search.svg';
const SearchBar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div className="relative">
            <Image src={searchbar} alt="search" className="h-4 w-4" />
            {isSearchOpen && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input bg-white border border-gray-300 rounded-md shadow-md py-2 px-4 absolute top-0 right-0 transition-all duration-300"
                // You can add additional logic here to handle the search functionality
                />
            )}
        </div>
    );
};

export default SearchBar;
