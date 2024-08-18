import React from "react";

export const WebDetail = () => {
  const handleClick = () => {
    window.open("https://github.com/Shubhashish-Chakraborty/Think-Elite", "_blank"); // Opens the link in a new tab
  };

  return (
    <div className="flex flex-col md:flex-row items-start h-screen p-4 md:p-8" style={{ backgroundColor: "#0e0e0e" }}>
      <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
        <img
          src="compoAssets/logo.png"
          alt="Project Logo"
          className="w-48 h-48 md:w-80 md:h-80 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleClick}
        />
      </div>
      <div className="md:ml-8 p-4 md:p-6 content-box shadow-lg rounded-lg w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-orange-400 overflow-hidden whitespace-nowrap border-r-4 border-gray-800 animate-pulse">
          By Shubhashish Chakraborty
        </h1>
        <p className="text-base md:text-lg text-cyan-200">
          Think & Be Elite is your go-to platform for daily motivation and inspiration. Our mission is to empower you with the ultimate motivational quotes and videos that ignite passion and drive success. Whether you're striving for personal growth or professional excellence, our carefully curated content is designed to uplift your spirit and fuel your ambitions. Explore a wealth of resources, from thought-provoking quotes to powerful videos, all aimed at helping you become the best version of yourself. Stay motivated, stay focused, and remember: greatness begins with the mind.
        </p>
      </div>
    </div>
  );
};
