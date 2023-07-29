import React, { useRef, useState } from "react";
import box from "../assets/images/testimonialBox.svg";
import left from "../assets/images/arrowdleft.svg";
import right from "../assets/images/arrowright.svg";
import Try from "./TestimonialContent";
import Slider from "react-slick";

const testimonialData = [
  {
    name: "Freda Collier",
    content:
      "Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.",
  },
  {
    name: "Vergil Legend",
    content:
      "Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.",
  },
  {
    name: "Criss Redfild",
    content:
      "Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.",
  },
  {
    name: "Shione Collier",
    content:
      "Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.",
  },
];

const Testimonial = () => {
  const slider = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    slider.current.slickNext();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonialData.length);
  };

  const handlePrevSlide = () => {
    slider.current.slickPrev();
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="mt-40 mx-72">
      <div className="relative">
        <img src={box} />
        <div className="w-[400px] h-[558px] bg-[#031D44] rounded-[40px] -rotate-[25deg] absolute top-40 right-0"></div>
        <div className="w-full h-full absolute top-0 flex justify-end items-center">
          <div className="w-[94.5%] h-[55%] mb-[140px]">
            <Slider arrows={false} ref={slider} infinite speed={1000}>
              {testimonialData.map((item, i) => (
                <Try key={i} name={item.name} content={item.content} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="absolute bottom-28 left-80 flex items-center gap-7">
          <img src={left} onClick={handlePrevSlide} />
          <p>
            <span className="text-[56px]">
              {testimonialData.length < 10 ? "0" : ""}
              {currentSlide + 1}
            </span>
            <span>
              /{testimonialData.length < 10 ? "0" : ""}
              {testimonialData.length}
            </span>
          </p>
          <img src={right} onClick={handleNextSlide} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
