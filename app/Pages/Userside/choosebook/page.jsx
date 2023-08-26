"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import Select from "react-select";
import Link from "next/link";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  // Add more country options as needed
];
const choosebook = [
  "Animals",
  "Social Science",
  "Study Aids",
  "Transportation",
  "Transportation",
  // Add more checkbox labels as needed
];

const page = () => {
  const selectcountrybg = "/assets/LoginPage/choosebook.svg";
  const close = "/icons/close.svg";
  const searchbar = "/icons/searchbar.svg";
  const arrowforward = "/icons/arrow-forward.svg";
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        {/* Background Image */}
        <Image
          src={selectcountrybg}
          className="object-cover hidden lg:block lg:w-1/2 "

          alt="Background" width={1200} height={720}
        />

        <div className="flex items-center  w-full  px-6 mx-auto lg:w-2/6  ">
          <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
            Back
          </button>
          <div className="flex-1 items-center">
            <div className="text-center  items-center justify-center ">
              <p className="mt-3 text-[#015464]  text-4xl">
                Choose Book To Read
              </p>
              <p className="py-3  text-[#408080] text-[8px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. <br></br>Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <div className="my-4 mx-auto h-1 w-1/2 bg-[#E0E7FF] opacity-20 rounded"></div>

              <div className="flex items-center justify-center w-full mb-5">
                <Link href="/Pages/Userside/dashboard">
                  <button className="px-6 py-3 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90 flex items-center">
                    Skip This Step
                    <Image
                      src={arrowforward}
                      alt="Arrow Forward"
                      className="ml-2"
                      width={20}
                      height={10}
                    />
                  </button>
                </Link>
              </div>
              <div className="relative w-96 justify-center mx-auto">
                <input
                  type=""
                  name="password"
                  id="password"
                  placeholder="Search for categories"
                  // onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-4 py-3   text-sm placeholder-[#2E384D] bg-[#E0E7FF]/50 border  rounded-sm focus:border-blue-400"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                >
                  <Image
                    src={searchbar}
                    alt="searchbar "
                    className="w-full h-full"
                    fill={true}
                  />
                </button>
              </div>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <form
              // onSubmit={handleSubmit}
              >
                <div className="grid lg:grid-cols-3 mt-5 md:grid-cols-3 gap-4 justify-spacearound">
                  {choosebook.map((label, index) => (
                    <div
                      key={index}
                      className="w-30 h-10 flex items-center px-4 border border-gray-200 rounded-3xl dark:border-gray-700"
                    >
                      <label
                        htmlFor={`bordered-checkbox-${index}`}
                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {label}
                      </label>
                      <input
                        id={`bordered-checkbox-${index}`}
                        type="checkbox"
                        value=""
                        name="bordered-checkbox"
                        className="w-4 h-4 text-[#3ACC6C] bg-[#3ACC6C] border border-gray-300 rounded focus:ring-blue-500 "
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 w-96 mx-auto">
                  <Link href="/Pages/Userside/dashboard">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 focus:outline-none">
                      Start Reading
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
