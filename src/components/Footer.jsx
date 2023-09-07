import React from "react";
import logo from "../assets/logo.png";
import fb_icon from "../assets/fb_icon.png";
import twitt_icon from "../assets/twitt_icon.png";
import insta_icon from "../assets/insta_icon.png";

function Footer() {
  return (
    <div className="mt-[60px] sm:h-[362px] bg-primary px-8 py-16  justify-around sm:items-center flex flex-col sm:flex-row gap-14 sm:gap-0">
      <div className="w-full flex justify-center items-center sm:justify-start sm:h-full">
        <img
          className="w-[75px] h-[58px] sm:w-[161px] sm:h-[125px] sm:ml-12"
          src={logo}
        ></img>
      </div>
      <div className="w-full flex flex-col justify-around sm:justify-center sm:h-full sm:ml-24 sm:px-4  gap-2 sm:gap-4">
        <h1 className="text-[16px] sm:text-[18px] font-source_san text-text_primary font-semibold">
          Contact Us
        </h1>
        <div className="text-[9px] sm:text-[14px] sm:leading-[23px] font-source_san leading-[12px]  text-text_body_sec text-opacity-80 flex flex-col gap-4">
          <span className="sm:w-3/4 sm:text-justify">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </span>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-around sm:justify-center  sm:items-center sm:h-full  gap-2 sm:gap-4">
        <h1 className="text-[16px] sm:w-full flex sm:justify-center sm:mr-6 sm:text-[18px] font-source_san text-text_primary font-semibold">
          More
        </h1>
        <div className="text-[9px] sm:text-[14px] sm:leading-[24px] font-source_san leading-[12px] text-text_body_sec text-opacity-80 flex flex-col gap-4">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Career</p>
          <p>Products</p>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:justify-between items-center h-full w-full  mb-[50px] sm:mb-0">
        <div className="w-full flex flex-col items-center  sm:ml-14 sm:mt-4 gap-3">
          <p className="text-[9px] font-source_san sm:hidden leading-[12px] text-text_body_sec">
            {" "}
            © 2022 Food Truck Example{" "}
          </p>
          <p className="text-[18px] sm:mt-[5px] font-semibold text-text_primary sm:flex hidden font-source_san leading-[12px] sm:leading-[27px]">
            Social Links
          </p>
          <div className="flex gap-6 sm:ml-6 sm:gap-8 ">
            <img className="w-3 h-3 sm:w-5 sm:h-5" src={insta_icon}></img>
            <img className="w-3 h-3 sm:w-5 sm:h-5" src={twitt_icon}></img>
            <img className="w-3 h-3 sm:w-5 sm:h-5" src={fb_icon}></img>
          </div>
        </div>
        <p className="hidden mb-6 ml-4 justify-center sm:flex text-[14px] text-text_body_sec text-opacity-80 w-full ">
          © 2022 Food Truck Example
        </p>
      </div>
    </div>
  );
}

export default Footer;
