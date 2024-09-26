'use client'

import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiDiamonds } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";

const ProductsPage = () => {
  return (
    <div>
      <section className="font-inter flex  justify-between h-[100vh] sm:min-h-[500px]   px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav py-[2rem] lg:py-[4rem] ">
        <div className="flex flex-col gap-[2.5rem] mt-[2rem]">
          <h1 className="text-[3rem] font-semibold text-my-black-950 leading-tight">
            Are you ready{" "}
            <span className="text-my-purple-500 inline-block align-middle">
              <GiDiamonds />
            </span>
            <span className="block max-w-fit">to take your restaurant</span>
            <span>to the </span>
            <span className="text-my-purple-500 inline-block font-bold">
              next level?
            </span>
          </h1>
          <p className="w-[600px]">
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
          <form className="border flex">
            <input placeholder="Your email address" className="border w-full"/>
            <button
              className={`hidden sm:block border  tablet:bg-my-black-950 tablet:text-white  rounded-[2rem] px-5 py-[0.5rem] tablet:py-[0.65rem] w-[200px] `}
            >
              Get Started
            </button>
          </form>
        </div>
        <img
          src="/phoneproduct2.svg"
          alt="Image of Phone Menu in Products"
          className="max-h-[500px] lg:h-[700px] lg:max-h-[700px]"
        />
      </section>
    </div>
  );
};

export default ProductsPage;
