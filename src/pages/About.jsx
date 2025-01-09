import React from "react";
import { data } from "../constant"; // Import your data array

export default function About() {
  return (
    <div className="px-4 py-8 md:px-12 lg:px-20">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } justify-between items-center gap-10 lg:gap-20 mt-10`}
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="w-full max-w-md lg:max-w-lg shadow-lg bg-[#F3994B]"
              style={{ borderRadius: "0px 20px" }}
            >
              <img
                src={item.image}
                alt={item.highlight}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-6 p-5">
            <p className="text-[#F3994B] text-sm md:text-base font-bold tracking-wide">
              {item.highlight}
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              {item.title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
              {item.subtitle}
            </h2>
            {item.description && (
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                {item.description}
              </p>
            )}
            {item.list && (
              <ul className="text-gray-600 text-sm md:text-base lg:text-lg space-y-2 lg:space-y-3">
                {item.list.map((listItem, listIndex) => (
                  <li key={listIndex} className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-[#F3994B]"></i>
                    {listItem}
                  </li>
                ))}
              </ul>
            )}
            <ul className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start mt-4">
              <li>
                <button className="bg-[#F3994B] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e0883f] focus:outline-none focus:ring-4 focus:ring-[#F3994B]">
                  Get Started
                </button>
              </li>
              <li>
                <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300">
                  Learn More
                </button>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
