import React from "react";
import quote from "../assets/images/Quotes.svg";
import star from "../assets/images/star.svg";
import img from "../assets/images/Image.png";

const TestimonialContent = ({name, content}) => {
  return (
    <div className="flex justify-between items-center ml-32">
      <div>
        <h1 className="text-5xl font-semibold">{name}</h1>
        <div className="h-[2px] w-[120px] bg-black mt-5"></div>
        <img src={quote} className="mt-14" />
        <p className="text-2xl font-medium w-[580px] leading-10">
          {content}
        </p>
        <img src={quote} className="ml-72" />
        <img src={star} className="mt-14" />
      </div>
      <img src={img} className="" />
    </div>
  );
};

export default TestimonialContent;
