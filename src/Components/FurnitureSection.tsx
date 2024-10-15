import React from "react";

const FurnitureSection: React.FC = () => {
  return (
    <section className="bg-[#131313] text-white py-[100px] px-6 lg:px-24">
      {/* Top section: Text and First Image */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
        {/* Text Section */}
        <div className="text-center lg:text-left pt-10">
          <h1 className="text-xl font-semibold mb-4 text-orange-600">
            HOME DECOR HUB
          </h1>
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            Exceptional Furniture's For Indoor & Outdoor
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 pt-5">
            Ut eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis. Integer dapibus ac dui pretium
            blandit. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </div>

        {/* First Image */}
        <div className="relative w-full lg:w-[45vw] mt-10 lg:mt-0">
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-01.jpg" // Replace with your image link
            alt="Indoor furniture"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Section: Second Image and Text */}
      <div className="flex flex-col lg:flex-row justify-between items-start mt-12">
        {/* Second Image */}
        <div className="relative w-full lg:w-[45vw]">
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-Section-2-02.jpg" // Replace with your image link
            alt="Outdoor furniture"
            className="w-full h-auto object-cover rounded-lg lg:-mt-[150px]" // Adjusted negative margin for responsiveness
          />
        </div>

        {/* Discover Endless Designs Text Section */}
        <div className="mt-12 lg:mt-0 lg:ml-10 text-left">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
            Discover Endless Designs
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0">
            Integer dapibus ac dui pretium blandit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos. Ut
            eleifend mattis ligula, porta finibus urna gravida at. Aenean
            vehicula sodales arcu non mattis.
          </p>
          <ul className="mt-10 space-y-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span> At eleifend mattis
              ligula, porta finibus urna gravida at.
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span> Kenean vehicula
              sodales arcu non mattis.
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span> Gingetger dapibus
              ac dui pretium blans aptent.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FurnitureSection;
