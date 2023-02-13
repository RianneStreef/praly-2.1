import React from "react";

import "../styles/Contact.css";

import { content } from "../content/languages";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

const Contact = (props) => {
  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;
  return (
    <div id="contact">
      <div className="header-placeholder" />
      <h2>{languageToUse.contactTitle}</h2>

      <h5>{languageToUse.contactIntro}</h5>
      <div className="contact-footer">
        <div className="contact">
          <div className="contact-card">
            <div className="form-container">
              <form
                className="contact-form"
                name="contact"
                method="post"
                data-netlify="true"
                action="/success"
                netlify-honeypot="bot-field"
              >
                <input
                  className="contact-input"
                  type="hidden"
                  name="contact"
                  value="contact"
                />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <input type="hidden" name="form-name" value="contact" />
                <p className="form-items">
                  <label htmlFor="name">{languageToUse.name}</label>
                  <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </p>
                <p className="form-items">
                  <label htmlFor="email">{languageToUse.email}</label>
                  <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </p>
                <p className="form-items">
                  <label htmlFor="message">{languageToUse.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    required
                  ></textarea>
                </p>
                <div className="contact-buttons">
                  <button
                    className="button button-not-centered"
                    type="submit"
                    value="Submit message"
                  >
                    {languageToUse.send}
                  </button>
                  <div className="social-links-footer">
                    <a
                      href="https://www.facebook.com/leslodgesdepraly"
                      target="_blank"
                    >
                      <img
                        src={facebook}
                        alt="facebook link"
                        className="social-link"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/leslodgesdepraly/"
                      target="_blank"
                    >
                      <img
                        src={instagram}
                        alt="instagram link"
                        className="social-link"
                      />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
