import { motion, useAnimationControls, useInView } from "framer-motion";
import React, { useEffect } from "react";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFull, IoCellular } from "react-icons/io5";

const PhoneHome = () => {
  return (
    <motion.div
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    exit="visible"
    transition={{ duration: 0.6, delay: 0.25 }}
    className="  overflow-hidden h-[230px] sm:h-[250px] md:h-full  flex flex-col"
  >
    
    <div className=" w-[300px] sm:w-[310px] md:w-auto  md:h-full  overflow-hidden   rounded  px-[2rem] ">
      <div className="aspect-[28/55]  md:h-full rounded-[2rem] p-[0.5rem]  bg-[#111111] iphone-rim relative">
        {/*Left buttons*/}
        <div className="absolute left-[-1.9px] top-[4rem] flex flex-col gap-2">
          <div className="h-[20px] w-[2px] bg-[#111] rounded-[2px_0_0_2px]"></div>
          <div className="h-[34px] w-[2px] bg-[#111] rounded-[2px_0_0_2px] mt-2"></div>
          <div className="h-[34px] w-[2px] bg-[#111] rounded-[2px_0_0_2px]"></div>
        </div>
        {/* Right buttons*/}
        <div className="absolute right-[-1.5px] top-[6.5rem] ">
          <div className="h-[47px] w-[2px] bg-[#292929] rounded-[0_2px_2px_0]"></div>
        </div>
        <motion.div className=" flex flex-col items-center gap-[1rem]  w-full h-full rounded-[1.5rem] iphone  bg-gun-powder-600 overflow-hidden ">
          <div className="iphone-screen-top">
            <p className="text-[0.84rem] leading-none font-[600]">7:53</p>
            <div className="flex gap-1">
              <IoCellular />
              <IoIosWifi />
              <IoBatteryFull />
            </div>
          </div>

          <i className="iphone-speaker">Speaker</i>
          <b className="iphone-camera">Camera</b>
        </motion.div>
      </div>
    </div>
  </motion.div>
  )
}

export default PhoneHome