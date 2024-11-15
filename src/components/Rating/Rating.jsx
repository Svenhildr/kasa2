import React from "react";
import EmptyStar from "../../Assets/EmptyStar.svg";
import FilledStar from "../../Assets/FilledStar.svg";

function StarRating({ Rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        className="etoiles"
        key={i}
        src={i <= Rating ? FilledStar : EmptyStar}
        alt={i <= Rating ? "Filled star" : "Empty star"}
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default StarRating;
