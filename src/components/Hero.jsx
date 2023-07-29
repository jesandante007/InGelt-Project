import React, { useState } from "react";
import hero from "../assets/images/hero-img.png";
import heroBg from "../assets/images/hero-bg.png";
import Card from "./HeroCard";
import icon1 from "../assets/images/release.svg";
import icon2 from "../assets/images/online-learning.svg";
import icon3 from "../assets/images/webinar.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import check from "../assets/images/check.svg";
import { useForm } from "react-hook-form";

const Hero = () => {
  const [phone, setPhone] = useState("");
  const [level, setLevel] = useState("start");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    alert("Your Form Submitted Successfully");
    reset();
    setLevel('start')
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-[300px] justify-between items-center">
        <div className="w-full flex flex-col items-center text-center lg:ml-36">
          <h1 className="text-5xl font-bold text-[#001E43]">
            Start Your IELTS Preparation And Get Desire Bands
          </h1>
          <ul className="list-disc list-inside text-lg text-[#0000009a] my-6">
            <li>Get access to IELTS Centralised Library</li>
            <li>British Council Certified Teacher</li>
          </ul>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[635px] rounded-[52px] shadow-[0_4px_50px_0px_rgba(13,25,72,0.12)] py-10 px-16"
          >
            <div className="flex justify-between px-7 text-xl font-medium">
              <div className="flex gap-2 items-center">
                {level === "start" ? (
                  <img src={check} />
                ) : (
                  <p className="text-sm bg-slate-400 px-[6px] rounded-full text-white">
                    1
                  </p>
                )}
                <p>start</p>
              </div>
              <div className="flex gap-2 items-center">
                {level === "details" ? (
                  <img src={check} />
                ) : (
                  <p className="text-sm bg-slate-400 px-[6px] rounded-full text-white">
                    2
                  </p>
                )}
                <p>Fill Details</p>
              </div>
              <div className="flex gap-2 items-center">
                {level === "confirm" ? (
                  <img src={check} />
                ) : (
                  <p className="text-sm bg-slate-400 px-[6px] rounded-full text-white">
                    3
                  </p>
                )}
                <p>Confirm</p>
              </div>
            </div>
            <h2 className="text-4xl font-semibold mt-10">Free IELTS Classes</h2>
            {level === "start" && (
              <>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-full h-12 rounded-lg mt-10 px-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]"
                />
                <div className="mt-9 h-12 w-full">
                  <PhoneInput
                    {...register("phone")}
                    country={"in"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                  />
                </div>
                <button
                  onClick={() => setLevel("details")}
                  type="button"
                  className="bg-[#001E43] w-full h-12 mt-14 text-white rounded-lg text-xl font-extrabold"
                >
                  Continue
                </button>
              </>
            )}
            {level === "details" && (
              <>
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Enter Your Address"
                  className="w-full h-12 rounded-lg mt-10 px-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]"
                />
                <input
                  {...register("post")}
                  type="text"
                  placeholder="Enter Your Post Code"
                  className="w-full h-12 rounded-lg mt-10 px-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]"
                />
                <div className="flex gap-10">
                  <button
                    onClick={() => setLevel("start")}
                    type="button"
                    className="bg-[#001E43] w-full h-12 mt-14 text-white rounded-lg text-xl font-extrabold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setLevel("confirm")}
                    type="button"
                    className="bg-[#001E43] w-full h-12 mt-14 text-white rounded-lg text-xl font-extrabold"
                  >
                    Continue
                  </button>
                </div>
              </>
            )}
            {level === "confirm" && (
              <>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-12 rounded-lg mt-10 px-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]"
                />
                <input
                  {...register("feedback")}
                  type="text"
                  placeholder="Give Feedback"
                  className="w-full h-12 rounded-lg mt-10 px-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]"
                />
                <div className="flex gap-10">
                  <button
                    onClick={() => setLevel("details")}
                    type="button"
                    className="bg-[#001E43] w-full h-12 mt-14 text-white rounded-lg text-xl font-extrabold"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#001E43] w-full h-12 mt-14 text-white rounded-lg text-xl font-extrabold"
                  >
                    Submit
                  </button>
                </div>
              </>
            )}

            <p className="text-xs text-[#001E43] font-medium mt-5">
              By continuing, you agree to our Term of services & Privacy policy
            </p>
          </form>
        </div>
        <div className="w-full relative">
          <img src={heroBg} alt="" className="w-full object-cover" />
          <img
            src={hero}
            alt="hero-img"
            className="w-full absolute inset-y-1/4 lg:right-10 lg:scale-110"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-36 px-5 lg:px-36 mx-auto">
        <Card img={icon1} title="Free IELTS Modules" />
        <Card img={icon2} title="Offline Classes" />
        <Card img={icon3} title="Live / Online Classes" />
      </div>
    </>
  );
};

export default Hero;
