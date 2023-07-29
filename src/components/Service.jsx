import React from "react";
import img from "../assets/images/service.png";
import ServiceCard from "./ServiceCard";
import icon1 from "../assets/images/accommodation.svg";
import icon2 from "../assets/images/boarding-pass.svg";
import icon3 from "../assets/images/community.svg";
import icon4 from "../assets/images/real-estate.svg";

const Service = () => {
  return (
    <div className="bg-gradient-to-br from-[#001E43] to-[#570169] rounded-[100px] mt-20 flex flex-col lg:flex-row justify-between items-end">
      <div className="pt-48 w-full">
        <img src={img} />
      </div>
      <div className="w-full">
        <h1 className="text-[55px] font-bold text-center text-white mt-24">
          Our Services
        </h1>
        <div className="mt-32 grid lg:grid-cols-2 gap-x-10 gap-y-20 lg:mr-52 lg:mb-36">
          <ServiceCard
            img={icon1}
            title="Accommodation"
            li1="20,000+ Listed Properties  across 5 countries."
            li2="100+cities"
          />
          <ServiceCard
            img={icon2}
            title="Visa Application"
            li1="By Industry leading Immigration Consultants."
            li2="Quick & Hassle Free Visa Filing."
          />
          <ServiceCard
            img={icon3}
            title="Centralized Community"
            li1="Talk to international student community."
            li2="Ask your queries and doubts"
          />
          <ServiceCard
            img={icon4}
            title="Education Loan"
            li1="100% Funding with quick loan sanction!"
            li2="Pre-admission loan."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
