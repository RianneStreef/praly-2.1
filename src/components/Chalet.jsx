import React from "react";

import { Link } from "gatsby";

import "../styles/Chalet.css";

import pictoChaletColor from "../images/chalet-couleur.png";

import { content } from "../content/languages";
import Lightbox from "../components/external-components/lightbox/Lightbox";

import videoRoom1 from "../images/videos/chalet.mp4";

import chalet from "../images/picto-chalet.png";
import vueVallee from "../images/icons/vue-vallée.png";
import doubleBed from "../images/icons/lit-double.png";
import sofaBed from "../images/icons/Canap-convertible.png";
import bath from "../images/icons/baignoire.png";
import speaker from "../images/icons/enceinte-bluetooth.png";
import swimmingPool from "../images/icons/piscine.png";
import privateGarden from "../images/icons/transat.png";
import parking from "../images/icons/parking.png";
import clim from "../images/icons/clim.png";
import bebe from "../images/icons/lit-bébé.png";
import bikeParking from "../images/icons/local-velo.png";
import petitDej from "../images/icons/petit-dej.png";
import food from "../images/icons/food.png";

import chaletImage from "../images/new-images/chalet-outside.jpg";

const Chalet = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  const { data } = props;

  let images = data.allContentfulPraly.nodes;

  const lightboxImages = images
    .filter((image) => image.category === "chalet")
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
      <div className="chalet" id="chalet">
        <div className="header-placeholder" />
        <Link
          to={
            language === "french"
              ? "/chalet-booking"
              : language === "english"
              ? "/en/chalet-booking"
              : "/nl/chalet-booking"
          }
          className="book-now book-now-chalet mobile-only"
        >
          {languageToUse.bookNow}
        </Link>
        <div className="lodge-header-container ">
          <div className="picto-outer-container">
            <div className="picto-container-herbergement picto-container-herbergement-chalet ">
              <img
                src={pictoChaletColor}
                alt="Le Chalet"
                className="picto-herbergement "
              />
              <h3 className="h3-room h3-chalet">Le Chalet</h3>
            </div>
          </div>
          <div className="video-container-horizontal">
            <Link
              to={
                language === "french"
                  ? "/chalet-booking"
                  : language === "english"
                  ? "/en/chalet-booking"
                  : "/nl/chalet-booking"
              }
              className="book-now book-now-chalet desktop-only"
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
              src={chaletImage}
              alt="Le Chalet"
              className="room-image-hebergements desktop-only"
            />
          </div>
        </div>
        <div className="room-description-text">
          <p className="room-text">{languageToUse.chaletP1}</p>
          <p className="room-text">{languageToUse.chaletP2}</p>
          <p className="room-text">{languageToUse.chaletP3}</p>
        </div>
        <div className="room-description room-description-chalet">
          <Lightbox lightboxImages={lightboxImages} />
          <div className="room-description-list">
            <h3 className="installations-title">
              {languageToUse.installations}
            </h3>
            <ul className="facilities-list">
              <li>
                <img src={chalet} alt="" className="facilities-icon" />
                {languageToUse.chaletLi1}
              </li>
              <li>
                <img src={vueVallee} alt="" className="facilities-icon" />
                {languageToUse.chaletLi2}
              </li>
              <li>
                <img src={doubleBed} alt="" className="facilities-icon" />
                {languageToUse.chaletLi3}
              </li>
              {/* <li>
                <img src={sofaBed} alt="" className="facilities-icon" />
                {languageToUse.chaletLi4}
              </li> */}
              <li>
                <img src={bath} alt="" className="facilities-icon" />
                {languageToUse.chaletLi5}
              </li>
              <li>
                <img src={speaker} alt="" className="facilities-icon" />
                {languageToUse.chaletLi6}
              </li>
              <li>
                <img src={swimmingPool} alt="" className="facilities-icon" />
                {languageToUse.chaletLi7}
              </li>
              <li>
                <img src={clim} alt="" className="facilities-icon" />
                {languageToUse.chaletLi7b}
              </li>
              <li>
                <img src={privateGarden} alt="" className="facilities-icon" />
                {languageToUse.chaletLi8}
              </li>
              <li>
                <img src={parking} alt="" className="facilities-icon" />
                {languageToUse.chaletLi9}
              </li>
              <li>
                <img src={bebe} alt="" className="facilities-icon" />
                {languageToUse.chaletLi9b}
              </li>
              <li>
                <img src={bikeParking} alt="" className="facilities-icon" />
                {languageToUse.chaletLi10}
              </li>
              {/* <li>
                <img src={petitDej} alt="" className="facilities-icon" />
                {languageToUse.chaletLi11}
              </li>
              <li>
                <img src={food} alt="" className="facilities-icon" />
                {languageToUse.chaletLi12}
              </li> */}
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
                className="herbergement-button chalet-button"
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
