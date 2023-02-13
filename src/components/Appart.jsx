import React from "react";

import { Link } from "gatsby";

import "../styles/Appart.css";

import pictoAppartColor from "../images/appart-couleur.png";

import { content } from "../content/languages";
import Lightbox from "../components/external-components/lightbox/Lightbox";

import appart from "../images/picto-appart.png";
import vueVillage from "../images/icons/vue-village.png";
import doubleBed from "../images/icons/lit-double.png";
import sofaBed from "../images/icons/Canap-convertible.png";
import douche from "../images/icons/douche.png";
import speaker from "../images/icons/enceinte-bluetooth.png";
import swimmingPool from "../images/icons/piscine.png";
import privateGarden from "../images/icons/transat.png";
import parking from "../images/icons/parking.png";
import bikeParking from "../images/icons/velo.png";
import clim from "../images/icons/clim.png";
import bebe from "../images/icons/lit-bébé.png";

import appartImage from "../images/appart-main.jpg";

const Appart = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  const { data } = props;

  let images = data.allContentfulPraly.nodes;

  const lightboxImages = images
    .filter((image) => image.category === "appart")
    .map((image) => {
      return {
        id: image.index,
        src: image.fullImage.file.url,
        thumbnail: image.thumbnail.file.url,
        alt: "",
      };
    });

  return (
    <>
      <div className="appart" id="appart">
        <div className="header-placeholder" />
        <Link
          to="/appart-booking"
          className="book-now book-now-appart mobile-only"
        >
          {languageToUse.bookNow}
        </Link>
        <div className="lodge-header-container ">
          <div className="picto-outer-container">
            <div className="picto-container-herbergement picto-container-herbergement-appart ">
              <img
                src={pictoAppartColor}
                alt="L'Appart"
                className="picto-herbergement "
              />
              <h3 className="h3-room h3-appart">L'Appart</h3>
            </div>
          </div>
          <div className="video-container-horizontal">
            <Link
              to="/appart-booking"
              className="book-now book-now-appart desktop-only"
            >
              {languageToUse.bookNow}
            </Link>

            <img
              src={appartImage}
              alt="L'Appart"
              className="room-image-hebergements desktop-only"
            />
          </div>
        </div>
        <div className="room-description-text">
          <p className="room-text">{languageToUse.appartP1}</p>
          <p className="room-text">{languageToUse.appartP2}</p>
          <p className="room-text">{languageToUse.appartP3}</p>
        </div>
        <div className="room-description room-description-appart">
          <Lightbox lightboxImages={lightboxImages} />
          <div className="room-description-list">
            <h3 className="installations-title">
              {languageToUse.installations}
            </h3>
            <ul className="facilities-list">
              <li>
                <img src={appart} alt="" className="facilities-icon" />
                {languageToUse.appartLi1}
              </li>
              <li>
                <img src={vueVillage} alt="" className="facilities-icon" />
                {languageToUse.appartLi2}
              </li>
              <li>
                <img src={doubleBed} alt="" className="facilities-icon" />
                {languageToUse.appartLi3}
              </li>
              <li>
                <img src={sofaBed} alt="" className="facilities-icon" />
                {languageToUse.appartLi4}
              </li>
              <li>
                <img src={douche} alt="" className="facilities-icon" />
                {languageToUse.appartLi5}
              </li>
              <li>
                <img src={speaker} alt="" className="facilities-icon" />
                {languageToUse.appartLi6}
              </li>
              <li>
                <img src={swimmingPool} alt="" className="facilities-icon" />
                {languageToUse.appartLi7}
              </li>
              <li>
                <img src={parking} alt="" className="facilities-icon" />
                {languageToUse.appartLi8}
              </li>
              <li>
                <img src={bebe} alt="" className="facilities-icon" />
                {languageToUse.appartLi9}
              </li>
            </ul>
            <p className="room-text">{languageToUse.appartLiExtrasTitle}</p>
            <ul>
              {/* <li className="room-text">{languageToUse.appartLiExtra1}</li> */}
              <li className="room-text">{languageToUse.appartLiExtra2}</li>
            </ul>
            <div className="button-container">
              <Link
                to="/appart-booking"
                className="herbergement-button appart-button"
              >
                {languageToUse.bookNow}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appart;
