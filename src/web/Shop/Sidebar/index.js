import React from "react";
import Widget from "./Widget";
import Filter from "./Filter";
import Size from "./Size";
import Color from "./Color";
import Banner from "./Banner";

const SideBar = () => {
  return (
    <div>
      <Widget />
      <Filter />
      <Size />
      <Color />
      <Banner />
    </div>
  );
};

export default SideBar;
