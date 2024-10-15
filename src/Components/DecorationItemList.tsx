import { useState } from 'react';
import { BiHeart, BiSearch } from 'react-icons/bi';
import { LuArrowUpDown } from 'react-icons/lu';

interface Category {
  name: string;
  count: number;
}

interface Item {
  name: string;
  category: string;
  price: { min: number; max: number };
  image: string;
  hoverImage: string;
  onSale: boolean;
}

const categories: Category[] = [
  { name: 'Home Decoration', count: 12 },
  { name: 'Office Decoration', count: 40 },
  { name: 'Indoor Decoration', count: 60 },
  { name: 'Outdoor Decoration', count: 10 },
];

const items: Item[] = [
  {
    name: 'Single Seater Sofa Chair',
    category: 'OFFICE DECORATION',
    price: { min: 212.10, max: 215.20 },
    image: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-2-02.jpg',
    hoverImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-2-01.jpg',
    onSale: false,
  },
  {
    name: 'Handmade Floral Vase',
    category: 'OFFICE DECORATION',
    price: { min: 16.65, max: 17.80 },
    image: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-05.jpg',
    hoverImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-04.jpg',
    onSale: true,
  },
  {
    name: 'Creative Bonsai Plant',
    category: 'OFFICE DECORATION, OUTDOOR DECORATION',
    price: { min: 11.10, max: 11.50 },
    image: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-7-02.jpg',
    hoverImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-7-01.jpg',
    onSale: true,
  },
  {
    name: 'Handmade Floral Vase',
    category: 'OFFICE DECORATION',
    price: { min: 16.65, max: 17.80 },
    image: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-05.jpg',
    hoverImage: 'https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/shop-1-04.jpg',
    onSale: true,
  },
];

const DecorationItemList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Office Decoration');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <div className="bg-[#2B2B2B] text-gray-200 px-[3vw] py-[10vh]  flex justify-center flex-col items-center">
      <p className="text-orange-500 text-lg md:text-xl mb-1">EXPLORE OUR</p>
      <h3 className="text-4xl md:text-6xl font-semibold mb-16 text-center">Luxurious Haven Collection</h3>

      {/* Categories */}
      <div className="flex justify-between mb-16 gap-4 flex-wrap text-center">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`text-lg md:text-2xl ${
              activeCategory === category.name ? 'text-white underline' : 'text-gray-400'
            }`}
            onClick={() => setActiveCategory(category.name)}
          >
            {category.name}
            <sup className="ml-1">{category.count}</sup>
          </button>
        ))}
      </div>

      {/* Item grid (3 items only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-[#2B2B2B] rounded-lg overflow-hidden"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative">
              <img
                src={hoveredItem === index ? item.hoverImage : item.image}
                alt={item.name}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition duration-300 ease-in-out"
              />
              <div className="absolute top-2 right-2 bg-gray-900 rounded-full p-2">
                <BiHeart className="w-5 h-5" />
              </div>
              {index === 0 && (
                <div className="absolute bottom-2 left-2 flex space-x-2">
                  <LuArrowUpDown className="w-5 h-5" />
                  <BiSearch className="w-5 h-5" />
                </div>
              )}
              {item.onSale && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                  ON SALE
                </div>
              )}
            </div>
            <div className="p-4 sm:p-6 flex flex-col items-center">
              <p className="text-sm sm:text-base text-gray-400 mb-1">{item.category}</p>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1">{item.name}</h3>
              <p className="text-base sm:text-lg">
                ₹ {item.price.min.toFixed(2)} - ₹ {item.price.max.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-3 h-3 rounded-full ${
              currentPage === page ? 'bg-orange-500' : 'bg-gray-600'
            }`}
            onClick={() => setCurrentPage(page)}
          />
        ))}
      </div>
    </div>
  );
};

export default DecorationItemList;
