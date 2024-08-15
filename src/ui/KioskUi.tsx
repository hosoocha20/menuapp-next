import { motion } from 'framer-motion'
import React from 'react'

const KioskUi = () => {
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
    className="  overflow-hidden  rounded h-[210px] sm:h-[250px] tablet:h-auto w-full min-w-[300px] max-w-[500px] flex flex-col items-center "
  >
    {/* w-[500px] h-[320px]   */}
    <div className=" w-full   overflow-hidden    ">
      <div className="   aspect-[50/32] rounded-[1.2rem] p-[0.6rem] pr-[0.8rem] bg-[#1f1f1f] kiosk-rim">
        <div className="flex flex-col w-full h-full rounded-[0.7rem] tablet-kiosk bg-gun-powder-600 overflow-hidden">
        </div>
      </div>
    </div>
    {/* <div className="w-[150px] h-[100px] bg-[#1f1f1f] mt-[1rem] rounded-[1.5rem] kiosk-stand"></div> */}
  </motion.div>
  )
}

export default KioskUi