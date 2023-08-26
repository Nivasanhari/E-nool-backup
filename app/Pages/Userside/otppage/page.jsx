"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const otppage = () => {
  const otp = "/assets/LoginPage/Otp.svg";

  const correct = "/assets/LoginPage/correct.svg";

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        {/* Background Image */}
        <Image
          className="object-cover hidden lg:block lg:w-1/2 w-10 "
          src={otp}
          alt="Background"
          width={1200} height={720}
        />

        <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
            Back
          </button>
          <div className="flex-1 items-center">
            <div className="text-center items-center">
              <p className="mt-3 text-[#015464]  text-4xl">OTP Verification</p>
              <Image
                src={correct}
                alt="otp"
                className="w-16 h-16 my-3 mx-auto "
                width={16}
                height={16}
              />
              <h3 className="pt-10">Enter A 4 Digit Number That </h3>
              <h3 className="pt-1">Was Sent To <span className="font-black">+ (1) 20 7234 3456 &
                sample@gmail.com</span> </h3>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <form
              // onSubmit={handleSubmit}
              >
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]"
                      type="text"
                    />
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]"
                      type="text"
                    />
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]"
                      type="text"
                    />
                  </div>
                  <div className="w-16 h-16 ">
                    <input
                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-400 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#408080]"
                      type="text"
                    />
                  </div>
                </div>
                <p className="mt-6 text-sm text-center text-gray-400">
                  <a
                    href="#"
                    className="text-[#408080] font-bold focus:outline-none focus:underline hover:underline"
                  >
                    Resend Code in 0:59
                  </a>
                  .
                </p>
                <div className="mt-6">
                  <Link href="/Pages/Userside/customizeaccount">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                      Next
                    </button>
                  </Link>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Already Have An Enool Account{" "}
                <Link href="/Pages/Userside/login">
                  <button
                    href="#"
                    className="text-[#408080] font-bold focus:outline-none focus:underline hover:underline"
                  >
                    Sign In
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otppage ;
