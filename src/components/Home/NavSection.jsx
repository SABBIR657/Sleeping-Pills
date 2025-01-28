import { useEffect, useState } from 'react';

import { Button } from "@heroui/react";
import Bannner from './Bannner';
import DropdownMenuBar from '../ui/DropdownMenuBar';

const NavSection = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div>
       <div 
    className={`pt-5 ${isSticky ? "fixed top-0 w-[1220px]  justify-center left-30  z-50 bg-white shadow-md max-w[1220px] mx-auto": ""}`}
  >
      <div className="flex items-center justify-between">
        <h1 className="font-extrabold text-4xl uppercase">sleeping pills</h1>
        <img
          src="https://www.sleepingpillsuk.com/images/head_btc.png"
          alt="logo"
          
        />
        <div className="flex items-center space-x-2">
          <Button color="primary" className="bg-black text-white"  variant="ghost" radius="none">
            (0)MyCart
          </Button>
          <DropdownMenuBar />
        </div>
      </div>
      <Bannner />
      </div>
    </div>
  );
}

export default NavSection;
