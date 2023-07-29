import React from "react";
import bg from "../assets/images/circle.png";

const ServiceCard = ({ img, title, li1, li2 }) => {
  return (
    <div className="bg-gradient-to-r from-[#ffffff08] to-[#ffffff08] backdrop-blur-xl relative px-12 py-20 text-white rounded-[40px] border border-[#644980]">
      <img src={bg} className="absolute top-0 right-0" />
      <div className="h-[90px] w-[90px] rounded-3xl bg-white p-5 absolute -top-11">
        <img src={img} width={48} height={48} />
      </div>
      <h2 className="text-2xl font-bold my-6">{title}</h2>
      <ul className="list-disc">
        <li className="text-lg">{li1}</li>
        <li className="text-lg">{li2}</li>
      </ul>
    </div>
  );
};

export default ServiceCard;
