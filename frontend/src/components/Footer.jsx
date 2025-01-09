
import React from 'react';
// import logo from '../assets/frontend_assets/logo.png';
import logo from '../assets/frontend_assets/manya_logo.png';
import { Link } from 'react-router-dom';
import insta from '../assets/frontend_assets/instagram_icon.png';
import whatsapp from '../assets/frontend_assets/whatsapp_icon.png';
import twitter from '../assets/frontend_assets/twitter.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
  return (
    <footer className="background py-10 px-5 border-t border-gray-300 ">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-5">
        {/* Logo and Description */}
        <div>
          <img src={logo} className="w-20 h-auto rounded-lg bg-black shadow-md hover:scale-105 transition-transform" alt="Company Logo" />
          <p className="text-white text-sm hover:text-[#FFD700]">
            {/* Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance. */}
            A saree is not just a piece of cloth, but a timeless symbol of grace, elegance, and tradition, draped in the beauty of culture and heritage.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-medium mb-5 text-white">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {/* <li><Link to="/" className="hover:text-[#FFD700] text-white hover:scale-125">Home</Link></li> */}
            <li><Link to="/" className="hover:text-[#FFD700] text-white hover:scale-125 transform transition-transform duration-200">Home</Link></li>
            <li><Link to="/Collection" className="hover:text-[#FFD700] text-white hover:scale-125">Collection</Link></li>
            <li><Link to="/SilkSaree" className="hover:text-[#FFD700] text-white hover:scale-125">SilkSaree</Link></li>
            <li><Link
              to="/BestSelling"
              className="text-white hover:text-[#FFD700] hover:scale-125 transition-transform duration-200"
            >Best Selling</Link></li>
          </ul>
        </div>




        {/* Get in Touch */}
        <div>
          <p className="text-lg font-medium mb-5 text-white">GET IN TOUCH</p>
          <ul className="text-white">
            <li className="mb-1 hover:text-[#FFD700] text-white transition-transform duration-200" >+91 86888 60223</li>
            {/* <li className="mb-1 hover:text-[#FFD700] text-white">manyacollections@gmail.com</li> */}
            <li className="mb-1 hover:text-[#FFD700] text-white transition-transform duration-200"> Manyacollections@gmail.com</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <p className="text-lg font-medium mb-5 text-white">FOLLOW US</p>
          <div className="flex gap-5">
            {/* <img src={insta} className="w-7 h-7 hover:opacity-80" alt="Instagram" /> */}
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-[#FFD700] transition duration-200 hover:scale-125" />

            {/* <img src={whatsapp} className="w-7 h-7 hover:opacity-80" alt="WhatsApp" /> */}

            <FontAwesomeIcon icon={faWhatsapp} size="2x" className="text-white hover:text-[#FFD700] transition duration-200 hover:scale-125" />


            {/* <img src={twitter} className="w-7 h-7 hover:opacity-80" alt="Twitter" /> */}
            {/* <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" className="hover:color-[#FFD700]"/> */}
            <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-white hover:text-[#FFD700] transition duration-200 hover:scale-125" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10">
        <p className="py-5 text-center t text-xs text-white text-sm hover:text-[#FFD700]">
          © 2024 The Patterns Company - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
