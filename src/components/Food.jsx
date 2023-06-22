import React from "react";

import "../styles/Food.css";

import { content } from "../content/languages";

import pizza from "../images/carte/pizza-small.jpg";
import planche from "../images/carte/planches-small.jpg";
import petitDej from "../images/carte/petit-dej.jpg";

const Food = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div>
      <h2>{languageToUse.food}</h2>
      <div className="food-container">
        <div className="food-text">
          <p>{languageToUse.foodIntro}</p>
          <ul>
            <li>{languageToUse.foodIntroLi1}</li>
            <li>{languageToUse.foodIntroLi2}</li>
            <li>{languageToUse.foodIntroLi3}</li>
            <li>{languageToUse.foodIntroLi4}</li>
            <li>{languageToUse.foodIntroLi5}</li>
          </ul>
        </div>
        <div className="food-images">
          <img src={pizza} alt="" className="food-image food-image-1" />
          <img src={planche} alt="" className="food-image food-image-2" />
          <img src={petitDej} alt="" className="food-image food-image-3" />
        </div>
      </div>
    </div>
  );
};

export default Food;
