"use client";

import { Brushf, Controlf, Customizef, Posf } from "@/ui/FeaturesIcon";
import KioskUi from "@/ui/KioskUi";
import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/ui/EmblaCarousel";

const FeaturesPage = () => {
  const [designThemeTActive, setDesignThemeTActive] = useState(true);

  const OPTIONS: EmblaOptionsType = { loop: true };

  const SLIDES_D_T = [
    'bg-[url("/tabletmenusvg.svg")]',
    'bg-[url("/tabletmenudesign11.svg")]',
    'bg-[url("/tabletmenudesign2222.svg")]',
    'bg-[url("/tabletmenudesign4444.svg")]',
  ];
  const SLIDES_D_P = [
    '/phonemenudesign111.svg',
    '/phonemenudesign2222.svg',
    '/phonemenudesign333.svg',
  ];
  return (
    <div>
      <section className="font-inter h-[75vh] sm:min-h-[500px]   px-[1rem] sm:px-[2rem]">
        <div className='h-full  bg-my-orange-50 bg-[url("/mesh-920.png")] bg-cover bg-no-repeat rounded-[2rem] rounded-bl-none rounded-br-none px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav flex flex-col items-center sm:justify-between tablet:justify-normal gap-[3rem] sm:gap-[6rem] py-[2rem] sm:py-[8rem]'>
          <h1 className="text-[1.5rem] sm:text-[2rem] font-semibold text-my-black-900 tracking-wide text-center">
            SmartMenu Offers Extensive Features for
            <span className="block">Your Restaurant Management</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2  w-fit gap-2 md:gap-6">
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
      <section className="px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav py-[4rem] min-h-[80vh]">
        <div className="flex flex-col  h-full gap-[2rem]">
          <h2 className="text-[1.5rem] font-semibold  text-center">
            Customize Your Menu Theme to Reflect Your Restaurant's Brand
          </h2>
          <div className="flex justify-center  *:py-3  *:px-6 *:tracking-wide *:font-medium">
            <button
              className={`border border-my-orange-400 ${
                designThemeTActive
                  ? "bg-my-orange-400 text-white"
                  : "bg-white text-my-orange-400"
              }`}
              onClick={() => setDesignThemeTActive(true)}
            >
              Tablet Theme
            </button>
            <button
              className={`border border-my-orange-400 border-l-0 ${
                designThemeTActive
                  ? "bg-white text-my-orange-400"
                  : "bg-my-orange-400 text-white"
              }`}
              onClick={() => setDesignThemeTActive(false)}
            >
              Phone Theme
            </button>
          </div>
          <div className="  h-full  flex flex-wrap gap-[2rem] xl:gap-x-[4rem]   justify-center items-center">
            {/* <KioskUi img='bg-[url("/designmenu1.svg")]'/> */}

            {designThemeTActive ? (
              <div className=" h-full min-w-[300px] max-w-[700px] ">
                <EmblaCarousel slides={SLIDES_D_T} options={OPTIONS} activeT={true}/>

              </div>
            ) : (
              <div className=" h-full  w-full max-w-[700px] ">
                <EmblaCarousel slides={SLIDES_D_P} options={OPTIONS} activeT={false}/>

              </div>
            )}

            <div className=" h-full w-full flex-1 min-w-[300px]  max-w-[500px] ">
              <h3 className="text-[1.3rem] font-semibold mb-[2rem] text-my-orange-400">
                Design Your Menu
              </h3>
              <ul className="flex flex-col gap-3 mb-[7rem] ">
                <li className="font-semibold text-[0.95rem]">
                  Choose from a variety of designs
                  <ul>
                    <li className="font-normal ">
                      Select and customize a design that matches your
                      restaurant's personality.
                    </li>
                  </ul>
                </li>
                <li className="font-semibold text-[0.95rem]">
                  Customize menu categories
                  <ul>
                    <li className="font-normal ">
                      Organize your menu items into clear categories that match
                      your restaurant's style.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
