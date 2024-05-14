import React from "react";
import { Helmet } from "react-helmet";

import "../../styles/booking.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Consent from "../../components/Consent";

import logoRound from "../../images/Praly-rond.png";

const AppartBookingPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.dutch;

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <title>{languageToUse.bookingTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionBooking}
        />
        <meta name="keywords" content={languageToUse.metaKeywordsBooking} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <div className="hero-booking hero-booking-appart">
        <img src={logoRound} alt="" className="hero-logo" />
      </div>
      <h1>{languageToUse.bookingAppartPageTitle}</h1>

      <iframe
        className="iframe-booking iframe-booking-individual"
        id="appart-booking"
        src="https://booking.smoobu.com/9A384298?apartmentId=1158550"
      />
    </div>
  );
};

export default AppartBookingPage;
