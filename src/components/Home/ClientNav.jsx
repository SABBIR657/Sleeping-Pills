import React from 'react'
import { serviceFeatures } from '../../data/features'
import { NavLink } from 'react-router-dom'
import { FaThumbsUp } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";

const ClientNav = () => {
  return (
    <div>
      <div className='flex  space-x-3 bg-[#0685a9] py-2 mt-1 '>
        {serviceFeatures?.map((service)=>{
             return(
                <NavLink key={service.title} className="text-white font-bold border-r-1 text-center flex-1">
                  <div>
                  {service.title}
                  </div>
              
                    <div>
                    {service.subtitle}
                    </div>
                    

                </NavLink>
            );
        })}

      </div>
    </div>
  )
}

export default ClientNav
