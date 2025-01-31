import { Outlet } from "react-router-dom";
// import { SecondHeader } from "./Navbar";
import Header from "./Navbar";
import CompanyDetails from "../components/Home/CompanyDetails";
import Medicine from "../components/Home/Medicine";
import ServiceCard from "../components/Home/ServiceCard";
import Medication from "../components/Home/Medication";
import CustomerFeedback from "../components/Home/CustomerFeedback";
import CustomerReview from "../components/Home/CustomerReview";



export default function MainLayout() {
  return (
    <div>
      {/* <HeaderTop /> */}
      {/* <SecondHeader/> */}
      <Header />
      <CompanyDetails/>
      <Medicine/>
      <ServiceCard/>
      <Medication/>
      <CustomerFeedback/>
      <CustomerReview/>
      {/* <PopChat/> */}
      {/* <Footer/> */}
      
      <div className="   min-h-screen       py-20 flex    flex-nowrap justify-start  transition-[padding] duration-200 p-0">
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
     
    </div>
  );
}
