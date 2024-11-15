import React, { useState } from "react";
import "../Accomodation/Accomodation.scss";
import "../../components/DropDown/DropDown.scss";
import "../../components/Tag/Tag.scss";
import "../../components/Rating/Rating.scss";
import "../../components/Slider/Slider.scss";
import data from "../../data/logements.json";
import Tag from "../../components/Tag/Tag";
import DropDown from "../../components/DropDown/DropDown";
import arrow from "../../Assets/contentHidden.svg";
import { useParams, Navigate } from "react-router-dom";
import StarRating from "../../components/Rating/Rating";
import Slider from "../../components/Slider/Slider";
import PageNotFound from "../PageNotFound/PageNotFound";

export default function Accomodation() {
  const { idCard } = useParams();
  const [logements, setLogements] = useState(data);
  const logement = logements.find((logement) => logement.id === idCard);
  if (!logement) {
    return <Navigate to="*" replace={<PageNotFound />} />;
  } else {
    return (
      <div className="accomodationContainer">
        <Slider pictures={logement.pictures} alt={logement.description} />
        <div className="hostContainer">
          <div className="accomodationInfo">
            <div className="accomodationTitleTag">
              <h1 className="logementTitle">{logement.title}</h1>
              <p className="logementLocation">{logement.location}</p>
              <div className="tagContainer">
                {logement.tags.map((tag, index) => (
                  <Tag key={index} TagTitle={tag} />
                ))}
              </div>
            </div>
            <div className="HostAndRatin">
              <div className="hostInfo">
                <p className="hostName">{logement.host["name"]}</p>
                <img
                  className="hostPicture"
                  src={logement.host["picture"]}
                  alt={logement.host["name"]}
                />
              </div>
              <div className="accomodationRating">
                <StarRating Rating={logement.rating} />
              </div>
            </div>
          </div>
        </div>
        <div className="accomodationDropDown">
          <DropDown
            content={logement.description}
            arrow={arrow}
            title="Description"
          />
          <DropDown title="Équipement" arrow={arrow}>
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment} </li>
              ))}
            </ul>
          </DropDown>
        </div>
      </div>
    );
  }
}
//
