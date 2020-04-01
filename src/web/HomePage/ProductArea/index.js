import React from "react";
import ProductArea from "./ProductArea";
import SecondProductArea from "./SecondProductArea";

const newArrival = [
  "Bella Two-Piece Block Heel Sandals",
  "Wrap Coat",
  "Men's Lightweight Windbreaker",
  "Double-Breasted Water Resistant Hooded Trench Coat, Created",
  "Men's Lightweight Windbreaker"
];

// const mustHave = [];

const Index = () => {
  return (
    <>
      <div className="productArea pt-120 pb-120 ps-2vw">
        <ProductArea
          products={[...newArrival, newArrival[0]]}
          title="New Arrival"
        />
      </div>

      <div className="productArea pt-70 pb-120 ps-2vw">
        <SecondProductArea products={newArrival} title="Must Have" />
      </div>
    </>
  );
};

export default Index;
