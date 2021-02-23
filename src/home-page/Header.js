import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            helpingstartup, any time of day
          </span>
          <span className="heading-primary--sub1">
          It's time to Kickstart your startup
          </span>
        </h1>
        <div className="header__buttons">
          <a
            href="/#section-service-registration"
            className="custom-btn custom-btn--primary custom-btn--animated"
          >
            Start a Business
          </a>
          <a
            href="/#section-trademark-services"
            className="custom-btn custom-btn--secondary custom-btn--animated"
          >
            Trademark Services
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
