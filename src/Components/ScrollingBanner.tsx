
const ScrollingBanner = () => {
  return (
    <div className="bg-orange-600 text-white w-full h-[140px] flex items-center justify-between ">
      {/* Center: Marquee Text */}
      <div className=" w-full h-full overflow-hidden ">
        <div className="whitespace-nowrap animate-marquee text-center text-lg flex flex-row items-center justify-center pt-10">
          <span className="mx-4 text-5xl">Diverse Range Of Furniture's.</span>
          <span className="mx-4 text-5xl">Comfort And High Functionality.</span>
          <span className="mx-4 text-5xl">
            Tailored Furniture Functionality.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
