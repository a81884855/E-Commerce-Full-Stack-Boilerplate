import React from "react";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const IOSSlider = withStyles({
  root: {
    margin: "45px 0 15px 5px",
    color: "black",
    height: 2,
    padding: "16px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus,&:hover,&$active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 4
  },
  rail: {
    height: 4,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider);

const Filter = () => {
  const [price, setPrice] = React.useState([20, 240]);

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <div className="filter mt-40 mb-40">
      <h2>Fliter by price</h2>
      <IOSSlider
        value={price}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={() => price}
        min={10}
        max={300}
      />
      <p>
        Price: ${price[0]} - ${price[1]}
      </p>
      <button id="filter-btn">Filter</button>
    </div>
  );
};

export default Filter;
