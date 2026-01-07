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
        <div
          onClick={() => setSidebar(true)}
          className="fixed top-5 left-5 cursor-pointer rounded border border-white bg-[#252B42] p-2"
        >
          <IoMenu size={24} />
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
            size={24}
            className="absolute top-6 right-6 cursor-pointer"
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
              Become a member{" "}
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
