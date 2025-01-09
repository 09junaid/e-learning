import React from "react";
import { priceCards } from "../constant";
export default function PricingCards() {
  return (
    <>
      {/* Header Section */}
      <div className="min-h-screen bg-white flex flex-col items-center pt-8 lg:pt-20">
        {/* Header Section */}
        <div className="text-start px-6 w-full max-w-7xl" >
          <p className="text-[#F3994B] font-semibold">PRICING</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">
            How Much Do I Have To Pay
          </h1>
          <p className="text-gray-600 mt-2">
            Choose the plan that best suits your needs.
          </p>
        </div>

        {/* Pricing Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4 mt-10 cursor-pointer">
          {priceCards.map((item, index) => (
            <div
              key={index} className="bg-[#F8F8F8] rounded-lg p-6 group hover:bg-[#F3994B] hover:shadow-[0_4px_15px_rgba(243,153,75,0.5)] transition-all duration-300 text-gray-800 "
              style={{ width: "270px" }}
            >
              {/* Plan Title */}
              <h2 className="text-2xl font-bold text-center mb-4 group-hover:text-white">
                {item.plan}
              </h2>

              {/* Highlights */}
              <ul className="mb-6 space-y-3">
                {item.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 transition-all"
                  >
                    {/* FontAwesome Icon */}
                    <i className="fa fa-check-circle text-gray-400 group-hover:text-white transition-all"></i>
                    <p className="group-hover:text-white">{highlight}</p>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <p className="text-center text-2xl font-semibold mb-6 group-hover:text-white">
                {item.price}{" "}
                <span style={{ fontSize: "14px", color: "grey" }}>{item.month}</span>
              </p>

              {/* Button */}
              <div className="flex justify-center">
                <button className="bg-[#CBC3E3] px-6 py-2 rounded-md hover:bg-white hover:text-[#F3994B] hover:shadow-[0_4px_15px_rgba(243,153,75,0.5)] transition-all duration-300">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
