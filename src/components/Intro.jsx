import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import "../styles/Intro.css";

import { content } from "../content/languages";

import RoomIntro from "../components/RoomIntro";
import Slider from "../components/Slider";
import Food from "../components/Food";

import introImage from "../images/main-image.png";

import privatisation from "../images/famille.png";
import logoRound from "../images/Praly-rond.png";
import facebook from "../images/facebookWhite.png";
import instagram from "../images/instagramWhite.png";

const Intro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div className="intro">
      <div className="hero-container">
        <div className="hero">
          <img src={logoRound} alt="" className="hero-logo" />
          <p className="under-title-hero">{languageToUse.underTitleHero}</p>

          <Link
            to={
              language === "french"
                ? "/booking"
                : language === "english"
                ? "/en/booking"
                : "/nl/booking"
            }
            className="hero-button"
          >
            {languageToUse.heroButton}
          </Link>
          <div className="hero-social">
            <a href="https://www.facebook.com/leslodgesdepraly" target="_blank">
              <img src={facebook} alt="facebook link" className="social-link" />
            </a>
            <a
              href="https://www.instagram.com/leslodgesdepraly/"
              target="_blank"
            >
              <img
                src={instagram}
                alt="instagram link"
                className="social-link"
              />
            </a>
          </div>
        </div>
        <div className="hero-backgrounds">
          <div className="hero-background" id="hero-1" />
          <div className="hero-background" id="hero-2" />
        </div>
      </div>
      <div>
        <h1>Les Lodges de Praly</h1>
        <h2 className="under-title">{languageToUse.underTitle}</h2>
        <div className="intro-container">
          <div className="intro-text">
            <p>{languageToUse.introText1}</p>
            <p className="name-paragraph">
              <i>{languageToUse.introText2}</i>
            </p>
            <p>{languageToUse.introText3}</p>
          </div>
          {/* <img src={introImage} alt="" className="intro-image" /> */}
        </div>
      </div>

      <Slider />

      <RoomIntro language={language} languageToUse={languageToUse} />

      {/* <Food language={language} languageToUse={languageToUse} /> */}

      <div className="groups" id="groups">
        <div className="header-placeholder" />

        <h2>{languageToUse.privatisationTitle1}</h2>
        <h2>{languageToUse.privatisationTitle2}</h2>
        <div className="privatisation">
          <div className="privatisation-icon mobile-only">
            <img src={privatisation} alt="" className="family-icon" />
          </div>
          <div className="privatisation-text">
            <p>
              <span>{languageToUse.privatisationText1}</span>
              <ul>
                <li>{languageToUse.privatisationText2}</li>

                <li>{languageToUse.privatisationText3}</li>
              </ul>
            </p>
            <div className="devis-button-container-desktop">
              <a
                href="mailto:contact@leslodgesdepraly.fr"
                className="devis-button desktop-only"
              >
                {languageToUse.devis}
              </a>
            </div>
          </div>
          <div className="privatisation-icon desktop-only">
            <img src={privatisation} alt="" className="family-icon" />
          </div>
        </div>
      </div>
      <div className="devis-button-container-mobile">
        <a
          href="mailto:contact@leslodgesdepraly.fr"
          className="devis-button mobile-only"
        >
          {languageToUse.devis}
        </a>
      </div>
    </div>
  );
};

export default Intro;
