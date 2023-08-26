"use client";
import Image from "next/image";
import React from "react";
import bgimg from "public/assets/bg1.png";
import downarrow from "public/assets/downarrow.png";
import Book from "public/assets/book.png";
import DefaultLayout from "@/app/components/DefaultLayout/layout";

const page = () => {
  return (
    <DefaultLayout>
      <div className="  ml-28 top-[-500px] rounded-3xl ">
        {/* <Image className=' absolute ml-72' src={bgimg} alt='bgimg' /> */}
        <div className=" ml-10 pt-10 pb-8">
          <div className="">
            <h3 className=" text-[#015464] text-3xl font-black mt-32">
              Purchase History
            </h3>
            <div className="  flex gap-20 mt-6 bg-gray-500 w-[200px] bg-opacity-30 px-2 py-2 rounded">
              <h2 className=" text-[#015464] font-semibold">Show : All</h2>
              <button className="">
                <Image src={downarrow} alt="downarrow" />
              </button>
            </div>
          </div>

          {/* lines */}
          <div className="mt-3 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              height="1"
              viewBox="0 0 1437 1"
            >
              <line
                id="Line_71"
                data-name="Line 71"
                x2="1437"
                transform="translate(0 0.5)"
                fill="none"
                stroke="#7cc9b5"
                stroke-width="1"
              />
            </svg>
          </div>

          <div className="grid grid-cols-7 grid-rows-1 gap-3 justify-center items-center mt-4">
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              Book Cover
            </div>
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              Title
            </div>
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              Author
            </div>
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              Type
            </div>
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              Data Purchased
            </div>
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              Download
            </div>
            <div className=" text-[#015464] font-extrabold text-opacity-80">
              status
            </div>
          </div>
          <div className="mt-3 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              height="1"
              viewBox="0 0 1437 1"
            >
              <line
                id="Line_71"
                data-name="Line 71"
                x2="1437"
                transform="translate(0 0.5)"
                fill="none"
                stroke="#7cc9b5"
                stroke-width="1"
              />
            </svg>
          </div>

          <div className="grid grid-cols-7 grid-rows-3 gap-3 justify-center items-center mt-9">
            <div>
              <Image className=" w-14" src={Book} alt="Book-img" />
            </div>
            <div className=" text-[#015464] font-extrabold">
              King of Battle and Blood
            </div>
            <div className=" text-[#707070] font-semibold text-sm">
              Scarlett St. Clair
            </div>
            <div className=" text-[#015464] font-bold">Ebook</div>
            <div className=" text-[#015464] font-bold">01-05-2023</div>
            <div className=" bg-red-600 font-bold p-1 px-6 w-20 text-white">
              PDF
            </div>
            <div>
              <button className=" mt- text-white bg-green-500 p-2 px-5 rounded-3xl">
                sucess
              </button>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="-mt-48 w-fit ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="auto"

            height="1"
            viewBox="0 0 1437 1"
          >
            <line
              id="Line_71"
              data-name="Line 71"
              x2="1437"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#7cc9b5"
              stroke-width="1"
            />
          </svg>
        </div>

        <div className="grid grid-cols-7 grid-rows-3 gap-3 justify-center items-center mt-9 ml-10">
          <div>
            <Image className=" w-14" src={Book} alt="Book-img" />
          </div>
          <div className=" text-[#015464] font-extrabold">
            King of Battle and Blood
          </div>
          <div className=" text-[#707070] font-semibold text-sm">
            Scarlett St. Clair
          </div>
          <div className=" text-[#015464] font-bold">Ebook</div>
          <div className=" text-[#015464] font-bold">01-05-2023</div>
          <div className=" bg-red-600 font-bold p-1 px-6 w-20 text-white">
            PDF
          </div>
          <div>
            <button className=" mt- text-white bg-green-500 p-2 px-5 rounded-3xl">
              sucess
            </button>
          </div>
        </div>

        <div className="-mt-44 w-fit ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="auto"

            height="1"
            viewBox="0 0 1437 1"
          >
            <line
              id="Line_71"
              data-name="Line 71"
              x2="1437"
              transform="translate(0 0.5)"
              fill="none"
              stroke="#7cc9b5"
              stroke-width="1"
            />
          </svg>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default page;
