'use client'
import React,{useState} from 'react'

import Image from 'next/image';
import Dropdown from '../dropdown/Dropdown';
import TrendingReads1 from 'public/assets/LandingPage/TrendingReads1.png';
import TrendingReads2 from 'public/assets/LandingPage/TrendingReads2.png';
import TrendingReads3 from 'public/assets/LandingPage/TrendingReads3.png';
import TrendingReads4 from 'public/assets/LandingPage/TrendingReads4.png';
import TrendingReads5 from 'public/assets/LandingPage/TrendingReads5.png';
import eye from 'public/icons/eye.png';
import heart from 'public/icons/heart.png';
import heartred from 'public/icons/heartred.png';
import moreOption from 'public/icons/more-options-dotted.png';

import Link from 'next/link';

 function  CarouselCardItems  ({ title, author, rating, imageSrc,ratingCount ,currency,price })  {
     const [isHeartRed, setIsHeartRed] = useState(false);
     const handleHeartClick = () => {
         setIsHeartRed(!isHeartRed);
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
     const [isDropdownOpen, setDropdownOpen] = useState(false);


     const handleDropdownToggle = () => {
         setDropdownOpen(!isDropdownOpen);
     };


     return (<div className= "mb-40 mx-10 xl:mx-auto items-center justify-center font-graphik " >
       
        <Image className=" rounded w-56 object-cover object-center mb-4 xl:mx-8   " src={imageSrc} alt="content" />
         <h2 className="text-[16px] text-[#1A6270] font-graphikBold  mb-2 xl:mx-8">{title}</h2>
         <div className="flex flex-wrap mb-2 xl:mx-8 "> {renderStars(rating)}
                                           
             <p className="tracking-widest text-[#280c0c] text-xs xl:mx-8 ">({ratingCount})</p>
        </div>
         <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2 xl:mx-8  ">by {author}</p>
         <p className="text-[12px] tracking-widest text-[#015464] text-xs  mb-2 xl:mx-8  ">{currency}.{price}</p>

         <div className="flex flex-wrap space-x-4 pt-2 mb-1 text-center relative z-0 xl:mx-8">
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
export default CarouselCardItems;






