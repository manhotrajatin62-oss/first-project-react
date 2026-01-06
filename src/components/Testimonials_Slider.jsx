import React from "react";
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Testimonials_Slider = () => {

  const testimonials = [
      {
        image : testimonial1
      },
      {
        image : testimonial2
      },
      {
        image : testimonial1
      },
      {
        image : testimonial2
      },
    ]

  return (
    <section className="flex items-center gap-4 no-scroll overflow-x-scroll">

      {
        testimonials?.map((item, i)=>{
          return <div key={i} className="min-h-60 min-w-60 md:min-h-80 md:min-w-80 xl:min-h-100 xl:min-w-100 flex flex-col p-4 xl:p-0 items-center bg-white text-[#737373]">
        <img className="rounded-full mt-6 w-20 xl:w-25" src={item?.image} alt="testimonial" />

        <p className="w-[80%] xl:w-[50%] text-xs sm:text-sm my-6 text-center">
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </p>

        <div className="flex items-center mb-2 gap-2 text-lg text-amber-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
        </div>

        <h3 className="text-black text-sm font-bold my-2">Regina Miles</h3>
        <h4 className="text-xs font-bold">Designer</h4>
      </div>
        })
      }

    </section>
  );
};

export default Testimonials_Slider;
