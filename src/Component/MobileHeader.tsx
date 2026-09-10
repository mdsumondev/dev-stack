import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/logo-text.png";

const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleHamburger = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="container lg:hidden mx-auto flex items-center justify-between py-6 px-3 relative">
      <div onClick={handleHamburger}>
        {openMenu ? (
          <HiMiniXMark className="text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-2xl" />
        )}
      </div>

      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div className="flex gap-2 items-center">
        <a
          className="text-lg font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
          href="#"
        >
          Sign In
        </a>
        <a
          className="text-lg font-medium text-white bg-[#D91B7E] rounded-3xl py-2 px-4"
          href="#"
        >
          Sign Up
        </a>
      </div>

      <ul
        className={`bg-white absolute top-[100%] ${openMenu ? "left-0" : "-left-100"} w-full px-5  transition-[left] duration-500 ease-in-out`}
      >
        <li className="mb-2">
          <a
            className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
            href="#"
          >
            Technologies
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
            href="#"
          >
            Projects
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
            href="#"
          >
            About
          </a>
        </li>
        <li className="mb-2">
          <a
            className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
            href="#"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeader;
