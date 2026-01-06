import React from "react";
import Courses_Slider from "../components/Courses_Slider";

const Courses_List = () => {
  return (
    <section className="mx-auto mb-40 w-[80%] text-center">
      <div>
        <h3 className="text-primary font-bold">Practice Advice</h3>

        <h1 className="my-6 text-3xl sm:text-4xl font-bold">
          Make online education accessible
        </h1>

        <p className="mb-20 text-sm sm:text-base">
          Problems trying to resolve the conflict between <br className="hidden xl:block" />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="mx-auto xl:max-w-[65%] ">
        <Courses_Slider/>
      </div>
    </section>
  );
};

export default Courses_List;
