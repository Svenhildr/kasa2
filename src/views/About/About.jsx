import React from "react";
import DropDown from "../../components/DropDown/DropDown";
import arrow from "../../Assets/contentHidden.svg";
import Banner from "../../components/Banner/Banner";
import bannerPic from "../../Assets/photoAbout.png";
import "../../components/DropDown/DropDown.scss";
import "../About/About.scss";

export default function About() {
  const aboutDatas = [
    {
      id: "1",
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      id: "2",
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "3",
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: "4",
      title: "Responsabilité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div className="containerAbout">
      <div className="bannerAbout">
        <Banner imgSRC={bannerPic} className="aboutBanner" />
      </div>
      <div className="DropDownAbout">
        {aboutDatas.map((data, index) => {
          return (
            <DropDown
              content={data.content}
              key={index}
              title={data.title}
              arrow={arrow}
            />
          );
        })}
      </div>
    </div>
  );
}
//
