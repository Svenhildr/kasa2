import React from "react";

const Banner = ({ imgSRC, text }) => {
  return (
    <div className="banner">
      <h1>{text}</h1>
      <img src={imgSRC} alt="Cliffs" />
    </div>
  );
};

export default Banner;
//
