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
            className="hidden lg:block lg:w-1/2 lg:h-screen object-fill"
            src={loginObject}
            alt="Background" width={1200} height={720}
          />

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <Link href="/Pages/Userside/login">
              <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
                Back
              </button>
            </Link>
            <div className="flex-1">
              <div className="text-center">
                <p className="mt-3 text-[#015464] font-black text-4xl">
                  Reset Password
                </p>
                <p className="mt-3 text-[#015464] text-[12px]"> Provide Your Account's Email For Which You Want To Reset Your password</p>
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
                                        .placeholder-opacity-30"
                      required
                    />
                  </div>
                  <div className="mt-6">
                    <Link href="/Pages/Userside/makeselection">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                        Next
                      </button>
                    </Link>
                  </div>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </NoDefaultLayout>
  );
};

export default page;
