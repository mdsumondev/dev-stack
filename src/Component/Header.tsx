import logo from "../assets/logo-text.png";
import MobileHeader from "./MobileHeader";
const Header = () => {
  return (
    <div>
      <div className="container hidden lg:flex justify-between items-center mx-auto">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu-bar">
          <ul className="flex items-center gap-[29px] py-6">
            <li>
              <a
                className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
                href="#"
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
                href="#"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <a
            className="text-base font-medium hover:text-[#D91B7E] duration-150 ease-in-out"
            href="#"
          >
            Sign In
          </a>
          <a
            className="text-base font-medium text-white bg-[#D91B7E] rounded-3xl py-[10px] px-5"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </div>
      <MobileHeader />
    </div>
  );
};

export default Header;
