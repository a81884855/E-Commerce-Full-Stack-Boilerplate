import React from "react";
import Widget from "./Widget";
import Filter from "./Filter";
import Size from "./Size";
import Color from "./Color";

const SideBar = () => {
  return (
    <div>
      <Widget />
      <Filter />
      <Size />
      <Color />
    </div>
  );
};

export default SideBar;
