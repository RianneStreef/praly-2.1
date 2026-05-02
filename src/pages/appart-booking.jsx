import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../styles/booking.css";

import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import logoRound from "../images/Praly-rond.png";
import Consent from "../components/Consent";

const AppartBookingPage = ({ language }) => {
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
        const container = document.getElementById("appartIframe");

        if (!container || !window.BookingToolIframe) {
          setTimeout(tryInit, 150);
          return;
        }

        container.innerHTML = "";

        window.BookingToolIframe.initialize({
          url: "https://login.smoobu.com/fr/booking-tool/iframe/384298?apartmentId=1158550",
          baseUrl: "https://login.smoobu.com",
          target: "#appartIframe",
        });
      };

      tryInit();
    };

    initWidget();
  }, []);

  return (
    <div>
      <Helmet htmlAttributes={{ lang: "fr" }}>
        <title>{languageToUse.bookingTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionBooking}
        />
        <meta name="keywords" content={languageToUse.metaKeywordsBooking} />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>

      {/* ⚠️ If widget doesn’t show → temporarily remove */}
      <Consent language={language} languageToUse={languageToUse} />

      <div className="hero-booking hero-booking-appart">
        <img src={logoRound} alt="Praly logo" className="hero-logo" />
      </div>

      <h1>{languageToUse.bookingAppartPageTitle}</h1>

      {/* ✅ Smoobu injects here */}
      <div id="appartIframe" style={{ width: "100%", minHeight: "800px" }} />
    </div>
  );
};

export default AppartBookingPage;
