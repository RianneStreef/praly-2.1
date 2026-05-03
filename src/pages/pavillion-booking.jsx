import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../styles/booking.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import Consent from "../components/Consent";
import logoRound from "../images/Praly-rond.png";

const PavillionBookingPage = ({ language }) => {
  const languages = {
    english: content.english,
    french: content.french,
    dutch: content.dutch,
  };

  const languageToUse = languages[language] || content.english;

  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve) => {
        const existing = document.querySelector(
          'script[src="https://login.smoobu.com/js/Settings/BookingToolIframe.js"]',
        );

        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement("script");
        script.src =
          "https://login.smoobu.com/js/Settings/BookingToolIframe.js";
        script.async = true;
        script.onload = resolve;

        document.body.appendChild(script);
      });
    };

    const initWidget = async () => {
      await loadScript();

      const tryInit = () => {
        const container = document.getElementById("pavillionIframe");

        if (!container || !window.BookingToolIframe) {
          setTimeout(tryInit, 150);
          return;
        }

        container.innerHTML = "";

        window.BookingToolIframe.initialize({
          url: "https://login.smoobu.com/booking-tool/iframe/384298?apartmentId=1165291&lang=fr&locale=fr",
          baseUrl: "https://login.smoobu.com",
          target: "#pavillionIframe",
        });
      };

      tryInit();
    };

    initWidget();
  }, []);

  return (
    <div>
      <Helmet htmlAttributes={{ lang: "fr" }}>
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

      {/* ⚠️ If blocked, temporarily remove */}
      <Consent language={language} languageToUse={languageToUse} />

      <div className="hero-booking hero-booking-pavillion">
        <img src={logoRound} alt="Praly logo" className="hero-logo" />
      </div>

      <h1>{languageToUse.bookingPavillionPageTitle}</h1>

      {/* ✅ Smoobu injects here */}
      <div id="pavillionIframe" style={{ width: "100%", minHeight: "800px" }} />
    </div>
  );
};

export default PavillionBookingPage;
