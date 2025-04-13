import React, { useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import { content } from "../content/languages";
import "../styles/velo.css";

import logoVelo from "../images/VELO.jpg";
import logoDolceVita from "../images/logo_dolce_via.svg";

import velo1 from "../images/velo1.jpg";

const VeloPage = (props) => {
  let { language, languageToUse, setLanguage } = props;
  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }
  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div className="velo">
      <div className="header-placeholder" />
      <h1 className="velo">{languageToUse.velo}</h1>
      <div className="logos-velo">
        <Link to="https://www.francevelotourisme.com/accueil-velo">
          <img src={logoVelo} className="logo-velo" alt="logo Accueil Vélo" />
        </Link>
        <Link to="https://www.dolce-via.com/fr/">
          <img
            src={logoDolceVita}
            className="logo-velo"
            alt="logo Dolce Vita"
          />
        </Link>
      </div>
      <p className="intro-velo intro-text">{languageToUse.introVelo}</p>
      <h2 className="intro-text" id="intro-velo">
        {languageToUse.ardecheVelo}
      </h2>
      <p className="intro-velo intro-text">
        <span>{languageToUse.introVelo1}</span>
        <span>{languageToUse.introVelo2}</span>
        <span>
          {" "}
          <Link to="https://www.ardeche-a-velo.com">
            {languageToUse.introVelo3}{" "}
          </Link>
        </span>
        <span>{languageToUse.introVelo4}</span>
        <span>
          {" "}
          <Link to="https://www.ardeche-guide.com/voies-douces-d-ardeche">
            {languageToUse.introVelo5}{" "}
          </Link>
        </span>
        <span>{languageToUse.introVelo6}</span>
        <span>
          {" "}
          <Link to="https://via-ardeche.fr/">{languageToUse.introVelo7} </Link>
        </span>
        <span>
          {" "}
          <Link to="https://www.dolce-via.com/fr/">
            {languageToUse.introVelo8}{" "}
          </Link>
        </span>
        <span> {languageToUse.introVelo9} </span>
        <span>
          {" "}
          <Link to="https://www.viarhona.com/">
            {languageToUse.introVelo10}{" "}
          </Link>
        </span>
        <span> {languageToUse.introVelo11} </span>
        <span>
          {" "}
          <Link to="https://www.ardeche-guide.com/decouvrir/top-10-des-experiences-incontournables/ardeche-velo/grande-traversee-ardeche/">
            {languageToUse.introVelo12}{" "}
          </Link>
        </span>
        <span> {languageToUse.introVelo13} </span>
        <span>
          {" "}
          <Link to=" https://www.ardeche-guide.com/decouvrir/top-10-des-experiences-incontournables/ardeche-velo/lardeche-a-velo-electrique/">
            {languageToUse.introVelo14}{" "}
          </Link>
        </span>
        <span> {languageToUse.introVelo15} </span>
        <span>
          {" "}
          <Link to="https://www.ardeche-guide.com/preparer/manger-local/pique-niques-goutez-ardeche/">
            {languageToUse.introVelo16}
          </Link>
        </span>
      </p>
      <div className="images-velo">
        <img src={logoDolceVita} className="logo-velo" alt="logo Dolce Vita" />
      </div>
    </div>
  );
};

VeloPage.Layout = Layout;
export default VeloPage;
