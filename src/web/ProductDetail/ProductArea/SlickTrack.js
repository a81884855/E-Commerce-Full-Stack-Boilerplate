import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SlickTrack = ({ images }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="slickTrackContainer">
      <div
        className="btn"
        style={{
          opacity: selected > 0 ? 1 : 0
        }}
        onClick={() => {
          if (selected > 0) setSelected(selected - 1);
        }}
      >
        <FaAngleUp />
      </div>
      <div className="contennt">
        {images.map((image, i) => (
          <div
            key={i}
            className={`image ${i === selected ? "active" : ""}`}
            onClick={() => setSelected(i)}
            style={{
              display: `${i < selected || i > selected + 3 ? "none" : ""}`
            }}
          >
            <Image src={image} />
          </div>
        ))}
      </div>
      <div
        className="btn"
        style={{
          opacity: selected < images.length - 1 ? 1 : 0
        }}
        onClick={() => {
          if (selected < images.length - 1) setSelected(selected - 1);
          setSelected(selected + 1);
        }}
      >
        <FaAngleDown />
      </div>
    </div>
  );
};

export default SlickTrack;
