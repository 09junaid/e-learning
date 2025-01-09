import React from "react";
import images from '../../assets/images/university-pic.png';
import SubSection from "./SubSection";
import MentorCourse from "./MentorCourse";
import PricingCards from "../PricingCards";
import Testimonial from "./Testimonial";

export default function HeroSection() {
  return (
    <>
      <div className="mt-20 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
              START BECOME YOUR
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
              BEST <span className="text-[#F3994B]">SELF</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-lg text-gray-600 text-justify md:text-center lg:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga maxime
              <br />
              veniam explicabo ratione dicta. Provident temporibus fugit
              consectetur
              <br />
              expedita! Nemo voluptate voluptas repellendus voluptatem quia.
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-6">
              <li className="text-center">
                <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
                  100+
                </h1>
                <p className="text-[#F3994B] text-sm font-bold">
                  MENTOR AT TUTORIFY
                </p>
              </li>
              <li className="text-center">
                <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
                  10K+
                </h1>
                <p className="text-[#F3994B] text-sm font-bold">
                  STUDENT TRUSTED US
                </p>
              </li>
              <li className="text-center">
                <h1 className="text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
                  100+
                </h1>
                <p className="text-[#F3994B] text-sm font-bold">
                  STUDENT SUCCESS
                </p>
              </li>
            </ul>
            <form className="flex flex-col items-center lg:items-start w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 sm:w-6 sm:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-3 pl-10 text-base sm:text-lg rounded-md sm:rounded-2xl shadow-sm focus:ring-[#F3994B] focus:border-[#F3994B] sm:p-4 sm:pl-12"
                  placeholder="Cari Mentor, Kamu..."
                  required
                  style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
                />
                <button
                  type="submit"
                  className="absolute right-2 bottom-1.5 sm:right-3 sm:bottom-2 text-white bg-[#F3994B] hover:bg-[#e0883f] focus:ring-4 focus:ring-[#F3994B] font-medium rounded-md sm:rounded-lg px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-lg"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="relative lg:w-1/2 flex justify-center items-center">
            {/* Circular Shadow */}
            <div
              className="absolute w-20 h-30 lg:w-[300px] lg:h-[300px] bg-[#FFD166] rounded-full -z-10"
              style={{ filter: "blur(50px)", transform: "translate(0%,-10%)" }}
            ></div>
            <img
              src={images}
              alt="university pic"
              className="w-full h-auto rounded-lg object-cover max-h-[500px]"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
      </div>
      <SubSection />
      <MentorCourse />
      <PricingCards />
      <Testimonial />
    </>
  );
}
