import React from "react";
import { FaGear } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { IoCard } from "react-icons/io5";

const Cards = () => {
  return (
    <section className="mx-auto mt-50 grid w-[80%] grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="card">
        <div className="bg-primary w-fit rounded-lg p-4">
          <FaGear className="text-xl text-white sm:text-2xl" />
        </div>
        <h3 className="mt-4 font-bold">Books Library</h3>

        <div className="my-6 h-0.5 w-20 rounded-full bg-red-500" />

        <p className="w-[90%] text-xs text-[#737373] sm:text-sm">
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>

      <div className="card">
        <div className="bg-primary w-fit rounded-lg p-4">
          <IoCard className="text-xl text-white sm:text-2xl" />
        </div>
        <h3 className="mt-4 font-bold">Market Analysis</h3>

        <div className="my-6 h-0.5 w-20 rounded-full bg-red-500" />

        <p className="w-[90%] text-xs text-[#737373] sm:text-sm">
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>

      <div className="card">
        <div className="bg-primary w-fit rounded-lg p-4">
          <GiStack className="text-xl text-white sm:text-2xl" />
        </div>
        <h3 className="mt-4 font-bold">Certified Teacher</h3>

        <div className="my-6 h-0.5 w-20 rounded-full bg-red-500" />

        <p className="w-[90%] text-xs text-[#737373] sm:text-sm">
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>
    </section>
  );
};

export default Cards;
