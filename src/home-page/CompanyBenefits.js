import React from "react";
import './CompanyBenefits.scss';

function CompanyBenefits() {
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
                <div className="section__company-details-link section__company-details-link--1"></div>
                <div className="section__company-details-about section__company-details-about--1">
                  <p>On Time Delivery</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div className="section__company-details-link section__company-details-link--2"></div>
                <div className="section__company-details-about section__company-details-about--2">
                  <p>Transparent Pricing</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div className="section__company-details-link section__company-details-link--3"></div>
                <div className="section__company-details-about section__company-details-about--3">
                  <p>Tech Driven Platform</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div className="section__company-details-link section__company-details-link--4"></div>
                <div className="section__company-details-about section__company-details-about--4">
                  <p>Confidentiality</p>
                </div>
              </div>
            </div>
            <div className="section__company-details-icons-item">
              <div className="section__company-details-icon">
                <div className="section__company-details-link section__company-details-link--5"></div>
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
