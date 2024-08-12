'use client'
import React, { Component, useEffect, useRef, useState } from "react";
import Image from 'next/image'

// import tabletSVG from "public/tablet.svg";

// import mealSVG from "public/family-meal-29.svg";


// import qrSVG from "public/qr-code-64.svg";
// import qrCodePNG from "public/qr-code-128.png"
// import qrIconSVG from "public/qr-icon2.svg";
import { IoMdCellular } from "react-icons/io";
import { IoIosWifi } from "react-icons/io";
import { IoBatteryFull } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";
import { HiBellAlert } from "react-icons/hi2";
import { VscQuestion } from "react-icons/vsc";
import { MdHomeFilled } from "react-icons/md";
import { TbClipboardText } from "react-icons/tb";
import { PiShoppingCartBold } from "react-icons/pi";
import { PiDevicesLight } from "react-icons/pi";
import { PiNotebookLight } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";

//SVG Components
import {
  Adminf,
  Brushf,
  Controlf,
  Customizef,
  Kioskf,
  Menuf,
  Posf,
  Qrf,
} from "@/ui/FeaturesIcon";


import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";
import ViewMoreUI from "@/ui/ViewMoreUI";
import LinkUI from "@/ui/LinkUI";
import RevealAni from "@/ui/RevealAni";
import TextReveal from "@/ui/TextReveal";
import FadeInRight from "@/ui/FadeInRight";

