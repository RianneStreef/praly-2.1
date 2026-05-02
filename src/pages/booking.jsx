import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import "../styles/booking.css";

import Consent from "../components/Consent";
import { content } from "../content/languages";
import intakeInfo from "../content/intake";

import logoRound from "../images/Praly-rond.png";

const BookingPage = ({ language }) => {
  // ✅ Clean language handling
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
        const container = document.getElementById("apartmentIframeAll");

        if (!container || !window.BookingToolIframe) {
          setTimeout(tryInit, 150);
          return;
        }

        // Clear previous content (important for navigation)
        container.innerHTML = "";

        window.BookingToolIframe.initialize({
          url: "https://login.smoobu.com/fr/booking-tool/iframe/384298",
          baseUrl: "https://login.smoobu.com",
          target: "#apartmentIframeAll", // ✅ MUST be string selector
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

      {/* ⚠️ If booking doesn't show, temporarily disable this */}
      <Consent language={language} languageToUse={languageToUse} />

      <div className="hero-booking">
        <img src={logoRound} alt="Praly logo" className="hero-logo" />

        <Link
          to={
            language === "french"
              ? "/booking#booking-section"
              : language === "english"
                ? "/en/booking#booking-section"
                : "/nl/booking#booking-section"
          }
          className="hero-button"
        >
          {languageToUse.bookingPageTitle}
        </Link>
      </div>

      <div id="booking-section">
        <div className="header-placeholder" />

        <h2 className="page-subtitle">{languageToUse.bookingPageSubTitle}</h2>

        <div className="additional-info-resas">
          <p>{languageToUse.additionalInfo}</p>
        </div>
      </div>

      {/* ✅ Smoobu injects booking UI here */}
      <div
        id="apartmentIframeAll"
        style={{ width: "100%", minHeight: "800px" }}
      />
    </div>
  );
};

export default BookingPage;
