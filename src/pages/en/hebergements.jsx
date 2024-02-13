import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { Link } from "gatsby";

// import SimpleReactLightbox from "simple-react-lightbox";

import "../../styles/herbergements.css";

import { content } from "../../content/languages";
import intakeInfo from "../../content/intake";

import logoRound from "../../images/Praly-rond.png";

import top from "../../images/top.png";

import Chalet from "../../components/Chalet";
import Pavillion from "../../components/Pavillion";
import Appart from "../../components/Appart";
import Escale from "../../components/Escale";

import Consent from "../../components/Consent";

const HerbergementsPage = function (props) {
  let { language, languageToUse } = props;

  languageToUse = content.english;

  const { data } = props;

  return (
    <div className="herbergements">
      {/* <SimpleReactLightbox> */}
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>{languageToUse.herbergementsTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={languageToUse.metaDescriptionHerbergements}
        />
        <meta
          name="keywords"
          content={languageToUse.metaKeywordsHerbergements}
        />
        <link rel="canonical" href={intakeInfo.domainName} />
      </Helmet>
      <Consent language={language} languageToUse={languageToUse} />

      <Link
        to={
          language === "french"
            ? "/hebergements"
            : language === "english"
            ? "/en/hebergements"
            : "/nl/hebergements"
        }
      >
        <img src={top} className="top-link" alt="Back to top" />
      </Link>
      <div className="hero-herbergement">
        <img src={logoRound} alt="" className="hero-logo" />
        <Link
          to={
            language === "french"
              ? "/hebergements#lodges"
              : language === "english"
              ? "/en/hebergements#lodges"
              : "/nl/hebergements#lodges"
          }
          className="hero-button"
        >
          {languageToUse.herbergementsLink}
        </Link>
      </div>
      <div id="lodges">
        <div className="header-placeholder" />

        <h1>{languageToUse.hebergementsPageTitle}</h1>
      </div>
      <Chalet language={language} languageToUse={languageToUse} data={data} />
      <Appart language={language} languageToUse={languageToUse} data={data} />

      <Pavillion
        language={language}
        languageToUse={languageToUse}
        data={data}
      />
      <Escale language={language} languageToUse={languageToUse} data={data} />
      {/* </SimpleReactLightbox> */}
    </div>
  );
};

export const imagesQuery = graphql`
  query imagesQuery {
    allContentfulPraly(sort: { fields: index }) {
      nodes {
        id
        category
        index
        thumbnail {
          file {
            url
          }
        }
        fullImage {
          file {
            url
          }
        }
      }
    }
  }
`;

export default HerbergementsPage;
