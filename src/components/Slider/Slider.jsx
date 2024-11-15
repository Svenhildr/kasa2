import { useState } from "react";
import arrow from "../../Assets/contentHidden.svg";

const Slider = ({ pictures }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const Previous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };

  const Next = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  return (
    <div className="sliderContainer">
      <div
        className="slider"
        style={{ backgroundImage: `url("${pictures[currentIndex]}")` }}
      >
        <div className="arrows">
          <div className="leftArrow">
            <img
              src={arrow}
              alt="left Arrow"
              onClick={Previous}
              className={pictures.length != 1 ? "leftArrow" : "arrowHidden"}
            />
          </div>
          <div className="rightArrow">
            <img
              src={arrow}
              alt="Right Arrow"
              onClick={Next}
              className={pictures.length != 1 ? "rightArrow" : "arrowHidden"}
            />
          </div>
        </div>
        <div className="sliderCounter">
          <p
            className={
              pictures.length === 1 ? "sliderCounterHidden" : "sliderCounter"
            }
          >
            {currentIndex + 1} / {pictures.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
