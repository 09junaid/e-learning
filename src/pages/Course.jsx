import React from "react";
import { cardsList } from "../constant";
export default function Course() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center flex justify-center mt-20 px-4">
        <div className="w-full max-w-4xl">
          <p className="text-[#F3994B] text-sm md:text-base font-bold tracking-wide">
            MENTOR
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Our Top Mentors at Tutorify
          </h1>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Meet our exceptional team of mentors.
          </p>
        </div>
      </div>

      {/* Mentor Cards Section
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4  mt-10" */}
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",flexWrap:"wrap"}} className="mt-10">
        {cardsList.map((item,index)=>(
          <div className="relative bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 max-w-sm ">
          {/* Image Section */}
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg" key={index}>
            <img src={item.image} alt={`${item.name}`} className="w-full h-full object-cover" />
          </div>
          {/* Content Section */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.role}</p>
            <div className="flex items-center gap-2 mt-2">
              <i className="fa-regular fa-clock text-gray-500 text-lg"></i>
              <p className="text-gray-600 text-sm">{item.experience} Experience</p>
            </div>
            {/* Rating Section */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="material-icons text-yellow-500 text-sm">
                    star
                  </span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">({item.reviews} reviews)</span>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </>
  );
}



