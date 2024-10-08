import { motion } from "framer-motion";
import React from "react";

interface Props{
  img?: string
}

const KioskUi = (props: Props) => {
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
      className="   rounded h-[210px] sm:h-[250px] tablet:h-auto w-full min-w-[300px] max-w-[700px] flex flex-col items-center "
    >
      {/* w-[500px] h-[320px]   */}
      <div className=" w-full      ">
        <div className="   aspect-[50/32] rounded-[1.2rem] p-[0.5rem]  sm:p-[0.6rem]  bg-[#1f1f1f] kiosk-rim relative">
          {/* Power button */}
          <div className="absolute left-[-1px] top-[2rem] ">
            <div className="h-[17px] w-[1.5px] bg-[#292929] rounded-[2px_0_0_2px]"></div>
          </div>
          {/* Volume button */}
          <div className="absolute left-[2rem] top-[-1px] flex gap-1">
            <div className="h-[1.5px] w-[17px] bg-[#292929] rounded-[2px_2px_0_0]"></div>
            <div className="h-[1.5px] w-[17px] bg-[#292929] rounded-[2px_2px_0_0]"></div>
          </div>
          <div className={`flex flex-col w-full h-full rounded-[0.7rem] tablet-kiosk ${props.img} bg-gun-powder-600  ${props.img} overflow-hidden`}></div>
        </div>
      </div>
      {/* <div className="w-[150px] h-[100px] bg-[#1f1f1f] mt-[1rem] rounded-[1.5rem] kiosk-stand"></div> */}
    </motion.div>
  );
};

export default KioskUi;
