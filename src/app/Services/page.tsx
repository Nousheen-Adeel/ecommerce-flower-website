import React from 'react';
import { HiShoppingBag } from "react-icons/hi";
import Navbar from '@/components/Navbar';

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col-reverse md:flex-row items-center lg:px-16">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-[30%] mt-4 px-6">
          <h4 className="font-serif font-bold text-[28px] sm:text-[32px] text-center md:text-left">
            Our Services & Delivery
          </h4>
          <div className="text-center md:text-left pt-4 font-serif text-[18px] sm:text-[20px]">
            <p>
              At nfa Flower Shop, we create stunning floral arrangements for weddings, events, and special occasions. Our florists handpick each bloom to craft bespoke bouquets that reflect your vision.
            </p>
            <p className="text-pink-600 mt-4">
              We ensure timely delivery with flowers arriving fresh and vibrant at your venue or doorstep. Same-day delivery is available for local orders.
            </p>
          </div>
        </div>

        {/* Right Side - Image & Text */}
        <div
          style={{ backgroundImage: "url(/Image/horizontal.png)" }}
          className="bg-no-repeat bg-cover h-[600px] md:h-[850px] w-full md:w-[70%] flex flex-col justify-center items-center text-center px-6"
        >
          <h3 className="text-pink-600 text-[24px] sm:text-[28px] font-semibold">
            Fresh Autumn Collection
          </h3>
          <p className="text-black text-lg sm:text-xl px-4 sm:px-8 mt-4 max-w-lg">
            Embrace the season with our fresh autumn collection – rich, vibrant blooms that capture the warmth and beauty of fall.
          </p>
          <p className="text-pink-600 font-semibold text-xl sm:text-2xl mt-4">$29.99</p>
          <button className="flex bg-pink-600 text-white px-4 py-2 mt-4 gap-2 rounded items-center transition hover:bg-pink-700">
            <HiShoppingBag />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
