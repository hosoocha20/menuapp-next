"use client";

import { Brushf, Controlf, Customizef, Posf } from "@/ui/FeaturesIcon";
import KioskUi from "@/ui/KioskUi";
import React, { ReactNode, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/ui/EmblaCarousel";
import { IoAddCircleOutline } from "react-icons/io5";
import { LuVegan, LuMilk } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import VideoTest from "@/ui/VideoTest";
import {
  ChilliIcon,
  CrustaceanIcon,
  DairyIcon,
  EggIcon,
  FishIcon,
  GFIcon,
  GlutenFreeIcon,
  HalalIcon,
  HalalIcon2,
  VeganIcon,
  VegetarianIcon,
  VGIcon,
  VIcon,
} from "@/ui/DietaryIcons";

import { PiShrimp } from "react-icons/pi";
import { GiPeanut } from "react-icons/gi";

interface AdditionalFeaturesI {
  Icon: ReactNode;
  heading: string;
  subheading: string;
}

const FeaturesPage = () => {
  const [designThemeTActive, setDesignThemeTActive] = useState(true);
  const [activeAddFeature, setActiveAddFeature] = useState(0);

  const OPTIONS: EmblaOptionsType = { loop: true };

  const SLIDES_D_T = [
    'bg-[url("/tabletmenusvg.svg")]',
    'bg-[url("/tabletmenudesign11.svg")]',
    'bg-[url("/tabletmenudesign2222.svg")]',
    'bg-[url("/tabletmenudesign4444.svg")]',
  ];
  const SLIDES_D_P = [
    "/phonemenudesign111.svg",
    "/phonemenudesign2222.svg",
    "/phonemenudesign333.svg",
  ];

  const additionalFeaturesArr: AdditionalFeaturesI[] = [
    {
      heading: "Option Labels",
      subheading: "Offer customizable options for your menu",
      Icon: <IoAddCircleOutline size={"22px"} />,
    },
    {
      heading: "Dietary Labels",
      subheading:
        "Clearly indicate allergens and dietary restrictions for each menu item",
      Icon: <LuVegan size={"20px"} />,
    },
    {
      heading: "View More Sections",
      subheading: "Give informative descriptions for your menu items",
      Icon: <BsInfoCircle size={"20px"} />,
    },
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
      <section className="px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav py-[2rem] lg:py-[4rem] min-h-[80vh] ">
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
          <div className=" h-full  flex flex-wrap gap-[2rem] xl:gap-x-[4rem]   justify-center items-center">
            {/* <KioskUi img='bg-[url("/designmenu1.svg")]'/> */}

            {designThemeTActive ? (
              <div className=" h-full min-w-[300px] max-w-[700px] ">
                <EmblaCarousel
                  slides={SLIDES_D_T}
                  options={OPTIONS}
                  activeT={true}
                />
              </div>
            ) : (
              <div className=" h-full  w-full max-w-[700px] ">
                <EmblaCarousel
                  slides={SLIDES_D_P}
                  options={OPTIONS}
                  activeT={false}
                />
              </div>
            )}

            <div className=" h-full w-full flex-1 min-w-[300px]  max-w-[500px] ">
              <h3 className="text-[1.3rem] font-semibold mb-[2rem] text-my-orange-400">
                Design Your Menu
              </h3>
              <ul className="flex flex-col gap-3  ">
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
      <section className="px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav  lg:px-lg-nav  py-[4rem] min-h-[80vh]">
        <div>
          <h2 className="text-[1.5rem] font-semibold  text-center">
            Expand Your Menu with Additional Features
          </h2>
          <p className="text-center">
            Enhance your offerings and cater to diverse customer preferences.
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-7">
            <div className="grid grid-cols-3 md:grid-cols-1 auto-rows-fr md:w-[250px] tablet:w-[350px] bg-my-black-10">
              {additionalFeaturesArr.map((item: AdditionalFeaturesI, i) => (
                <div
                  key={i}
                  className={`flex relative gap-2 border py-2 sm:py-3 px-2 sm:px-10 cursor-pointer  ${
                    activeAddFeature === i
                      ? "border-b-my-orange-300 md:border-l-my-orange-300 border-b-[3px] md:border-l-[3px] md:border-b md:border-b-gray-200  bg-white"
                      : "border-l-[1px] border-b"
                  }`}
                  onClick={() => setActiveAddFeature(i)}
                >
                  <div className="absolute left-2 sm:left-4 top-2 sm:top-3  flex text-my-black-500">
                    {item.Icon}
                  </div>
                  <div className=" sm:pl-3 mt-6 sm:mt-0">
                    <h5 className="font-semibold text-[14px] sm:text-[0.98rem]">
                      {item.heading}
                    </h5>
                    <p className="text-[13px] hidden md:block sm:text-[0.93rem] mt-2">
                      {item.subheading}
                    </p>
                  </div>
                  <SlArrowRight className="absolute right-2 sm:right-4 top-[0.7rem] sm:top-3 text-[0.85rem] text-my-black-500" />
                </div>
              ))}
            </div>
            <div className=" flex-1  xl:flex-none xl:w-[800px]">
              <div
                className={`m-auto flex flex-col items-center justify-center ${
                  activeAddFeature === 0 ? "block" : "hidden"
                } `}
              >
                <p className={`md:hidden px-3 pt-5 pb-3 text-[15px] text-my-orange-400 font-semibold text-center`}>Offer customizable options for your menu</p>
                <video
                  src="/optionsvideo.mp4"
                  height={400}
                  muted
                  loop
                  disablePictureInPicture
                  autoPlay
                  className="w-[400px] tablet:w-[420px]"
                />
              </div>
              <div
                className={` h-full m-auto flex flex-col items-center gap-2 pt-5 px-4  ${
                  activeAddFeature === 1 ? "block" : "hidden"
                } `}
              >
                <p className={`md:hidden px-3  pb-2 text-[15px] text-my-orange-400 font-semibold text-center`}>Clearly indicate allergens and dietary restrictions for each menu item</p>
                <p className="text-center font-medium text-[15px] lg:text-[15.5px]">
                  Choose from a variety of dietary and allergen labels to add to
                  your menu
                </p>
                <div className="flex flex-wrap gap-1 items-center">
                  <div className="w-[2rem] flex">
                    <VGIcon />
                  </div>
                  <div className="w-[2rem] flex">
                    <VIcon />
                  </div>
                  <div className="w-[2rem] flex">
                    <GFIcon />
                  </div>
                  <div className="w-[2.6rem] flex">
                    <HalalIcon2 />
                  </div>
                  <div className="w-[1.9rem] flex">
                    <ChilliIcon />
                  </div>
                  <LuMilk className="text-[1.8rem] flex text-[#008fd5]" />
                  <PiShrimp className="text-[1.9rem] flex text-[#ff8902]" />
                  <GiPeanut className="text-[1.7rem] flex text-[#c49b6d]" />
                  <div className="w-[2rem] flex">
                    <FishIcon />
                  </div>
                  <div className="w-[2.1rem] flex">
                    <EggIcon />
                  </div>

                  <div className="w-[1.7rem] flex">
                    <CrustaceanIcon />
                  </div>
                </div>
                  <video
                  src="/dietaryvideo.mp4"
                  height={400}
                  muted
                  loop
                  disablePictureInPicture
                  autoPlay
                  className="w-[300px] tablet:w-[320px] mt-4"
                />
              </div>
              <div
                className={`m-auto flex flex-col items-center justify-center ${
                  activeAddFeature === 2 ? "block" : "hidden"
                } `}
              >
                <p className={`md:hidden px-3 pt-5 pb-3 text-center text-[15px] text-my-orange-400 font-semibold`}>Give informative descriptions for your menu items</p>
                <video
                  src="/viewmorevideo.mp4"
                  height={400}
                  muted
                  loop
                  disablePictureInPicture
                  autoPlay
                  className="w-[390px] tablet:w-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="h-[200vh] flex justify-center items-center">
        <div className=" h-[800px] relative">
          <div className="absolute z-[10] right-[109px] top-[158px] flex gap-[2px]">
            <div className="w-[1.3rem] flex">
              <VIcon />
            </div>
            <div className="w-[1.2rem] flex">
              <ChilliIcon />
            </div>
          </div>
          <div className="absolute z-[10] right-[130px] top-[510px] flex gap-[2px]">
            <div className="w-[1.2rem] flex">
              <CrustaceanIcon />
            </div>
          </div>
          <div className="absolute z-[10] right-[270px] top-[688px] flex gap-[2px]">
            <PiShrimp className="text-[1.2rem] flex text-[#ff8902]" />
          </div>
          <img
            src={"/phonemenudesign333.svg"}
            alt="Dietary & Allergen Menu Label"
            className="h-full w-full"
          />
        </div>
      </div> */}
      {/* <VideoTest /> */}
    </div>
  );
};

export default FeaturesPage;
