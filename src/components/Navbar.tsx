'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-transparent py-4 px-6 md:px-12 lg:px-24 w-full">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-white">Logo</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white text-sm md:text-md lg:text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Product">Products</Link></li>
          <li><Link href="/Services">Services</Link></li>
          <li><Link href="/Contact">Contact Us</Link></li>
        </ul>

        {/* Desktop Icons */}
        <div className="flex gap-4 text-white text-lg md:text-xl lg:text-2xl">
          <IoSearchOutline />
          <HiOutlineShoppingBag />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-90 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden flex flex-col items-center justify-center gap-6 text-white text-xl`}
      >
        <button className="absolute top-6 right-6 text-3xl" onClick={() => setIsMenuOpen(false)}>
          ✖
        </button>
        <ul className="text-center">
          <li className="py-2"><Link href="/">Home</Link></li>
          <li className="py-2"><Link href="/Product">Products</Link></li>
          <li className="py-2"><Link href="/Services">Services</Link></li>
          <li className="py-2"><Link href="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
