import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import DropdownMenuBar from "../components/ui/DropdownMenuBar";
import Bannner from "../components/Home/Bannner";
import Hero from "../components/Home/Hero";
import ClientNav from "../components/Home/ClientNav";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { useState } from "react";

export default function Navigation() {
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
   <>
      {/* <Navbar>
        <NavbarBrand>
          <h1 className="font-extrabold text-4xl uppercase">sleeping pills</h1>
        </NavbarBrand>
       
      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        <img
          src="https://www.sleepingpillsuk.com/images/head_btc.png"
          alt="logo"
        />
      </NavbarContent>
      
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex hidden">
        <Button
            color="primary"
            className="bg-black text-white"
            variant="ghost"
            radius="none"
          >
            (0)MyCart
          </Button>
          <DropdownMenuBar />
        </NavbarItem>
      </NavbarContent>
      
          
       
       
      </Navbar> */}

{/*       
      <Bannner />
      <Hero />
      <ClientNav /> */}



<div className="mt-2">
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
      <Hero/>
      <ClientNav/>
    </div>

      </>
 
  );
}
