import React from "react";
import Tabswitch from "./subpages/tabswitch";
import Bookswiper from "./subpages/bookswiper";
import TrendingBooks from "../landingPage/TrendingBooks";
import DefaultLayout from "@/app/components/DefaultLayout/layout";
import TrendingReads from "../landingPage/TrendingReads";
import eye1 from 'public/icons/eye1.png';
import heart1 from 'public/icons/heart1.png';
import share from 'public/icons/share.png';
import Leaf from 'public/assets/LandingPage/Leaf2.png';
import Leaf1 from '@/public/assets/LandingPage/Leaf1.png'
import Leaf2 from '@/public/assets/LandingPage/Leaf-Bg.png'
import NewAndNoteworthy from "../landingPage/NewAndNoteworthy";


import Image from "next/image";

const productdetail = () => {
  return (
    <DefaultLayout>
      <div className=" hero_bg font-graphik">
        <Image className=" absolute z-0 top-20 w-16 " src={Leaf1} alt="" />
        <Image
          className=" hidden lg:block  absolute z-0 mt-20 xl:w-36 right-0  "
          src={Leaf2}
          alt=""
        />

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <nav className="flex mt-20">
              <ol role="list" className="flex items-center">
                <li className="text-left">
                  <div className="-m-1">
                    <a
                      href="#"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      {" "}
                      Browse{" "}
                    </a>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <a
                        href="#"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                        aria-current="page"
                      >
                        {" "}
                        Categories{" "}
                      </a>
                    </div>
                  </div>
                </li>
                
                

                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <a
                        href="#"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        {" "}
                        Antiques&Collectibles{" "}
                      </a>
                    </div>
                  </div>
                </li>
                <li className="text-left">
                  <div className="flex items-center">
                    <span className="mx-2 text-gray-400">/</span>
                    <div className="-m-1">
                      <a
                        href="#"
                        className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      >
                        {" "}
                        Kingofbattleandblood{" "}
                      </a>
                    </div>
                  </div>
                </li>

          
              </ol>
            </nav>

            <div className="lg:col-gap-10 xl:col-gap-10 mt-8 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-5 lg:gap-1">
              <div className="lg:col-span-3 lg:row-end-1">
                <div className="lg:flex lg:items-start">
                  <div className="lg:order-2 lg:ml-5">
                    <div className="max-w-xl mx-auto">
                      <Bookswiper />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 ">
                <h1 className="sm: text-2xl font-graphikBold text-[#015464] sm:text-3xl">
                  King of Battle and Blood
                </h1>

                <div className="mt-5 flex items-center">
                  <div className="flex items-center">
                    <svg
                      className="block h-4 w-4 align-middle text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className=""
                      ></path>
                    </svg>
                    <svg
                      className="block h-4 w-4 align-middle text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className=""
                      ></path>
                    </svg>
                    <svg
                      className="block h-4 w-4 align-middle text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className=""
                      ></path>
                    </svg>
                    <svg
                      className="block h-4 w-4 align-middle text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className=""
                      ></path>
                    </svg>
                    <svg
                      className="block h-4 w-4 align-middle text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        className=""
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-2 text-sm font-medium text-[#14adad] ">
                    {" "}
                    ( 27 ){" "}
                  </p>
                </div>
                <div className="flex items-end py-3">
                  <h1 className="text-3xl font-graphikBold text-[#015464]">
                    Rs. 150
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#015464]">Book Format : Ebook</h1>
                </div>

                <div>
                  <h1 className="text-[#015464] font-black text-[14px] mt-4">
                    Describes what being a foster mom is really like, the
                    effects of foster care on the whole family, and how the
                    foster care system fails severely abused children.
                  </h1>
                </div>
                <div>
                  <p className="text-[12px] mt-3 text-[#015464]">
                    Foster children are society’s throwaway kids, the children
                    no one wants—until someone inally does. Saving Michael
                    provides an inside look Keri Vellis’ struggle to secure the
                    best possible services for two severely abused and
                    traumatized siblings
                  </p>
                </div>
                <div className="mt-10 flex flex-col items-center  space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                  <button
                    type="button"
                    className=" m-auto inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#7CC9B5] bg-none px-6 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1"
                  >
                    <Image src={eye1} className="w-5 mr-2" alt="" />
                    Read a Sample
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-[#1a5f5f] bg-none px-12 py-2 text-center text-base  text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 mx-1"
                  >
                    Buy Now
                  </button>
                </div>

                <ul className="mt-8 m-2 flex ">
                  <li className="flex items-center text-left text-sm font-medium mx-3 text-gray-600">
                    <Image src={heart1} className="w-5 mr-2" alt="" />
                    Add to Library
                  </li>

                  <li className="flex items-center text-left text-sm font-medium mx-3 text-gray-600">
                    <Image src={share} className="w-5 mr-2" alt="" />
                    Share
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-1 p-10">
          <div className="p-1 flex justify-center">
            <Tabswitch />
            <Image
              className=" hidden lg:block  absolute z-0  -bottom-72  left-96  xl:w-28 "
              src={Leaf}
              alt=""
            />
          </div>
        </div>
        <Image
          className=" hidden lg:block  absolute z-0 mt-96 xl:w-36  "
          src={Leaf2}
          alt=""
        />

        <NewAndNoteworthy />

    </div>
   </DefaultLayout>
  );
};

export default productdetail;
