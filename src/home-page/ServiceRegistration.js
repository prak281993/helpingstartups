import React from "react";
import './ServiceRegistration.scss';
import ServiceCard from '../components/ServiceCard';

function ServiceRegistration() {
  const cardItems = [
    {
      heading: "Private Limited Company",
      listItems: [
        "2 DSC",
        "DIN of 2 Directors",
        "Name Reservation",
        "Certificate of Incorporation",
        "5 copies of MOA & AOA",
        "Share Certificates",
        "PAN & TAN",
      ],
      price: 14999,
      url:'/private-limited'
    },
    {
      heading: "Limited Liability Partnership",
      listItems: [
        "2 DSC",
        "DIN of 2 Directors",
        "Name Reservation",
        "LLP Agreement",
        "5 copies of MOA & AOA",
        "Share Certificates",
        "PAN & TAN",
      ],
      price: 7999,
      url:'/'
    },
    {
      heading: "One Person Company",
      listItems: [
        "1 DSC",
        "DIN of 2 Directors",
        "Name Reservation",
        "Certificate of Incorporation",
        "5 copies of MOA & AOA",
        "Share Certificates",
        "PAN & TAN",
      ],
      price: 17999,
      url:'/'
    },
    {
        heading: "Section 8 Company",
        listItems: [
          "DIN of 2 Directors",
          "Name Reservation",
          "Certificate of Incorporation",
          "Section 8 Licence",
          "5 copies of MOA & AOA",
          "Share Certificates",
          "1 DSC PAN & TAN",
        ],
        price: 24999,
        url:'/'
      },
  ];
  return (
    <section class="section section-service-registration">
      <div class="section__service-registration">
        <div class="section__service-header">
          <span>
            <h3>Start a Business</h3>
          </span>
          <span>
            <h6>Choose best suited entity for your business</h6>
          </span>
        </div>

        <div class="section__service-cards">
          {cardItems.map(cardItem => <ServiceCard {...cardItem} />)}
        </div>

        <div class="section__service-button">
          <span>
            <a href="#popup" class="custom-btn custom-btn--secondary">
              View All Services
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default ServiceRegistration;
