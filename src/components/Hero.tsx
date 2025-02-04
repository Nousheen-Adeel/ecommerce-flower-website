"use client"; // Add this directive for client-side component

import React, { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State to control mobile menu

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url(/Image/bigflower.png)" }}>
      {/* Background Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <div className="relative flex items-center justify-between w-full p-4 md:p-8 text-white">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic">Logo</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm md:text-md lg:text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Product">Products</Link></li>
          <li><Link href="/Services">Services</Link></li>
          <li><Link href="/Contact">Contact Us</Link></li>
        </ul>

        {/* Icons & Mobile Menu Toggle */}
        <div className="flex gap-4 text-lg md:text-xl lg:text-2xl">
          <IoSearchOutline />
          <HiOutlineShoppingBag />
          {/* Hamburger Icon for Mobile */}
          <RxHamburgerMenu className="md:hidden text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-gray-800 transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center py-4 text-white text-xl">
          <li className="py-2"><Link href="/">Home</Link></li>
          <li className="py-2"><Link href="/Product">Products</Link></li>
          <li className="py-2"><Link href="/Services">Services</Link></li>
          <li className="py-2"><Link href="/Contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Hero Text with Animation */}
      <div className="relative text-center text-white pt-24 md:pt-36">
        <h3 data-aos="fade-up" className="text-4xl md:text-6xl font-serif italic font-bold">
          Earth Laughs in
        </h3>
        <h2 data-aos="zoom-in" className="text-6xl md:text-[120px] lg:text-[180px] font-bold font-serif">
          Flower
        </h2>
      </div>
    </div>
  );
};

export default Hero;
