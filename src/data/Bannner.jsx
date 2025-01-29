import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
export default function Bannner() {
  const navigationItems = [
    {
      title: (
        <section className="flex items-center space-x-1">
          <FaHome /> <span>Home</span>
        </section>
      ),
      href: "/",
    },
    { title: "About Us", href: "/about-us" },
    { title: "Products", href: "/products" },
    { title: "FAQS", href: "/faqs" },
    { title: "Testimonials", href: "/testimonials" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact" },
    { title: "Bitcoin Discount", href: "/bitcoin" },
  ];

  return (
    <div>
      <div className="flex g:grid-cols-9 space-x-3 bg-[#0685a9] py-2 mt-1  ">
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
