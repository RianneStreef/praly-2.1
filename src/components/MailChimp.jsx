import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

import "../styles/MailChimp.css";

import { content } from "../content/languages";

function MailChimp(props) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  let { language, languageToUse } = props;

  language === "english" ? (languageToUse = content.english) : null;
  language === "french" ? (languageToUse = content.french) : null;
  language === "dutch" ? (languageToUse = content.dutch) : null;

  function errorHandling(data) {
    // your error handling
  }

  const handleSubmit = () => {
    console.log("sending to MailChimp");
    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        errorHandling(data);
      } else {
        setSubmitted(true);
      }
    });
  };

  return (
    <div className="subscribe-component">
      {submitted ? (
        <form className="subscribe">
          <div>
            <p>{languageToUse.subscribeConfirmation}</p>
          </div>
        </form>
      ) : (
        <form>
          <div>
            <p className="subscribe-text">{languageToUse.subscribeText}</p>
          </div>
          <div>
            <input
              className="subscribe-input"
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder={languageToUse.email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="button-container center-button-container">
              <button
                type="button"
                aria-label="Subscribe"
                onClick={() => handleSubmit()}
                className="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default MailChimp;
