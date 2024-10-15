import React from 'react';

interface BlogPost {
  date: string;
  title: string;
  description: string;
  image: string;
}

const ZoomableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
  <div className="overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      className={`${className} transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rounded-2xl`}
    />
  </div>
);

const MainPost: React.FC = () => (
  <div className="relative h-[50vh] md:h-[70vh] overflow-hidden items-start">
    <ZoomableImage 
      src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/blog-01.jpg" 
      alt="Cozy reading space" 
      className="w-full h-full object-cover rounded-2xl"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 text-white  via-transparent to-transparent">
      <p className="text-orange-500 mb-2 text-sm md:text-base">MAY 27, 2024 - By Designer</p>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">The Modest Living Space Furnishings Ideas</h2>
      <p className="text-sm md:text-base">Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec...</p>
    </div>
  </div>
);

const SecondaryPost: React.FC<BlogPost> = ({ date, title, description, image }) => (
  <div className="flex flex-col sm:flex-row mb-4">
    <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:mr-4">
      <ZoomableImage src={image} alt={title} className="w-full h-40 sm:h-56 object-cover rounded-2xl" />
    </div>
    <div className="w-full sm:w-2/3">
      <p className="text-orange-500 text-sm mb-1">{date}</p>
      <h3 className="text-xl md:text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-sm md:text-base text-gray-400">{description}</p>
    </div>
  </div>
);

const HomeDesignBlog: React.FC = () => {
  const secondaryPosts: BlogPost[] = [
    {
      date: "MAY 27, 2024",
      title: "Tips For Designing Reading Area Space Smartly",
      description: "Cras eget lorem nunc. Fusce nec urna tempus tempus. Zioin a interdum elit. Etiam...",
      image: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-01.jpg"
    },
    {
      date: "MAY 27, 2024",
      title: "Easy Way To Furnish Your Home Affordably",
      description: "Wtiam eu sapien sem. Suspendisse a massa justo. Zioin a interdum elit. Cras eget...",
      image: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-02.jpg"
    },
    {
      date: "MAY 27, 2024",
      title: "Minimalist Modern Modular Kitchen Design",
      description: "Eget lorem nunc rioin a girotia interdum elit. Etiam sapien sem. Suspendisse a...",
      image: "https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-05.jpg"
    }
  ];

  return (
    <div className="bg-[#131313] text-white p-4 md:p-6 mt-16 md:mt-28 mx-10">
      <p className="text-orange-500 text-lg md:text-xl mb-1">GET THE LATEST NEWS</p>
      <h3 className="text-4xl md:text-6xl font-semibold mb-16">Visit Our Blog</h3>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
          <MainPost />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          {secondaryPosts.map((post, index) => (
            <SecondaryPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDesignBlog;
