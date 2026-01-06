import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const scrollWindow = () => {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition);

      if (scrollPosition > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  return (
    <>
      <nav className="block md:hidden">
        <div className="fixed top-5 left-5 rounded border border-white bg-[#252B42] p-2">
          <IoMenu onClick={() => setSidebar(true)} className="text-2xl" />
        </div>

        <div
          onClick={() => setSidebar(false)}
          className={`${sidebar ? "block" : "hidden"} fixed top-0 right-0 bottom-0 left-0 z-98 bg-black/60`}
        />

        <section
          className={`${sidebar ? "left-0" : "-left-400"} fixed top-0 bottom-0 z-99 w-50 bg-[#252B42] p-4 font-bold transition-all duration-300`}
        >
          <RxCross1
            onClick={() => setSidebar(false)}
            className="absolute top-6 right-6 text-2xl"
          />

          <h3 className="mt-15 mb-7 cursor-pointer text-lg sm:text-xl">
            BrandName
          </h3>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="cursor-pointer">Home</li>
            <hr />
            <li className="cursor-pointer">Product</li>
            <hr />
            <li className="cursor-pointer">Pricing</li>
            <hr />
            <li className="cursor-pointer">Contact</li>
            <hr />
          </ul>

          <div className="mt-3 flex flex-col gap-3 text-sm">
            <button className="cursor-pointer self-start">Login</button>
            <hr />
            <button className="bg-primary flex cursor-pointer items-center gap-2 rounded px-6 py-3 text-xs whitespace-nowrap transition-colors duration-300 hover:bg-[#0c9cef]">
              Become a member
            </button>
          </div>
        </section>
      </nav>

      <nav
        className={`fixed z-99 hidden w-full px-3 py-4 font-bold text-white transition-all duration-300 md:block ${hasScrolled ? "bg-[#252B42]" : "bg-transparent"}`}
      >
        <div className="mx-auto flex items-center justify-between text-sm xl:w-[80%]">
          <h3 className="cursor-pointer md:mr-15 md:text-lg xl:mr-20 xl:text-xl">
            BrandName
          </h3>

          <ul className="flex gap-6 md:mr-20 md:text-xs xl:mr-40 xl:text-sm">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>

          <div className="flex md:gap-6 md:text-xs xl:gap-10 xl:text-sm">
            <button className="cursor-pointer">Login</button>
            <button className="bg-primary flex cursor-pointer items-center gap-2 rounded whitespace-nowrap transition-colors duration-300 hover:bg-[#0c9cef] md:px-4 md:py-2 xl:px-6 xl:py-3">
              Become a member <FaArrowRightLong />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
