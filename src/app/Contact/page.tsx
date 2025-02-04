import React from 'react';
import Navbar from '@/components/Navbar';

const Page = () => {
  return (
    <div 
      style={{ backgroundImage: "url(/Image/wedding.png)" }} 
      className="bg-cover min-h-screen bg-center flex flex-col items-center text-center px-6 py-12 md:py-24"
    >   
      <Navbar />  
      
      <h3 className="font-serif font-semibold text-3xl sm:text-4xl md:text-6xl italic mt-12 md:mt-24">
        Wedding Bouquet
      </h3>
      
      <p className="max-w-3xl text-base sm:text-lg md:text-2xl italic mt-6">
        Celebrate your special day with our elegant wedding bouquets, crafted to reflect your unique style. Let our blooms add a touch of beauty and love to your unforgettable moment.
      </p>  
    </div>   
  );
};

export default Page;
