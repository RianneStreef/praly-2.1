import React from "react";

import { Link } from "gatsby";

import "../styles/Footer.css";

import { content } from "../content/languages";

import logo from "../images/icon.png";

import MailChimp from "../components/MailChimp";

const Footer = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  let year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-links-total">
        <div className="footer-logo-container">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-links">
          <div className="footer-link-column footer-link-column-1">
            <p className="logo-text-footer">Les Lodges de Praly</p>
            <div className="footer-address-text">
              <span>Praly, 07360 Les Ollières-sur-Eyrieux</span>
              <br />
              <span>+33 (0)6 79 84 10 08</span> <br />
              <span>
                <a href="mailto:contact@leslodgesdepraly.fr">
                  contact@leslodgesdepraly.fr
                </a>
              </span>
            </div>
          </div>
          <div className="footer-link-column footer-link-column-middle">
            <Link
              to={
                language === "french"
                  ? "/hebergements#appart"
                  : language === "english"
                  ? "/en/hebergements#appart"
                  : "/nl/hebergements#appart"
              }
            >
              L'Appart
            </Link>
            <Link
              to={
                language === "french"
                  ? "/hebergements#chalet"
                  : language === "english"
                  ? "/en/hebergements#chalet"
                  : "/nl/hebergements#chalet"
              }
            >
              Le Chalet
            </Link>
            <Link
              to={
                language === "french"
                  ? "/hebergements#pavillion"
                  : language === "english"
                  ? "/en/hebergements#pavillion"
                  : "/nl/hebergements#pavillion"
              }
            >
              Le Pavillon
            </Link>
          </div>

          <div className="footer-link-column "></div>
        </div>

        <MailChimp language={language} languageToUse={languageToUse} />
      </div>
      <div className="copyright">
        <span>Copyright &copy; Les Lodges de Praly {year}</span>
        <Link to="/legal">
          <span>- {languageToUse.legal} -</span>
        </Link>
        <Link to="/cgv">
          <span>{languageToUse.cgv} -</span>
        </Link>
        <a href="https://vts-webdesign.com" target="_blank">
          <span>VTS Web Design</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
