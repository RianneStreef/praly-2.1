import React from "react";
import { Helmet } from "react-helmet";

import "../styles/booking.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import logoRound from "../images/Praly-rond.png";

const PavillionBookingPage = function (props) {
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
        <title>{languageToUse.bookingTitlePavillion}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionBookingPavillion}
        />
        <meta
          name="keywords"
          content={languageToUse.metaKeywordsBookingPavillion}
        />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <div className="hero-herbergement">
        <img src={logoRound} alt="" className="hero-logo" />
      </div>
      <h1>{languageToUse.bookingPavillionPageTitle}</h1>

      <iframe
        className="iframe-booking iframe-booking-individual"
        src="https://booking.smoobu.com/9A384298?apartmentId=1165291"
      />
    </div>
  );
};

export default PavillionBookingPage;
