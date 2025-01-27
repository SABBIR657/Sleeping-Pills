import React from 'react'
import { FaFacebook, FaPinterest, FaYoutube, FaInstagram, FaTiktok, FaLock } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='bg-[#002139] h-[300px]'>
       <footer className=" text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: Support */}
        <div>
          <h2 className="text-lg font-semibold">Support</h2>
          <hr className="my-2 border-gray-600" />
          <p className="text-sm mt-2">Working hours: 24 hours a day</p>
          <p className="text-sm">Working days: Monday to Sunday (7 days a week)</p>
        </div>

        {/* Section 2: Information */}
        <div>
          <h2 className="text-lg font-semibold">Information</h2>
          <div>
          <ul className="mt-4 space-y-2 text-sm flex">
           <div>
           <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Sitemap</li>
           </div>
           <div className='pl-4'>
           <li>Delivery Information</li>
            <li>Terms & Conditions</li>
            <li>Returns</li>
            <li>Share with Friends</li>
           </div>
          </ul>
          </div>
         
        </div>

        {/* Section 3: Shop Online */}
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <img src="https://www.sleepingpillsuk.com/images/secured.png" alt="Shop Online" className="w-12 h-12" />
            <h2 className="text-lg font-semibold">Shop online with us</h2>
          </div>
          <p className="text-sm text-gray-400">Safety & Security</p>
          <img src="https://www.sleepingpillsuk.com/images/dmca_protected_16_120.png" alt="Additional Info" className="mt-4" />
        </div>

        {/* Section 4: Secure Shopping */}
        <div>
          <img src="https://www.sleepingpillsuk.com/images/satisfaction.png" alt="Secure Shopping" className="mb-4" />
          <div className="flex items-center space-x-2 mb-4">
            <FaLock className="text-lg text-white" />
            <h2 className="text-lg font-semibold">Secure Shopping</h2>
          </div>
          <img src="https://www.sleepingpillsuk.com/images/icons_payment.png" alt="Payment Options" className="mb-4" />
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="hover:text-blue-500" />
            <FaPinterest className="hover:text-red-500" />
            <FaYoutube className="hover:text-red-600" />
            <FaInstagram className="hover:text-pink-500" />
            <FaTiktok className="hover:text-black" />
          </div>
        </div>
      </div>
    </footer>
    <div className='bg-black text-white text-center'>2025 © Sleeping Pills. All Rights Reserved.</div>
    </div>
  )
}

export default Footer
