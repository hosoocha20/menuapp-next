"use client";
import React, { Component, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import { PiDevicesLight } from "react-icons/pi";
import { PiNotebookLight } from "react-icons/pi";
import { MdFoodBank } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//SVG Components
import {
  Brushf,
  Callf,
  Controlf,
  Customizef,
  Kioskf,
  Menuf,
  Posf,
  Qrf,
} from "@/ui/FeaturesIcon";

import {
  motion,
  PanInfo,
  useAnimationControls,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import ViewMoreUI from "@/ui/ViewMoreUI";
import LinkUI from "@/ui/LinkUI";
import RevealAni from "@/ui/RevealAni";
import TextReveal from "@/ui/TextReveal";
import FadeInRight from "@/ui/FadeInRight";
import PhoneUi from "@/ui/PhoneUi";
import KioskUi from "@/ui/KioskUi";

interface OfferI {
  svg: string;
  heading: string;
  body: string;
}
const HomePage = () => {
  //animation variables
  const controls = useAnimationControls();
  const qrAniRef = useRef(null);

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
      transition: { duration: 0.4, staggerChildren: 0.12, ease: "easeOut" },
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
  const longFadeInUpAni: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.18, ease: "easeOut" },
    },
  };
  const FadeInRightAni: Variants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1,  ease: "easeOut" },
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
    {
      svg: "qrf",
      heading: "Digitally Available",
      body: "Your customers can access the menu on their own device at anytime, without any app install.",
    },
    {
      svg: "kioskf",
      heading: "Table Ordering",
      body: "Empower your customers to order at their own pace, directly from their table.",
    },
    {
      svg: "menuf",
      heading: "Change your Menu at Anytime",
      body: "Update your menu instantly without the hassle of reprints.",
    },
    {
      svg: "brushf",
      heading: "Design your Menu",
      body: "Create a visually appealing menu that reflects your restaurant's brand.",
    },
    {
      svg: "callf",
      heading: "Call for Service",
      body: "Allow customers to quickly request additional service with a button.",
    },
    {
      svg: "controlf",
      heading: "Manage your Orders",
      body: "Efficiently manage incoming orders and track their status.",
    },
    {
      svg: "posf",
      heading: "Fully Integrated",
      body: "Send orders directly to your Kitchen and POS for streamlined operations.",
    },
    {
      svg: "customizef",
      heading: "Additional Features",
      body: "Includes simple view, recommendations, dietary restrictions etc. ",
    },
  ];
  const components = [
    Qrf,
    Kioskf,
    Menuf,
    Brushf,
    Callf,
    Controlf,
    Posf,
    Customizef,
  ];
  //Functions
  const createComponent = (i: number) => {
    const Component = components[i];
    if (!Component) return <></>;

    return <Component key={i} />;
  };

  //Grid features slide function
  const isNotMobile = useMediaQuery("(min-width: 640px)");
  const START_INDEX = 0;
  const DRAG_THRESHOLD = 100;
  const FALLBACK_WIDTH = 509;
  const GAP_WIDTH = 12;
  const containerSliderRef = useRef<HTMLDivElement>(null);
  const itemsSliderRef = useRef<(HTMLDivElement | null)[]>([]);

  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < offerArr.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 100,
  });

  const [isDragging, setIsDragging] = useState(false);
  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo
  ) {
    //reset drag state
    setIsDragging(false);
    containerSliderRef.current?.removeAttribute("data-dragging");

    //stop drag animation (rest velocity)
    animatedX.stop();

    const currentOffset = offsetX.get();

    //snap back if not dragged far enough or if at the start/end of the list
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    /*
      - start searching from currently active slide in the direction of the drag
      - check if the drag offset is greater than the width of the current item
      - if it is, add/subtract the width of the next/prev item to the offsetWidth
      - if it isn't, snap to the next/prev item
    */
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsSliderRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsSliderRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsSliderRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsSliderRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && //dragging left
          dragOffset > offsetWidth + itemOffset && //dragged past item
          i > 1) || //not the first/second item
        (dragOffset < 0 && //dragging right
          dragOffset < offsetWidth + -itemOffset && //dragged past item
          i < itemsSliderRef.current.length - 2) //not the last/second to last item
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        //prev
        if (isNotMobile) {
          //alert("stop")
          animatedX.set(currentOffset);
          return;
        }
        offsetX.set(currentOffset + offsetWidth + prevItemWidth + GAP_WIDTH);
        setActiveSlide(i - 1);
      } else {
        //next
        // if(containerSliderRef.current?.offsetWidth! < nextItemWidth * 8) {
        //   return
        // }
        if (isNotMobile) {
          //alert("stop")
          animatedX.set(currentOffset);
          return;
        }
        offsetX.set(currentOffset + offsetWidth - nextItemWidth - GAP_WIDTH);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    //prevent scrolling past first item
    if (!canScrollPrev) return;

    const nextWidth = itemsSliderRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth + GAP_WIDTH);

    setActiveSlide((prev) => prev - 1);
  }
  function scrollNext() {
    // prevent scrolling past last item
    if (!canScrollNext) return;

    const nextWidth = itemsSliderRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth - GAP_WIDTH);

    setActiveSlide((prev) => prev + 1);
  }

  useEffect(() => {
    offsetX.set(0);
    setActiveSlide(START_INDEX);
  }, [isNotMobile, offsetX]);

  return (
    <div className=" font-inter mt-[-3rem] tablet:mt-[-4.3rem] ">
      <section className="h-[100vh] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav bg-[url('/bbblurry.svg')] bg-no-repeat bg-cover w-full bg-white flex flex-col lg:flex-row  items-center justify-center gap-0 xl:gap-[2rem] py-[5rem]">
        <div className="flex-1   flex lg:justify-center  ">
          <motion.div
          variants={longFadeInUpAni}
          initial={"hidden"}
          animate={"visible"}
            className="flex flex-col gap-[2.5rem] justify-center "
          >
            <motion.h1
              variants={longFadeInUpAni}
              className=" text-[2rem] md:text-[2.5rem] lg:text-[2.6rem] xl:text-[3.1rem] font-[600] text-gun-powder-950  "
            >
              <span>Boost Efficiency, </span>
              <span className="block">Delight Customers,</span>{" "}
              <span className="block">Enhance your Service</span>
            </motion.h1>

            <motion.p variants={longFadeInUpAni}>
              <span>Empower customers, optimize operations, maximize profits.</span>
              <span className="block">
                SmartMenu - The premier self-ordering solution.
              </span>
            </motion.p>
            <motion.button variants={longFadeInUpAni} className=" border-my-black-950 bg-my-black-950 rounded-3xl w-[9rem] py-3 text-white self-center lg:self-auto">
              Get Started
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          variants={FadeInRightAni}
          initial="hidden"
          animate="visible"
          
          className=" flex-1 h-full relative"
        >
          {/* <div className="absolute h-[450px] left-0 top-[50%] translate-y-[-50%] z-[1]">
            <PhoneHome />
          </div> */}
          {/* <div className="absolute left-0 h-[550px] w-auto z-[1]"><img src="/mainphonemockup.svg" className="w-full h-full"/></div>
          <div className="absolute left-0 w-full  max-w-[800px]"><img src="/maintabletmockup.svg" className="w-full h-full"/></div> */}
          {/* <div className="absolute w-full left-0 top-[35%] translate-y-[-35%] flex justify-center  ">
            <TabletHome />
          </div> */}
          <Image src="/menunowmockup.svg" className="w-full h-full" width={1000} height={800} alt="SmartMenu digital menu picture"/>
        </motion.div>
      </section>
      <section className=" py-[2rem] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav w-full flex justify-center items-center ">
        {/* <RevealAni className="w-[80%]" amount={0.4}> */}
        <div
          ref={sectionOneRef}
          className="flex flex-col items-center portrait-tablet:flex-row portrait-tablet:gap-x-[2.5rem] tablet:gap-x-[4rem] lg:gap-x-[clamp(5rem,1vw,8rem)]  "
        >
          <motion.img
            variants={imgFadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionOneRef, amount: 0.4 }}
            src={"/family-meal-1.svg"}
            className="w-[70%] sm:w-[45%]"
          ></motion.img>
          <motion.div
            variants={fadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionOneRef, amount: 0.4 }}
            className="flex flex-col items-center portrait-tablet:items-start gap-[1.5rem]  justify-center  w-fit  smooth-text-rendering"
          >
            <motion.h2
              variants={fadeInUpAni}
              className="font-cabin uppercase font-medium text-my-black-300 text-[0.89rem] portrait-tablet:text-[0.92rem] tracking-[0.3em] smooth-text-rendering"
            >
              {" "}
              What is SmartMenu
            </motion.h2>
            <motion.p
              variants={fadeInUpAni}
              className="text-[1.3rem] md:text-[1.5rem]  xl:text-[2rem] text-gun-powder-950 font-[600] w-max will-change-[transform,opacity] smooth-text-rendering"
            >
              A Smart way to Dine
            </motion.p>
            <motion.p
              variants={fadeInUpAni}
              className="text-[0.9rem] portrait-tablet:text-[0.95rem] lg:text-base"
            >
              Its a user-friendly self-service ordering software designed to
              enhance the dining experience for both customers and restaurants.
            </motion.p>
            <motion.p
              variants={fadeInUpAni}
              className="text-[0.9rem] portrait-tablet:text-[0.95rem] lg:text-base"
            >
              With SmartMenu, customers can effortlessly browse menus, customize
              orders, and complete payments without the need for waitstaff
              intervention.
            </motion.p>
            <motion.button
              variants={fadeInUpAni}
              className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-2 tablet:py-3 mt-[2.5rem] tablet:mt-[3.2rem] text-white text-[0.9rem] portrait-tablet:text-[0.95rem] lg:text-base smooth-text-rendering"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
        {/* </RevealAni> */}
      </section>
      <section className="py-[2rem] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav w-full flex justify-center items-center ">
        <div
          ref={sectionTwoRef}
          className="flex flex-col items-center  portrait-tablet:flex-row-reverse portrait-tablet:gap-x-[2.5rem] tablet:gap-x-[4rem] lg:gap-x-[clamp(5rem,1vw,8rem)] "
        >
          <motion.img
            variants={imgFadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionTwoRef, amount: 0.4 }}
            src={"smartDevice2.svg"}
            className="w-[70%] sm:w-[45%]"
          ></motion.img>
          <motion.div
            variants={fadeInUpAni}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: sectionTwoRef, amount: 0.4 }}
            className="flex flex-col items-center portrait-tablet:items-start gap-[1.5rem]  justify-center w-fit"
          >
            <motion.h2
              variants={fadeInUpAni}
              className="font-cabin uppercase font-medium text-my-black-300 text-[0.89rem] portrait-tablet:text-[0.92rem] tracking-[0.3em] smooth-text-rendering"
            >
              Why SmartMenu
            </motion.h2>
            <motion.p
              variants={fadeInUpAni}
              className="text-[1.3rem] md:text-[1.5rem]  xl:text-[2rem] text-gun-powder-950 font-[600] w-max"
            >
              Smart and Eco-friendly
            </motion.p>
            <motion.p
              variants={fadeInUpAni}
              className="text-[0.9rem] portrait-tablet:text-[0.95rem] lg:text-base"
            >
              Reduce costs, boost efficiency, and embrace sustainability – all
              with SmartMenu.
              <br></br>
              Our innovative digital menu system eliminates the need for
              printing and laminating, saving you money and minimizing
              environmental impact.
            </motion.p>
            <motion.p
              variants={fadeInUpAni}
              className="text-[0.9rem] portrait-tablet:text-[0.95rem] lg:text-base"
            >
              Say goodbye to outdated menus and hello to a more responsible and
              efficient way to manage your restaurant.
            </motion.p>
            <motion.button
              variants={fadeInUpAni}
              className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-2 tablet:py-3 mt-[2.5rem] tablet:mt-[3.2rem] text-white text-[0.9rem] portrait-tablet:text-[0.95rem] lg:text-base"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>
      <ViewMoreUI
        tag="About us"
        body="Learn more about what we do"
        className="bg-[#ffffff]"
      />
      <hr className="border w-[70%] mx-auto my-0 border-[#f3f3f3]"></hr>
      <section className="pt-[3.5rem] tablet:pt-[5rem]  ">
        <div className="pb-[2rem] tablet:pb-[5rem]">
          <FadeInRight once={true}>
            <h2 className="font-cabin  text-center uppercase font-medium text-my-mango-600 text-[0.89rem] portrait-tablet:text-[0.92rem] tracking-[0.3em] py-[1rem]">
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
        <div
          ref={phoneContainerRef}
          className="h-[600px] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav xl:px-[8rem] overflow-hidden "
        >
          <div className="bg-[url('/mesh-920.png')] bg-cover bg-no-repeat h-full rounded-[2rem]  pb-0 pt-[3rem] md:py-[3rem] px-[1.5rem] tablet:px-[3rem]   flex flex-col-reverse md:flex-row justify-center md:items-center">
            <div className="md:flex-1  flex md:flex-col justify-center items-end md:items-center h-full w-auto">
              <PhoneUi parentRef={qrAniRef} />
            </div>

            <motion.div
              variants={fadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              className=" h-max flex-1 flex flex-col gap-[0.6rem] sm:gap-[1rem]   "
            >
              <motion.p variants={fadeInUpAni} className="text-my-black-300">
                01
              </motion.p>
              <motion.h3
                variants={fadeInUpAni}
                className="font-cabin text-[1.4rem] md:text-[2rem] tablet:text-[2.2rem] lg:text-[2.5rem] font-[600] text-gun-powder-950"
              >
                QR Code
              </motion.h3>
              <motion.p
                variants={fadeInUpAni}
                className="text-[0.9rem] tablet:text-base xl:w-[600px]"
              >
                Scan the QR code at your table to access our mobile-optimized
                ordering platform using a device.
              </motion.p>
              <motion.p
                variants={fadeInUpAni}
                className="text-[0.9rem] tablet:text-base xl:w-[600px]"
              >
                Allow your customers to use their own device to scan the QR code
                to connect to the digitlized menu designated to the specific
                table.
              </motion.p>
              <motion.div
                variants={fadeInUpAni}
                ref={qrAniRef}
                className=" w-max mt-[1rem] sm:mt-[1.7rem] md:mt-[2.5rem]"
              >
                <LinkUI name="Learn More" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div
          ref={kioskContainerRef}
          className="h-[600px] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav  xl:px-[8rem] mt-[4rem] overflow-hidden "
        >
          <div className="bg-[url('/mesh-921.png')] bg-cover bg-no-repeat h-full rounded-[2rem] pb-0 pt-[3rem] tablet:py-[3rem] px-[1.5rem] tablet:px-[3rem]   flex flex-col-reverse tablet:flex-row-reverse gap-x-[1rem] justify-center tablet:items-center">
            {/* <h2 className="text-[2.5rem] text-center text-gun-powder-950 font-[600]">
                Our Solution
              </h2>
              <p className="text-center">We offer two convenient ways to order:</p> */}

            <div className="tablet:flex-1  flex tablet:flex-col justify-center items-end tablet:items-center h-full w-auto ">
              <KioskUi />
            </div>

            <motion.div
              variants={fadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4, once: true }}
              className=" h-full flex-1 flex  items-center justify-center  "
            >
              <div className="h-full flex flex-col justify-center gap-[0.6rem] sm:gap-[1rem]">
                <motion.p variants={fadeInUpAni} className="text-my-black-300">
                  02
                </motion.p>
                <motion.h3
                  variants={fadeInUpAni}
                  className="font-cabin text-[1.4rem] md:text-[2rem] tablet:text-[2.2rem] lg:text-[2.5rem] font-[600] text-gun-powder-950"
                >
                  Table Order
                </motion.h3>
                <motion.p
                  variants={fadeInUpAni}
                  className="text-[0.9rem] tablet:text-base "
                >
                  Enjoy the ease of ordering directly from a device placed at
                  each table.
                </motion.p>
                <motion.p
                  variants={fadeInUpAni}
                  className="text-[0.9rem] tablet:text-base "
                >
                  Allow your customers to order directly from their table with a
                  tap.
                </motion.p>
                <motion.div
                  variants={fadeInUpAni}
                  className="w-max mt-[1rem] sm:mt-[1.7rem] md:mt-[2.5rem]"
                >
                  <LinkUI name="Learn More" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col justify-center items-center py-[3rem] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav ">
        <div className="flex flex-col    gap-[1.5rem] md:gap-[3rem]  h-full w-full xl:w-[1000px]  lg:justify-center">
          <TextReveal className=" w-full " once={true}>
            <h2 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2.4rem] lg:text-[2.9rem] px-5 md:px-0 text-gun-powder-950   leading-tight  ">
              Enhance your customer experience while boosting efficiency with
              our digitalized table ordering solution.
            </h2>
          </TextReveal>
          <div className="flex flex-col md:flex-row justify-center gap-[1rem] text-gun-powder-950 w-full ">
            <motion.div
              variants={cardFadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="md:flex-1 flex flex-col justify-between md:justify-normal h-[12rem]  sm:h-[14rem] md:h-[24rem]   bg-[url('/mesh-gradientOR.png')] bg-cover bg-center px-7 py-4 md:py-5 border rounded-2xl my-bg-shadow"
            >
              <motion.img
                variants={fadeInUpAni}
                src={"/time.svg"}
                className="w-[3.5rem] sm:w-[5rem] md:w-[6rem] "
              ></motion.img>
              <div className="md:mt-[40%]">
                <motion.p
                  variants={fadeInUpAni}
                  className="font-[600] text-[0.94rem] sm:text-[1rem] lg:text-[1.1rem] "
                >
                  Reduce wait times
                </motion.p>
                <motion.p
                  variants={fadeInUpAni}
                  className="text-[0.875rem] mt-[0.25rem] sm:mt-[0.5rem]"
                >
                  Our service allows customers to order directly from their
                  table leading to faster service and happier customers.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={cardFadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="md:flex-1 flex flex-col justify-between md:justify-normal  h-[12rem]  sm:h-[14rem] md:h-[24rem]  bg-[url('/mesh-gradientM.png')] bg-cover bg-center px-7 py-4 md:py-5 border rounded-2xl my-bg-shadow"
            >
              <motion.img
                variants={fadeInUpAni}
                src={"/efficiency.svg"}
                className="w-[3.5rem] sm:w-[5rem] md:w-[6rem]"
              ></motion.img>
              <div className="md:mt-[40%]">
                <motion.p
                  variants={fadeInUpAni}
                  className="font-[600] text-[0.94rem] sm:text-[1rem] lg:text-[1.1rem] "
                >
                  Increased efficiency
                </motion.p>
                <motion.p
                  variants={fadeInUpAni}
                  className="text-[0.875rem] mt-[0.25rem] sm:mt-[0.5rem]"
                >
                  Streamline operations and reduce labor costs.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={cardFadeInUpAni}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3, once: true }}
              className="md:flex-1 flex flex-col justify-between md:justify-normal  h-[12rem]  sm:h-[14rem] md:h-[24rem]   bg-[url('/mesh-gradientPU.png')] bg-cover bg-center px-7 py-4 md:py-5 border rounded-2xl my-bg-shadow"
            >
              <motion.img
                variants={fadeInUpAni}
                src={"/easy.svg"}
                className="w-[3.5rem] sm:w-[5rem] md:w-[6rem]"
              ></motion.img>
              <div className="md:mt-[40%]">
                <motion.p
                  variants={fadeInUpAni}
                  className="font-[600] text-[0.94rem] sm:text-[1rem] lg:text-[1.1rem] "
                >
                  Easy to use
                </motion.p>
                <motion.p
                  variants={fadeInUpAni}
                  className="text-[0.875rem] mt-[0.25rem] sm:mt-[0.5rem]"
                >
                  User-friendly system for a smooth ordering experience.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className=" min-h-screen flex flex-col bg-my-black-10  ">
        <div className="py-[5rem] text-center w-full flex flex-col gap-[1rem] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav xl:px-[10rem]">
          <h2 className="font-cabin uppercase font-medium text-my-black-300 text-[0.89rem] portrait-tablet:text-[0.92rem] tracking-[0.3em] ">
            Our Features
          </h2>
          <p className="text-[1.5rem] md:text-[1.7rem] text-my-black-950  font-light ">
            What we Offer
          </p>
        </div>
        <div className="h-[400px] w-full sm:w-auto sm:h-auto sm:flex-1 ">
          <div className="overflow-hidden relative h-full z-[1] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav xl:px-[10rem]">
            <motion.div
              ref={containerSliderRef}
              style={{
                x: animatedX,
              }}
              drag="x"
              dragConstraints={{
                left: -(FALLBACK_WIDTH * (offerArr.length - 1)),
                right: FALLBACK_WIDTH,
              }}
              onDragStart={() => {
                containerSliderRef.current?.setAttribute(
                  "data-dragging",
                  "true"
                );
                setIsDragging(true);
              }}
              onDragEnd={handleDragSnap}
              className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3  flex  h-full sm:w-full    "
            >
              {offerArr.map((item: OfferI, i: number) => (
                <motion.div
                  key={i}
                  ref={(el) => {
                    itemsSliderRef.current[i] = el;
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                  style={{
                    flexBasis: "100%",
                  }}
                  className=" bg-white sm:bg-my-black-10 shrink-0 sm:w-full h-full rounded-2xl relative group flex flex-col items-center pt-[5rem] sm:pt-[20%] lg:pt-[30%] gap-[2rem] min-h-[350px]   hover:bg-my-black-950  transition-[background-color] duration-300 ease-out "
                >
                  <div className="group-hover:fill-white fill-my-black-950 w-[3.5rem] translate-y-0 group-hover:translate-y-[-0.2rem] will-change-transform transition-[transform] duration-300 ease-in-out delay-75 ">
                    {createComponent(i)}
                  </div>
                  {/* <div className="group-hover:text-white text-my-black-950"><IoMdCellular /></div> */}
                  {/* <div className="group-hover:text-white text-my-black-950 group-hover:fill-white">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="M480-512q-44.55 0-75.27-30.72Q374-573.45 374-618.33q0-44.89 30.73-75.28Q435.45-724 480-724t75.27 30.39Q586-663.22 586-618.33q0 44.88-30.73 75.61Q524.55-512 480-512ZM212-258v-22.67q0-22.66 13.83-41.83 13.84-19.17 36.84-30.17Q319-378 373.15-391q54.14-13 106.83-13t106.85 13q54.17 13 110.15 38.6 23.46 10.8 37.24 29.94Q748-303.33 748-280.67V-258q0 10.83-7.58 18.42Q732.83-232 722-232H238q-10.83 0-18.42-7.58Q212-247.17 212-258Zm24 2h488v-24.67q0-14.66-10.17-28.16-10.16-13.5-28.5-23.17-50-24.33-101.35-36.17Q532.63-380 480-380t-104.31 11.83Q324-356.33 274.67-332q-18.34 9.67-28.5 23.17Q236-295.33 236-280.67V-256Zm244-280q34.33 0 58.17-23.83Q562-583.67 562-618t-23.83-58.17Q514.33-700 480-700t-58.17 23.83Q398-652.33 398-618t23.83 58.17Q445.67-536 480-536Zm0-82Zm0 362Z"/></svg>
                  </div> */}
                  <h4 className=" text-[1.2rem]  text-my-black-950 group-hover:text-transparent px-[3rem] sm:px-[3rem] md:px-[4rem] lg:px-[2rem] xl:px-[25%] tracking-wider text-center translate-y-0 group-hover:translate-y-[-0.3rem] will-change-transform transition-[transform] duration-300 ease-in-out delay-75">
                    {item.heading}
                  </h4>
                  <p className="absolute w-full text-center text-[15.5px] md:text-[0.92rem] lg:text-[0.96rem] xl:text-[0.98rem] px-[15%] sm:px-[3rem] md:px-[4rem] lg:px-[2rem] xl:px-[23%] bottom-[25%] sm:bottom-[15%] md:bottom-[30%]  lg:bottom-[20%] left-[50%] translate-x-[-50%] translate-y-[0.3rem] text-transparent tracking-wide will-change-[transform,text] group-hover:text-white group-hover:translate-y-[0] transition duration-300 ease-in-out delay-75">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <div className=" sm:hidden absolute bottom-0 left-0 flex w-full text-my-black-300 justify-between items-center px-8 pb-3">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="text-my-black-400 disabled:text-my-black-200"
              >
                <IoIosArrowBack className="text-[1.5rem]" />
              </button>
              <p className="text-[14px]  font-[500]">{activeSlide + 1} / 8</p>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="text-my-black-400 disabled:text-my-black-200"
              >
                <IoIosArrowForward id="h-grid-next" className="text-[1.5rem]" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <ViewMoreUI
        tag="Enhance your service"
        body="Learn more about our features"
        className="bg-[#f9f9f9]"
      />

      <section
        ref={howSectionRef}
        className=" px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav py-[3rem] flex flex-col tablet:flex-row justify-center items-center gap-[1rem] tablet:gap-[5rem]"
      >
        <motion.img
          variants={imgFadeInUpAni}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: howSectionRef, amount: 0.4, once: true }}
          src={"/start1.svg"}
          className="w-[70%] tablet:w-[35%] "
        ></motion.img>
        <div className="flex flex-col tablet:w-[500px] gap-[1.5rem]">
          <FadeInRight once={true}>
            <h2 className="font-cabin uppercase font-medium text-my-black-900 text-[0.89rem] portrait-tablet:text-[0.92rem] tracking-[0.3em] text-center tablet:text-left">
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
      <section className=" w-full h-screen py-[6rem] px-mob-nav sm:px-sm-nav  tablet:px-tablet-nav lg:px-lg-nav   mx-auto my-0  bg-my-black-10 bg-[url('/mesh-bg-3.svg')] bg-no-repeat bg-cover bg-center rounded-xl flex flex-col justify-center items-center gap-[2rem]">
        <p className="text-[1.5rem] md:text-[2rem] font-cabin text-center">
          SmartMenu,{" "}
          <span className="font-inter">
            Your Smart Choice for a Modern Restaurant
          </span>
        </p>
        <button className="border border-my-black-950 bg-my-black-950 rounded-3xl w-[11rem] py-2 tablet:py-3  text-white text-[0.9rem] portrait-tablet:text-[0.95rem]">
          Try Now For Free
        </button>
      </section>
      <section className="flex flex-col portrait-tablet:flex-row w-full">
        <ViewMoreUI
          tag="Get in touch"
          body="Tell us how we can help"
          className="flex-1 bg-white border-b portrait-tablet:border-r portrait-tablet:border-b-0 border-my-black-80 py-6"
        />
        <ViewMoreUI
          tag="Service"
          body="Learn more about our features"
          className="flex-1 bg-white py-6"
        />
      </section>
    </div>
  );
};

export default HomePage;
