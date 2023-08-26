'use client'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import React from "react";
import Aboutbg from "public/assets/aboutbg.png";
import Leaf from "public/assets/LandingPage/Leaf1.png";
import about1 from "public/assets/about1.png";
import LefeBg from "public/assets/lefe1.png";
import grp1 from "public/assets/grp1.png";
import Ellipse from "public/assets/Ellipse.png";
import img1 from "public/assets/img1.png";
import Lefe from "public/assets/Lefe2.png";
import grid from "public/assets/grid.png";
import arrowicon from "public/assets/arrowicon.png";
import img2 from "public/assets/img2.png";
import img3 from "public/assets/img3.png";
import img4 from "public/assets/img4.png";
import Maskgroup5 from "public/assets/Mask Group 5.png";
import group from "public/assets/group.png";
import rectangle2 from "public/assets/rectangle2.png";
import group2 from "public/assets/group2.png";
import group3 from "public/assets/group3.png";
import publisherbook from "public/assets/publisher-book.png";
import FeaturedPublishers from "@/app/Pages/Userside/landingPage/FeaturedPublishers";

import DefaultLayout from "@/app/components/DefaultLayout/layout";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Publisher() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const swiperRef = useRef(null);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const autoplayTimeout = setTimeout(() => {
      setIsAutoplay(true);
      setIsPlaying(true);
    }, 1000);

    return () => {
      clearTimeout(autoplayTimeout);
    };
  }, []);

  return (
    <DefaultLayout>
      <div className=" m-auto font-graphik">
        {/* <Image className=' relative h-[600px]' src={Aboutbg} /> */}
        <Image
          className=" hidden lg:block absolute top-28 z-0 bottom-36 right-0 w-28 "
          src={LefeBg}
          alt=""
        />

        <div className="publisher_bg ">
          <div className=" pt-12 leading-6 max-w-screen-2xl mx-auto ">
            <div className="mx-auto  mt-20 text-[#015464] md:ml-24">
              <nav>
                <ul className="flex m-0 items-center p-0">
                  <li className="flex items-center text-left">
                    <a
                      href="#"
                      title=""
                      className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li className="flex items-center text-left">
                    <svg
                      className="block h-5 w-5 align-middle text-[#015464] "
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z"></path>
                    </svg>

                    <a
                      href="#"
                      title=""
                      className="cursor-pointer text-sm font-normal leading-5 text-[#015464]  hover:text-gray-900"
                    >
                      {" "}
                      Publisher{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className=" md:container  top-10   md:mx-auto flex  pt-10 md:px-2 md:flex-row flex-col justify-center items-center">
            <Image
              className=" absolute z-0 top-20 lg:w-16 md:w-10 left-0   "
              src={Leaf}
              alt=""
            />

            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:top-10 lg:top-0 hidden md:block">
              <Image
                className="object-cover object-center  "
                src={about1}
                alt=""
              />
            </div>
            <div className=" ml-10 pt-20 lg:flex-grow md:w-1/2 lg:pr-24  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h2 className=" text-[#015464]  text-lg mx-auto md:mx-0 top-[251px] left-[965px] w-[143px] h-[16px] font-graphikBold">
                WHO WE ARE
              </h2>
              <h1 className=" text-[#015464]  font-graphikBold text-4xl mt-8 font-graphikBold">
                About ENOOL
              </h1>
              <div className="h-1 w-64 bg-[#0FBF61]/70 opacity-30 rounded"></div>

              <p className=" text-[#015464]  mt-10 text-sm font-medium left-[965px] w-full  ">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </p>

              <button className=" bg-[#7CC9B5] opacity-1 mt-8 p-2 px-5 rounded-3xl text-white ">
                Read More
              </button>

              <div className="flex justify-center mt-28"></div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:hidden">
              <Image
                className="object-cover object-center  "
                src={about1}
                alt=""
              />
            </div>
          </div>

          <div className=" text-center md:p-10   relative   py-10 xl:py-40 text-white  ">
            <h1 className=" font-graphikBold text-3xl font-graphikBold ">
              Why Publisher for Enool?
            </h1>
            <p className=" p-5 text-xs font-light ">Why Publisher for Enool?</p>

            <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-3xl  border-[#14adad] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    className="h-28 m-6 md:items-center mx-auto"
                    src={grid}
                    alt="grid-img"
                  />
                </div>

                <div className="mt-1 p-2 text-center ">
                  <h3 className=" font-graphikBold mt-0 p-2">01. Learn</h3>
                  <p className="text-xs font-graphik m-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl  border-[#14adad] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    className="h-28 m-6 md:items-center mx-auto"
                    src={grid}
                    alt="grid-img"
                  />
                </div>

                <div className="mt-1 p-2 text-center">
                  <h3 className="text-white font-graphikBold mt-0 p-2">
                    01. Learn
                  </h3>
                  <p className="text-xs font-graphik m-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl  border-[#14adad] p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <Image
                    className="h-28 m-6 md:items-center mx-auto"
                    src={grid}
                    alt="grid-img"
                  />
                </div>

                <div className="mt-1 p-2 text-center">
                  <h3 className="text-white font-graphikBold mt-0 p-2">
                    01. Learn
                  </h3>
                  <p className="text-xs font-graphik m-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center md:p-10   relative   py-10  ">
          <h1 className=" font-graphikBold text-3xl font-graphikBold text-[#015464] ">
            Our Workflow
          </h1>

          <div className="mx-auto  items-center grid max-w-screen-xl grid-cols-1 gap-10 p-6 md:grid-cols-2  lg:grid-cols-3">
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-28 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2">
                  Step 01
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-28 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2">
                  Step 02
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className=" lg:mx-auto rounded-3xl lg:w-72 bg-white p-3 shadow-lg hover:shadow-xl border flex flex-col items-center justify-center">
              <div className="relative flex items-end overflow-hidden rounded-xl">
                <Image
                  className="h-28 m-6 md:items-center mx-auto"
                  src={img4}
                  alt="grid-img"
                />
              </div>

              <div className="mt-1 p-2 text-center">
                <h3 className="text-[#42495B] font-graphikBold mt-0 p-2">
                  Step 03
                </h3>
              </div>
              <p className="text-xs text-[#42495B] font-graphik m-2 mb-10 text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className=" text-[#015464]  bg-[#F9FCFB] rounded-xl text-center p-20 w-full md-px-24 relative  container  py-10 mx-auto ">
          <h1 className=" font-graphikBold text-3xl font-graphikBold">
            eNOOL Bookshelf
          </h1>
          <p className=" p-5 text-sm font-graphik w-3/4 mx-auto">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..." "There is no one who loves pain
            itself, who seeks after it and wants to have it, simply because it
            is pain..."
          </p>

          <Swiper
            ref={swiperRef}
            spaceBetween={3}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              el: ".swiper-pagination-right",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span className="${className}" style="background-color: #015464;"></span>`;
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font  md:text-4xl lg:text-7xl mb-4 font-graphikBold text-[#015464] ">
                    Meet Your Next
                    <br className="hidden lg:inline-block" />
                    Favorite Book
                    <div className="h-1 w-full bg-[#015464]  rounded"></div>
                  </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={publisherbook}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font md:text-4xl lg:text-7xl  mb-4 font-graphikBold text-[#015464] ">
                    Meet Your Next
                    <br className="hidden lg:inline-block" />
                    Favorite Book
                    <div className="h-1 w-full bg-[#015464]  rounded"></div>
                  </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={publisherbook}
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="hidden md:container md:mx-auto md:flex   md:flex-row flex-col items-center">
            <div className="  lg:w-full md:w-1/2 w-5/6 lg:flex-grow  lg:pr-24 md:pr-24 flex flex-row md:items-start md:  mb-16 md:mb-0  md:text-left sm:text-center ">
              <div className="swiper-pagination-right  mt-2 space-x-1 w-30 h-10 ml-4 "></div>
            </div>
          </div>
        </div>

        <div className=" relative  w-3/4 mx-auto  ">
          <div className=" m-auto flex flex-col justify-between items-center sm:px-16 py-4 ">
            <div className=" text-center font-medium">
              <h1 className=" text-[#015464]  text-2xl font-graphikBold">
                Meet our awesome and Enool Team
              </h1>
              <p className=" text-[#015464] text-sm mt-4">
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." <br />
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..."
              </p>
            </div>
            <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8  md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52 md:mx-auto">
                <Image className=" w-40 m-auto mt-5" src={Maskgroup5} alt="" />
                <h4 className=" mb-1 text-center font-graphikBold text-[#015464] ">
                  Shalini
                </h4>
                <p className=" text-sm text-[#015464] text-center mb-5">
                  Director
                </p>
              </div>
              <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52 md:mx-auto">
                <Image className=" w-40 m-auto mt-5" src={Maskgroup5} alt="" />
                <h4 className=" mb-1 text-center font-graphikBold text-[#015464] ">
                  Shalini
                </h4>
                <p className=" text-sm text-[#015464] text-center mb-5">
                  Director
                </p>
              </div>
              <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52 md:mx-auto">
                <Image className=" w-40 m-auto mt-5" src={Maskgroup5} alt="" />
                <h4 className=" mb-1 text-center font-graphikBold text-[#015464] ">
                  Shalini
                </h4>
                <p className=" text-sm text-[#015464] text-center mb-5">
                  Director
                </p>
              </div>

              <div className="flex flex-col  h-[270px]  rounded-3xl border-white shadow-md w-[400px] m-6 overflow-hidden sm:w-52 md:mx-auto">
                <Image className=" w-40 m-auto mt-5" src={Maskgroup5} alt="" />
                <h4 className=" mb-1 text-center font-graphikBold text-[#015464] ">
                  Shalini
                </h4>
                <p className=" text-sm text-[#015464] text-center mb-5">
                  Director
                </p>
              </div>
            </div>
          </div>
        </div>
        <FeaturedPublishers />

        <div className=" bg-[#F9F9F9]">
          <form className="relative space-y-3 max-w-screen-2xl mx-auto  p-6 lg:p-10">
            <div className=" text-center font-medium">
              <h1 className=" text-[#015464]  text-2xl font-graphikBold">
                Get in Touch
              </h1>
              <p className=" text-[#015464] text-sm mt-4">
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit..." <br />
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..."
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-2 sm:p-10">
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Publisher Name"
                  className=" mt-2 h-12 w-full rounded-md placeholder-[#408080]  placeholder:text-sm px-3"
                />
                <input
                  type="text"
                  placeholder="Authors/Writers Name"
                  className=" mt-2 h-12 w-full rounded-md placeholder-[#408080] m-4   placeholder:text-sm px-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Book Title"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm px-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email Id"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm px-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Choose Language"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm px-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm px-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ISBN Number"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm px-3"
                />
              </div>
              <div className="flex flex-wrap">
                <p className="text-[#408080] my-auto mx-4 text-sm">
                  Cover Image
                </p>
                <div className="w-40">
                  <input type="file" className="hidden" id="uploadPhoto" />
                  <label
                    htmlFor="uploadPhoto"
                    className=" cursor-pointer my-2 h-10 w-full rounded-md bg-[#408080] px-3 flex items-center justify-center"
                  >
                    <span className="text-white text-sm">Upload Photo</span>
                  </label>
                </div>
                <p className="text-[#408080] my-auto mx-4 text-sm">(JPG,PNG)</p>
              </div>
              <div className="flex flex-wrap">
                <p className="text-[#408080] my-auto mx-4 text-sm">
                  Upload Books
                </p>
                <div className="w-40">
                  <input type="file" className="hidden" id="uploadPhoto" />
                  <label
                    htmlFor="uploadPhoto"
                    className=" cursor-pointer my-2 h-10 w-full rounded-md bg-[#408080] px-3 flex items-center justify-center"
                  >
                    <span className="text-white text-sm">Upload Books</span>
                  </label>
                </div>
                <p className="text-[#408080] my-auto mx-4 text-sm">
                  (PDF , WORD ,EPUB)
                </p>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Book Description"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm placeholder:pt-4 px-3"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Publisher Description"
                  className="mt-2 h-12 w-full rounded-md placeholder-[#408080] placeholder:text-sm placeholder:pt-4 px-3"
                />
              </div>
            </div>

            <div className="checkbox sm:p-10">
              <input
                type="checkbox"
                id="checkbox1"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="checkbox1">
                I agree to the{" "}
                <a href="#" target="_blank" className="text-[#408080]">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="w-80 h-10 sm:w-50 items-center rounded-full bg-[#7CC9B5] p-2 text-center font-graphik text-xs text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center max-w-screen-xl sm:w-full">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm:mx-20">
            <h1 className=" text-[#015464]  text-3xl text-start font-graphikBold">
              Become a Publisher
            </h1>
            <p className=" text-[#015464]  text-xs text-start pt-3 ">
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              <br />
              "There is no one who loves pain itself, who seeks after it and
              wants
            </p>
            <div className="flex justify-center  pt-10">
              <button className="inline-flex text-white bg-[#408080] border-0 py-2 px-6 focus:outline-none  rounded text-sm h-10">
                <span className="my-auto">Subscribe Now</span>{" "}
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={group3}
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center max-w-screen-xl">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="sm:text-center">
              <h2 className="text-3xl font-graphikBold leading-7 text-[#015464]  sm:text-4xl xl:text-5xl">
                Enool <br className="sm:hidden" />
                by the Numbers
              </h2>
            </div>
            <div className="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 pb-2">Readers</p>
                <p className="relative text-5xl font-graphikBold text-[#015464] ">
                  300k
                </p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 pb-2">Publisher</p>
                <p className="relative text-5xl font-graphikBold text-[#015464] ">
                  70k
                </p>
              </div>

              <div className="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-center shadow lg:px-12">
                <p className="relative mt-5 text-gray-600 pb-2">Books</p>
                <p className="relative m-0 text-5xl font-graphikBold text-[#015464] ">
                  100k
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=' container justify-center bg-white flex mt-20 mb-48 '>
                    <div className=' mt-40 ml-32 pl-10'>
                        <h1 className=' text-[#015464]  text-3xl text-start font-bold'>Becom an Author</h1>
                        <p className=' text-[#015464] text-xs text-start pt-3'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,<br />
                            "There is no one who loves pain itself, who seeks after it and wants</p>
                        <button className=' bg-[#015464] opacity-1 items-start mt-8 p-2 px-5 rounded text-white '>Subsribe Now</button>
                    </div>
                    <div className=' pl-32 ml-10 '>
                        <Image src={group3} alt='group3-img' />
                    </div>
                </div> */}

        <div className="mx-auto flex justify-between items-center  my-10 max-w-screen-xl ">
          <div className="flex flex-col items-center w-full ">
            <h3 className=" text-[#015464] text-sm font-graphik">Newsletter</h3>

            <h1 className="sm:text-3xl text-2xl font-graphikBold title-font mb-4 text-[#015464] ">
              Do you want to get Special News?
            </h1>

            <div className="lg:w-[70%] flex flex-row items-center justify-center mx-auto">
              <input
                className="bg-[#F6F7FB] p-2 rounded px-4 w-96"
                type="email"
                placeholder="Drop your Email"
              />
              <button className="bg-[#7CC9B5] opacity-1 ml-4  p-2 px-5 rounded-2xl text-white text-sm h-10 w-36">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Publisher;