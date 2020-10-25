import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import PropTypes from "prop-types";

function ServiceCard({ heading, listItems, price, url }) {
  return (
    <div key={heading} className="service-card" data-aos="zoom-in">
      <div className="service-card__side service-card__side--front">
        <div className="service-card__picture service-card__picture--1"></div>
        <h4 className="service-card__heading">
          <span className="service-card__heading-span service-card__heading-span--1">
            {heading}
          </span>
        </h4>
        <div className="service-card__details">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-card__side service-card__side--back service-card__side--back-1">
        <div className="service-card__cta">
          <div className="service-card__price-box">
            <p className="service-card__price-only">Only</p>
            <p className="service-card__price-value">&#8377; {price}</p>
          </div>
          <Link to={url} className="custom-btn custom-btn--white">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  listItems: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ServiceCard;
