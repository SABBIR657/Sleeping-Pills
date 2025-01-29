
import CommonWrapper from "../../components/CommonWrapper";
import FiveStarRating from "../../components/ui/Star";
import CustomerReview from "../../components/Home/CustomerReview";
import NavSection from "../../components/Home/NavSection";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";
import MedicineCard from "../../components/ui/MedicineCard";

const PainKillers = () => {

  return (
        <div className="">
      <NavSection/>

      <div className="mt-2 bg-[#E9ECEF] p-2 font-bold" >
     <Breadcrumbs>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>PainKillers</BreadcrumbItem>
        </Breadcrumbs>
     </div>

     <div className="pt-3">
      <hr className="border-2 border-gray-700"/>
     </div>
    

      <CommonWrapper>

   

        
        <div className="flex">
          <div>
            <h1 className="text-[20px]">PainKillers</h1>
          </div>
       <div className="ml-auto">
       <div
            id="pill"
            className=" w-[315px]  bg-white rounded-lg  p-1 border-1 border-dashed border-black "
          >
            <div className="flex">
              <div>
                <h1 className="text-lg font-bold pt-3 text-center">
                  GET 10% OFF ON EVERY ORDER!
                </h1>
              </div>
              <div className="mt-2 text-center">
                <p className="text-sm font-medium">APPLY CODE</p>
                <h1 className="text-2xl font-extrabold text-white bg-[#002039] p-2 border-1 border-dashed border-white">
                  SLEEP2025
                </h1>
              </div>
            </div>
          </div>
       </div>

      
        </div>
        <div className="flex">
        <FiveStarRating/>(1 Review)
       </div>
       <div className="mt-6 mb-4">
        
        {/* <Medicine/> */}
        <MedicineCard description="Diazepam is used for the treatment of a variety of disorders including anxiety, insomnia, panic attacks and muscle spasms. Also known as Valium, the most popular brand name, diazepam has been one of the most widely prescribed medicines in the world for the past 40 years.

"
dropdownOptions={["0.00: 30 Pills", "0.00: 60 Pills", "0.00: 100 Pills","0.00: 120 Pills", "0.00: 150 Pills", "0.00: 1800 Pills"]}
imgSrc="https://www.sleepingpillsuk.com/product-img/diazepam.png" radioOptions={[["7.5mg", "10mg"]]} title="Diazepam 10 mg"
/>
       </div>

      {/* <div>
      <FeedbackCard image="" star="5" name="Sidney Jackson" date="Aug 14, 2022" description="Excellent Service"/>
      </div> */}
      <div>
        <CustomerReview/>
      </div>
      </CommonWrapper>
    </div>
  )
}

export default PainKillers

