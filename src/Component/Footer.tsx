import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className=" bg-white text-gray-600 font-sans border-t border-gray-100">
      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-12">
            <div className="flex items-center space-x-2">
              <div className="">
                <img src={logo} alt="logo" />
              </div>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex space-x-4 pt-2 text-sm font-semibold text-gray-800">
              <a href="#" className="hover:text-pink-600 transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                Product
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a
              href="#privacy"
              className="hover:text-gray-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
