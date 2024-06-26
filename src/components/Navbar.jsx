import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";
import flagNl from "../images/icon-nl.png";

import { content } from "../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: #fff;
  margin-top: 0;
  padding-left: 0;
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #000;
    padding-right: 25px;
    margin: 10px 0;
    font-family: "Quicksand";
    font-size: 20px;
    a {
      color: #000;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #000;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight-blue);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
  }
  flex-flow: column nowrap;
  background-color: #fff;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 5rem;
  transition: transform 0.3s ease-in-out;
`;

const Navbar = (props) => {
  let { open, setOpen } = props;

  let { language, setLanguage, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  function handleSetLanguage(language) {
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="nav-bar">
      <Ul open={open}>
        <li>
          <Link
            to={
              language === "french"
                ? "/"
                : language === "english"
                ? "/en/"
                : "/nl/"
            }
            className="nav-link-mobile"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.home}
          </Link>
        </li>
        <li>
          <Link
            to={
              language === "french"
                ? "/hebergements"
                : language === "english"
                ? "/en/hebergements"
                : "/nl/hebergements"
            }
            className="nav-link-mobile"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.herbergements}
          </Link>
        </li>
        <li>
          <Link
            to={
              language === "french"
                ? "/#groups"
                : language === "english"
                ? "/en/#groups"
                : "/nl/#groups"
            }
            className="nav-link-mobile"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.groups}
          </Link>
        </li>

        <li>
          <Link
            to={
              language === "french"
                ? "/#destination"
                : language === "english"
                ? "/en/#destination"
                : "/nl/#destination"
            }
            className="nav-link-mobile"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.destination}
          </Link>
        </li>

        <li>
          <Link
            to={
              language === "french"
                ? "/#contact"
                : language === "english"
                ? "/en/#contact"
                : "/nl/#contact"
            }
            className="nav-link-mobile"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.contact}
          </Link>
        </li>
        <li>
          <Link
            to={
              language === "french"
                ? "/booking"
                : language === "english"
                ? "/en/booking"
                : "/nl/booking"
            }
            className="nav-link-mobile"
            onClick={() => setOpen(!open)}
          >
            {languageToUse.book}
          </Link>
        </li>

        <li className="social-links-header">
          <div className="nav-item-language">
            <img
              src={flagEn}
              onClick={() => handleSetLanguage("english")}
              className={`flag ${
                languageToUse.language === "english" ? "opaque" : "fade"
              } `}
              alt="set language to English"
            />
            <img
              src={flagFr}
              onClick={() => handleSetLanguage("french")}
              className={`flag ${
                languageToUse.language === "french" ? "opaque" : "fade"
              } `}
              alt="choisir Français"
            />
            <img
              src={flagNl}
              onClick={() => handleSetLanguage("dutch")}
              className={`flag ${
                languageToUse.language === "dutch" ? "opaque" : "fade"
              } `}
              alt="zet Nederlands als taal"
            />
          </div>
        </li>
      </Ul>
    </div>
  );
};

export default Navbar;
