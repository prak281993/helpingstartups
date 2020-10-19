import React from "react";
import "./PrivateLimitedHeader.scss";
import PrivateLimitedQueryForm from "./PrivateLimitedQueryForm";

function PrivateLimitedHeader() {
  return (
    <header class="private-limited">
      <div class="private-limited__customer-query">
        <div class="private-limited__header">
          <div class="private-limited__header--top">
            <h1>Private Limited Company Registration</h1>
          </div>
          <div class="private-limited__header--bottom">
            <h1>Have a query? Get it resolved immediately</h1>
          </div>
        </div>
        <section class="private-limited-query__section">
          <div
            class="private-limited-query__advantages"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <ul>
              <li class="advantages__item">
                <span class="advantages__item-icon">
                  <img src="assets/svg/rupee.svg" alt="" />
                </span>
                <span class="advantages__item-text">
                  <p>Starting @ Rs 4,999</p>
                </span>
              </li>
              <li class="advantages__item">
                <span class="advantages__item-icon">
                  <img src="assets/svg/piggy-bank.svg" alt="" />
                </span>
                <span class="advantages__item-text">
                  <p>Cost Effective</p>
                </span>
              </li>
              <li class="advantages__item">
                <span class="advantages__item-icon">
                  <img src="assets/svg/ontime.svg" alt="" />
                </span>
                <span class="advantages__item-text">
                  <p>Deliver On Time</p>
                </span>
              </li>
              <li class="advantages__item">
                <span class="advantages__item-icon">
                  <img src="assets/svg/expert-member.svg" alt="" />
                </span>
                <span class="advantages__item-text">
                  <p>Expert Panel</p>
                </span>
              </li>
            </ul>
          </div>
          <div
            class="private-limited-query__formdata"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <PrivateLimitedQueryForm />
          </div>
        </section>
      </div>
    </header>
  );
}

export default PrivateLimitedHeader;
