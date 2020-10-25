import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import PropTypes from "prop-types";

function ServiceCard({ heading, listItems, price, url }) {
  return (
    <div key={heading} class="service-card" data-aos="zoom-in">
      <div class="service-card__side service-card__side--front">
        <div class="service-card__picture service-card__picture--1"></div>
        <h4 class="service-card__heading">
          <span class="service-card__heading-span service-card__heading-span--1">
            {heading}
          </span>
        </h4>
        <div class="service-card__details">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div class="service-card__side service-card__side--back service-card__side--back-1">
        <div class="service-card__cta">
          <div class="service-card__price-box">
            <p class="service-card__price-only">Only</p>
            <p class="service-card__price-value">&#8377; {price}</p>
          </div>
          <Link to={url} class="custom-btn custom-btn--white">
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
