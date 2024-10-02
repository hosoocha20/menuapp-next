"use client";

import { motion, Variants } from "framer-motion";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiDiamonds } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";

const ProductsPage = () => {

  //Animation
  const barParent: Variants = {
    hidden: {
      opacity: 1
    },
    show: {
      opacity: 1,
      transition: {  duration: 0.35 ,delay: 0.4,staggerChildren: 0.05, type:"spring", stiffness: 60 }
    }
  }
  const barSpringUp : Variants = {
    hidden: {
      y: "100%",
    },
    show: {
      y: "10%",
      transition: { duration: 0.35 ,  staggerChildren: 0.05, type:"spring", stiffness: 60 }
    }
  }
  return (
    <div className=" font-inter mt-[-3rem] tablet:mt-[-4.3rem] pb-[2rem]">
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
            <div className="relative  aspect-[700/500] sm:min-w-[500px] lg:min-w-[500px] xl:max-w-[700px] rounded-[7.14%/10%]  bg-my-orange-400 overflow-hidden  ">
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
            <span className="text-my-orange-400 inline-block align-middle whitespace-nowrap">
              <GiDiamonds />
            </span>
            <span className="block ">to take your restaurant</span>
            <span>to the </span>
            <span className="text-my-orange-400 inline-block font-bold">
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
            <span className="font-semibold">
              Act Now and Start Seeing Results.
            </span>
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
      <section className="min-h-[100vh] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav   ">
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
        <div className="relative  w-fit mx-auto my-0 z-[10]">
          <img src="/phonesidephone3.svg" className="w-[700px] " />
        </div>
        <div className="flex gap-[1rem] lg:gap-[1.5rem] xl:gap-[2rem]  *:rounded-[2rem] w-full  mx-auto my-0 h-[500px]   mt-[-5rem] ">
          <div className="w-[40%]  bg-my-orange-400 overflow-hidden px-[2rem] pt-[2rem]">
            <h3 className="text-[1.5rem] text-my-primary-50 font-medium">
              Digital Access
            </h3>
            <p className="text-[1.4rem] text-my-black-950">
              Easily access your digital menu with a QR Code.
            </p>
            <img
              src={"/phoneqr.svg"}
              alt="Digital Access Qr Phone Image"
              className="max-w-[480px] mx-auto my-0 mt-[2rem]"
            />
          </div>
          <div className="flex-1   bg-my-secondary-200 overflow-hidden px-[2rem] pt-[2rem]">
            <h3 className="text-[1.5rem] text-white text-center font-medium">
              All for One
            </h3>
            <p className="text-[1.4rem] text-my-black-950 ">
              All customers can access your digital menu on their own device and
              place their orders for their table.
            </p>
            <img
              src={"/allforone.svg"}
              alt="Multiple menu devices Image"
              className="max-w-[760px] mx-auto my-0 mt-[2rem] "
            />
          </div>
        </div>
        <div className="mt-[1rem] lg:mt-[1.5rem] xl:mt-[2rem] flex gap-[1rem] lg:gap-[1.5rem] xl:gap-[2rem]  *:rounded-[2rem] w-full  mx-auto my-0 h-[500px] ">
          <div className="flex-1   bg-my-accent-100 overflow-hidden px-[2rem] pt-[2rem]">
            <h3 className="text-[1.5rem] text-my-black-950 text-center font-medium">
              Manage Your Menu
            </h3>
            <p className="text-[1.4rem] text-my-black-900 ">
              Easily create, edit, and organize your restaurant's menu items
              with our management system.
            </p>
            <img
              src={"/smartmenumanager.svg"}
              alt="SmartMenu Managing System"
              className="aspect-[570/370] max-w-[770px] mx-auto my-0 mt-[2rem]"
            />
          </div>
          <motion.div variants={barParent} whileInView="show" initial="hidden"
          className=" w-[40%] bg-my-purple-200 px-[2rem] py-[2rem] flex flex-col">
            <h3 className="text-[1.5rem] text-white  font-medium">
              Happy Customers, Happy Restaurant
            </h3>
            <p className="text-[1.4rem] text-my-black-900 ">
              Elevate your restaurant with SmartMenu and experience enhanced
              customer satisfaction, faster service, and increased revenue.
            </p>
            <div className="border flex-1 mt-[2rem]  px-[15%]">
              <div className=" relative w-full h-full border-b-2 border-my-black-800 border-l-2">
                <div className="absolute left-0 bottom-0 w-full h-full  flex flex-col justify-end overflow-hidden">
                  <div className="flex gap-2 w-full h-[80%] pl-[10%] *:w-[8%] *:bg-[#5d99fd]">
                    <motion.div variants={barSpringUp} className="  h-[5%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[10%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[18%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[29%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[43%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[60%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[80%]  self-end"></motion.div>
                    <motion.div variants={barSpringUp} className="  h-[100%]  self-end"></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
