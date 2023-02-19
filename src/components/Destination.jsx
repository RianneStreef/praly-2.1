import React from "react";
import { Link } from "gatsby";

// import { SRLWrapper } from "simple-react-lightbox";

import "../styles/Destination.css";

import { content } from "../content/languages";

import destinationBanner from "../images/banner-destination.jpg";

// import destination1 from "../images/destination1.jpeg";
// import destination2 from "../images/destination2.jpeg";
// import destination3 from "../images/destination3.jpeg";
// import destination4 from "../images/destination4.jpeg";
// import destination5 from "../images/destination5.jpeg";

import logoLink1 from "../images/logo-ardeche-buissoniere/logo-ardeche.png";
import logoLink2 from "../images/logo-ardeche-buissoniere/logo-sport.png";
import logoLink3 from "../images/logo-ardeche-buissoniere/logo-aqua-rock.png";
import logoLink4 from "../images/logo-ardeche-buissoniere/logo-dolce-via.svg";

const Destination = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="destination" id="destination">
      <div className="header-placeholder" />
      <div className="destination-title-container">
        <h2>{languageToUse.destinationTitle1}</h2>
        <h2>{languageToUse.destinationTitle2}</h2>
      </div>
      <div className="destination-info">
        <div className="destination-text-container-1">
          <p className="destination-text-1">{languageToUse.destinationText1}</p>
          <div className="destination-text-block hidden-mobile" />
        </div>

        <div className="destination-extra">
          <div className="destination-text-container">
            <div className="destination-text">
              <h4>{languageToUse.destinationText2}</h4>
            </div>
            <div className="logo-links-destination">
              <a
                href="https://www.ardeche-buissonniere.fr/preparer-et-reserver/bouger-activite-ardeche-centre-privas-lavoulte/"
                target="blank"
              >
                <img src={logoLink1} alt="" className="logo-link-destination" />
              </a>
              <a href="https://www.eyrieuxsport.fr/" target="blank">
                <img src={logoLink2} alt="" className="logo-link-destination" />
              </a>
              <a href="https://aquarock.fr/fr/parc-aventure/" target="blank">
                <img src={logoLink3} alt="" className="logo-link-destination" />
              </a>
              <a href="https://www.dolce-via.com/fr/" target="blank">
                <img src={logoLink4} alt="" className="logo-link-destination" />
              </a>
            </div>
            <div>
              <p className="destination-text">
                <b className="uppercase"> {languageToUse.destinationText3}</b>
              </p>
              <p className="destination-text">
                {languageToUse.destinationText4}
              </p>
              <p className="destination-text">
                {languageToUse.destinationText5}
              </p>
              <p className="destination-text">
                <b className="uppercase"> {languageToUse.destinationText6}</b>
              </p>
              <p className="destination-text">
                {" "}
                {languageToUse.destinationText65}
              </p>
            </div>
          </div>
          <iframe
            className="iframe-google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Praly,%2007360%20Les%20Olli%C3%A8res-sur-Eyrieux&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className="destination-text-container-2">
          <h4 className="destination-text">{languageToUse.destinationText7}</h4>
          <div>
            <p className="destination-text">
              {languageToUse.destinationText71}
            </p>
            <p className="destination-text">{languageToUse.destinationText8}</p>
            <p className="destination-text">{languageToUse.destinationText9}</p>
            <p className="destination-text">
              {languageToUse.destinationText10}
            </p>
            <p className="destination-text">
              {languageToUse.destinationText11}
            </p>
          </div>
        </div>
      </div>

      {/* <img src={destinationBanner} alt="" className="destination-banner" /> */}
    </div>
  );
};

export default Destination;
