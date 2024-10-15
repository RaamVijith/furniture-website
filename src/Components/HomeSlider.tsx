import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for arrows

// Custom Left Arrow Component
const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <FaChevronLeft size={30} />
    </div>
  );
};

// Custom Right Arrow Component
const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <FaChevronRight size={30} />
    </div>
  );
};

const HomeSlider: React.FC = () => {
  const settings = {
    dots: false, // Remove the dots at the bottom
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Smooth transition between images
    nextArrow: <NextArrow />, // Use custom right arrow
    prevArrow: <PrevArrow />, // Use custom left arrow
  };

  const slides = [
    {
      id: 1,
      image:
        "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-05.jpg",
    },
    {
      id: 2,
      image:
        "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Home-1-slider-img-04.jpg",
    },
  ];

  return (
    <div className="relative w-full h-screen -mt-[100px]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-screen overflow-hidden">
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-1000 transform hover:scale-100"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
              }}
            >
              {/* Overlay content */}
              <div className="flex items-start pt-[20vh] justify-center h-full bg-black bg-opacity-40 text-white">
                <div className="text-center px-4 md:px-8">
                  <h1 className="text-2xl font-semibold mb-4 text-orange-600">
                    TIMELESS ELAGENCE
                  </h1>
                  <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                    Discover Furniture's For Living
                  </h1>
                  <p className="text-lg md:text-xl mb-6 px-[30vw] pt-5">
                    Timeless Elegance for Your Space Timeless Elegance for Your
                    Space Timeless Elegance for Your Space Timeless Elegance for
                    Your Space Timeless Elegance for Your Space Timeless
                    Elegance for Your Space Timeless Elegance for Your Space
                    Timeless Elegance for Your Space Timeless
                  </p>

                  <button className="group ml-[35vw] lg:ml-[40vw] xl:ml-[45vw] justify-center flex items-center mt-[5vh] px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out">
                    <span className="mr-2">Shop Now</span>
                    <span className="flex items-center justify-center w-8 h-8 bg-white text-orange-500 rounded-full group-hover:bg-orange-500 group-hover:text-white transition duration-300 ease-in-out">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>
                  </button>

                
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
