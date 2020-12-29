import React from "react";
import TrademarkCard from "../components/TrademarkCard";
import "./TrademarkServices.scss";

function TrademarkServices() {
  const cardItems = [
    {
      heading: "Trademark Registration",
      listItems: ["Trademark Search", "Registration in One Class"],
      price: 6999,
    },
    {
      heading: "Trademark Objection",
      listItems: ["Trademark Reply Filing", "Updates on Status"],
      price: 2999,
    },
    {
      heading: "Trademark Renewal",
      listItems: ["Check Status", "Trademark Reveal"],
      price: 1999,
    },
    {
      heading: "Trademark Restoration",
      listItems: ["Check Status", "Filing"],
      price: 6999,
    },
  ];
  return (
    <section
      id="section-trademark-services"
      className="section section-trademark-services"
    >
      <div className="section__trademark-services">
        <div className="section__trademark-header">
          <span>
            <h3>Trademark Services</h3>
          </span>
          <span>
            <h6>
              Keep your brand's integrity intact by getting a trademark for your
              business' logo, name, tag line and more
            </h6>
          </span>
        </div>

        <div className="section__trademark-cards">
          {cardItems.map((cardItem, index) => (
            <TrademarkCard key={index} {...cardItem} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrademarkServices;
