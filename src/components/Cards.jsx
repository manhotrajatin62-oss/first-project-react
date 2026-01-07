import React from "react";
import { FaGear } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { IoCard } from "react-icons/io5";

const Cards = ({card}) => {
  return (
      <div className="card">
        
        {card?.svg}

        <h3 className="mt-4 font-bold">{card?.title}</h3>

        <div className="my-6 h-0.5 w-20 rounded-full bg-[#E74040]" />

        <p className="w-[90%] text-xs text-[#737373] sm:text-sm">
          The gradual accumulation of information about atomic and small-scale
          behaviour...
        </p>
      </div>
  )
};

export default Cards;
