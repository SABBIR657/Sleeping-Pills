import CommonWrapper from "../../components/CommonWrapper";
import FiveStarRating from "../../components/ui/Star";

// import Medicine from "../../components/Home/Medicine";
// import FeedbackCard from "../../components/ui/FeedbackCard";
import CustomerReview from "../../components/Home/CustomerReview";
import NavSection from "../../components/Home/NavSection";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";
import MedicineCard from "../../components/ui/MedicineCard";

const NotrePics = () => {
  return (
    <div className="">
      <NavSection />

      <div className="mt-2 bg-[#E9ECEF] p-2 font-bold">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Nootropics</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="pt-3">
        <hr className="border-2 border-gray-700" />
      </div>

      <CommonWrapper>
        <div className="flex">
          <div>
            <h1 className="text-[20px]">Nootropics</h1>
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
          <FiveStarRating />
          (1 Review)
        </div>
        <div className="mt-6 mb-4 flex justify-between">
          {/* <Medicine/> */}
          <div>
            <MedicineCard
              description="Modafinil is a medication used to treat narcolepsy (excessive daytime sleepiness) and shift work sleep disorder. Also known by the brand name Provigil, this smart drug also boosts cognitive function resulting in increased focus, improved

"
              dropdownOptions={[
                "0.00: 30 Pills",
                "0.00: 60 Pills",
                "0.00: 100 Pills",
                "0.00: 120 Pills",
                "0.00: 150 Pills",
                "0.00: 1800 Pills",
              ]}
              imgSrc="https://www.sleepingpillsuk.com/product-img/modafinil_200mg.jpg"
              radioOptions={[["7.5mg"]]}
              title="Modafinil 200 mg"
            />
          </div>

          <div>
            <MedicineCard
              description="Armodafinil treats excessive sleepiness and promote wakefulness. Also known by the brand name Nuvigil, this smart drug medication is also used off label to enhance mental ability, concentration

"
              dropdownOptions={[
                "0.00: 30 Pills",
                "0.00: 60 Pills",
                "0.00: 100 Pills",
                "0.00: 120 Pills",
                "0.00: 150 Pills",
                "0.00: 1800 Pills",
              ]}
              imgSrc="https://www.sleepingpillsuk.com/product-img/armodafinil_150mg.jpg"
              radioOptions={[["7.5mg"]]}
              title="Modafinil 200 mg"
            />
          </div>
        </div>

        {/* <div>
    <FeedbackCard image="" star="5" name="Sidney Jackson" date="Aug 14, 2022" description="Excellent Service"/>
    </div> */}
        <div>
          <CustomerReview />
        </div>
      </CommonWrapper>
    </div>
  );
};

export default NotrePics;
