import React from "react";
import { Link } from "react-router-dom";
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
                <Link to='/private-limited'>Private Limited Company</Link>
              </li>
              <li>
                <Link to="/">Limited Liability Partnership</Link>
              </li>
              <li>
                <Link to="/">One Person Company</Link>
              </li>
              <li>
                <Link to="/">Partnership Firm</Link>
              </li>
              <li>
                <Link to="/">Proprietorship Firm</Link>
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
                <Link to="/">Trademark Registration</Link>
              </li>
              <li>
                <Link to="/">Trademark Objection</Link>
              </li>
              <li>
                <Link to="/">Trademark Assignment</Link>
              </li>
              <li>
                <Link to="/">Trademark Renewal</Link>
              </li>
              <li>
                <Link to="/">Copyright Registration</Link>
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
                <Link to="/">GST Registration</Link>
              </li>
              <li>
                <Link to="/">TDS Return</Link>
              </li>
              <li>
                <Link to="/">Importer Exporter Code</Link>
              </li>
              <li>
                <Link to="/">Professional Tax Registration</Link>
              </li>
              <li>
                <Link to="/">Shops & Establishments Registration</Link>
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
                <Link to="/">Non-Disclosure Agreement</Link>
              </li>
              <li>
                <Link to="/">Founders Agreement</Link>
              </li>
              <li>
                <Link to="/">Term Sheet</Link>
              </li>
              <li>
                <Link to="/">Shareholders Agreement</Link>
              </li>
              <li>
                <Link to="/">Share Purchase Agreement</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section__allservices-button">
        <span class="section__allservices-details-custom-btn">
          <Link href="#popup" class="custom-btn custom-btn--outline">
            View All Services
          </Link>
        </span>
      </div>
    </section>
  );
}

export default AllServices;
