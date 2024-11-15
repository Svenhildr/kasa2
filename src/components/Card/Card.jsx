import React from "react";
import "../Card/Card.scss";
import { Link } from "react-router-dom";

const Card = ({ idCard, imgCard, titleCard }) => {
  return (
    <Link className="cardItem" to={`../logements/${idCard}`}>
      <h2>{titleCard}</h2>
      <img src={imgCard} alt={titleCard} className="cardImg" />
    </Link>
  );
};

export default Card;
//
