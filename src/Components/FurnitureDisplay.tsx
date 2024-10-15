// src/components/FurnitureDisplay.tsx

import React from 'react';

const FurnitureDisplay: React.FC = () => {
  return (
    <>
      <div className="flex flex-row w-full px-[3vw] py-[8vh] justify-center gap-[20vw]">
        <div className='flex flex-col'>
          <h2 className="text-orange-500 uppercase text-lg font-semibold">SLEEK AND STYLISH</h2>
          <h1 className="text-6xl font-semibold text-white mt-2 xl:whitespace-nowrap">Innovative Furniture's</h1>
        </div>
       
        <p className="mt-4 text-gray-400 max-w-3xl text-lg">
          Class aptent taciti. Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean vehiculles arcu non mattis. Integer dapibus ac dui pretium blandit.
        </p>
      </div>
      
      <section className="relative text-white flex justify-center items-center">
        {/* Image Section */}
        <div className="relative w-[95vw] h-[70vh] flex justify-center items-center">
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/home-hotspot-img-1.jpg"
            alt="Furniture"
            className="w-[100vw] h-[100%] object-cover rounded-lg shadow-2xl"
          />

          {/* Hotspot 1 - Chair */}
          <div className="absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center cursor-pointer">
              <span className="text-white text-xl font-bold">+</span>
            </div>
          </div>

          {/* Hotspot 2 - Vase */}
          <div className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center cursor-pointer">
              <span className="text-white text-xl font-bold">+</span>
            </div>
          </div>

          {/* Hotspot 3 - Chair at Back */}
          <div className="absolute top-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex justify-center items-center cursor-pointer">
              <span className="text-white text-xl font-bold">+</span>
            </div>
          </div>
        </div>

       
      </section>
    </>
  );
};

export default FurnitureDisplay;
