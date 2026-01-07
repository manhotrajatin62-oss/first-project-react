import React from "react";

const Contact = () => {
  return (
    <section className="mx-auto my-40 w-[80%] text-center">
      <div>
        <h3 className="text-primary font-bold">Practice Advice</h3>

        <h1 className="my-6 text-3xl font-bold sm:text-4xl">JOIN US</h1>

        <p className="mb-20 text-sm sm:text-base">
          Problems trying to resolve the conflict between{" "}
          <br className="hidden md:block" />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="mx-auto flex h-10 xl:w-180 justify-center flex-wrap gap-2 items-center rounded border border-white bg-white sm:h-12">
        <input
          type="email"
          autoComplete="on"
          id="email"
          name="email"
          placeholder="Your Email"
          className="h-full flex-1 px-2 text-sm text-black outline-0 placeholder:text-gray-500 "
        />
        <button className="bg-primary h-full cursor-pointer rounded px-4 text-sm sm:rounded-none font-semibold hover:bg-[#0697eb] transition-colors duration-200 ">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Contact;
