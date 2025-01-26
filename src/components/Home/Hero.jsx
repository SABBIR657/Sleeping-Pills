import { Image } from "@heroui/image";
import { Button } from "@heroui/react";
import { IoLogoAndroid } from "react-icons/io";
const Hero = () => {
  return (
    <div className="flex mt-1">
      <Image
        alt="HeroUI hero Image"
        src="https://www.sleepingpillsuk.com/images/banner2.jpg"
        width={998}
        height={210}
        
      />
      <div className="bg-[#0586aa] w-[400px]">
      <div className="flex justify-center items-center ">
      <Image
        alt="pills"
        src="https://www.sleepingpillsuk.com/images/free_pills_icon.png"
        width={78}
        />
      </div>
        <div className="flex justify-center items-center  text-xl font-bold text-white mt-2  ">
            <p className="border border-dotted px-4">GET 30 FREE PILLS</p>
        </div>
        <div className="flex justify-center items-center text-white font-bold mt-1">
            <p>With 1st Mobile App Order</p>
        </div>
        <div className="flex justify-center items-center  ">
            <Button
              radius="none"
              className="bg-[#021c31] text-white font-bold border mt-1 hover:bg-[#26cc00]" 
            ><IoLogoAndroid/>READ MORE</Button>
        </div>
        <div className="flex justify-center items-center text-white mb-1"> 
            <p>For Android Device Only</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
