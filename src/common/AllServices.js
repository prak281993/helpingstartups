import React from "react";
import { Link } from "react-router-dom";
import "./AllServices.scss";

function AllServices() {
  return (
    <section className="section-allservices">
      <div className="section__allservices">
        <div className="section__allservices-details section__allservices-startbusiness">
          <div className="section__allservices-details--header">
            <h1>Start A Business</h1>
          </div>
          <div className="section__allservices-details--links">
            <ul>
              <li>
                <Link to='/private-limited'>Private Limited Company</Link>
              </li>
              <li>
                <Link to="/limited-liability">Limited Liability Partnership</Link>
              </li>
              <li>
                <Link to="/one-person-company">One Person Company</Link>
              </li>
              <li>
                <Link to="/partnership-firm">Partnership Firm</Link>
              </li>
              <li>
                <Link to="/proprietorship-firm">Proprietorship Firm</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="section__allservices-details section__allservices-trademark">
          <div className="section__allservices-details--header">
            <h1>Trademark & Copyright</h1>
          </div>
          <div className="section__allservices-details--links">
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
        <div className="section__allservices-details section__allservices-registration">
          <div className="section__allservices-details--header">
            <h1>Govt & Tax Registration</h1>
          </div>
          <div className="section__allservices-details--links">
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
        <div className="section__allservices-details section__allservices-documentation">
          <div className="section__allservices-details--header">
            <h1>Legal Documentation</h1>
          </div>
          <div className="section__allservices-details--links">
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
      <div className="section__allservices-button">
        <span className="section__allservices-details-custom-btn">
          <Link href="#popup" className="custom-btn custom-btn--outline">
            View All Services
          </Link>
        </span>
      </div>
    </section>
  );
}

export default AllServices;
