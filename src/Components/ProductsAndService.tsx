import React from "react";

const ProductsAndService: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-[3vw] py-[15vh] bg-[#2B2B2B] text-white">
      {/* Left Section - FAQ or Text */}
      <div className="w-full md:w-[45vw] space-y-6">
      <p className="text-2xl font-medium text-orange-500">
          PRODUCT RELEASE QUARY
        </p>
        <h2 className="text-6xl font-semibold pb-10">Products & Service</h2>
        <p className="text-2xl font-medium text-orange-500">
          For furniture purchases, do you have financing options?
        </p>
        <p className="text-lg text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique
          sollicitudin nibh sit amet. Ultrices eros in cursus turpis.
        </p>

        {/* Collapsible Questions */}
        <div className="space-y-4">
          <div className="border-t border-gray-700 pt-4">
            <button className="w-full text-left font-normal text-3xl py-7">Do you have eco-friendly furniture?</button>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <button className="w-full text-left font-normal text-3xl py-7">Is it possible to follow the delivery of my furniture?</button>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <button className="w-full text-left font-normal text-3xl py-7">Do you offer design consultations?</button>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <button className="w-full text-left font-normal text-3xl py-7">Are custom orders accepted for furniture that isn't in stock?</button>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-[45vw] mt-8 md:mt-0 flex justify-center">
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg"
          alt="Furniture example"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductsAndService;
