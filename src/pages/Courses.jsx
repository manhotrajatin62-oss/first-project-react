import React from "react";
import guy from "../assets/guy.png";
import { RiArrowRightSLine } from "react-icons/ri";

const Courses = () => {
  return (
    <section>
      <div className="flex items-center gap-6 lg:gap-0 flex-wrap lg:flex-nowrap py-40 justify-center w-[80%] mx-auto">
        <div>
          <div className="my-6 h-1 w-20 rounded-full bg-red-500" />
          <h1 className="text-3xl sm:text-4xl font-bold ">Watch our Courses</h1>
          <p className="my-6 text-sm w-full lg:w-[70%]"> 
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          <button className="flex gap-1.5 text-sm sm:text-base cursor-pointer text-primary font-bold items-center">
            Learn More <RiArrowRightSLine className="text-xl" />
          </button>
        </div>

        <div className="">
          <img className="w-full sm:w-[80%] md:w-full mx-auto" src={guy} alt="courses" />
        </div>
      </div>
    </section>
  );
};

export default Courses;
