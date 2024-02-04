import React from "react";

import { Link } from "gatsby";

import "../styles/Escale.css";

import pictoEscaleColor from "../images/escale-couleur.png";

import { content } from "../content/languages";
import Lightbox from "../components/external-components/lightbox/Lightbox";

import videoRoom1 from "../images/videos/chalet.mp4";

import chalet from "../images/picto-chalet.png";
import vueVallee from "../images/icons/vue-vallée.png";
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

import escaleImage from "../images/escale-main.jpg";

const Chalet = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  const { data } = props;

  let images = data.allContentfulPraly.nodes;

  const lightboxImages = images
    .filter((image) => image.category === "escale")
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
      <div className="escale" id="escale">
        <div className="header-placeholder" />
        <Link
          to={
            language === "french"
              ? "/escale-booking"
              : language === "english"
              ? "/en/escale-booking"
              : "/nl/escale-booking"
          }
          className="book-now book-now-escale mobile-only"
        >
          {languageToUse.bookNow}
        </Link>
        <div className="lodge-header-container ">
          <div className="picto-outer-container">
            <div className="picto-container-herbergement picto-container-herbergement-escale ">
              <img
                src={pictoEscaleColor}
                alt="L'Escale"
                className="picto-herbergement picto-escale"
              />
              <h3 className="h3-room h3-escale">L'Escale</h3>
            </div>
          </div>
          <div className="video-container-horizontal">
            <Link
              to={
                language === "french"
                  ? "/escale-booking"
                  : language === "english"
                  ? "/en/escale-booking"
                  : "/nl/escale-booking"
              }
              className="book-now book-now-escale desktop-only"
            >
              {languageToUse.bookNow}
            </Link>
            <video
              controls
              autoPlay
              muted
              className="room-video-horizontal room-video-escale mobile-only"
            >
              <source src={videoRoom1} type="video/mp4" />
            </video>
            <img
              src={escaleImage}
              alt="L'Escale"
              className="room-image-hebergements desktop-only"
            />
          </div>
        </div>
        <div className="room-description-text">
          <p className="room-text">{languageToUse.escaleP1}</p>
        </div>
        <div className="room-description room-description-escale">
          <Lightbox lightboxImages={lightboxImages} />
          <div className="room-description-list">
            <h3 className="installations-title">
              {languageToUse.installations}
            </h3>
            <ul className="facilities-list">
              <li>
                <img src={chalet} alt="" className="facilities-icon" />
                {languageToUse.escaleLi1}
              </li>
              <li>
                <img src={vueVallee} alt="" className="facilities-icon" />
                {languageToUse.escaleLi2}
              </li>
              <li>
                <img src={doubleBed} alt="" className="facilities-icon" />
                {languageToUse.escaleLi3}
              </li>
              {/* <li>
                <img src={sofaBed} alt="" className="facilities-icon" />
                {languageToUse.escaleLi4}
              </li> */}
              <li>
                <img src={douche} alt="" className="facilities-icon" />
                {languageToUse.escaleLi5}
              </li>
              {/* <li>
                <img src={speaker} alt="" className="facilities-icon" />
                {languageToUse.escaleLi6}
              </li> */}
              <li>
                <img src={swimmingPool} alt="" className="facilities-icon" />
                {languageToUse.escaleLi7}
              </li>
              <li>
                <img src={clim} alt="" className="facilities-icon" />
                {languageToUse.escaleLi7b}
              </li>
              <li>
                <img src={privateGarden} alt="" className="facilities-icon" />
                {languageToUse.escaleLi8}
              </li>
              <li>
                <img src={parking} alt="" className="facilities-icon" />
                {languageToUse.escaleLi9}
              </li>
              <li>
                <img src={bebe} alt="" className="facilities-icon" />
                {languageToUse.escaleLi9b}
              </li>
              <li>
                <img src={bikeParking} alt="" className="facilities-icon" />
                {languageToUse.escaleLi10}
              </li>
              <li>
                <img src={petitDej} alt="" className="facilities-icon" />
                {languageToUse.escaleLi11}
              </li>
              <li>
                <img src={food} alt="" className="facilities-icon" />
                {languageToUse.escaleLi12}
              </li>
            </ul>
            <p className="room-text">{languageToUse.chaletP4}</p>
            <div className="button-container">
              <Link
                to={
                  language === "french"
                    ? "/chalet-booking"
                    : language === "english"
                    ? "/en/chalet-booking"
                    : "/nl/chalet-booking"
                }
                className="herbergement-button escale-button"
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

export default Chalet;
