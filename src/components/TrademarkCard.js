import React from "react";
import "./Card.scss";

function TrademarkCard({ heading, listItems, price }) {
  return (
    <div key={heading} class="trademark-card" data-aos="zoom-in">
      <div class="trademark-card__side trademark-card__side--front">
        <div class="trademark-card__heading">
          <span class="trademark-card__heading-span">{heading}</span>
        </div>
        <div class="trademark-card__details">
          <div class="trademark-card__price-box">
            <h3>&#8377; {price} / All Inclusive</h3>
          </div>
          <ul>
            {listItems.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
      <div class="trademark-card__side trademark-card__side--back trademark-card__side--back-1">
        <div class="trademark-card__cta">
          <a href="#popup" class="custom-btn custom-btn--white">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrademarkCard;
