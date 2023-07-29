import React from "react";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";
import location from "../assets/images/location.svg";

const Contact = () => {
  return (
    <div className="mt-44">
      <h1 className="text-[55px] font-semibold text-[#0D1948] text-center leading-tight">
        Get in Touch with Us
      </h1>
      <div className="w-64 h-1 bg-[#041C45] mx-auto"></div>
      <p className="text-[32px] font-medium text-[#00000099] text-center mt-8">
        Elevate Your Institute Management and Student Success - Contact Us Now!
      </p>
      <div className="mt-24 mb-28 mx-5 lg:mx-28 rounded-l-[30px] shadow-[0_5px_15px_0px_rgba(0,0,0,0.35)] flex justify-between">
        <div className="px-52 pt-36 pb-[275px] w-full">
          <h1 className="text-6xl font-semibold">Contact Us</h1>
          <p className="text-2xl">
            Feel Free to contact us any time. We will get back to you as soon as
            we can!.
          </p>
          <form className="w-[400px] mt-20 space-y-6">
            <div>
              <label className="text-xs font-medium">Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full h-10 border-b outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full h-10 border-b outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="text-xs font-medium">Message</label>
              <textarea
                placeholder="Write your message.."
                className="w-full h-16 border-b outline-none focus:border-black"
              />
            </div>
          </form>
        </div>
        <div className="relative w-full">
          <div className="absolute right-0 h-full w-[300px] bg-[#0064E1] flex justify-around items-end pb-20">
            <img src={twitter} width={30} />
            <img src={instagram} width={30} />
            <img src={facebook} width={30} />
          </div>
          <div className="bg-[#001E43] rounded-l-[30px] py-[70px] px-[78px] space-y-10 text-white absolute right-0 inset-y-1/4 w-[500px]">
            <p className="text-[32px] font-semibold">Contact Information</p>
            <div className="flex items-center gap-5">
              <img src={phone} width={30} />
              <p className="text-xl">+1012 3456 789</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={email} width={30} />
              <p className="text-xl">demo@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <img src={location} width={30} />
              <p className="text-xl">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
