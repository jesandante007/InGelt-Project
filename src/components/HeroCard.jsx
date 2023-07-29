import React from "react";
import bg from "../assets/images/circle.png";

const HeroCard = ({ img, title }) => {
  return (
    <div className="bg-[#0D1948] w-full max-w-[470px] rounded-[40px] shadow-[0_4px_60px_0px_rgba(13,25,72,0.44)] backdrop-blur-xl p-9 text-center relative">
      <img src={bg} className="absolute right-0 top-0" />
      <div className="bg-white rounded-full w-20 h-20 p-5 mx-auto">
        <img src={img} alt="icon" width={40} height={40} className="" />
      </div>
      <h1 className="text-[28px] text-white font-bold my-4">{title}</h1>
      <p className="text-lg text-[#ffffff99]">
        20,000+ Listed Properties across 5 countries.
      </p>
    </div>
  );
};

export default HeroCard;
