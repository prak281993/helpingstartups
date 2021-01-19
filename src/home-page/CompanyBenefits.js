import React from "react";
import './CompanyBenefits.scss';

function CompanyBenefits() {
  const awsSrc = process.env.REACT_APP_AWS_URL;
  const link1={
    backgroundImage:`url(${awsSrc}/svg/on-time-delivery.svg)`,
    backgroundRepeat: 'no-repeat'
  }
  const link2={
    backgroundImage:`url(${awsSrc}/svg/transparent-pricing.svg)`,
    backgroundRepeat: 'no-repeat'
  }
  const link3={
    backgroundImage:`url(${awsSrc}/svg/tech-driven-paltform.svg)`,
    backgroundRepeat: 'no-repeat'
  }
  const link4={
    backgroundImage:`url(${awsSrc}/svg/confidentiality.svg)`,
    backgroundRepeat: 'no-repeat'
  }
  const link5={
    backgroundImage:`url(${awsSrc}/svg/expert-team.svg)`,
    backgroundRepeat: 'no-repeat'
  }
  return (
    <section className="section section-company-benefits">
      <div className="section__company-benefits">
        <div className="section__company-header">
          <span>
            <h3>Why Choose Us?</h3>
          </span>
          <span>
            <h6>
              Helping entrepreneurs/ businessmen/ corporate, in staying
              competent in all spheres of business
            </h6>
          </span>
        </div>
        <div className="section__company-details">
          <div className="section__company-details--bottom">
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div style={link1} className="section__company-details-link section__company-details-link--1"></div>
                <div className="section__company-details-about section__company-details-about--1">
                  <p>On Time Delivery</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div style={link2} className="section__company-details-link section__company-details-link--2"></div>
                <div className="section__company-details-about section__company-details-about--2">
                  <p>Transparent Pricing</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div style={link3} className="section__company-details-link section__company-details-link--3"></div>
                <div className="section__company-details-about section__company-details-about--3">
                  <p>Tech Driven Platform</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div style={link4} className="section__company-details-link section__company-details-link--4"></div>
                <div className="section__company-details-about section__company-details-about--4">
                  <p>Confidentiality</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div style={link5} className="section__company-details-link section__company-details-link--5"></div>
                <div className="section__company-details-about section__company-details-about--5">
                  <p>Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyBenefits;
