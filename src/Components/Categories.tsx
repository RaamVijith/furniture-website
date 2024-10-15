import React, { useState } from "react";

interface Category {
  name: string;
  icon: string;
  backgroundImage: string;
}

const categories: Category[] = [
  {
    name: "Sofa",
    icon: "🛋️",
    backgroundImage:"https://img.freepik.com/premium-photo/contemporary-dark-wood-bedroom-interior-refined-furniture-ai-generated_724548-18897.jpg"
  },
  {
    name: "Cabinet",
    icon: "🗄️",
    backgroundImage:
      "https://cdn.webshopapp.com/shops/192182/files/420959784/istockphoto-1353370305-612x612.jpg",
  },
  {
    name: "Shelving Units",
    icon: "📚",
    backgroundImage: "https://cdn.shopify.com/s/files/1/0441/4531/1894/files/Shelved_sideboard_dark_03_b3c9111e-5513-43c8-af62-52e48f99525b_1024x1024.jpg?v=1716976637",
  },
  {
    name: "Tea Table",
    icon: "🍵",
    backgroundImage: "https://www.ikea.com/images/ikea-can-help-with-interior-design-ideas-like-a-darker-blue--95a298fa25003ec27c620b8a22482a56.jpg?f=s",
  },
  {
    name: "Decors",
    icon: "🏺",
    backgroundImage: "https://www.woods-furniture.co.uk/images/news/40.jpg",
  },
  {
    name: "Office Table",
    icon: "💼",
    backgroundImage: "https://q-furniture.com/wp-content/uploads/2022/10/how-to-decorate-with-black-furniture-4-640x316.jpg",
  },
  {
    name: "Storage Furniture",
    icon: "📦",
    backgroundImage: "https://www.ikea.com/images/a-living-room-with-a-black-leather-sofa-and-a-cowhide-footst-47838413c02020d180ec085a3dd6f1df.jpg?f=s",
  },
  {
    name: "Kitchen Furniture",
    icon: "🍳",
    backgroundImage: "https://q-furniture.com/wp-content/uploads/2022/10/how-to-decorate-with-black-furniture-4-640x316.jpg",
  },
];

const FurnitureCategories: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    categories[0].backgroundImage
  );

  return (
    <div
      className="relative h-[80vh] sm:h-[50vh]  bg-cover bg-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 ">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3  gap-10 text-white items-center">
            {categories.map((category) => (
              <div
                key={category.name}
                className="text-center cursor-pointer transition-all duration-300 hover:scale-105 flex flex-row gap-10 items-center"
                onMouseEnter={() =>
                  setBackgroundImage(category.backgroundImage)
                }
              >
                <h2 className="text-6xl font-serif ">{category.name} </h2>

                <div className="text-6xl mb-2 text-green-700">
                  {category.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCategories;
