import React from "react";
import about_img from "../assets/about_img.png";

function About() {
  return (
    <div className="mt-8 h-[516px] sm:h-[468px] flex items-center justify-center bg-secondary">
      <div className="hidden sm:block">
        <img className="h-[468px]" src={about_img}></img>
      </div>
      <div className="flex flex-col justify-center  items-center px-8 sm:w-1/2 sm:h-full">
        <div className="sm:w-[70%] sm:ml-20 flex flex-col justify-center sm:items-start  items-center">
          <h1 className="text-[26px] sm:text-[45px]  font-poppins font-semibold text-text_primary">
            About Us
          </h1>
          <p className="mt-6 text-center text-[11px] sm:text-[15px] sm:leading-[27px] px-5 sm:px-0 leading-5 text-text_body font-open_san opacity-70 sm:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button className="mt-8 px-[28px] sm:px-[24px] sm:h-[42px] sm:w-[132px] sm:py-[3px] py-[4px] bg-text_red font-open_san text-white  rounded-[30px] text-[11px] sm:text-[16px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
