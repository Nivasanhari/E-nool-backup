"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NoDefaultLayout from "@/app/components/NoDefaultLayout/layout";
import Image from "next/image";

const page = () => {
  const loginObject = "/assets/LoginPage/login-object.png";
  const logo = "public/icons/eNOOL_Logo.svg";

  const logineye = "public/assets/LoginPage/logineye.svg";
  const logineyeclosed = "public/assets/LoginPage/logineyeclosed.svg";

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
            <Link href="/Pages/Userside/makeselection">
              <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
                Back
              </button>
            </Link>
            <div className="flex-1">
              <div className="text-center">
                <p className="mt-3 text-[#015464] font-black text-4xl">
                  Reset Link Sent
                </p>
                <p className="mt-3 text-[#015464] text-[12px]">
                  {" "}
                  Please Check Your Inbox For The Link And Instructions To Reset
                  Your Password
                </p>
              </div>
              <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
              <div className="mt-8">
                <form>
                  <div className="mt-6">
                    <Link href="/">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                        Back to Home
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
