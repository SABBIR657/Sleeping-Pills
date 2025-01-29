import { Image } from "@heroui/image";
import { Button } from "@heroui/react";
import { IoLogoAndroid } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-1">
      {/* Banner Image - Full Width on Mobile */}
      <div id="bannerImage" className="w-full relative ">
        <Image
          alt="HeroUI hero Image"
          src="https://www.sleepingpillsuk.com/images/banner2.jpg"
          width={1700}
          height={250}
          className="w-full md:w-auto"
        />

        {/* Pill Section - Inside Image */}
        <div
          id="pill"
          className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-[250px] lg:h-[80px]
          w-[80%] md:w-[315px] md:h-[70px] bg-white rounded-lg p-2 border border-dashed border-black z-50 lg:ml-[20rem] lg:mt-20  lg:flex"
        >
          <h1 className="text-sm font-bold mt-4 text-center">
            GET 10% OFF ON EVERY ORDER!
          </h1>
          <div className="mt-2 text-center">
            <div className="">
              <p className="text-sm font-medium ">APPLY CODE</p>
              <h1 className="lg:text-lg   font-bold text-white bg-[#002039] p-1 border border-dashed border-white">
                SLEEP2025
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Offer */}
      <div className="bg-[#0586aa] w-full md:w-[400px] mt-5 md:mt-0">
        <div className="flex justify-center items-center">
          <div id="pills-icon">
            <Image
              alt="pills"
              src="https://www.sleepingpillsuk.com/images/free_pills_icon.png"
              width={78}
            />
          </div>
        </div>
        <div className="flex justify-center items-center text-xl font-bold text-white mt-2">
          <p className="border border-dotted px-4">GET 30 FREE PILLS</p>
        </div>
        <div className="flex justify-center items-center text-white font-bold mt-1">
          <p>With 1st Mobile App Order</p>
        </div>
        <div className="flex justify-center items-center">
          <Button
            radius="none"
            className="bg-[#021c31] text-white font-bold border mt-1 hover:bg-[#26cc00]"
          >
            <IoLogoAndroid /> READ MORE
          </Button>
        </div>
        <div className="flex justify-center items-center text-white mb-1">
          <p>For Android Device Only</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
