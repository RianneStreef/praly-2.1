import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../../styles/booking.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Consent from "../../components/Consent";
import logoRound from "../../images/Praly-rond.png";

const ChaletBookingPage = ({ language }) => {
  const languages = {
    english: content.english,
    french: content.french,
    dutch: content.dutch,
  };

  const languageToUse = languages[language] || content.english;

  useEffect(() => {
    const loadScript = () =>
      new Promise((resolve) => {
        const existing = document.querySelector(
          'script[src="https://login.smoobu.com/js/Settings/BookingToolIframe.js"]',
        );

        if (existing) return resolve();

        const script = document.createElement("script");
        script.src =
          "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
        script.async = true;
        script.onload = resolve;

        document.body.appendChild(script);
      });

    const initWidget = async () => {
      await loadScript();

      const tryInit = () => {
        const container = document.getElementById("chaletIframe");

        if (!container || !window.BookingToolIframe) {
          setTimeout(tryInit, 150);
          return;
        }

        container.innerHTML = "";

        window.BookingToolIframe.initialize({
          url: "https://login.smoobu.com/en/booking-tool/iframe/384298?apartmentId=1165288",
          baseUrl: "https://login.smoobu.com",
          target: "#chaletIframe",
        });
      };

      tryInit();
    };

    initWidget();
  }, []);

  return (
    <div>
      <Helmet htmlAttributes={{ lang: "en" }}>
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

      <div className="hero-booking hero-booking-chalet">
        <img src={logoRound} alt="Praly logo" className="hero-logo" />
      </div>

      <div className="iframe-container">
        <h1>{languageToUse.bookingChaletPageTitle}</h1>

        {/* Smoobu injects here */}
        <div id="chaletIframe" style={{ width: "100%", minHeight: "800px" }} />
      </div>
    </div>
  );
};

export default ChaletBookingPage;
