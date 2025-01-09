import React from "react";
import "./style.css";

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-20 bg-gray-50 mt-10 space-y-6 md:space-y-0">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0 px-4">
        <h3 className="text-orange-400 uppercase text-sm font-semibold">
          Testimoni
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-tight">
          What They Say About Us
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          congue aliquam, fermentum arcu. Pharetra eget duis luctus in nec
          leo quam vestibulum. Ut quam vulputate turpis tincidunt posuere.
        </p>
        <p className="text-gray-700 font-bold mt-4 text-sm md:text-base">
          Rizqi Aseggef
        </p>
        <p className="text-gray-500 text-xs md:text-sm">Student At Tutorify</p>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 relative flex justify-center px-4">
        <div className="relative">
          {/* Circle behind the image */}
          <div
            className="pac-man absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/3 w-24 h-24 md:w-32 md:h-32 rounded-full"
          ></div>
          {/* Image */}
          <img
            src="https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-trying-sell-clipboard-standing-white-wall_141793-30852.jpg?t=st=1736329130~exp=1736332730~hmac=798e3e7a80cad0a772e2aa2bbae4467fd833b5435e1f1aa003775d7e8dc505ac&w=826"
            alt="Person"
            className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-lg shadow-lg z-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
