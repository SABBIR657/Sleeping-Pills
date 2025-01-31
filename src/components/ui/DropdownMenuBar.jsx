// import {
//   Button,
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownTrigger,
// } from "@heroui/react";
import { useState } from "react";

export default function DropdownMenuBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
   
    <div className="relative inline-block text-left">

      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#057793] text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        GBP
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#057793] text-white  ring-opacity-5 focus:outline-none z-50"
        >
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-blue-600"
            >
           EUR
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-blue-600"
            >
              USD
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-blue-600"
            >
              CAD
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-blue-600"
            >
             SGD
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white-700 hover:bg-blue-600"
            >
             BTC
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
