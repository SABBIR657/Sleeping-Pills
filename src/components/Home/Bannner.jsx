// import { NavLink } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
// import { useState } from "react";

// export default function Bannner() {
//   const [showSubmenu, setShowSubmenu] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleMouseEnter = () =>{
//     setIsDropdownOpen(true)
//   }
//   const handleMouseLeave = () =>{
//     setIsDropdownOpen(false);
//   }

//   const navigationItems = [
//     {
//       title: (
//         <section className="flex items-center pl-8 space-x-1">
//           <FaHome /> <span>Home</span>
//         </section>
//       ),
//       href: "/",
//     },
//     { title: "About Us", href: "/about" },
//     {
//       title: "Products",
//       href: "/products",
//       submenu: [
//         { title: "Sleeping Tablets", href: "/products/sleeping-tablets" },
//         { title: "Anxiety Medication", href: "/products/anxiety-medication" },
//         { title: "Painkillers", href: "/products/painkillers" },
//         { title: "Nootropics", href: "/products/nootropics" },
//       ],
//     },
//     { title: "FAQS", href: "/faqs" },
//     { title: "Testimonials", href: "/testimonials" },
//     { title: "Blog", href: "/blog" },
//     { title: "Contact Us", href: "/contact" },
//     { title: "Bitcoin Discount", href: "/bitcoin" },
//   ];

//   return (

//     <div>
//       <div className=" flex  space-x-3 bg-[#0685a9] py-2 mt-1  ">
       
//           <div
       
            
//             className="text-white  font-bold border-r-2 w-full px-0   sm:flex gap-[1px] "
//             onMouseEnter={() => navlink.submenu && setShowSubmenu(true)}
//             onMouseLeave={() => navlink.submenu && setShowSubmenu(false)}
//           >
//             <NavLink
//               to={navlink.href}
//               className="text-white font-bold   text-center flex-1"
//             >
//               {navlink?.title}
//             </NavLink>

//             {/* Submenu */}
//             {navlink.submenu && showSubmenu && (
//               <div className="relative  left-0 mt-2 bg-white shadow-lg rounded-lg p-2 ">
//                 {navlink.submenu.map((item) => (
//                   <NavLink
//                     key={item.title}
//                     to={item.href}
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     {item.title}
//                   </NavLink>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
export default function Bannner() {
  const navigationItems = [
    {
      title: (
        <section className="flex items-center pl-7 space-x-1">
          <FaHome /> <span>Home</span>
        </section>
      ),
      href: "/",
    },
    { title: "About Us", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "FAQS", href: "/faqs" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
    { title: "Bitcoin Discount", href: "/bitcoin" },
  ];

  return (
    <div>
      <div className="flex g:grid-cols-9 space-x-3 bg-[#0685a9] py-2 mt-1 ">
        {navigationItems?.map((navlink) => {
          return (
            <NavLink
              key={navlink.title}
              to={navlink.href}
              className="text-white font-bold border-r-1 text-center flex-1"
            >
              {navlink?.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
