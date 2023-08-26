"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import NoDefaultLayout from "@/app/components/NoDefaultLayout/layout";
import Image from "next/image";

const page = () => {

  const loginObject = "/assets/LoginPage/login-object.png";
  const logo = "/icons/eNOOL_Logo.svg";
  const logineye = "/assets/LoginPage/logineye.svg";
  const logineyeclosed = "/assets/LoginPage/logineyeclosed.svg";
  
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    <NoDefaultLayout>
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          {/* Background Image */}
          <Image
            src={loginObject}
            className="hidden lg:block lg:w-1/2 lg:h-screen object-fill"
            alt="Background"
            width={1200}
            height={720}
          />
          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <Image
                    className="w-auto h-7 sm:h-8"
                    src={logo}
                    alt="E-Nool logo"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="mt-3 text-[#015464] font-black text-4xl">
                  Log In To Enool
                </p>
              </div>

              <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>

              <div className="mt-8">
                <form>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg  text-[#408080] "
                    >
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@example.com"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-[#2e384d33] bg-[#E0E7FF] border border-gray-200 rounded-lg   
                                        focus:border-blue-400  focus:ring-{blue-400} focus:outline-none focus:ring focus:ring-opacity-40 .placeholder-opacity-30"
                      required
                    />
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="block mb-2 text-lg  text-[#408080]"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        onChange={(e) => setShowPassword(e.target.value)}
                        className="block w-full px-4 py-2  text-gray-700 placeholder-[#2e384d33] bg-[#E0E7FF] border border-gray-200 rounded-lgfocus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        onClick={handleTogglePassword}
                      >
                        <Image
                          src={showPassword ? logineye : logineyeclosed}
                          alt={showPassword ? "Hide Password" : "Show Password"}
                          fill={true}
                        />
                      </button>
                    </div>
                    <a
                      href="#"
                      className=" text-sm  text-[#408080] focus:text-blue-500 hover:text-[#408080] hover:underline"
                    >
                      <br></br>
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-6">
                    <Link href="/Pages/Userside/dashboard">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                        Start learning
                      </button>
                    </Link>
                  </div>
                  <p className="mt-6 text-sm text-center text-gray-400">
                    Or Log In Using
                  </p>
                  <div className="mt-6 justify-center">
                    <button
                      type="button"
                      className="text-white w-full bg-[#F2403F] hover:bg-[#F2403F]/90  font-medium rounded text-sm px-28 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                    >
                      <svg
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        ></path>
                      </svg>
                      <span>Gmail</span>
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don't have an Enool Account yet?{" "}
                  <Link href="/Pages/Userside/signup1">
                    <button
                      href="#"
                      className="text-[#408080] focus:outline-none focus:underline hover:underline font-bold"
                    >
                      Sign up
                    </button>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NoDefaultLayout>
  );
};

export default page;
