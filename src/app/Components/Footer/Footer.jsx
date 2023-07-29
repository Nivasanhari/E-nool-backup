import React from 'react'; 
import Image from 'next/image';
import footerbg from 'public/assets/LandingPage/footer-bg.png';
import facebook from 'public/icons/facebook.png';
import youtube from 'public/icons/youtube.png';
import instagram from 'public/icons/instagram.png';
import twitter from 'public/icons/twitter.png';
import logo from 'public/icons/eNOOL_Logo.svg';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="absolute w-full min-h-screen flex items-end justify-center pb-20">
            <Image
                src={footerbg}
                alt="Background"
                className="absolute inset-0 h-screen w-full  z-0"
            />
            <div className=" relative w-full  md:px-24 ">
                <div className="flex  flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-auto pr-80 ">
                        <h4 className="text-xl fonat-semibold text-white">Receive the latest offers & <br />updates via email</h4>
                        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
                            <div className="w-55 pt-6 md:pt-0">
                                {/* Subscribe input text box */}
                                <div className="relative text-sm">
                                    <input type="email" placeholder="Your Email"
                                        className="w-96 border border-white bg-transparent placeholder-white px-4 py-2" />
                                    <button type="submit"
                                        className="absolute right-0 top-0 bottom-0 px-4 py-2  bg-[#7CC9B5] text-white">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                        </div>
                        <p className=" text-sm  text-white pt-5 ">By signing up, you agree to the Privacy Policy</p>
                    </div>
                    <div className="w-full lg:w-6/12  pt-4">
                        <div className="flex  items-top mb-6 pl-20">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">About Us</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Help Topics</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Guarantee</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Shipping</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Store Pickup</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Terms</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Categories </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Action</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Comedy</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Drama</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Horror</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#"> Kids</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Our Services</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Returns</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Product Recalls</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Accessibility</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Store Pickup</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-white text-sm font-semibold mb-2">Get Started</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">About us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Sitemap</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Bookmarks</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Sign in/Join</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center md:justify-between border py-10 justify-center ">

                    <div className="w-full md:w-4/12  mx-auto text-center ">
                        <h1 className="text-white ">Follow Us</h1>
                        <div className="flex text-sm text-white justify-center  font-semibold py-1 justify-space-between">
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={facebook} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={youtube} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={twitter} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={instagram} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>

                        </div>

                    </div>

                    <div className=" ">
                        <div className="text-sm text-white  font-semibold py-1">
                            <Image
                                className=" w-56"
                                src={logo}
                                alt="Logo"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <h1 className="text-white ">We Accept</h1>
                        <div className="flex text-sm text-white justify-center  font-semibold py-1 justify-space-between">
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={facebook} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={youtube} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={twitter} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                            <button className="h-10 w-10 items-center justify-center align-center mr-2" type="button">
                                <Image src={instagram} className="justify-center w-[44px] h-[44px]" alt=""  />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-white font-semibold py-1">
                            Copyright © <span id="get-current-year">{currentYear}</span><a href="https://www.creative-tim.com/product/notus-js"
                                className="text-white hover:text-gray-800" target="_blank" /> E-Nool |
                            <a href="#" className="text-white hover:text-blueGray-800">Powered By E-Nool
                            </a>.
                        </div>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer