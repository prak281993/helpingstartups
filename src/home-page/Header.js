import React from "react";
import './Header.scss';

function Header() {
  return (
    <header class="header">
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">
            B2B Saas Marketing Breakthroughs
          </span>
          <span class="heading-primary--sub1">Wake Up. Kick SAAS. Repeat.</span>
        </h1>
        <div class="header__buttons">
          <a
            href="#"
            class="custom-btn custom-btn--primary custom-btn--animated"
          >
            Get My SaaS In Gear
          </a>
          <a
            href="#"
            class="custom-btn custom-btn--secondary custom-btn--animated"
          >
            Saas Marketing Insights
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
