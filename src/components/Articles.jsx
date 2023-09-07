/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { articleCard } from "../constant/articlesData";
import left_arrow from "../assets/left.svg";

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articleCard.length / 3);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const displayArticles = (start, end) => {
    const startIndex = start;
    const endIndex = end;

    return articleCard.slice(startIndex, endIndex).map((article) => (
      <div
        key={article.id}
        className={`border-[0.88px] border-black sm:border-articl_border sm:border-opacity-30  h-[484px] sm:h-[554px] sm:[381px] rounded-[27px] my-12 transition-transform duration-300 transform`}
      >
        <div className="flex flex-col lg:justify-between justify-around items-center h-full py-4">
          <div className="w-full flex items-center justify-center sm:px-7 sm:py-7 lg:h-1/2  ">
            <img
              src={article.img}
              className="h-[165px] w-[204px] lg:h-[210px] md:w-full xl:w-[326px] xl:h-[228px]"
            ></img>
          </div>
          <div className="h-1/2  flex flex-col lg:justify-between justify-around items-center sm:items-start md:px-10 sm:mt-4 ">
            <h1 className="w-full  flex text-center font-poppins text-text_primary font-bold leading-[35px] items-center justify-center text-[16px] md:text-[18px] xl:text-[21px] sm:justify-start sm:px-0">
              {article.tilte}
            </h1>
            <p className="w-full hidden  sm:flex text-left font-open_san xl:text-[15px] md:text-[13px] sm:leading-6  lg:leading-8 text-[12px] leading-5 px-8 sm:px-0 sm">
              {article.para_large}...
            </p>
            <p className="w-full   flex sm:hidden text-left font-open_san xl:text-[15px] md:text-[13px] sm:leading-6  lg:leading-8 text-[12px] leading-5 px-8">
              {article.para_small}...
            </p>
            <button className="lg:mb-4 sm:mt-4 mt-4 text-[11px] text-button_border xl:text-[16px] md:text-[14px] sm:h-[42px] sm:ml-0 sm:w-[131px] font-source_san px-[33px] md:px-[20px] py-[4px] md:py-[3px] w-1/2 border-[1px] border-button_border rounded-[27px]">
              Read More
            </button>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <div className="mt-24 mx-12">
        <span className="text-[28px] font-source_san sm:text-[56px] flex justify-center sm:justify-start lg:px-12 items-center  text-text_primary">
          <h1> Latest Articles</h1>
        </span>
        <div className="flex flex-col sm:items-center">
          <div className="flex relative overflow-hidden gap-2">
            <div
              className={`w-full absolute xl:pr-12 xl:pl-12  ${
                currentPage === 1 ? "translate-x-0" : "-translate-x-full"
              } duration-300 sm:flex sm:gap-x-10`}
            >
              {displayArticles(0, 3)}
            </div>
            <div
              className={`w-full sm:pr-12 xl:pl-12 ${
                currentPage === 1 ? "translate-x-full" : "translate-x-0"
              } duration-300 sm:flex sm:gap-x-10`}
            >
              {displayArticles(3)}
            </div>
          </div>
          <div className="flex gap-3 sm:gap-0 justify-center items-center sm:mt-10">
            <svg
              className={`w-7 h-7 sm:w-27 sm:h-19 flex items-end`}
              onClick={currentPage === 1 ? null : handlePrevPage}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="4.5"
                stroke={`${currentPage === 1 ? "#424961" : "#AFAFAF"}`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.72095 11.7757C9.99743 11.6221 10.0876 11.2314 9.90417 10.9819C9.85301 10.9123 9.06283 10.1957 8.14818 9.38944L6.48521 7.92352L8.14865 6.45744C9.06349 5.65108 9.85372 4.93436 9.90464 4.86476C9.96443 4.78304 9.99734 4.66546 9.99753 4.53283C9.99781 4.35037 9.97744 4.30924 9.81482 4.16369C9.64777 4.01422 9.60967 3.99992 9.37925 3.99992H9.12677L7.06341 5.84615L5 7.69234V7.90391C5 8.02908 5.0315 8.15808 5.07709 8.21976C5.18879 8.37096 8.76126 11.5793 8.97942 11.7244C9.19386 11.867 9.51632 11.8893 9.72095 11.7757Z"
                fill={`${currentPage === 1 ? "#424961" : "#AFAFAF"}`}
              />
            </svg>

            <p className="font-source_san sm:ml-2 sm:mr-2 text-[12px]  sm:text-[22px] text-button_border">
              {currentPage}/{totalPages}
            </p>

            <svg
              className={`w-7 h-7 sm:w-27 sm:h-19`}
              onClick={currentPage === totalPages ? null : handleNextPage}
              disabled={currentPage === totalPages}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="15"
                height="15"
                rx="4.5"
                stroke={`${currentPage === 2 ? "#424961" : "#AFAFAF"}`}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.27905 4.07245C6.00257 4.22597 5.91237 4.61671 6.09583 4.86624C6.14699 4.93585 6.93717 5.65244 7.85182 6.45868L9.51479 7.92459L7.85135 9.39067C6.93651 10.197 6.14628 10.9138 6.09536 10.9834C6.03557 11.0651 6.00266 11.1827 6.00247 11.3153C6.00219 11.4977 6.02256 11.5389 6.18518 11.6844C6.35223 11.8339 6.39033 11.8482 6.62075 11.8482H6.87323L8.93659 10.002L11 8.15578V7.94421C11 7.81904 10.9685 7.69003 10.9229 7.62835C10.8112 7.47715 7.23874 4.26879 7.02058 4.12371C6.80614 3.98107 6.48368 3.9588 6.27905 4.07245Z"
                fill={`${currentPage === 2 ? "#424961" : "#AFAFAF"}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
