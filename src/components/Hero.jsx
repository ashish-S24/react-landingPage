import React from "react";
import hero from "../assets/hero.png";
import hero_vector from "../assets/hero_vector.png";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <div className="relative w-full sm:grid sm:grid-cols-2 sm:gap-5 sm:h-screen">
      <div className="h-7/12 w-full relative sm:order-last">
        <img
          className="absolute -z-10 h-7/12 sm:h-4/5  w-full -top-1"
          src={hero}
        ></img>
        <img
          className="sm:w-full sm:h-5/6 right-0  mt-[-4px]"
          src={hero_vector}
        ></img>
        <button className="absolute top-8 sm:w-[122px] sm:h-[42px] sm:right-12 right-3 px-[10px] py-2 font-open_san border-white text-white  rounded-[30px] text-[11px] text border sm:text-[16px]">
          Get In Touch
        </button>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute hidden sm:block w-[107px] h-[83px] top-8 left-[70px]">
          <img src={logo}></img>
        </div>
        <div className="relative h-5/12 w-full  flex flex-col justify-center sm:justify-normal  sm:items-start items-center p-8 mt-6 sm:mt-[150px]">
          <span className="text-[34px] w-full flex  sm:ml-10 sm:text-[60px] sm:w-3/5 sm:leading-[69px] font-open_san font-bold text-text_primary px-5 sm:px-0 text-center sm:text-left items-center">
            <span>
              Discover the <span className="text-text_red">Best</span> Food and
              Drinks
            </span>
          </span>
          <p className="mt-6 sm:ml-10 sm:mt-6 lg:mt-10 sm:w-3/5 text-center sm:text-left text-[12px] sm:text-[17px] px-5 sm:px-0 text-text_body font-open_san opacity-70">
            {" "}
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="mt-6   sm:ml-10 sm:mt-6 lg:mt-10 px-[30px] sm:w-[190px] sm:text-[18px] sm:h-[63px] bg-text_red font-open_san text-white py-[12px] rounded-[30px] text-[12px] text border text-[]">
            Explore Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
