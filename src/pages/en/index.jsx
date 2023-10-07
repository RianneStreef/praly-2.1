import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../../styles/global.css";

import { Link } from "gatsby";

// import SimpleReactLightbox from "simple-react-lightbox";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import Intro from "../../components/Intro";
import Destination from "../../components/Destination";
import Contact from "../../components/Contact";

import Consent from "../../components/Consent";

import top from "../../images/top.png";

const IndexPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.english;

  useEffect(() => {
    const top = document.getElementById("top");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        top.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !top.classList.contains(scrollDown)) {
        top.classList.remove(scrollUp);
        top.classList.add(scrollDown);
      } else if (
        currentScroll < lastScroll &&
        top.classList.contains(scrollDown)
      ) {
        top.classList.remove(scrollDown);
        top.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  });

  return (
    <div>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>{languageToUse.indexTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={languageToUse.metaDescription} />
        <meta name="keywords" content={languageToUse.metaKeywords} />
        <link rel="canonical" href={intakeInfo.domainName} />
        <script
          src="https://cdn2.woxo.tech/a.js#60ca0c172d51e300159c2b7c"
          async
          data-usrc
        ></script>
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <Link
        to={
          language === "french" ? "/" : language === "english" ? "/en/" : "/nl/"
        }
        id="top"
        className="scroll-down"
      >
        <img src={top} className="top-link" alt="Back to top" />
      </Link>
      <Intro language={language} languageToUse={languageToUse} />
      <Destination language={language} languageToUse={languageToUse} />
      <div data-mc-src="f74096ba-47e0-4c7f-872a-0e4f2149245c#instagram" />

      <Contact language={language} languageToUse={languageToUse} />
    </div>
  );
};

export default IndexPage;
