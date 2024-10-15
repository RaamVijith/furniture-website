import React, { useState } from 'react';

const logos = [
  { name: 'Brown Donkey', style: 'font-serif italic', bgImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-01.jpg' },
  { name: 'Baletic', style: 'font-sans', bgImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-02.jpg' },
  { name: 'Maskan', style: 'font-serif', bgImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-03.jpg' },
  { name: 'Saltwater', style: 'font-script', bgImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-04.jpg' },
  { name: 'Amishar', style: 'font-serif italic', bgImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Brand-Logo-BG-Images-05.jpg' },
];

const TypographySlider: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-5 bg-[#2B2B2B] text-white mt-[15vh]">
      {logos.map((logo, index) => (
        <div 
          key={index} 
          className="border-r border-gray-700 last:border-r-0 relative overflow-hidden"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="h-48 flex items-center justify-center px-4 relative z-10">
            <span className={`text-4xl ${logo.style} whitespace-nowrap`}>
              {logo.name}
            </span>
          </div>
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out ${
              hoveredIndex === index ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ backgroundImage: `url(${logo.bgImage})` }}
          />
        </div>
      ))}
    </div>
  );
};

export default TypographySlider;