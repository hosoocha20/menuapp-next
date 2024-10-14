"use client";
import React from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";

const getStarted = () => {
  return (
    <div className="font-inter grid lg:grid-cols-[350px_auto] xl:grid-cols-[30%_auto] w-full h-screen ">
      <div className='h-full w-full  bg-my-primary-400 bg-[url("/getstartedbg3.png")] bg-[length:100%_100%] bg-no-repeat  text-white px-4 sm:px-8 py-[1.5rem] md:py-[3rem]'>
        <a href="/" className="text-[0.8rem] md:text-base">
          SmartMenu
        </a>
        <div className="mt-[1rem] md:mt-[3rem] lg:mt-[7rem]">
          <h2 className="font-monsterrat text-[1.4rem] lg:text-[2rem] font-medium leading-7 md:leading-9">
            Start creating your digital menu with us.
          </h2>
          <h3 className="text-my-primary-200 pr-[10%] lg:pr-[20%] mt-[0.8rem] md:mt-[1rem] tracking-wide text-sm lg:text-base">
            Discover the power of digital menus with SmartMenu and transform
            your restaurant into a modern, successful business.
          </h3>
        </div>
      </div>
      <div className="h-full py-[1.5rem] md:py-[2rem] px-[1rem] sm:px-8 md:px-[4rem] xl:px-[10%] relative">
        <div className="absolute right-[1rem] md:right-[10%] flex gap-3 text-[0.84rem] md:text-[0.9rem]">
          <p>Already have an account?</p>
          <a className="font-medium text-my-accent-500 flex">
            Login to our portal{" "}
            <span className="">
              <IoIosArrowRoundForward className="flex text-[1.3rem]" />
            </span>
          </a>
        </div>
        <div>
          <h1 className="mt-[2.5rem] md:mt-[2rem] text-[1.4rem] md:text-[1.7rem] font-monsterrat font-medium text-my-black-900 tracking-tight">
            Get Started
          </h1>
          <form
            className="mt-[1rem] flex flex-col gap-[2rem] "
            autoComplete="off"
          >
            <div>
              <h4 className="text-sm md:text-base font-medium text-my-black-400 font-monsterrat">
                Choose the type of product
              </h4>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-6 w-full mt-[1rem]">
                <div className="w-full  flex relative cursor-pointer">
                  <div className="absolute z-10 left-5 md:left-6 top-[50%] translate-y-[-50%] bg-my-primary-400 p-[0.6rem] md:p-[0.8rem] rounded-[0.6rem] w-[2.4rem] md:w-[3.5rem]">
                    <img src="/qr-code-128.png" className="w-full" />
                  </div>
                  <input
                    className="w-full rounded-[0.6rem] bg-my-primary-50 border-2 border-my-primary-200 py-[2rem] text-transparent cursor-pointer"
                    type="button"
                    value={"QR Digital Menu"}
                  />
                  <p className="absolute top-6 md:top-5 left-[5rem] md:left-[6rem] xl:left-[7rem] text-[0.82rem] md:text-[0.9rem] font-medium">
                    QR DIGITAL MENU
                  </p>
                  <p className="absolute left-[5rem] md:left-[6rem]  xl:left-[7rem] top-11 text-my-black-300 pr-6 text-[0.78rem] md:text-sm">
                    Access your menu with a QR code
                  </p>
                </div>
                <div className="w-full flex relative">
                  <div className="absolute left-5 md:left-6 top-[50%] translate-y-[-50%] flex justify-center items-center border-2 border-my-primary-200/60 p-[0.4rem] md:p-3 rounded-[0.6rem] w-[2.4rem] h-[2.4rem] md:w-[3.5rem] md:h-[3.5rem]">
                    <HiMiniComputerDesktop className="text-my-primary-400 text-[1.7rem]" />
                  </div>
                  <input
                    className="w-full rounded-[0.6rem] border-2 border-gray-100 py-[2rem] text-transparent"
                    type="button"
                    value={"Table Order Kiosk"}
                  />
                  <p className="absolute top-6 md:top-5  left-[5rem] md:left-[6rem] xl:left-[7rem] text-[0.82rem] md:text-[0.9rem] font-medium">
                    TABLE ORDER KISOK
                  </p>
                  <p className="absolute left-[5rem] md:left-[6rem] xl:left-[7rem] top-11  text-my-black-300 italic text-[0.78rem] md:text-sm">
                    Under development
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-3 sm:w-full md:w-[65%] lg:w-[80%] xl:w-[65%] [&_.GETSTARTED-LABEL]:flex [&_.GETSTARTED-LABEL]:flex-col [&_.GETSTARTED-LABEL]:gap-2 [&_.GETSTARTED-LABEL]:text-[0.83rem] [&_.GETSTARTED-LABEL]:md:text-[0.9rem] [&_.GETSTARTED-LABEL]:font-medium [&_.GETSTARTED-LABEL]:tracking-wide [&_.GETSTARTED-INPUT]:border-2 [&_.GETSTARTED-INPUT]:rounded-md [&_.GETSTARTED-INPUT]:p-2 [&_.GETSTARTED-INPUT]:w-full [&_.GETSTARTED-INPUT]:font-normal [&_.GETSTARTED-INPUT]:text-[0.875rem]  ">
              <h4 className="text-sm md:text-base font-medium text-my-black-400 font-monsterrat">
                Fill in your details
              </h4>
              <div className=" flex gap-4 *:flex-1 ">
                <label className="GETSTARTED-LABEL">
                  First Name
                  <input
                    className="GETSTARTED-INPUT focus:outline-none"
                    type="text"
                    placeholder="First Name"
                  />
                </label>
                <label className="GETSTARTED-LABEL">
                  Last Name
                  <input
                    className="GETSTARTED-INPUT focus:outline-none"
                    type="text"
                    placeholder="Last Name"
                  />
                </label>
              </div>
              <label className="GETSTARTED-LABEL">
                Email
                <input
                  className="GETSTARTED-INPUT focus:outline-none"
                  type="email"
                  placeholder="Your email address"
                />
              </label>
              <label className="GETSTARTED-LABEL">
                Restaurant Name
                <input
                  className="GETSTARTED-INPUT focus:outline-none"
                  type="text"
                  placeholder="Your restaurant name"
                />
              </label>
              <label className="GETSTARTED-LABEL">
                Select your POS provider
                <select required className="GETSTARTED-INPUT focus:outline-none" name="pos" id="getstarted-pos">
                    <option value="" disabled selected hidden>Select current POS provider</option>
                  <option value="lightspeed">Lightspeed</option>
                  <option value="dPos">DPos</option>
                  <option value="sqaure">Sqaure</option>
                  <option value="swiftpos">SwiftPos</option>
                </select>
              </label>
              <label className="GETSTARTED-LABEL">
                Password
                <input
                  className="GETSTARTED-INPUT focus:outline-none"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Your password"
                />
              </label>
              <label className="GETSTARTED-LABEL">
                Confirm your password
                <input
                  className="GETSTARTED-INPUT focus:outline-none"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                />
              </label>
            </div>
            <button className="w-max bg-my-primary-500/90 hover:bg-my-primary-500/100 transition duration-300 ease-in-out rounded-md px-8 py-3 text-white text-sm md:text-[0.98rem] font-monsterrat font-medium tracking-wide">
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default getStarted;