interface OfferI {
  svg: string;
  heading: string;
}
const HomePage = () => {
  //animation variables
  const controls = useAnimationControls();
  const qrAniRef = useRef(null);
  const qrAniIsInView = useInView(qrAniRef, { once: true });

  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  const howSectionRef = useRef(null);

  const phoneContainerRef = useRef(null);
  const { scrollYProgress: phScrollYProgress } = useScroll({
    target: phoneContainerRef,
    offset: ["start end", "end end"],
  });
  const elScrollYValue = useTransform(phScrollYProgress, [0, 1], ["0", "-25%"]);

  const kioskContainerRef = useRef(null);
  const { scrollYProgress: kioskScrollYProgress } = useScroll({
    target: kioskContainerRef,
    offset: ["start end", "end end"],
  });
  const kioskScrollYValue = useTransform(
    kioskScrollYProgress,
    [0, 1],
    ["0", "-40%"]
  );

  //Animation Variants
  const fadeInUpAni: Variants = {
    hidden: {
      opacity: 0,
      y: 10,

    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, staggerChildren: 0.12,ease: "easeOut" },
    },
  };
  const imgFadeInUpAni: Variants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.12, ease: "easeOut" },
    },
  };
  const cardFadeInUpAni: Variants = {
    hidden: {},
    visible: {
      transition: {
        duration: 0.6,
        staggerChildren: 0.12,
        ease: "easeOut",
        delayChildren: 0.25,
      },
    },
  };

  const foodMenuKioskImgArr = [
    "food1.jpg",
    "food2.jpg",
    "food3.jpg",
    "food4.jpg",
    "food5.jpg",
    "food6.jpg",
    "food7.jpg",
    "food8.jpg",
    "food9.jpg",
  ];
  const foodMenuPhoneArr = [
    "food1.jpg",
    "food6.jpg",
    "food7.jpg",
    "food8.jpg",
    "food9.jpg",
    "food3.jpg",
  ];
  const offerArr: OfferI[] = [
    { svg: "qrf", heading: "Digitally Avaliable" },
    { svg: "kioskf", heading: "Kiosk Software" },
    { svg: "menuf", heading: "Change your Menu at Anytime" },
    { svg: "brushf", heading: "Design your Menu" },
    { svg: "customizef", heading: "Customize Features" },
    { svg: "controlf", heading: "Manage your Orders" },
    { svg: "posf", heading: "Self PoS" },
    { svg: "adminf", heading: "Employee PoS" },
  ];
  const components = [
    Qrf,
    Kioskf,
    Menuf,
    Brushf,
    Customizef,
    Controlf,
    Posf,
    Adminf,
  ];
  //Functions
  const createComponent = (i: number) => {
    const Component = components[i];
    if (!Component) return <></>;

    return <Component key={i} />;
  };

  //Animation Functions
  const qrAnimationSequence = async () => {
    await controls.start("startQr");
    return await controls.start("fadeOutQr");
  };
  useEffect(() => {
    console.log("Element is in view: ", qrAniIsInView);
    if (qrAniIsInView) qrAnimationSequence();
  }, [controls, qrAniIsInView]);
  return (
    <div className=" font-inter mt-[-4.5rem] ">
      <div className="h-[100vh] px-sm-nav tablet:px-tablet-nav lg:px-lg-nav bg-[url('/bbblurry.svg')] border bg-no-repeat bg-cover w-full bg-white flex flex-col tablet:flex-row  items-center justify-center gap-[2rem] py-[5rem]">
        <div className="pr-[2vw] flex flex-col gap-[2.5rem] justify-center  ">
          <h1 className=" border  text-[2rem] md:text-[2.5rem] lg:text-[3.1rem] font-[600] text-gun-powder-950  ">
            Boost Efficiency, <span className="block">Delight Customers,</span>{" "}
            <span className="block">Enhance your Service</span>
          </h1>
          <p className="border">
            Empower customers, optimize operations, maximize profits.
            <span className="block">
              SmartMenu - The premier self-ordering solution.
            </span>
          </p>
          <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[9rem] py-3 text-white self-center tablet:self-auto">
            Get Started
          </button>
        </div>
        <img src={'/order.svg'} alt={'orderSVG'} className="w-[35%]" />
      </div>
      <div className=" py-[2rem] px-[8rem] w-full flex justify-center items-center ">
        {/* <RevealAni className="w-[80%]" amount={0.4}> */}
        <div ref={sectionOneRef} className="flex gap-[8rem]  w-[80%]">
          <motion.img
            variants={imgFadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionOneRef, amount: 0.4 }}
            src={'/family-meal-1.svg'}
            className="w-[45%]"
          ></motion.img>
          <motion.div
            variants={fadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionOneRef, amount: 0.4 }}
            className="flex flex-col gap-[1.5rem] pt-[8rem]  w-fit  smooth-text-rendering "
          >
            <motion.h2
              variants={fadeInUpAni}
              className="font-cabin uppercase font-medium text-my-black-300 text-[0.92rem] tracking-[0.3em] smooth-text-rendering"
            >
              {" "}
              What is SmartMenu
            </motion.h2>
            <motion.p
              variants={fadeInUpAni}
              className="text-[2rem] text-gun-powder-950 font-[600] w-max will-change-[transform,opacity] smooth-text-rendering"
            >
              We offer a <span className="text-my-orange-300">smart</span> way
              to dine
            </motion.p>
            <motion.p variants={fadeInUpAni} className="smooth-text-rendering">
              Its a user-friendly self-service ordering software designed to
              enhance the dining experience for both customers and restaurants.
            </motion.p>
            <motion.p variants={fadeInUpAni} className="smooth-text-rendering ">
              With SmartMenu, customers can effortlessly browse menus, customize
              orders, and complete payments without the need for waitstaff
              intervention.
            </motion.p>
            <motion.button
              variants={fadeInUpAni}
              className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3 mt-[3.2rem] text-white smooth-text-rendering"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
        {/* </RevealAni> */}
      </div>
      <div className=" py-[2rem]  px-[8rem] w-full flex justify-center items-center ">
        <div ref={sectionTwoRef} className="flex gap-[8rem] w-[80%] ">
          <motion.div
            variants={fadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionTwoRef, amount: 0.4 }}
            className="flex flex-col gap-[1.5rem] pt-[8rem] "
          >
            <motion.h2
              variants={fadeInUpAni}
              className="font-cabin uppercase font-medium text-my-black-300 text-[0.92rem] tracking-[0.3em] "
            >
              Why SmartMenu
            </motion.h2>
            <motion.p
              variants={fadeInUpAni}
              className="text-[2rem] text-gun-powder-950 font-[600]"
            >
              Smart and Eco-friendly
            </motion.p>
            <motion.p variants={fadeInUpAni}>
              Reduce costs, boost efficiency, and embrace sustainability – all
              with SmartMenu. Our innovative digital menu system eliminates the
              need for printing and laminating, saving you money and minimizing
              environmental impact.
            </motion.p>
            <motion.p variants={fadeInUpAni}>
              Say goodbye to outdated menus and hello to a more responsible and
              efficient way to manage your restaurant.
            </motion.p>
            <motion.button
              variants={fadeInUpAni}
              className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3 mt-[3.2rem] text-white"
            >
              Get Started Now
            </motion.button>
          </motion.div>
          <motion.img
            variants={imgFadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionTwoRef, amount: 0.4 }}
            src={'smartDevice2.svg'}
            className="w-[40%]"
          ></motion.img>
        </div>
      </div>
      <ViewMoreUI
        tag="About us"
        body="Learn more about what we do"
        className="bg-[#ffffff]"
      />
      <hr className="border w-[70%] mx-auto my-0 border-[#f3f3f3]"></hr>
      <div className="pt-[5rem]  ">
        <div className="pb-[5rem]">
          <FadeInRight once={true}>
            <h2 className="font-cabin  text-center uppercase font-medium text-my-mango-600 text-[0.92rem] tracking-[0.3em] py-[1rem]">
              {" "}
              Our Solution
            </h2>
          </FadeInRight>
          <RevealAni once={true}>
            <p className="text-center">
              We offer two convenient ways to order:
            </p>
          </RevealAni>
        </div>
        <div ref={phoneContainerRef} className="h-[600px] px-[8rem] ">
          <div className="bg-[url('/mesh-920.png')] bg-cover bg-no-repeat h-full rounded-[2rem] pt-[3rem] px-[3rem]  relative flex justify-center">
            {/* Phone */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: -55 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              exit="visible"
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute top-[0]  h-full overflow-hidden  left-[5vw]"
            >
              <div className="h-full w-max overflow-hidden  rounded  px-[2rem] ">
                <div className="w-[300px] h-[550px]  rounded-[2rem] p-[0.5rem] pl-[0.7rem] bg-[#1f1f1f] iphone-rim">
                  <motion.div
                    animate={controls}
                    variants={{
                      fadeOutQr: {
                        background: [
                          "linear-gradient(60deg, #7371ee 1%,#a1d9d6 100%)",
                          "#2f2f2f",
                          "#222222",
                          "#151515",
                        ],
                      },
                    }}
                    transition={{ duration: 1, ease: "linear" }}
                    className=" flex flex-col items-center gap-[1rem]  w-full h-full rounded-[1.5rem] iphone  bg-gun-powder-600 overflow-hidden "
                  >
                    <div className="iphone-screen-top">
                      <p className="text-sm font-[500]">7.53</p>
                      <div className="flex gap-1">
                        <IoMdCellular />
                        <IoIosWifi />
                        <IoBatteryFull />
                      </div>
                    </div>
                    {/* Before Animation */}
                    <motion.div
                      animate={controls}
                      variants={{
                        fadeOutQr: { opacity: 0 },
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="z-1 opacity-1"
                    >
                      <p className="text-white font-cabin font-[500] mt-[8rem] text-center">
                        Scan QR Code
                      </p>
                      <div className=" w-fit p-4 relative  mt-[1rem]">
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "-5px", "5px"],
                              y: [0, "-5px", "5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute top-0 left-0 w-[15px] h-[15px] border-t-4 border-l-4 border-white "
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "-5px", "5px"],
                              y: [0, "5px", "-5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute bottom-0 left-0 w-[15px] h-[15px] border-b-4 border-l-4 border-white"
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "5px", "-5px"],
                              y: [0, "-5px", "5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute top-0 right-0 w-[15px] h-[15px] border-t-4 border-r-4 border-white "
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              x: [0, "5px", "-5px"],
                              y: [0, "5px", "-5px"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{ duration: 1 }}
                          className="absolute bottom-0 right-0 w-[15px] h-[15px] border-b-4 border-r-4 border-white "
                        ></motion.div>
                        <motion.div
                          animate={controls}
                          variants={{
                            startQr: {
                              opacity: [0, 0.5, 1, 1, 1],
                              bottom: [0, "25%", "50%", "75%", "100%"],
                            },
                            endQr: { opacity: 0 },
                          }}
                          transition={{
                            ease: "linear",
                            duration: 0.7,
                            delay: 0.8,
                          }}
                          className="absolute bottom-0 left-0 w-full h-[2px] opacity-0 rounded-full bg-[#00a36c]"
                        ></motion.div>
                        <img src={'/qr-code-128.png'} alt={"qr-code-128.png"} className="w-[100px]"  />
                      </div>
                    </motion.div>
                    {/* After Animation */}
                    <motion.div
                      animate={controls}
                      variants={{ fadeOutQr: { visibility: "visible" } }}
                      transition={{ duration: 0.7 }}
                      className="absolute top-0 left-0 mt-[1.5rem] w-full h-full flex flex-col invisible"
                    >
                      <div className="text-center bg-[#151515] text-[0.75rem] py-2 text-white">
                        SmartMenu
                      </div>
                      <div className="flex-1 flex flex-col gap-[1rem] px-3 pt-4 bg-my-black-50 ">
                        <h2 className="text-my-mango-600 font-[600]">Menu</h2>
                        <div className="flex text-[0.75rem] gap-2">
                          <div className="px-4 py-1 rounded-2xl bg-my-mango-500 text-white border border-my-mango-600 font-[600] ">
                            Main
                          </div>
                          <div className="px-4 py-1 rounded-2xl bg-white border font-[600] text-my-black-950">
                            Sides
                          </div>
                          <div className="px-4 py-1 rounded-2xl bg-white border font-[600] text-my-black-950">
                            Lunch
                          </div>
                          <div className="px-4 py-1 rounded-2xl bg-white border font-[600] text-my-black-950">
                            Drinks
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 px-1">
                          {foodMenuPhoneArr.map((imgSrc: string, ind: number) => (
                            <div key={ind} className="bg-white rounded-lg font-[600] text-my-black-950 p-2 border text-center">
                              <img src={`/${imgSrc}`} />
                              <p className="text-[0.75rem]">Pizza</p>
                              <p className="text-[0.7rem]">$20.00</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      animate={controls}
                      variants={{ fadeOutQr: { visibility: "visible" } }}
                      transition={{ duration: 0.7 }}
                      className="absolute bottom-0 left-0 flex border-t text-[1.3rem] w-full bg-white py-2 px-12 justify-between invisible"
                    >
                      <div>
                        <MdHomeFilled className="text-my-mango-500" />
                        <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-my-mango-500 mx-auto my-0"></div>
                      </div>
                      <div>
                        <TbClipboardText className="text-my-black-400" />
                        <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-my-mango-500 mx-auto my-0 invisible"></div>
                      </div>
                      <div>
                        <PiShoppingCartBold className="text-my-black-400" />
                        <div className="w-[0.21rem] h-[0.21rem] rounded-full bg-my-mango-500 mx-auto my-0 invisible"></div>
                      </div>
                    </motion.div>
                    {/* To Here */}
                    <i className="iphone-speaker">Speaker</i>
                    <b className="iphone-camera">Camera</b>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              className=" h-max  flex flex-col gap-[1rem] w-[600px] ml-[10vw] mt-[5vh]"
            >
              <motion.p variants={fadeInUpAni} className="text-my-black-300">
                01
              </motion.p>
              <motion.h3
                variants={fadeInUpAni}
                className="font-cabin text-[2.5rem] font-[600] text-gun-powder-950"
              >
                QR Code
              </motion.h3>
              <motion.p variants={fadeInUpAni}>
                Scan the QR code at your table to access our mobile-optimized
                ordering platform using a device.
              </motion.p>
              <motion.p variants={fadeInUpAni}>
                Allow your customers to use their own device to scan the QR code
                to connect to the digitlized menu designated to the specific
                table.
              </motion.p>
              <motion.div
                variants={fadeInUpAni}
                ref={qrAniRef}
                className=" w-max mt-[2.5rem]"
              >
                <LinkUI name="Learn More" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div ref={kioskContainerRef} className="h-[600px] px-[8rem] mt-[4rem] ">
          <div className="bg-[url('/mesh-921.png')] bg-cover bg-no-repeat h-full rounded-[2rem] pt-[3rem] px-[3rem]">
            {/* <h2 className="text-[2.5rem] text-center text-gun-powder-950 font-[600]">
                Our Solution
              </h2>
              <p className="text-center">We offer two convenient ways to order:</p> */}
            <div className=" h-full  relative">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: "-30%" },
                  visible: { opacity: 1, y: "-40%" },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="visible"
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute top-[0] right-[5vw]  w-max overflow-hidden  rounded  px-[2rem] flex flex-col items-center"
              >
                <div className=" w-[500px] h-[320px]  rounded-[1.2rem] p-[0.6rem] pr-[0.8rem] bg-[#1f1f1f] kiosk-rim">
                  <div className="flex flex-col w-full h-full rounded-[0.7rem] tablet-kiosk bg-gun-powder-600 overflow-hidden">
                    <div className="py-[8px] bg-[#151515] text-[0.35rem] text-white text-center">
                      SmartMenu
                    </div>
                    <div className="flex w-full h-full">
                      <div className="w-[22%] border-r flex flex-col justify-between text-[0.5rem] bg-my-black-50">
                        <div>
                          <div className="p-[7px] border-b bg-my-black-800 text-white">
                            Mains
                          </div>
                          <div className="p-[7px] border-b">
                            Salad and Sides
                          </div>
                          <div className="p-[7px] border-b">Lunch Set</div>
                          <div className="p-[7px] border-b">Drinks</div>
                          <div className="p-[7px] border-b">Desserts</div>
                        </div>
                        <div>
                          <div className="p-[7px] border-t border-b">
                            Your Orders
                          </div>
                          <div className="p-[7px]  flex justify-between items-center">
                            <HiBellAlert />
                            <VscQuestion />
                          </div>
                        </div>
                      </div>
                      <div className="w-[55%] h-full bg-my-black-100">
                        <div className=" h-max  grid grid-cols-5 gap-1 p-1 ">
                          {foodMenuKioskImgArr.map((imgSrc: string, ind : number) => (
                            <div key={ind} className="p-1 rounded-md bg-white">
                              <img src={`/${imgSrc}`} />
                              <p className="text-[0.4rem] text-center mt-[1px]">
                                Pizza
                              </p>
                              <p className="text-[0.35rem] text-center">
                                $20.00
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="w-[23%]  bg-my-black-50 flex flex-col justify-between">
                        <div className="text-[0.5rem] py-[5px] px-1">
                          Your Order Cart
                        </div>
                        <div>
                          <div className="text-[0.45rem] font-[600] py-[5px] px-1 flex justify-between">
                            <span>Total</span>
                            <span>$0.00</span>
                          </div>
                          <div className="text-[0.5rem] text-white text-center w-full bg-my-orange-400  py-[7px]">
                            Place Order
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[150px] h-[100px] bg-[#1f1f1f] mt-[1rem] rounded-[1.5rem] kiosk-stand"></div>
              </motion.div>

              <motion.div
                variants={fadeInUpAni}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.4, once: true }}
                className=" h-max  flex flex-col gap-[1rem]  w-[600px] ml-[10vw] mt-[5vh]"
              >
                <motion.p variants={fadeInUpAni} className="text-my-black-300">
                  02
                </motion.p>
                <motion.h3
                  variants={fadeInUpAni}
                  className="font-cabin text-[2.5rem] font-[600] text-gun-powder-950"
                >
                  Kiosk
                </motion.h3>
                <motion.p variants={fadeInUpAni}>
                  Enjoy the ease of ordering directly from a device placed at
                  each table.
                </motion.p>
                <motion.p variants={fadeInUpAni}>
                  Allow your customers to order directly from their table with a
                  tap.
                </motion.p>
                <motion.div
                  variants={fadeInUpAni}
                  className=" w-max mt-[2.5rem]"
                >
                  <LinkUI name="Learn More" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <section className="h-[100vh] flex flex-col justify-center items-center">
        <div className="flex flex-col  w-max py-[3rem] gap-[3rem]">
          <TextReveal className="relative w-full overflow-hidden" once={true}>
            <h2 className="text-[2.9rem] text-gun-powder-950 w-[50vw]  leading-tight  ">
              Enhance your customer experience while boosting efficiency with
              our digitalized table ordering solution.
            </h2>
          </TextReveal>
          <div className="flex  justify-center gap-[1rem] text-gun-powder-950 w-max">
            <motion.div
              variants={cardFadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="flex flex-col w-[22rem] h-[24rem]   bg-[url('/mesh-gradientOR.png')] bg-cover bg-center px-7 py-5 border rounded-2xl my-bg-shadow"
            >
              <motion.img
                variants={fadeInUpAni}
                src={'/time.svg'}
                className="w-[6rem]  "
              ></motion.img>
              <motion.p
                variants={fadeInUpAni}
                className="font-[600] text-[1.1rem] mt-[10vh]"
              >
                Reduce wait times
              </motion.p>
              <motion.p
                variants={fadeInUpAni}
                className="text-[0.875rem] mt-[0.5rem]"
              >
                Our service allows customers to order directly from their table
                leading to faster service and happier customers.
              </motion.p>
            </motion.div>
            <motion.div
              variants={cardFadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="flex flex-col w-[22rem] h-[24rem]   bg-[url('/mesh-gradientM.png')] bg-cover bg-center px-7 py-5 border rounded-2xl my-bg-shadow"
            >
              <motion.img
                variants={fadeInUpAni}
                src={'/efficiency.svg'}
                className="w-[6rem]"
              ></motion.img>
              <motion.p
                variants={fadeInUpAni}
                className="font-[600] text-[1.1rem] mt-[10vh]"
              >
                Increased efficiency
              </motion.p>
              <motion.p
                variants={fadeInUpAni}
                className="text-[0.875rem] mt-[0.5rem]"
              >
                Streamline operations and reduce labor costs.
              </motion.p>
            </motion.div>
            <motion.div
              variants={cardFadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="flex flex-col w-[22rem] h-[24rem]]   bg-[url('/mesh-gradientPU.png')] bg-cover bg-center px-7 py-5 border rounded-2xl my-bg-shadow"
            >
              <motion.img
                variants={fadeInUpAni}
                src={'/easy.svg'}
                className="w-[6rem]"
              ></motion.img>
              <motion.p
                variants={fadeInUpAni}
                className="font-[600] text-[1.1rem] mt-[10vh]"
              >
                Easy to use
              </motion.p>
              <motion.p
                variants={fadeInUpAni}
                className="text-[0.875rem] mt-[0.5rem]"
              >
                User-friendly system for a smooth ordering experience.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className=" h-screen flex flex-col bg-my-black-10">
        <div className="py-[5rem] text-center w-full flex flex-col gap-[1rem]">
          <h2 className="font-cabin uppercase font-medium text-my-black-300 text-[0.92rem] tracking-[0.3em] ">
            Our Features
          </h2>
          <p className=" text-[1.7rem] text-my-black-950  font-light ">
            What we Offer
          </p>
        </div>
        <div className="grid grid-cols-4 px-[10vw] flex-1 gap-3">
          {offerArr.map((item: OfferI, i: number) => (
            <div key={i} className="rounded-2xl relative group flex flex-col items-center pt-[30%] gap-[2rem] hover:bg-my-black-950  cursor-pointer transition-[background-color] duration-300 ease-out ">
              <div className="group-hover:fill-white fill-my-black-950 w-[3.5rem] translate-y-0 group-hover:translate-y-[-0.2rem] will-change-transform transition-[transform] duration-300 ease-in-out delay-75 ">
                {createComponent(i)}
              </div>
              {/* <div className="group-hover:text-white text-my-black-950"><IoMdCellular /></div> */}
              {/* <div className="group-hover:text-white text-my-black-950 group-hover:fill-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-512q-44.55 0-75.27-30.72Q374-573.45 374-618.33q0-44.89 30.73-75.28Q435.45-724 480-724t75.27 30.39Q586-663.22 586-618.33q0 44.88-30.73 75.61Q524.55-512 480-512ZM212-258v-22.67q0-22.66 13.83-41.83 13.84-19.17 36.84-30.17Q319-378 373.15-391q54.14-13 106.83-13t106.85 13q54.17 13 110.15 38.6 23.46 10.8 37.24 29.94Q748-303.33 748-280.67V-258q0 10.83-7.58 18.42Q732.83-232 722-232H238q-10.83 0-18.42-7.58Q212-247.17 212-258Zm24 2h488v-24.67q0-14.66-10.17-28.16-10.16-13.5-28.5-23.17-50-24.33-101.35-36.17Q532.63-380 480-380t-104.31 11.83Q324-356.33 274.67-332q-18.34 9.67-28.5 23.17Q236-295.33 236-280.67V-256Zm244-280q34.33 0 58.17-23.83Q562-583.67 562-618t-23.83-58.17Q514.33-700 480-700t-58.17 23.83Q398-652.33 398-618t23.83 58.17Q445.67-536 480-536Zm0-82Zm0 362Z"/></svg>
              </div> */}

              <h4 className="px-4 text-[1.1rem] text-my-black-950 group-hover:text-transparent tracking-wider translate-y-0 group-hover:translate-y-[-0.3rem] will-change-transform transition-[transform] duration-300 ease-in-out delay-75">
                {item.heading}
              </h4>
              <p className="absolute w-full text-center px-[25%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[0.3rem] text-transparent tracking-wide group-hover:text-white group-hover:translate-y-[0] transition duration-300 ease-in-out delay-75">
                Your customers can access the menu on their own device at any
                time, without any app install.
              </p>
            </div>
          ))}
        </div>
      </section>
      <ViewMoreUI
        tag="Enhance your service"
        body="Learn more about our features"
        className="bg-[#f9f9f9]"
      />

      <section
        ref={howSectionRef}
        className=" px-[5rem] py-[3rem] flex justify-center items-center gap-[5rem]"
      >
        <motion.img
          variants={imgFadeInUpAni}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: howSectionRef, amount: 0.4, once: true }}
          src={'/start1.svg'}
          className="w-[35%]"
        ></motion.img>
        <div className="flex flex-col w-[500px] gap-[1.5rem]">
          <FadeInRight once={true}>
            <h2 className="font-cabin uppercase font-medium text-my-black-900 text-[0.92rem] tracking-[0.3em] ">
              How it works
            </h2>
          </FadeInRight>
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 5,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  staggerChildren: 0.05,
                  ease: "easeOut",
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: howSectionRef, amount: 0.4, once: true }}
            className="grid grid-cols-[auto_1fr] text-[1.8rem] gap-x-[2rem] gap-y-[1rem] bg-transparent items-center relative"
          >
            <div className="absolute top-0 left-6 w-[2px] h-full bg-[linear-gradient(rgba(255,255,255,0),#ffc466_25%,rgba(252,151,117,1)_45%,#ffc466_85%,rgba(255,255,255,0))] z-[-1]"></div>
            <div className=" mt-1 rounded-full p-[2px] w-max  text-center  bg-[rgb(255,196,102)] bg-[linear-gradient(90deg,rgba(255,196,102,1)_3%,rgba(252,151,117,1)_31%,rgba(252,155,116,1)_78%,rgba(255,196,102,1)_98%)]   ">
              <div className="w-full   rounded-full p-2 text-white">
                <PiDevicesLight />
              </div>
            </div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 5,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    staggerChildren: 0.1,
                    ease: "easeOut",
                    delayChildren: 0,
                  },
                },
              }}
              viewport={{ root: howSectionRef, amount: 0.4, once: true }}
              className="text-[0.9rem] py-[1rem]"
            >
              <motion.h5
                variants={fadeInUpAni}
                className="text-[0.97rem] font-medium text-my-black-950 py-2"
              >
                Create your Account
              </motion.h5>
              <motion.p variants={fadeInUpAni}>
                Get started with SmartMenu in seconds with our free and easy
                signup process.
              </motion.p>
            </motion.div>
            <div className="  rounded-full p-[2px] w-max  text-center  bg-[rgb(255,196,102)] bg-[linear-gradient(90deg,rgba(255,196,102,1)_3%,rgba(252,151,117,1)_31%,rgba(252,155,116,1)_78%,rgba(255,196,102,1)_98%)]   ">
              <div className="w-full bg-white  rounded-full p-2 text-my-mango-600">
                <PiNotebookLight />
              </div>
            </div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 5,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    staggerChildren: 0.1,
                    ease: "easeOut",
                    delayChildren: 0.05,
                  },
                },
              }}
              className="text-[0.9rem] pb-[1rem]"
            >
              <motion.h5
                variants={fadeInUpAni}
                className="text-[0.97rem] font-medium text-my-black-950 py-2"
              >
                Build Your Digital Menu
              </motion.h5>
              <motion.p variants={fadeInUpAni}>
                {" "}
                Choose from our designed templates or create your own. Add menu
                items, photos and details.
              </motion.p>
            </motion.div>
            <div className="  rounded-full p-[2px] w-max  text-center  bg-[rgb(255,196,102)] bg-[linear-gradient(90deg,rgba(255,196,102,1)_3%,rgba(252,151,117,1)_31%,rgba(252,155,116,1)_78%,rgba(255,196,102,1)_98%)]   ">
              <div className="w-full bg-white  rounded-full p-2 text-my-mango-500">
                <MdFoodBank />
              </div>
            </div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 5,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    staggerChildren: 0.1,
                    ease: "easeOut",
                    delayChildren: 0.15,
                  },
                },
              }}
              className="text-[0.9rem] pb-[1rem]"
            >
              <motion.h5
                variants={fadeInUpAni}
                className="text-[0.97rem] font-medium text-my-black-950 py-2"
              >
                Transform Your Restaurant
              </motion.h5>
              <motion.p variants={fadeInUpAni}>
                Customize your QR code and publish your digital menu to your
                restaurant's SmartMenu Platform.
              </motion.p>
              <motion.p variants={fadeInUpAni} className="mt-1">
                Use your QR code on your tables, windows and others so customers
                can easily scan the QR code to view your menu.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className=" w-full h-screen py-[6rem] px-[5rem]   mx-auto my-0  bg-my-black-10 bg-[url('/mesh-bg-3.svg')] bg-no-repeat bg-cover bg-center rounded-xl flex flex-col justify-center items-center gap-[2rem]">
        <p className="text-[2rem] font-cabin ">
          SmartMenu,{" "}
          <span className="font-inter">
            Your Smart Choice for a Modern Restaurant
          </span>
        </p>
        <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-3  text-white">
          Get Started Now
        </button>
      </section>
      <div className="flex w-full">
        <ViewMoreUI
          tag="Get in touch"
          body="Tell us how we can help"
          className="flex-1 bg-white border-r border-my-black-80"
        />
        <ViewMoreUI
          tag="Service"
          body="Learn more about our features"
          className="flex-1 bg-white"
        />
      </div>
    </div>
  );
};

export default HomePage;

