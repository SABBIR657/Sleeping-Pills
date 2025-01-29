import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

export default function Bannner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Full Navbar (Visible on Desktop) */}
      <div className="">
        <div className="hidden md:flex  bg-[#0685a9] py-2 mt-1">
          <nav className="w-full">
            <ul className="flex items-center justify-center text-white font-bold  w-full">
              <li className="flex items-center px-[35px]   relative">
                <FaHome />
                <NavLink to="/" className="">
                  Home
                </NavLink>
                <div className="absolute top-0 right-0 h-full border-r border-white"></div>
              </li>
              <li className="flex items-center px-[35px]  relative">
                <NavLink to="/about-us" className="">
                  About Us
                </NavLink>
                <div className="absolute top-0 right-0 h-full border-r border-white"></div>
              </li>
              <li className="flex items-center   px-[35px]  relative group z-50">
                <NavLink to="" className="">
                  Products
                </NavLink>

                {/* First Level Dropdown */}
                <div className="absolute top-full left-0 w-48 bg-[#057793] text-white rounded hidden group-hover:flex flex-col">
                  {/* Sleeping Tablets with Nested Dropdown */}
                  <div className="relative group/sleeping mt-5">
                    <NavLink
                      to="/products/sleeping-tablets"
                      className="py-2 px-4 hover:bg-[#C43838]"
                    >
                      Sleeping Tablets
                    </NavLink>

                    {/* Second Level Dropdown for Sleeping Tablets */}
                    <div className="absolute top-0 left-full w-48 bg-[#057793] text-white rounded hidden group-hover/sleeping:flex flex-col">
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Zopiclone 7.5 mg/10 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Zolpidem 10 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Nitrazepam 10 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Eszopiclone
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Zaleplon 10 mg
                      </NavLink>
                    </div>
                  </div>

                  {/* Anxiety Medication with Nested Dropdown */}
                  <div className="relative group/anxiety mt-3">
                    <NavLink
                      to="/products/anxiety-medication"
                      className="py-2 px-4 hover:bg-[#C43838]"
                    >
                      Anxiety Medication
                    </NavLink>

                    {/* Second Level Dropdown for Anxiety Medication */}
                    <div className="absolute top-0 left-full w-48 bg-[#057793] text-white rounded hidden group-hover/anxiety:flex flex-col">
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Diazepam 10 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Xanax 1 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Etizolam 1 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Clonazepam 2 mg
                      </NavLink>
                      <NavLink to="" className="py-2 px-4 hover:bg-[#C43838]">
                        Lorazepam
                      </NavLink>
                    </div>
                  </div>

                  <NavLink
                    to="/products/painkillers"
                    className="py-2 px-4 hover:bg-[#C43838]"
                  >
                    Painkillers
                  </NavLink>
                  <NavLink
                    to="/products/nootropics"
                    className="py-2 px-4 hover:bg-[#C43838]"
                  >
                    Nootropics
                  </NavLink>
                </div>

                <div className="absolute top-0 right-0 h-full border-r border-white"></div>
              </li>

              <li className="flex items-center px-[35px]  relative">
                <NavLink to="/faqs" className="">
                  FAQS
                </NavLink>
                <div className="absolute top-0 right-0 h-full border-r border-white"></div>
              </li>
              <li className="flex items-center px-[35px]   relative">
                <NavLink to="/testimonial" className="">
                  Testimonial
                </NavLink>
                <div className="absolute top-0 right-0 h-full border-r border-white"></div>
              </li>
              <li className="flex items-center text-center px-[35px] relative">
                <NavLink to="/contact-us" className="">
                  Contact Us
                </NavLink>
                <div className="absolute top-0 right-0 h-full border-r border-white"></div>
              </li>
              <li className="flex items-center text-center px-[35px] flex-1">
                <NavLink to="/bitcoin-discount" className="">
                  Bitcoin Discount
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar (Hidden on Desktop) */}
      <div className="md:hidden bg-[#002039] py-1">
        <div className="flex items-center justify-center px-4">
          {/* <h1 className="text-white font-bold text-xl">Menu</h1> */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`${
            isOpen ? "flex flex-col" : "hidden"
          } py-2 text-white font-bold`}
        >
          <li className="px-4 py-2 border-b border-white">
            <FaHome className="inline mr-2" />
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4 py-2 border-b border-white">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li className="px-4 py-2 border-b border-white">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="px-4 py-2 border-b border-white">
            <NavLink to="/faqs">FAQS</NavLink>
          </li>
          <li className="px-4 py-2 border-b border-white">
            <NavLink to="/testimonial">Testimonial</NavLink>
          </li>
          <li className="px-4 py-2 border-b border-white">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li className="px-4 py-2 border-b border-white">
            <NavLink to="/bitcoin-discount">Bitcoin Discount</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
