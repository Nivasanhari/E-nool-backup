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
  const logineyeclosed = " /assets/LoginPage/logineyeclosed.svg";

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
            <Link href="/Pages/Userside/forgetpassword">
              <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
                Back
              </button>
            </Link>
            <div className="flex-1">
              <div className="text-center">
                <p className="mt-3 text-[#015464] font-black text-5xl">
                  Make Selection
                </p>
                <p className="mt-3 text-[#015464] text-[16px]">
                  {" "}
                  Select Which Contact Detail Should We Use To Reset Your
                  Password?
                </p>
              </div>
              <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
              <div className="mt-8">
                <form>
                  <div className="mt-6">
                    <Link href="/Pages/Userside/resetlink">
                      <div className="w-full px-6 py-6 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                        <div className="flex ">
                          <div className="p-1 mx-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="35.5"
                              height="35.171"
                              viewBox="0 0 35.5 35.171"
                            >
                              <path
                                id="envelope-open"
                                d="M.5,11.056l16.75,8.375L34,11.056m0,.192V31.4a2.393,2.393,0,0,1-2.393,2.393H2.893A2.393,2.393,0,0,1,.5,31.4V11.249A2.393,2.393,0,0,1,1.706,9.171L16.063.967a2.393,2.393,0,0,1,2.374,0l14.357,8.2A2.393,2.393,0,0,1,34,11.249Z"
                                transform="translate(0.5 0.382)"
                                fill="none"
                                stroke="#7cc9b5"
                                stroke-width="2"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <h3>Via Email :</h3>
                            <p>Sample@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link href="/Pages/Userside/resetlink">
                      <div className="w-full px-6 py-6 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 ">
                        <div className="flex ">
                          <div className="p-1 mx-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="36.5"
                              height="36.5"
                              viewBox="0 0 36.5 36.5"
                            >
                              <path
                                id="phone"
                                d="M10.9.5H5.429A4.929,4.929,0,0,0,.5,5.429v4.929A24.643,24.643,0,0,0,25.143,35h4.929A4.928,4.928,0,0,0,35,30.071V26.666a2.464,2.464,0,0,0-1.362-2.2l-5.953-2.977a2.464,2.464,0,0,0-3.44,1.425l-.734,2.2a2.98,2.98,0,0,1-3.412,1.98A14.9,14.9,0,0,1,8.409,15.4a2.98,2.98,0,0,1,1.98-3.412l2.732-.911a2.464,2.464,0,0,0,1.611-2.936L13.288,2.367A2.464,2.464,0,0,0,10.9.5Z"
                                transform="translate(0.5 0.5)"
                                fill="none"
                                stroke="#7cc9b5"
                                stroke-width="2"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <h3>Via SMS :</h3>
                            <p>+91 123123123</p>
                          </div>
                        </div>
                      </div>
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
