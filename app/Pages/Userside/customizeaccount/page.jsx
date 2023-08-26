"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
const page = () => {
  const customizeaccountbg = "/assets/LoginPage/customizeaccountbg.svg";

  const userimg = "/assets/LoginPage/userimg.png";

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        {/* Background Image */}
     
        <Image
          className="object-cover hidden lg:block lg:w-1/2 "
          src={customizeaccountbg}

          alt="Background" width={1200} height={720}
        />

        <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
            Back
          </button>
          <div className="flex-1 items-center">
            <div className="text-center items-center">
              <p className="mt-3 text-[#015464] font-black text-4xl">Customize Account</p>
              <p className="py-3 text-[11px] opacity-30">
                This Information will be displayed on your public profile
              </p>
              <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
              <Image
                src={userimg}
                alt="otp"
                className="w-44 h-44 my-3 mx-auto "
                width={44}
                height={44}
              />
              <p className="mt-3 text-[#015464] font-black  text-2xl">Display Name</p>
              <p className="mt-3 text-[#015464]  text-sm opacity-50">@username</p>
            </div>
            
            <div className="mt-8">
              <form
              // onSubmit={handleSubmit}
              >
                <div className="my-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm  text-[#408080] "
                  >
                    Display Name
                  </label>
                  <input
                    type="textbox"
                    name="Display Name"
                    id="name"
                    placeholder="Display Name"
                    className="block w-full text-sm  px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#f4f7ff] border border-gray-200 rounded-lg placeholder:opacity-30 " required
                  />
                  {/* <p className="mt-3 text-[#FF7C7C]  text-xs">
                    Display Name Must Be Between 1-65 Characters Long
                  </p> */}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm   text-[#408080] "
                  >
                    User Name
                  </label>
                  <input
                    type="textbox"
                    name="Display Name"
                    id="name"
                    
                    className="block w-full text-sm  px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#f4f7ff] border border-gray-200 rounded-lg   
                                        "
                  />
                  {/* <p className="mt-3 text-[#FF7C7C]  text-xs">
                    Display Name Must Be Between 1-65 Characters Long
                  </p> */}
                </div>

                <div className="mt-6">
                  <Link href="/Pages/Userside/countryselect">
                    <button className="w-full px-6 py-5  tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                      Next
                    </button>
                  </Link>
                </div>
              </form>

              {/* <p className="mt-6 text-sm text-center text-gray-400">
                Already Have An Enool Account{" "}
                <Link href="/Pages/Userside/login">
                  <button
                    href="#"
                    className="text-[#408080] focus:outline-none focus:underline hover:underline"
                  >
                    Sign In
                  </button>
                </Link>
                .
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
