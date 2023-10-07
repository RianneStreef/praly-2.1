import React from "react";
import { Helmet } from "react-helmet";

import "../styles/booking.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Consent from "../components/Consent";

import logoRound from "../images/Praly-rond.png";

const ChaletBookingPage = function (props) {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "fr",
        }}
      >
        <title>{languageToUse.bookingTitleChalet}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionBookingChalet}
        />
        <meta
          name="keywords"
          content={languageToUse.metaKeywordsBookingChalet}
        />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <div className="hero-herbergement">
        <img src={logoRound} alt="" className="hero-logo" />
      </div>
      <div className="iframe-container">
        <h1>{languageToUse.bookingChaletPageTitle}</h1>

        <iframe
          className="iframe-booking iframe-booking-individual"
          src="https://booking.smoobu.com/9A384298?apartmentId=1165288"
        />
      </div>
    </div>
  );
};

export default ChaletBookingPage;
