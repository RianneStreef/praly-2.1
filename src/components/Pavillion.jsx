import React from "react";

import { Link } from "gatsby";

import "../styles/Pavillion.css";

import pictoPavillionColor from "../images/pavillon-couleur.png";

import { content } from "../content/languages";
import Lightbox from "../components/external-components/lightbox/Lightbox";

import videoRoom1 from "../images/videos/pavillion.mp4";

import pavillion from "../images/picto-pavillion.png";
import vueVillage from "../images/icons/vue-village.png";
import doubleBed from "../images/icons/lit-double.png";
import sofaBed from "../images/icons/Canap-convertible.png";
import douche from "../images/icons/douche.png";
import speaker from "../images/icons/enceinte-bluetooth.png";
import swimmingPool from "../images/icons/piscine.png";
import privateGarden from "../images/icons/transat.png";
import parking from "../images/icons/parking.png";
import clim from "../images/icons/clim.png";
import bebe from "../images/icons/lit-bébé.png";
import bikeParking from "../images/icons/local-velo.png";
import petitDej from "../images/icons/petit-dej.png";
import food from "../images/icons/food.png";

import pavillionImage from "../images/pavillon-main-2.jpg";

const Pavillion = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  const { data } = props;

  let images = data.allContentfulPraly.nodes;

  const lightboxImages = images
    .filter((image) => image.category === "pavillion")
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
      <div className="pavillion" id="pavillion">
        <div className="header-placeholder" />
        <Link
          to={
            language === "french"
              ? "/pavillion-booking"
              : language === "english"
              ? "/en/pavillion-booking"
              : "/nl/pavillion-booking"
          }
          className="book-now book-now-pavillion mobile-only"
        >
          {languageToUse.bookNow}
        </Link>
        <div className="lodge-header-container">
          <div className="picto-outer-container">
            <div className="picto-container-herbergement picto-container-herbergement-pavillion ">
              <img
                src={pictoPavillionColor}
                alt="Le Pavillon"
                className="picto-herbergement "
              />
              <h3 className="h3-room h3-pavillion">Le Pavillon</h3>
            </div>
          </div>
          <div className="video-container-horizontal">
            <Link
              to={
                language === "french"
                  ? "/pavillion-booking"
                  : language === "english"
                  ? "/en/pavillion-booking"
                  : "/nl/pavillion-booking"
              }
              className="book-now book-now-pavillion desktop-only"
            >
              {languageToUse.bookNow}
            </Link>
            <video
              controls
              autoPlay
              muted
              className="room-video-horizontal room-video-chalet mobile-only"
            >
              <source src={videoRoom1} type="video/mp4" />
            </video>
            <img
              src={pavillionImage}
              alt="Le Chalet"
              className="room-image-hebergements desktop-only"
            />
          </div>
        </div>
        <div className="room-description-text">
          <p className="room-text">{languageToUse.pavillionP1}</p>
          {/* <p className="room-text">{languageToUse.pavillionP2}</p> */}
        </div>
        <div className="room-description room-description-chalet">
          <div className="room-description-images">
            <Lightbox lightboxImages={lightboxImages} />
          </div>
          <div className="room-description-list">
            <h3 className="installations-title">
              {languageToUse.installations}
            </h3>
            <ul className="facilities-list">
              <li>
                <img src={pavillion} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi1}
              </li>
              <li>
                <img src={vueVillage} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi2}
              </li>
              <li>
                <img src={doubleBed} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi3}
              </li>
              <li>
                <img src={douche} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi4}
              </li>
              <li>
                <img src={speaker} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi5}
              </li>
              <li>
                <img src={swimmingPool} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi6}
              </li>
              <li>
                <img src={parking} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi7}
              </li>
              <li>
                <img src={bebe} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi8}
              </li>
              <li>
                <img src={bikeParking} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi10}
              </li>
              <li>
                <img src={petitDej} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi11}
              </li>
              <li>
                <img src={food} alt="" className="facilities-icon" />
                {languageToUse.pavillionLi12}
              </li>
            </ul>
            <p className="room-text">{languageToUse.pavillionP4}</p>
            <div className="button-container">
              <Link
                to={
                  language === "french"
                    ? "/pavillion-booking"
                    : language === "english"
                    ? "/en/pavillion-booking"
                    : "/nl/pavillion-booking"
                }
                className="herbergement-button pavillion-button"
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

export default Pavillion;
