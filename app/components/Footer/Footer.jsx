import React from "react";
import Image from "next/image";
import Link from 'next/link'

import facebook from "public/icons/facebook.png";
import youtube from "public/icons/youtube.png";
import instagram from "public/icons/instagram.png";
import twitter from "public/icons/twitter.png";
import logo1 from "public/icons/eNOOL_Logo-white.svg";
import paypal from "public/icons/paypal-solid-large.svg";
import discover from "public/icons/discover-solid-large.svg";
import americanexpress from "public/icons/americanexpress-solid-large.svg";
import mastercard from "public/icons/mastercard-solid-large.svg";
import visa from "public/icons/visa-solid-large.svg";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" footer_bg pt-80 pb-2 mt-96 font-graphik">
      <div className="min-[2000px]:container min-[2000px]:mx-auto">
        <div
          className="mx-auto  space-y-8 px-4 mb-14  sm:px-6 lg:space-y-16 lg:px-8 lg:mt-20 "
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div>
              <h2 className="text-xl   md:mt-10 lg:mt-0 text-white   lg:pl-0">
                Receive the latest offers & <br className="hidden lg:block" />
                updates via email
              </h2>

              <div className="items-center  2xl:mx-0 mt-10 space-y-5 max-w-screen-sm sm:flex sm:space-y-0 2xl:w-5/6  ">
                <div className="relative w-full ">
                  <input
                    className="block py-[16px] pl-5 w-full text-white bg-[#1E6B77]  border border-gray-300 sm:rounded-none placeholder:text-white "
                    placeholder="Your Email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-[18px] px-5 w-full  font-medium text-center text-white cursor-pointer bg-[#7CC9B5]  "
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div
                className="lg:mx-auto 2xl:mx-0 my-5
                             max-w-screen-sm font-sfpro font-normal text-left text-white  0"
              >
                By signing up, you agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  {" "}
                  Privacy Policy
                </a>
                .
              </div>

            </div>

            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 pb-4 "
            >
              <div>
                <p className="font-medium text-white text-lg">About Us</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Help Topics
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Guarantee
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Shipping
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Store Pickup
                    </a>
                  </li>


                  <li
                    className="text-white transition hover:opacity-75">
                    <Link href='/Pages/Userside/terms&privacy'>
                      Terms
                    </Link>
                  </li>


                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Categories</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Action
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Comedy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Horror
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Kids
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Our Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Help Center
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Returns
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Product Recalls
                    </a>
                  </li>

                  <li className="text-white transition hover:opacity-75">
                    <Link href='/Pages/Userside/contact'>
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Store Pickup
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Get Started</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <Link href='/Pages/Userside/about'>
                    <li className="text-white transition hover:opacity-75">
                      About us

                    </li>
                  </Link>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75 text-sm">
                      Sitemap
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-white transition hover:opacity-75">
                      Bookmarks
                    </a>
                  </li>
                  <li className="text-white transition hover:opacity-75">
                    <Link href='/Pages/Userside/login'>

                      Sign in/Join

                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>


        </div>
        <table className="md:visible border-collapse border border-slate-400 w-full table-fixed  ">
          <tbody>
            <tr>
              <td className="border border-slate-300 w-full  ">
                <div className=" my-10  px-4 lg:mx-auto md:w-5/6 xl:w-1/2 w-3/4  text-center ">
                  <h1 className="text-white">Follow Us</h1>
                  <div className="grid md:grid-cols-4 grid-col-2 text-xs text-white pt-4 justify-center font-semibold py-1">
                    <button className="h-8 w-8   items-center justify-center  align-center mx-auto" type="button">
                      <Image src={facebook} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={youtube} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={twitter} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={instagram} className="justify-center " alt="" />
                    </button>
                  </div>
                </div>

              </td>


              <td className="border border-slate-300 w-full items-center justify-between">
                <Image
                  className="w-56 justify-center mx-auto"
                  src={logo1}
                  alt="Logo"
                />
              </td>
              <td className="border border-slate-300 w-full">
                <div className="   px-4  md:w-5/6 xl:w-1/2 w-3/4 md:mx-auto text-center">
                  <h1 className="text-white pt-12 md:pt-0">We Accept</h1>
                  <div className="grid md:grid-cols-5 grid-col-2 gap-2 text-xs pt-4 text-white justify-center font-semibold py-1">
                    <button className="h-8 w-8  items-center  justify-center align-center mx-auto" type="button">
                      <Image src={visa} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={mastercard} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={americanexpress} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={discover} className="justify-center " alt="" />
                    </button>
                    <button className="h-8 w-8  items-center justify-center align-center mx-auto" type="button">
                      <Image src={paypal} className="justify-center " alt="" />
                    </button>
                  </div>

                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-wrap pt-3 items-center md:justify-between justify-center">
          <div className="w-full  px-4 mx-auto text-center">
            <div className="text-sm text-white font-graphik py-1 sm:space-y-3">
              Copyright © <span id="get-current-year">{currentYear}</span><a href="https://www.creative-tim.com/product/notus-js"
                className="text-white hover:text-gray-800" target="_blank" /> E-Nool |
              <a href="#" className="text-white hover:text-blueGray-800">Powered By E-Nool
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
