import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ( {data} ) => {
  const { imageUrl, title, subtitle,link } = data
  return (
    <div className="relative w-full h-[200px] rounded-xl overflow-hidden shadow-md group">
      <Link to={link} className="block w-full h-full">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-10">
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          <p className="text-sm md:text-base font-semibold text-yellow-300 mt-1">
            {subtitle}
          </p>
          <span className="mt-4 inline-block bg-white text-gray-900 font-semibold py-1.5 px-4 rounded-full text-sm hover:bg-yellow-300 transition">
            Shop Now
          </span>
        </div>
      </Link>
    </div>
  );
};

export default OfferCard;
