import React from "react";
import LinkUI from "../ui/LinkUI";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="h-[300px] bg-my-black-950 text-white px-[8rem] py-[3rem] flex flex-col justify-between">
      <div className="w-full flex justify-between">
        <p className="font-cabin-condensed text-[1.2rem]">SmartMenu</p>
        <div className=" flex gap-[2rem]">
          <div className="flex flex-col gap-1">
            <h5 className="font-cabin uppercase font-medium text-my-black-300 text-[0.82rem] tracking-[0.3em]">
              About
            </h5>
            <LinkUI name="About Us" />
            <LinkUI name="Contact" />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-cabin uppercase font-medium text-my-black-300 text-[0.82rem] tracking-[0.3em]">
              Services
            </h5>

            <LinkUI name="Products" />

            <LinkUI name="Features" />
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="font-cabin uppercase font-medium text-my-black-300 text-[0.82rem] tracking-[0.3em]">
              Other
            </h5>
            <LinkUI name="Attributions" />
          </div>
        </div>
      </div>
      <div className="w-full flex border-t border-my-black-800 text-my-black-400 text-[0.8rem] pt-3 ">
        <div className="flex-1 flex items-center gap-1">
          <MdCopyright className="text-[1rem]" />
          <p className="text-[0.85rem] font-medium">2024 Hosoo Cha. <span className="font-normal">All rights reserved.</span></p>
          
        </div>
        <div className="flex-1  flex justify-center gap-[3rem]">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex-1 "></div>
      </div>
    </div>
  );
};

export default Footer;
