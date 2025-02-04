import React from 'react';
import Image from 'next/image';
import { HiShoppingBag } from "react-icons/hi";
import Navbar from '@/components/Navbar';

interface Card {
  id: number;
  price: string;
  image: string;
}

const Product = () => {
  const Carddata: Card[] = [
    { id: 1, price: "$29.99", image: "/Image/bouquet2.png" },
    { id: 2, price: "$36.99", image: "/Image/flower.png" },
    { id: 3, price: "$49.99", image: "/Image/vase.png" },
    { id: 4, price: "$59.99", image: "/Image/flower.png" },
    { id: 5, price: "$62.99", image: "/Image/vase.png" },
    { id: 6, price: "$71.99", image: "/Image/bouquet2.png" }
  ];

  return (
    <div>
      <Navbar />
      
      <h3 className="font-serif text-4xl sm:text-5xl px-6 py-10 text-pink-600 font-extrabold text-center">
        Daily Offer!
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {Carddata.map((card) => (
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center" key={card.id}>
            <Image 
              src={card.image} 
              alt="flower" 
              width={300} 
              height={300} 
              className="w-full h-auto rounded-lg object-cover"
            />
            <p className="text-lg sm:text-xl font-bold mt-3">{card.price}</p>
            <button className="flex bg-pink-600 text-white px-4 py-2 mt-3 gap-2 rounded items-center transition hover:bg-pink-700">
              <HiShoppingBag />
              <span>Add to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
