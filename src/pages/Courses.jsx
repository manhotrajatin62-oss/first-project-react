import React from "react";
import guy from "../assets/guy.png";
import { RiArrowRightSLine } from "react-icons/ri";

const Courses = () => {
  return (
    <section>
      <div className="mx-auto flex w-[80%] flex-wrap items-center justify-center gap-6 py-40 lg:flex-nowrap lg:gap-0">
        <div>
          <div className="my-6 h-1.75 w-23.5 bg-[#E74040]" />
          <h1 className="text-3xl font-bold sm:text-4xl">Watch our Courses</h1>
          <p className="my-6 w-full text-sm lg:w-[70%]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>

          <button className="text-primary flex cursor-pointer items-center gap-2 text-sm font-bold sm:text-base">
            Learn More{" "}
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_149)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780065 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780065 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16123 8.56959 8.23599C8.53857 8.31074 8.4931 8.37864 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994896 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#23A6F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_149">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="">
          <img
          draggable={false}
            className="mx-auto w-full sm:w-[80%] md:w-full"
            src={guy}
            alt="courses"
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
