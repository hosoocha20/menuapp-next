"use client";

import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiDiamonds } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";

const ProductsPage = () => {
  return (
    <div className=" font-inter mt-[-3rem] tablet:mt-[-4.3rem] ">
      <section className=" flex flex-col tablet:flex-row-reverse gap-y-[1rem] gap-x-[3rem] tablet:justify-between h-[100vh]  px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav pt-[4rem] md:pt-[5.5rem] ">
        <div className=" w-full px-[1rem] tablet:px-0 ">
          {/* <img
            src="/phoneproduct2.svg"
            alt="Image of Phone Menu in Products"
            className="mx-auto my-0 tablet:ml-auto tablet:mr-0  min-h-[300px] h-[45vh] sm:h-auto w-full max-w-[500px] lg:min-w-[500px] xl:max-w-[700px]  "
          /> */}
          <div className="relative mx-auto my-0 tablet:ml-auto tablet:mr-0  aspect-[700/615] sm:min-w-[300px] lg:min-w-[400px] max-w-[500px] xl:max-w-[700px] flex flex-col justify-end">
            <img
                src="/phoneprod2.svg"
                alt="Image of Phone Menu Cart"
                className="absolute right-[4.2%] top-0   w-[44%] z-[1]  "
              />
            <div className="relative  aspect-[700/500] sm:min-w-[500px] lg:min-w-[500px] xl:max-w-[700px] rounded-[7.14%/10%]  bg-my-mango-400 overflow-hidden  ">
                <img
                  src="/phoneprod1.svg"
                  alt="Image of Phone Menu"
                  className="absolute left-[4.2%] top-[5%]  w-[44%]  "
                />
            </div>
          </div>
        </div>
        <div className=" flex flex-col  gap-[1rem] tablet:gap-[2.5rem]  tablet:mt-[2rem]">
          <h1 className="sm:mx-auto my-0 tablet:m-0 w-fit text-[1.5rem] sm:text-[1.7rem] md:text-[1.9rem] tablet:text-[2.5rem] xl:text-[3rem] font-semibold text-my-black-950 leading-tight">
            Are you ready{" "}
            <span className="text-my-mango-400 inline-block align-middle whitespace-nowrap">
              <GiDiamonds />
            </span>
            <span className="block ">to take your restaurant</span>
            <span>to the </span>
            <span className="text-my-mango-400 inline-block font-bold">
              next level?
            </span>
          </h1>
          <p className="xl:w-[600px] sm:text-center text-[0.875rem] sm:text-base tablet:text-left">
            The Future of Restaurant Management is Here{" "}
            <span className="inline-block text-my-black-900">
              <FaArrowTrendUp />
            </span>
            <span className="block">
              Discover how our products can revolutionize your business and
              drive revenue growth.
            </span>
            <span className="font-semibold">Act Now and Start Seeing Results.</span>
          </p>
          <form className="w-full sm:mx-auto tablet:m-0 sm:w-[450px] tablet:w-auto xl:w-[550px] border-2 border-my-black-100 rounded-[2rem] pl-[3rem] md:pl-[4rem] pr-[100px] md:pr-[150px] xl:pr-[200px] flex relative py-[0.5rem] tablet:py-[0.65rem]">
            <input
              placeholder="Your email address"
              className="w-full pr-2 focus:outline-none text-[0.84rem] md:text-base "
            />
            <IoMailOutline className="absolute left-[1rem] top-[50%] translate-y-[-50%] text-[1.2rem] md:text-[1.4rem] flex text-my-black-500" />
            <button
              className={`text-[0.84rem] md:text-base absolute right-[-1px] top-[-2px]  bg-my-black-950 text-white  rounded-[2rem] px-2 py-[0.6rem] tablet:py-[0.75rem] w-[100px] md:w-[150px] xl:w-[200px] `}
            >
              Get Started
            </button>
          </form>
        </div>
      </section>
      <section className="h-[100vh] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav border">
        {/* Phone */}
        {/* <div className="relative">
          <div className="edge">
            <div className="volume-up"></div>
            <div className="volume-down"></div>
          </div>
          <div className="screen-base"></div>
          <div className="screen-top">
            <div className="graphic-lower"></div>
            <div className="graphic-middle"></div>
            <div className="reflection-edge"></div>
            <div className="reflection-screen"></div>
          </div>
        </div> */}
        <div className=" border">
          <img src="/phonesidephone.svg" className="w-[700px]" />
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
