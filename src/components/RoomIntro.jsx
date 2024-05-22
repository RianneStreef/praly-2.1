import React from "react";

import { Link } from "gatsby";

import "../styles/RoomIntro.css";

import { content } from "../content/languages";

import chalet from "../images/new-images/chalet-outside.jpg";
import appart from "../images/appart-horizontal.jpg";
import pavillion from "../images/new-images/pavillon-façade.jpg";
import escale from "../images/escale-main-2.jpg";

import pictoChaletColor from "../images/chalet-couleur.png";
import pictoPavillionColor from "../images/pavillon-couleur.png";
import pictoAppartColor from "../images/appart-couleur.png";
import pictoEscaleColor from "../images/escale-couleur.png";

import bonCadeau from "../images/bon-cadeau.jpg";
import bonCadeauDesktop from "../images/bon-cadeau-desktop.jpg";

const RoomIntro = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <>
      <div className="room-intro" id="accommodation">
        <h2 className="hebergements-h2">
          {languageToUse.ourRooms1} {languageToUse.ourRooms2}
        </h2>

        <div className="image-links">
          <Link
            to={
              language === "french"
                ? "/#chalet-intro"
                : language === "english"
                ? "/en/#chalet-intro"
                : "/nl/#chalet-intro"
            }
            className="image-link chalet-image-link"
          >
            <p className="image-link-title">Le Chalet</p>
            <div to="/#chalet-intro" className="extra-info-button desktop-only">
              {languageToUse.moreInfo}
            </div>
          </Link>

          <Link
            to={
              language === "french"
                ? "/#appart-intro"
                : language === "english"
                ? "/en/#appart-intro"
                : "/nl/#appart-intro"
            }
            className="image-link appart-image-link"
          >
            <p className="image-link-title">L'Appart</p>
            <div className="extra-info-button desktop-only">
              {languageToUse.moreInfo}
            </div>
          </Link>

          <Link
            to={
              language === "french"
                ? "/#pavillion-intro"
                : language === "english"
                ? "/en/#pavillion-intro"
                : "/nl/#pavillion-intro"
            }
            className="image-link pavillion-image-link"
          >
            <p className="image-link-title">Le Pavillon</p>
            <div
              to="/#pavillion-intro"
              className="extra-info-button desktop-only"
            >
              {languageToUse.moreInfo}
            </div>
          </Link>

          <Link
            to={
              language === "french"
                ? "/#escale-intro"
                : language === "english"
                ? "/en/#escale-intro"
                : "/nl/#escale-intro"
            }
            className="image-link escale-image-link"
          >
            <p className="image-link-title">L'Escale</p>
            <div to="/#escale-intro" className="extra-info-button desktop-only">
              {languageToUse.moreInfo}
            </div>
          </Link>
        </div>

        <div id="chalet-intro" />

        <div className="room-images-container room-images-container-chalet">
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
          <div className="picto-container picto-container-chalet">
            <img src={pictoChaletColor} alt="Le Chalet" className="picto " />
            <h3 className="h3-room h3-chalet">Le Chalet</h3>
          </div>
          <div className="room-image-container chalet-image">
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

            <img src={chalet} alt="Le Chalet" className="room-image" />
          </div>
        </div>

        <div className="bottom-room-intro">
          <div className="room-intro1 chalet-intro">
            <div className="room-intro-text-block  hidden-mobile-room-intro" />

            <p className="room-intro1-text">{languageToUse.introTextChalet}</p>
          </div>
          <div>
            <div className="bon-cadeau-desktop desktop-only">
              <div className="bon-cadeau-left">
                <div className="bon-cadeau-title">
                  <h2>{languageToUse.bonCadeauTitle1}</h2>
                  <h2>{languageToUse.bonCadeauTitle2}</h2>
                </div>

                <div className="center-button-container">
                  <Link to="/#contact" className="button button-cadeau">
                    {languageToUse.bonCadeauButton}
                  </Link>{" "}
                </div>
              </div>
              <div className="bon-cadeau-image-container desktop-only">
                <img src={bonCadeau} className="bon-cadeau-image" />
              </div>
            </div>
          </div>
        </div>

        <Link
          to={
            language === "french"
              ? "/hebergements/#chalet"
              : language === "english"
              ? "/en/hebergements/#chalet"
              : "/nl/hebergements/#chalet"
          }
          className="room-info-button room-info-button-right desktop-only room-info-button-chalet"
        >
          {languageToUse.moreInfo}
        </Link>

        <div className="room-intro2">
          <Link
            to={
              language === "french"
                ? "/hebergements/#chalet"
                : language === "english"
                ? "/en/hebergements/#chalet"
                : "/nl/hebergements/#chalet"
            }
            className="room-info-button room-info-button-right mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>

        <div className="bon-cadeau-title-container mobile-only">
          <div className="bon-cadeau-title">
            <h2>{languageToUse.bonCadeauTitle1}</h2>
            <h2>{languageToUse.bonCadeauTitle2}</h2>
          </div>

          <div className="center-button-container">
            <Link to="/#contact" className="button button-cadeau">
              {languageToUse.bonCadeauButton}
            </Link>{" "}
          </div>
        </div>
        <div className="bon-cadeau-image-container mobile-only">
          <img src={bonCadeau} className="bon-cadeau-image" />
        </div>

        <div id="appart-intro" />

        <div className="room-intro-inverse">
          <div className="room-images-container-inverse room-images-container-appart">
            <Link
              to={
                language === "french"
                  ? "/appart-booking"
                  : language === "english"
                  ? "/en/appart-booking"
                  : "/nl/appart-booking"
              }
              className="book-now book-now-appart mobile-only"
            >
              {languageToUse.bookNow}
            </Link>
            <div className="picto-container picto-container-appart">
              <img src={pictoAppartColor} alt="L'Appart" className="picto " />
              <h3 className="h3-room h3-appart">L'Appart</h3>
            </div>
            <div className="room-image-container-inverse appart-image">
              <Link
                to={
                  language === "french"
                    ? "/appart-booking"
                    : language === "english"
                    ? "/en/appart-booking"
                    : "/nl/appart-booking"
                }
                className="book-now book-now-appart desktop-only"
              >
                {languageToUse.bookNow}
              </Link>

              <img src={appart} alt="L'Appart" className="room-image" />
            </div>
          </div>
        </div>
        <div className="bottom-room-intro bottom-room-intro-reverse ">
          <div className="room-intro1 appart-intro">
            <div className="room-intro-text-block-inverse hidden-mobile-room-intro" />

            <p className="room-intro1-text">{languageToUse.introTextAppart}</p>
          </div>
          <Link
            to={
              language === "french"
                ? "/hebergements/#appart"
                : language === "english"
                ? "/en/hebergements/#appart"
                : "/nl/hebergements/#appart"
            }
            className="room-info-button room-info-button-left  desktop-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>
        <div className="room-intro2">
          <Link
            to={
              language === "french"
                ? "/hebergements/#appart"
                : language === "english"
                ? "/en/hebergements/#appart"
                : "/nl/hebergements/#appart"
            }
            className="room-info-button room-info-button-left  mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>

        <div id="pavillion-intro" />

        <div className="room-images-container room-images-container-pavillion">
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
          <div className="picto-container picto-container-pavillion">
            <img
              src={pictoPavillionColor}
              alt="Le Pavillon"
              className="picto "
            />
            <h3 className="h3-room h3-pavillion">Le Pavillon</h3>
          </div>
          <div className="room-image-container pavillion-image">
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

            <img src={pavillion} alt="Le Pavillon" className="room-image" />
          </div>
        </div>

        <div className="bottom-room-intro">
          <div className="room-intro1 pavillion-intro">
            <div className="room-intro-text-block hidden-mobile-room-intro " />

            <p className="room-intro1-text ">
              {languageToUse.introTextPavillion}
            </p>
          </div>
          <div className="more-info-button-container">
            <Link
              to={
                language === "french"
                  ? "/hebergements/#pavillion"
                  : language === "english"
                  ? "/en/hebergements/#pavillion"
                  : "/nl/hebergements/#pavillion"
              }
              className="room-info-button room-info-button-right desktop-only"
            >
              {languageToUse.moreInfo}
            </Link>
          </div>
        </div>
        <div className="room-intro2">
          <Link
            to={
              language === "french"
                ? "/hebergements/#pavillion"
                : language === "english"
                ? "/en/hebergements/#pavillion"
                : "/nl/hebergements/#pavillion"
            }
            className="room-info-button room-info-button-right mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>

        <div id="escale-intro" />

        <div className="room-intro-inverse">
          <div className="room-images-container-inverse room-images-container-escale">
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
            <div className="picto-container picto-container-escale">
              <img
                src={pictoEscaleColor}
                alt="L'Escale"
                className="picto picto-escale-small"
              />
              <h3 className="h3-room h3-escale">L'Escale</h3>
            </div>
            <div className="room-image-container-inverse escale-image">
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

              <img src={escale} alt="L'Escale" className="room-image" />
            </div>
          </div>
        </div>
        <div className="bottom-room-intro bottom-room-intro-reverse ">
          <div className="room-intro1 escale-intro">
            <div className="room-intro-text-block-inverse hidden-mobile-room-intro" />

            <p className="room-intro1-text">{languageToUse.introTextEscale}</p>
          </div>
          <Link
            to={
              language === "french"
                ? "/hebergements/#escale"
                : language === "english"
                ? "/en/hebergements/#escale"
                : "/nl/hebergements/#escale"
            }
            className="room-info-button room-info-button-left room-info-button-escale  desktop-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>
        <div className="room-intro2">
          <Link
            to={
              language === "french"
                ? "/hebergements/#escale"
                : language === "english"
                ? "/en/hebergements/#escale"
                : "/nl/hebergements/#escale"
            }
            className="room-info-button room-info-button-left  mobile-only"
          >
            {languageToUse.moreInfo}
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomIntro;
