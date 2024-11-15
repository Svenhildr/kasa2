import React from "react";
import Banner from "../../components/Banner/Banner";
import "../Home/Home.scss";
import bannerPic from "../../Assets/photoHome.png";
import "../../components/Banner/banner.scss";
import Card from "../../components/Card/Card";

export default function Home({ logements }) {
  return (
    <div className="Home">
      <div className="bannerContainer">
        <Banner imgSRC={bannerPic} text="Chez vous, partout et ailleurs" />
      </div>
      <div className="cardContainer">
        {logements.map((logement) => {
          return (
            <Card
              key={logement.id}
              idCard={logement.id}
              imgCard={logement.cover}
              titleCard={logement.title}
            />
          );
        })}
      </div>
    </div>
  );
}
