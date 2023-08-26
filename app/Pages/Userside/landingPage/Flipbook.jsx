'use client'
import React from 'react';
import Image from 'next/image';
import PageFlip from 'react-pageflip';
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png';
import Leaf2 from '@/public/assets/LandingPage/Leaf2.png';
import FlipbookPlayer from "@/app/components/FlipbookPlayer/page.jsx"
const Flipbook = () => {
    return (
        <section className=" w-full  ">
            {/* <Image className=" absolute z-0 bottom-20 w-16 " src={Leaf1} alt="" />
        <div className="relative">
          
             <Image className=" absolute z-50 right-0  " src={Leaf2} alt="" />        
            </div> */}
            <div className="read_book_bg"></div>
             <FlipbookPlayer/>
         
    </section>
    );
};

export default Flipbook;
