'use client'
import React, { forwardRef, useRef, useState,useEffect } from 'react';
import Image from 'next/image';



import backButton from 'public/icons/backButton.svg';
import nextbutton from 'public/icons/next.svg';
import previousbutton from 'public/icons/previous.svg';
import preferences from 'public/icons/preferences.svg';
import fontpreferences from 'public/icons/fontpreferences.svg';
import bookmark from 'public/icons/bookmark.svg';
import book11 from 'public/assets/Flipbook/book.png';
import book1 from 'public/assets/Flipbook/Book1-01.png';
import book2 from 'public/assets/Flipbook/Book1-02.png';
import searchbook from 'public/icons/searchbook.svg';
import moreoption from 'public/icons/moreoption.svg';
import fullscreen from 'public/icons/fullscreen.svg';
import PageFlip from 'react-pageflip';
import { Range } from 'react-range';


export default function page() {
  const book = useRef(null);
  const container = useRef(null);
  const [progress, setProgress] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(105);
  const totalPageDive = Math.ceil(totalPage / 5);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setProgress(page / 5); // Adjust the denominator based on the total number of pages
  };

  const handleSliderChange = (values) => {
    const newProgress = values[0];
    setProgress(newProgress);
    const newPage = Math.round(newProgress * 5); // Adjust based on the total number of pages

    if (book.current) {
      const pageFlipObj = book.current.pageFlip();
      const currentPageIndex = pageFlipObj.getCurrentPageIndex();

      if (newPage < currentPageIndex) {
        for (let i = currentPageIndex; i > newPage; i--) {
          pageFlipObj.flipPrev();
        }
      } else if (newPage > currentPageIndex) {
        for (let i = currentPageIndex; i < newPage; i++) {
          pageFlipObj.flipNext();
        }
      }
    }
  };

  return (

   
    

      <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center overflow-hidden min-w-0 min-h-0 w-full" ref={container}>
      <PageFlip
        width={500}
        height={907}
        size="stretch"
       
        maxShadowOpacity={0}
        showCover={true}
        mobileScrollSupport={true}
        className="custom-pageflip"
        ref={book}
        onPageChange={handlePageChange}
        useMouseEvents={false}
        
      >
        <div><Image src={book11} className="w-auto h-auto" alt='' /></div>
        <div><Image src={book1} className="w-auto h-auto" alt='' /></div>
        <div><Image src={book1} className="w-auto h-auto" alt='' /></div>
        <div><Image src={book1} className="w-auto h-auto" alt='' /></div>
        <div><Image src={book1} className="w-auto h-auto" alt='' /></div>
        <div><Image src={book1} className="w-auto h-auto" alt='' /></div>
      </PageFlip>


      
        <button
          className=" left-4 bottom-4 w-10 h-10 lg:left-4 lg:top-[30%] md:top-[20%] md:absolute  md:mt-20"
          onClick={() => book.current.pageFlip().flipPrev()}
        >
          <Image src={previousbutton} className="w-full h-full" alt="" />
        </button>
       
        
        <button
          className=" right-4 bottom-4 w-10 h-10 lg:right-4 lg:top-[30%] md:top-[20%] md:absolute md:mt-20 "
         
          onClick={() => {
            book.current.pageFlip().flipNext();
            setPageNumber(pageNumber + 1);
          }}
        >
          <Image src={nextbutton} className="w-full h-full" alt="" />
          </button>
          
     
    
  </div> 
  )
}




