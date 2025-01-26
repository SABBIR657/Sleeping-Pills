import { Outlet } from "react-router-dom";
// import { SecondHeader } from "./Navbar";
import Footer from "./Footer";
import Header from "./Navbar";
import CompanyDetails from "../components/Home/CompanyDetails";
import Medicine from "../components/Home/Medicine";
import ServiceCard from "../components/Home/ServiceCard";
import Medication from "../components/Home/Medication";
import CustomerFeedback from "../components/Home/CustomerFeedback";

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

      <div className="   min-h-screen       py-20 flex max-h-full   flex-nowrap justify-start  transition-[padding] duration-200 p-0">
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
