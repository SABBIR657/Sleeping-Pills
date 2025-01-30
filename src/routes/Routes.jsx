import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SleepingTablents from "../pages/products/SleepingTablents.jsx";
import AnixietyMedication from "../pages/Products/AnixietyMedication.jsx";
import PainKillers from "../pages/Products/PainKillers.jsx";
import Nootropics from "../pages/Products/Nootropics.jsx";
import AboutUs from "../components/About-Us/AboutUs.jsx";
import Faqs from "../components/FAQS/Faqs.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import BuyMedicine from "../components/BuyMedicine/BuyMedicine.jsx";

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

     
    ],
   
  },

  {
    
      index: true,
      path: "/products/sleeping-tablets",
      element: <SleepingTablents/>
    
  },

  {
    index: true,
    path: "/products/anxiety-medication",
    element: <AnixietyMedication/>
  },

  {
    index: true,
    path: "/products/painkillers",
    element: <PainKillers/>


  },
  {
    index: true,
    path: "/products/nootropics",
    element: <Nootropics/>
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
  
  
]);

export default routes;
