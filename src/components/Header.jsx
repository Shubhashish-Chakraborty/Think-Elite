import React from "react";

export const WebDetail = () => {
  const handleClick = () => {
    window.open("https://github.com/Shubhashish-Chakraborty", "_blank"); // Opens the link in a new tab
  };

  return (
    <div className="flex items-start h-screen p-8" style={{ backgroundColor: "#0e0e0e" }}>
      <div className="flex items-start w-full">
        <img
          src="compoAssets/logo.png"
          alt="Project Logo"
          className="w-80 h-80 object-contain transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
          onClick={handleClick}
        />
        <div className="ml-8 mt-4 p-6 content-box shadow-lg rounded-lg w-full">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-gray-800">
            By Shubhashish Chakraborty
          </h1>
          <p className="text-lg text-cyan-200">
            Think & Be Elite is your go-to platform for daily motivation and inspiration. Our mission is to empower you with the ultimate motivational quotes and videos that ignite passion and drive success. Whether you're striving for personal growth or professional excellence, our carefully curated content is designed to uplift your spirit and fuel your ambitions. Explore a wealth of resources, from thought-provoking quotes to powerful videos, all aimed at helping you become the best version of yourself. Stay motivated, stay focused, and remember: greatness begins with the mind.
          </p>
        </div>
      </div>
    </div>
  );
};