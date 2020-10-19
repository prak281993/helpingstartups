import React from "react";
import "./AllServices.scss";

function AllServices() {
  return (
    <section class="section-allservices">
      <div class="section__allservices">
        <div class="section__allservices-details section__allservices-startbusiness">
          <div class="section__allservices-details--header">
            <h1>Start A Business</h1>
          </div>
          <div class="section__allservices-details--links">
            <ul>
              <li>
                <a href="private-limited.html">Private Limited Company</a>
              </li>
              <li>
                <a href="#">Limited Liability Partnership</a>
              </li>
              <li>
                <a href="#">One Person Company</a>
              </li>
              <li>
                <a href="#">Partnership Firm</a>
              </li>
              <li>
                <a href="#">Proprietorship Firm</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="section__allservices-details section__allservices-trademark">
          <div class="section__allservices-details--header">
            <h1>Trademark & Copyright</h1>
          </div>
          <div class="section__allservices-details--links">
            <ul>
              <li>
                <a href="#">Trademark Registration</a>
              </li>
              <li>
                <a href="#">Trademark Objection</a>
              </li>
              <li>
                <a href="#">Trademark Assignment</a>
              </li>
              <li>
                <a href="#">Trademark Renewal</a>
              </li>
              <li>
                <a href="#">Copyright Registration</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="section__allservices-details section__allservices-registration">
          <div class="section__allservices-details--header">
            <h1>Govt & Tax Registration</h1>
          </div>
          <div class="section__allservices-details--links">
            <ul>
              <li>
                <a href="#">GST Registration</a>
              </li>
              <li>
                <a href="#">TDS Return</a>
              </li>
              <li>
                <a href="#">Importer Exporter Code</a>
              </li>
              <li>
                <a href="#">Professional Tax Registration</a>
              </li>
              <li>
                <a href="#">Shops & Establishments Registration</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="section__allservices-details section__allservices-documentation">
          <div class="section__allservices-details--header">
            <h1>Legal Documentation</h1>
          </div>
          <div class="section__allservices-details--links">
            <ul>
              <li>
                <a href="#">Non-Disclosure Agreement</a>
              </li>
              <li>
                <a href="#">Founders Agreement</a>
              </li>
              <li>
                <a href="#">Term Sheet</a>
              </li>
              <li>
                <a href="#">Shareholders Agreement</a>
              </li>
              <li>
                <a href="#">Share Purchase Agreement</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section__allservices-button">
        <span class="section__allservices-details-custom-btn">
          <a href="#popup" class="custom-btn custom-btn--outline">
            View All Services
          </a>
        </span>
      </div>
    </section>
  );
}

export default AllServices;
