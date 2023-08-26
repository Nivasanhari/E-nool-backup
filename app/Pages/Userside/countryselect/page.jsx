"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  // Add more country options as needed
];

const page = () => {
  const selectcountrybg = "/assets/LoginPage/selectcountrybg.svg";

  const mapimg = "/assets/LoginPage/mapimg.png";
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  return (
    <div className="bg-white h-screen">
      <div className="flex justify-center h-screen">
        {/* Background Image */}
   
        <Image
          className="object-cover hidden lg:block lg:w-1/2 "
          src={selectcountrybg}

          alt="Background" width={1200} height={720}
        />

        <div className="flex items-center  w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <button className="absolute top-4 right-4 px-5 py-1 bg-[#015464] text-white rounded-full focus:outline-none hover:bg-[#408080]/90">
            Back
          </button>
          <div className="flex-1 items-center">
            <div className="text-center items-center">
              <Image
                src={mapimg}
                alt="otp"
                className=" my-3 mx-auto "
                width={400}
                height={0}
              />
              <p className="mt-3 text-[#015464]  text-4xl">
                Select Your Country
              </p>
              <p className="py-3 text-[#015464] text-[11px] opacity-30">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className="mt-4 h-1 w-full bg-[#E0E7FF] opacity-20 rounded"></div>
            <div className="mt-8">
              <form
              // onSubmit={handleSubmit}
              >
                <div className="my-2">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm text-[#408080]"
                  >
                    Select Country
                  </label>
                  <select
                    id="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="block w-full text-sm px-4 py-2 mt-2 text-gray-700 placeholder-[#2E384D] bg-[#E0E7FF]/50 border border-gray-200 rounded-sm "
                  >
                    <option value="">Select a country</option>
                    {countryOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <Link href="/Pages/Userside/choosebook">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#408080] rounded hover:bg-[#408080]/90 f">
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
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
