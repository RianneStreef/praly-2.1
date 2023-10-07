import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/booking.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Consent from "../../components/Consent";

import logoRound from "../../images/Praly-rond.png";

const PavillionBookingPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.english;

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
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
      <Consent language={language} languageToUse={languageToUse} />

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
