import Navbar from "./Components/Navbar"
import TopBar from "./Components/Topbar"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeSlider from "./Components/HomeSlider";
import FurnitureSection from "./Components/FurnitureSection";
import FurnitureCategories from "./Components/Categories";
import ScrollingBanner from "./Components/ScrollingBanner";
import ProductsAndService from "./Components/ProductsAndService";
import FurnitureDisplay from "./Components/FurnitureDisplay";
import TestimonialSlider from "./Components/TestimonialSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "./Components/Footer";
import TypographySlider from "./Components/TypographySlider";
import HomeDesignBlog from "./Components/HomeDesignBlog";
import DecorationItemList from "./Components/DecorationItemList";

function App() {

  return (
    < div className="bg-[#131313]">
    <TopBar/>
    <Navbar/>
    <HomeSlider/>
    <FurnitureSection/>
    <FurnitureCategories/>
    <DecorationItemList/>
    <ScrollingBanner/>
    <ProductsAndService/>
    <FurnitureDisplay/>
    <TestimonialSlider/>
    <HomeDesignBlog/>
    <TypographySlider/>
    <Footer/>
    </div>
  )
}

export default App
