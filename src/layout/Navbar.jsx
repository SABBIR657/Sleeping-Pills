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
import NavSection from "../components/Home/NavSection";

export default function Navigation() {
 
 
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
      <NavSection/>
      <Hero/>
      <ClientNav/>
    </div>

      </>
 
  );
}
