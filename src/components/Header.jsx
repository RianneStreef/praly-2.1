import React, { useEffect } from "react";
import { Link } from "gatsby";

import Burger from "../components/Burger";

import NoTextLogo from "../images/logo-dessin-seul-black.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
import flagNl from "../images/icon-nl.png";

import { content } from "../content/languages";

import "../styles/Header.css";

const Header = (props) => {
  let { language, languageToUse, setLanguage } = props;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }
  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  // const opacity = 0.1;
  // let header;

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (typeof window !== "undefined") {
  //       const y = 1 + (window.scrollY || window.pageYOffset);
  //       let o = (opacity + y) / 600;
  //       if (o > 0.85) {
  //         o = 0.85;
  //       }
  //       header = document.getElementById("header");
  //       header.style.backgroundColor = `rgb(255, 255, 255, ${o} `;
  //     }
  //   });
  // });

  return (
    <div className="header" id="header">
      <div className="header-main">
        {/* <div className="promo-holder" /> */}
        <Link
          to={
            language === "french"
              ? "/"
              : language === "english"
              ? "/en/"
              : "/nl/"
          }
          className="logo-link"
        >
          <img className="header-logo" alt="logo" src={NoTextLogo} />
          <p className="header-logo-text">Les Lodges de Praly</p>
        </Link>
        <ul className="header-links hidden-mobile">
          <li>
            <Link
              to={
                language === "french"
                  ? "/"
                  : language === "english"
                  ? "/en/"
                  : "/nl/"
              }
              className="nav-link"
            >
              {languageToUse.home}
            </Link>
          </li>
          <span className="dot">&#8226;</span>
          <li>
            <Link
              to={
                language === "french"
                  ? "/hebergements"
                  : language === "english"
                  ? "/en/hebergements"
                  : "/nl/hebergements"
              }
              className="nav-link"
            >
              {languageToUse.herbergements}
            </Link>
          </li>
          <span className="dot">&#8226;</span>

          <li>
            <Link
              to={
                language === "french"
                  ? "/#groups"
                  : language === "english"
                  ? "/en/#groups"
                  : "/nl/#groups"
              }
              className="nav-link"
            >
              {languageToUse.groups}
            </Link>
          </li>
          <span className="dot">&#8226;</span>

          <li>
            <Link
              to={
                language === "french"
                  ? "/#destination"
                  : language === "english"
                  ? "/en/#destination"
                  : "/nl/#destination"
              }
              className="nav-link"
            >
              {languageToUse.destination}
            </Link>
          </li>
          <span className="dot">&#8226;</span>

          <li>
            <Link
              to={
                language === "french"
                  ? "/#contact"
                  : language === "english"
                  ? "/en/#contact"
                  : "/nl/#contact"
              }
              className="nav-link"
            >
              {languageToUse.contact}
            </Link>
          </li>
          <span className="dot">&#8226;</span>

          <li>
            <Link
              to={
                language === "french"
                  ? "/booking"
                  : language === "english"
                  ? "/en/booking"
                  : "/nl/booking"
              }
              className="nav-link"
            >
              <b> {languageToUse.book}</b>
            </Link>
          </li>
          <li>
            <div className="set-language-header">
              <Link to="/en">
                <img
                  src={flagEn}
                  onClick={() => handleSetLanguage("english")}
                  className={`flag ${
                    languageToUse.language === "english" ? "opaque" : "fade"
                  } `}
                  alt="set language to English"
                />
              </Link>
              <Link to="/">
                <img
                  src={flagFr}
                  onClick={() => handleSetLanguage("french")}
                  className={`flag ${
                    languageToUse.language === "french" ? "opaque" : "fade"
                  } `}
                  alt="choisir Français"
                />
              </Link>{" "}
              <Link to="/nl">
                <img
                  src={flagNl}
                  onClick={() => handleSetLanguage("dutch")}
                  className={`flag ${
                    languageToUse.language === "dutch" ? "opaque" : "fade"
                  } `}
                  alt="zet Nederlands als taal"
                />
              </Link>
            </div>
          </li>
        </ul>

        <div className="hidden-desktop">
          <Burger
            language={language}
            setLanguage={setLanguage}
            languageToUse={languageToUse}
          />
        </div>
      </div>
      <div className="promo-container">
        <Link
          to={
            language === "french"
              ? "/#contact"
              : language === "english"
              ? "/en/#contact"
              : "/nl/#contact"
          }
          className="promo"
        >
          <div>
            <div className="promo-rope"></div>
            <div></div>
          </div>
          <div className="promo-text">
            <p className="promo-text-1">{languageToUse.promoTitle}</p>
            <p className="promo-text-2">{languageToUse.promoText}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
