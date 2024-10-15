import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Author {
  fullName: string;
  picture: string;
  designation: string;
}

interface Testimonial {
  title: string;
  author: Author;
  rating: number;
  description: string;
}

interface RatingProps {
  rating: number;
  showLabel?: boolean;
  className?: string;
}



const testimonialList: Testimonial[] = [
  {
    title: "Very Good Services",
    author: {
      fullName: "Akshay Kumar",
      picture: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description: "When it comes to booking  a holiday, we know everyone likes something different - so we've designed our getaways with you in mind  it comes to booking  a holiday, we know everyone likes something different - so we've designed our getaways with you in min.",
  },
  {
    title: "High Quality Service",
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      designation: "Founder / CEO",
    },
    rating: 4,
    description: "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
  {
    title: "Impressive Skills",
    author: {
      fullName: "Arjun Kapur",
      picture: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      designation: "Founder / CEO",
    },
    rating: 5,
    description: "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind.",
  },
];

const Rating: React.FC<RatingProps> = ({ rating, showLabel = false, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = null;
        if (index <= Math.floor(rating)) {
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
        } else if (rating > i && rating < index + 1) {
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />;
        } else {
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-200 dark:text-opacity-20" />;
        }

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);



const TestimonialSlider: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [active, setActive] = useState<number>(0);
  const { description, author, rating } = testimonialList[index];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
    setActive(selectedIndex);
  };

  return (
    <section className="ezy__testimonial6 dark py-14 md:py-24 bg-white dark:bg-[#2B2B2B] text-zinc-900 dark:text-white mt-[15vh]">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center md:mb-6">
          <div className="sm:max-w-lg text-center">
            <h2 className="text-6xl leading-none md:text-[45px] font-semibold mb-4">Our Customers Speak</h2>
          
          </div>
        </div>

        <div className="flex justify-center text-center">
          <div className="md:max-w-3xl">
            <div className="mt-6">
              <div>
                <p className="opacity-50 mb-6 text-2xl">{description}</p>
                <h4 className="mb-1 text-xl font-medium">{author.fullName}</h4>
                <Rating rating={rating} showLabel={false} />
              </div>
              <img
                src={author.picture}
                alt={author.fullName}
                className="max-w-full h-auto rounded-full mx-auto"
                width="110"
              />
            </div>

            <div className="flex justify-center mt-6">
              <span
                className={`${
                  active === 0
                    ? "bg-gray-700 scale-125"
                    : "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
                } w-3 h-3 cursor-pointer mx-2 rounded-full`}
                onClick={() => handleSelect(0)}
              />
              <span
                className={`${
                  active === 1
                    ? "bg-gray-700 scale-125"
                    : "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
                } w-3 h-3 cursor-pointer mx-2 rounded-full`}
                onClick={() => handleSelect(1)}
              ></span>
              <span
                className={`${
                  active === 2
                    ? "bg-gray-700 scale-125"
                    : "border border-gray-900 dark:border-gray-700 hover:bg-gray-700"
                } w-3 h-3 cursor-pointer mx-2 rounded-full`}
                onClick={() => handleSelect(2)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
