import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AboutUs from "../components/About-Us/AboutUs.jsx";
import Faqs from "../components/FAQS/Faqs.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import BuyMedicine from "../components/BuyMedicine/BuyMedicine.jsx";
import SleepingTablets from "../pages/products/SleepingTablets.jsx";
import AnxietyMedication from "../pages/products/AnxietyMedication.jsx";
import NotrePics from "../pages/products/NotrePics.jsx";
import PainKillers from "../pages/Products/PainKillers";





const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/login",
        element: <SignIn /> ,
      },
      {
        index: true,
        path: "/signup",
        element: <SignUp />,
      },
      {
    
        index: true,
        path: "/products/sleeping-tablets",
        element: <SleepingTablets/>
      
    },
    {
      index: true,
      path: "/products/anxiety-medication",
      element: <AnxietyMedication/>
    },
  
    {
      index: true,
      path: "/products/painkillers",
      element: <PainKillers/>
  
  
    },
    {
      index: true,
      path: "/products/nootropics",
      element: <NotrePics/>
    },
  
    {
      index: true,
      path: "/about-us",
      element: <AboutUs/>
  
    },
    {
       index: true,
       path: "/faqs",
       element: <Faqs/>
    },
    {
        index: true,
        path: "/testimonial",
        element: <Testimonial/>
    },
    {
       index: true,
       path: "/buyMedicine",
       element: <BuyMedicine/>
    },
      
  {
    path: "*",
    element: <NotFound />,
  },
  
  
     
    ],
    
   
  },

 


  
]);

export default routes;
