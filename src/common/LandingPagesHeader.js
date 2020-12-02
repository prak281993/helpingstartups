import React from "react";
import QueryForm from "./QueryForm";
import "./LandingPagesHeader.scss";
import Toast from "../components/Toast";
import { useState } from "react";

function LandingPagesHeader({ startingPrice = "4,999", companyType }) {
  const [displayToast, setDisplayToast] = useState(false);
  const handleToast = (isOpen) => {
    setDisplayToast(isOpen);
    setTimeout(() => setDisplayToast(false), 3000);
  };
  return (
    <header className="landing-page">
      <div className="landing-page__customer-query">
        <div className="landing-page__header">
          <div className="landing-page__header--top">
            <h1>{companyType} Registration</h1>
          </div>
          <div className="landing-page__header--bottom">
            <h1>Have a query? Get it resolved immediately</h1>
          </div>
        </div>
        <section className="landing-page-query__section">
          <div
            className="landing-page-query__advantages"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ul>
              <li className="advantages__item">
                <span className="advantages__item-icon">
                  <img src="assets/svg/rupee.svg" alt="" />
                </span>
                <span className="advantages__item-text">
                  <p>Starting @ Rs {startingPrice}</p>
                </span>
              </li>
              <li className="advantages__item">
                <span className="advantages__item-icon">
                  <img src="assets/svg/piggy-bank.svg" alt="" />
                </span>
                <span className="advantages__item-text">
                  <p>Cost Effective</p>
                </span>
              </li>
              <li className="advantages__item">
                <span className="advantages__item-icon">
                  <img src="assets/svg/ontime.svg" alt="" />
                </span>
                <span className="advantages__item-text">
                  <p>Deliver On Time</p>
                </span>
              </li>
              <li className="advantages__item">
                <span className="advantages__item-icon">
                  <img src="assets/svg/expert-member.svg" alt="" />
                </span>
                <span className="advantages__item-text">
                  <p>Expert Panel</p>
                </span>
              </li>
            </ul>
          </div>
          <div
            className="landing-page-query__formdata"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <QueryForm handleToast={handleToast} />
          </div>
        </section>

        {displayToast ? (
          <Toast message={"Your query has been submitted"} />
        ) : null}
      </div>
    </header>
  );
}

export default LandingPagesHeader;
