import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import SleepingTablents from "../pages/Products/SleepingTablents";
import AnixietyMedication from "../pages/Products/AnixietyMedication";
import PainKillers from "../pages/Products/PainKillers";
import Nootropics from "../pages/Products/Nootropics";

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
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
