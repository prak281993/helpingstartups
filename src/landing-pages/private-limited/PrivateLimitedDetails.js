import React from "react";
import FAQs from "./faq-section/FAQs";

function PrivateLimitedDetails() {
  return (
    <section class="private-limited__allcontents">
      <section class="private-limited__about">
        <div class="private-limited__about-header">
          <h1>WHAT IS A PRIVATE LIMITED COMPANY</h1>
        </div>
        <div class="private-limited__about-content">
          <p>
            A private company is a privately owned/ close knitted organisation
            incorporated under the companies Act, 2013 and governs by the
            Ministry of Corporate Affairs. It clearly defines and limits the
            ownership of the shareholders by the share capital owned. It can be
            incorporated with a minimum of 2(two) directors and 2(two)
            shareholders. Directors and Shareholders both may or may not be the
            same person but directors can be individuals only and shareholders
            can be individuals or corporates.
          </p>
        </div>
      </section>
      <section class="private-limited__features">
        <div class="private-limited__features-header">
          <h1>FEATURES OF A PRIVATE LIMITED COMPANY</h1>
        </div>
        <div class="private-limited__features-content">
          <ul>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Liability is Limited in nature</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Company is a seperate legal entity</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Perpetual Succession(of ongoing nature)</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Accepts Foreign Direct Investment(100%)</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Company is privately controlled</span>
            </li>
          </ul>
        </div>
      </section>
      <section class="private-limited__requirements">
        <div class="private-limited__requirements-header">
          <h1>BASIC REQUIREMENTS</h1>
        </div>
        <div class="private-limited__requirements-content">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="private-limited__requirements-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">FOR A DIRECTOR</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">Must be an Indian resident</li>
                    <li class="list-group-item">
                      Minimum capital requirement is NIL
                    </li>
                    <li class="list-group-item">
                      DIN (Directors Identification Number) is mandatory
                    </li>
                    <li class="list-group-item">
                      DSC (Digital Signature Certificate) is mandatory
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="private-limited__requirements-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">FOR A SUBSCRIBER</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">Can be of any Nationality</li>
                    <li class="list-group-item">
                      DSC (Digital Signature Certificate) is mandatory
                    </li>
                    <li class="list-group-item">
                      Subscription of Capital is mandatory
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="private-limited__procedure">
        <div class="private-limited__procedure-header">
          <h1>PROCEDURE FOR ITS INCORPORATION</h1>
        </div>
        <div class="private-limited__procedure-content">
          <ul>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Apply for Digital Signatures</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Obtain DIN (in advance in case of existing company)</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Application for Name Reservation</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Filing of Form for Registration of a Company</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Certificate of Incorporation issued by Ministry</span>
            </li>
            <li>
              <span>
                <i className="fa fa-check"></i>
              </span>
              <span>Gets company’s PAN and TAN</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="private-limited__faqs">
        <div className="private-limited__faqs-header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="private-limited__faqs-content">
          <FAQs />
        </div>
      </section>
    </section>
  );
}

export default PrivateLimitedDetails;
