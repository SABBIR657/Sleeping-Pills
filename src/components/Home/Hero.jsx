import { Image } from "@heroui/image";
import { Button } from "@heroui/react";
import { IoLogoAndroid } from "react-icons/io";
const Hero = () => {
  return (
    <div className="flex mt-1">
     
{/*      
     <div className="flex">

    <Image
      alt="HeroUI hero Image"
      src="https://www.sleepingpillsuk.com/images/banner2.jpg"
      width={998}
      height={210}
     
    />


  <div
    id="pill"
    className="absolute 
       float-right w-full top-60 z-50 flex bg-black text-red-600 "
  >
    <div>
      <h1 className="text-lg font-bold pt-3">GET 10% OFF ON EVERY ORDER!</h1>
    </div>
    <div className="mt-2">
      <p className="text-sm font-medium">APPLY CODE</p>
      <h1 className="text-2xl font-extrabold text-red-700">SLEEP2025</h1>
    </div>
  </div>
</div> */}

<div className="relative">
  <Image
    alt="HeroUI hero Image"
    src="https://www.sleepingpillsuk.com/images/banner2.jpg"
    width={998}
    height={210}
    className=" "
  />

  <div
    id="pill"
    className="absolute top-0 right-0 w-[328px] mt-20 mr-4 z-50 flex flex-col justify-center items-center bg-white rounded-lg  p-2 border-1 border-dashed border-black "
  >
    <div className="flex">
    <div>
      <h1 className="text-lg font-bold pt-3 text-center">
        GET 10% OFF ON EVERY ORDER!
      </h1>
    </div>
    <div className="mt-2 text-center">
      <p className="text-sm font-medium">APPLY CODE</p>
      <h1 className="text-2xl font-extrabold text-white bg-[#002039] p-2 border-1 border-dashed border-white">SLEEP2025</h1>
    </div>
    </div>
  </div>
</div>


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
