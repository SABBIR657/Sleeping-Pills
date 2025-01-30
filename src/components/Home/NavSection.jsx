import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import Bannner from "./Bannner";
import DropdownMenuBar from "../ui/DropdownMenuBar";

const NavSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`pt-5  w-full max-w-[1220px] mx-auto ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md" : ""
        }`}
      >
        {/* Mobile Responsive Layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Title in Mobile */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <h1 className="font-extrabold text-3xl md:text-4xl uppercase">
              Sleeping Pills
            </h1>
            {/* Right Section (My Cart + Dropdown) for Mobile */}
            <div className="flex items-center space-x-2 md:hidden ">
              <Button
                color="primary"
                className="bg-black text-white"
                variant="ghost"
                radius="none"
              >
                (0) MyCart
              </Button>
              <DropdownMenuBar />
            </div>
          </div>

          {/* Image (Hidden on Mobile) */}
          <img
            src="https://www.sleepingpillsuk.com/images/head_btc.png"
            alt="logo"
            className="hidden md:block"
          />

          {/* Right Section for Larger Screens */}
          <div className="hidden md:flex items-center space-x-2 md:flex-row-reverse ">
            <Button
              color="primary"
              className="bg-black text-white"
              variant="ghost"
              radius="none"
            >
              (0) MyCart
            </Button>
            <DropdownMenuBar />
          </div>
        </div>

        <Bannner />
      </div>
    </div>
  );
};

export default NavSection;
