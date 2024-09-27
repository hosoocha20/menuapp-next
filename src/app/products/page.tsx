"use client";

import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiDiamonds } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";

const ProductsPage = () => {
  return (
    <div>
      <section className=" font-inter flex flex-col tablet:flex-row-reverse gap-x-[2rem] tablet:justify-between h-[100vh]  px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav py-[2rem] lg:py-[4rem] ">
        <div className="flex-1 tablet:flex-auto w-full px-[1rem] tablet:px-0 border">
          <img
            src="/phoneproduct2.svg"
            alt="Image of Phone Menu in Products"
            className="mx-auto my-0 tablet:ml-auto tablet:mr-0  min-h-[300px] h-[45vh] sm:h-auto w-full max-w-[500px] lg:min-w-[500px] xl:max-w-[700px]  "
          />
        </div>
        <div className="border flex flex-col gap-[1rem] tablet:gap-[2.5rem]  tablet:mt-[2rem]">
          <h1 className="text-[1.7rem] md:text-[1.9rem] tablet:text-[2.5rem] xl:text-[3rem] font-semibold text-my-black-950 leading-tight">
            Are you ready{" "}
            <span className="text-my-purple-500 inline-block align-middle whitespace-nowrap">
              <GiDiamonds />
            </span>
            <span className="block max-w-fit">to take your restaurant</span>
            <span>to the </span>
            <span className="text-my-purple-500 inline-block font-bold">
              next level?
            </span>
          </h1>
          <p className="xl:w-[600px]">
            The Future of Restaurant Management is Here{" "}
            <span className="inline-block text-my-black-900">
              <FaArrowTrendUp />
            </span>
            <span className="block">
              Discover How Our Products Can Revolutionize Your Business and
              Drive Revenue Growth.
            </span>
            <span>Act Now and Start Seeing Results.</span>
          </p>
          <form className="w-full md:w-[450px] tablet:w-auto xl:w-[550px] border-2 border-my-black-100 rounded-[2rem] pl-[4rem] pr-[200px] flex relative py-[0.5rem] tablet:py-[0.65rem]">
            <input
              placeholder="Your email address"
              className="w-full pr-2 focus:outline-none"
            />
            <IoMailOutline className="absolute left-[1.5rem] top-[50%] translate-y-[-50%] text-[1.4rem] flex text-my-black-500" />
            <button
              className={`absolute right-[-1px] top-[-2px]  bg-my-black-950 text-white  rounded-[2rem] px-5 py-[0.6rem] tablet:py-[0.75rem] w-[200px] `}
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
