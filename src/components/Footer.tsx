import React from "react";
import { FaMapLocationDot, FaPhone, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly text-center bg-gray-800 text-white py-10 px-6">
      
      {/* Categories Section */}
      <div className="mb-6 md:mb-0 space-y-2">
        <h3 className="font-bold text-lg mb-4">Categories</h3>
        <p>Wedding</p>
        <p>Love and Romance</p>
        <p>Gift</p>
        <p>Greetings</p>
        <p>Sympathy</p>
      </div>

      {/* Information Section */}
      <div className="mb-6 md:mb-0 space-y-2">
        <h3 className="font-bold text-lg mb-4">Information</h3>
        <p>About Us</p>
        <p>Delivery Information</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Why Us?</p>
      </div>

      {/* My Account Section */}
      <div className="mb-6 md:mb-0 space-y-2">
        <h3 className="font-bold text-lg mb-4">My Account</h3>
        <p>My Account</p>
        <p>Order History</p>
        <p>Wish Lists</p>
        <p>Newsletter</p>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
        <div className="flex flex-col items-center space-y-4">
          <FaMapLocationDot className="text-2xl" />
          <FaPhone className="text-2xl" />
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-500">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="hover:text-pink-500">
            <PiInstagramLogoFill className="text-xl" />
          </a>
          
        </div>
      
  
      </div>
   
    </div>
  );
};

export default Footer;
