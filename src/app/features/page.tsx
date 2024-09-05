"use client";
import { Brushf, Controlf, Customizef, Posf } from "@/ui/FeaturesIcon";
import KioskUi from "@/ui/KioskUi";
import React from "react";
import { SlArrowRight } from "react-icons/sl";

const FeaturesPage = () => {
  return (
    <div>
      <section className="h-[75vh]   px-[2rem]">
        <div className='h-full bg-my-orange-50 bg-[url("/mesh-920.png")] bg-cover bg-no-repeat rounded-[2rem] rounded-bl-none rounded-br-none px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav flex flex-col items-center gap-[6rem] pt-[8rem]'>
          <h1 className="text-[2rem] font-semibold text-my-black-900 tracking-wide text-center">
            SmartMenu Offers Extensive Features for
            <span className="block">Your Restaurant Management</span>
          </h1>
          <div className="grid grid-cols-2  w-fit gap-6">
            <button className=" bg-my-black-950 rounded-tl-[1.7rem] rounded-br-[1.7rem] w-[300px] py-2 px-2 flex items-center justify-between">
              <div className="w-[3rem] bg-white p-2 rounded-full rounded-bl-none">
                <Brushf />
              </div>
              <p className="tracking-wider text-[0.94rem] font-medium text-white">
                DESIGN YOUR MENU
              </p>
              <SlArrowRight className="text-[1.1em] text-white" />
            </button>
            <button className=" bg-my-black-950 rounded-tl-[1.7rem] rounded-br-[1.7rem] w-[300px] py-2 px-2 flex items-center justify-between">
              <div className="w-[3rem] bg-white p-2 rounded-full rounded-bl-none">
                <Customizef />
              </div>
              <p className="tracking-wider text-[0.94rem] font-medium text-white">
                ADDITIONAL OPTIONS
              </p>
              <SlArrowRight className="text-[1.1em] text-white" />
            </button>
            <button className=" bg-my-black-950 rounded-tl-[1.7rem] rounded-br-[1.7rem] w-[300px] py-2 px-2 flex items-center justify-between">
              <div className="w-[3rem] bg-white p-2 rounded-full rounded-bl-none">
                <Controlf />
              </div>
              <p className="tracking-wider text-[0.94rem] font-medium text-white">
                MANAGE YOUR ORDERS
              </p>
              <SlArrowRight className="text-[1.1em] text-white" />
            </button>
            <button className=" bg-my-black-950 rounded-tl-[1.7rem] rounded-br-[1.7rem] w-[300px] py-2 px-2 flex items-center justify-between">
              <div className="w-[3rem] bg-white p-2 rounded-full rounded-bl-none">
                <Posf />
              </div>
              <p className="tracking-wider text-[0.94rem] font-medium text-white">
                FULLY INTEGRATED
              </p>
              <SlArrowRight className="text-[1.1em] text-white" />
            </button>
          </div>
        </div>
      </section>
      <section className="px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav py-[4rem] h-[80vh]">
        <div className="flex flex-col  h-full ">
            <h2 className="text-[1.4rem] font-medium py-[2rem]">Customize Your Menu Theme to Reflect Your Restaurant's Brand</h2>
            <div className=" w-full flex  ">
              <KioskUi img='bg-[url("/designmenu1.svg")]'/>
              <div className=" h-full">
                {/* <h3>Design Your Theme</h3>
                <ul>
                    <li>Choose from a variety of designs</li>
                </ul> */}
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
