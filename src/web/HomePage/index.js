import React from "react";
import SliderArea from "./Slider";
import ProductArea from "./ProductArea";
import DiscountArea from "./DiscountArea";
import SubscribeArea from "./SubscribeArea";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="homePage">
      <SliderArea />
      <ProductArea />
      <DiscountArea />
      <SubscribeArea />
      <Footer />
    </div>
  );
};

export default HomePage;
