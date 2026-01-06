import React from "react";
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.png";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { FaChartColumn, FaEye, FaStar } from "react-icons/fa6";
import { LuAlarmClock, LuDownload } from "react-icons/lu";
import { AiOutlineAreaChart } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";

const Courses_Slider = () => {
  const courses = [
    {
      image: course1,
    },
    {
      image: course2,
    },
    {
      image: course1,
    },
    {
      image: course2,
    },
  ];

  return (
    // courses slider wrapper

    <section className="no-scroll flex items-center gap-4 overflow-x-scroll">
      {courses?.map((item, i) => {
        return (
          <div key={i} className="flex flex-col items-center justify-start">
            {/* image container */}

            <div
              style={{ backgroundImage: `url(${item?.image})` }}
              className="relative h-40 w-60 bg-cover bg-center bg-no-repeat sm:h-50 sm:w-70"
            >
              <span className="absolute top-6 left-4 rounded bg-red-500 px-2 py-1 text-xs font-bold sm:text-sm">
                Sale
              </span>

              {/* icons container */}

              <div className="absolute bottom-5 left-[50%] flex translate-x-[-50%] items-center gap-2">
                <div className="rounded-full bg-white p-2">
                  <CiHeart className="cursor-pointer text-lg text-black sm:text-xl" />
                </div>

                <div className="rounded-full bg-white p-2">
                  <BsCart className="cursor-pointer text-lg text-black sm:text-xl" />
                </div>

                <div className="rounded-full bg-white p-2">
                  <FaEye className="cursor-pointer text-lg text-black sm:text-xl" />
                </div>
              </div>
            </div>

            {/* details container */}
            <div className="w-60 bg-white p-4 text-[#737373] sm:w-70">
              <div className="flex items-center justify-between text-xs">
                <h2 className="text-primary font-bold">English Department</h2>

                <div className="flex items-center gap-2 rounded-full bg-[#252B42] px-2 py-1">
                  <FaStar className="text-amber-300" />
                  <p className="font-semibold text-white">4.9</p>
                </div>
              </div>

              <div className="mt-4 text-left text-xs">
                <h3 className="text-sm font-bold text-black">Graphic Design</h3>

                <p className="my-2">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>

                <p className="my-2 flex items-center gap-2">
                  <LuDownload /> <span className="font-bold">15 Sales</span>
                </p>

                <p className="mb-4 font-semibold text-[#BDBDBD]">
                  $16.48 <span className="text-[#40BB15]">$6.48</span>
                </p>

                <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <LuAlarmClock className="text-primary" />
                    <p>22hr 30min</p>
                  </div>
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <FaChartColumn className="text-[#E77C40]" />
                    <p>64 Lessons</p>
                  </div>

                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <AiOutlineAreaChart className="text-[#40BB15]" />
                    <p>Progress</p>
                  </div>
                </div>

                <div className="border-primary my-4 w-fit rounded-full border px-3 py-2 text-center">
                  <button className="text-primary flex cursor-pointer items-center gap-1.5 font-bold">
                    Learn More <RiArrowRightSLine className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Courses_Slider;
