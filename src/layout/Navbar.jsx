import { Button } from "@heroui/react";
import React from "react";
import DropdownMenuBar from "../components/ui/DropdownMenuBar";
import Bannner from "../components/Home/Bannner";
import Hero from "../components/Home/Hero";
import ClientNav from "../components/Home/ClientNav";

export default function Navbar() {
  return (
    <div className="mt-2">
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
      <Hero/>
      <ClientNav/>
    </div>
  );
}
