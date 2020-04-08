import React from "react";
import Menu from "./Menu";
import Cart from "./Cart";

const SideList = target => {
  switch (target) {
    case "menu":
      return <Menu />;
    case "cart":
      return <Cart />;
    default:
      return null;
  }
};

export default SideList;
