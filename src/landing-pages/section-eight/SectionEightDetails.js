import React from "react";
import CompanyDifferences from "../../common/CompanyDifferences";
import FAQs from "../../components/faq-section/FAQs";
import Timeline from "../../components/Timeline";
import Advantages from "./Advantages.json";
import Compliance from './Compliance.json';

function SectionEightDetails() {
  return (
    <section className="section-eight__allcontents">
      <section className="section-eight__about">
        <div className="section-eight__about-header">
          <h1>SECTION 8 COMPANY</h1>
        </div>
        <div className="section-eight__about-content">
          <p>
            When a company gets registered as a Non- Profit Organization under
            the Companies Act, 2013 are referred as Section 8 companies. The
            incorporation, management and compliance of a Section 8 Company is
            regulated under the Companies Act, 2013 only, which makes it more
            reliable, credible, accountable than NGO’s, trusts and societies.
          </p>
          <p>
            Object of a Non-profit Company/ Section 8 Company is:
            <ul>
              <li>
                The promotion of commerce, art, science, sports, education,
                research, social welfare, religion, charity, protection of
                environment or any such other object;
              </li>
              <li>
                Company should have clear vision and outline plan for the next
                three years;
              </li>
              <li>
                Infusion of its surplus/ profits, income or any gains in
                promoting its objects;
              </li>
              <li>No dividend payments to its shareholders/ subscribers.</li>
            </ul>
          </p>
        </div>
      </section>
      <section className="section-eight__advantages">
        <div className="section-eight__advantages-header">
          <h1>ADVANTAGES OF SECTION 8 COMPANY:</h1>
        </div>
        <div className="section-eight__advantages-content">
          <Timeline data={Advantages} />
        </div>
      </section>
      <section class="section-eight__requirements">
        <div class="section-eight__requirements-header">
          <h1>BASIC REQUIREMENTS</h1>
        </div>
        <div class="section-eight__requirements-content">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="section-eight__requirements-content-card card">
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
              <div class="col-sm-4">
                <div class="section-eight__requirements-content-card card">
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
              <div class="col-sm-4">
                <div class="section-eight__requirements-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">FOR A REGISTERED OFFICE</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      Rent/lease Agreement if on rent/lease
                    </li>
                    <li class="list-group-item">
                      NOC from the owner of the premises
                    </li>
                    <li class="list-group-item">
                      Utility bill in the name of the owner not older than 2
                      months
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-eight__procedure">
        <div class="section-eight__procedure-header">
          <h1>PROCEDURE FOR ITS INCORPORATION</h1>
        </div>
        <div class="section-eight__procedure-content">
          <ul>
            <li>
              <div>Apply for Digital Signatures</div>
            </li>
            <li>
              <div>Obtain DIN (in advance in case of existing company)</div>
            </li>
            <li>
              <div>Application for Name Reservation</div>
            </li>
            <li>
              <div>Filing of Form for Registration of a Company</div>
            </li>
            <li>
              <div>Certificate of Incorporation issued by Ministry</div>
            </li>
            <li>
              <div>Gets company’s PAN and TAN</div>
            </li>
          </ul>
        </div>
      </section>
      <section className="section-eight__documents">
        <div className="section-eight__documents-header">
          <h1>DOCUMENTS FOR INCORPORATION</h1>
        </div>
        <div className="section-eight__documents-content">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="section-eight__requirements-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">FOR DIRECTORS AND SUBSCRIBER</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      Proof of Identity (Driving License/Voter Id/Passport any
                      of these)
                    </li>
                    <li class="list-group-item">
                      Proof of Present Address (If different from Permanent
                      Address)
                    </li>
                    <li class="list-group-item">
                      Proof of Permanent Residence (Any Utility Bill includes
                      Electricity Bill, Mobile Bill, Gas Bill/ Bank Passbook
                      copy/ Bank Statement not older than 2 months)
                    </li>
                    <li class="list-group-item">
                      Passport size photograph of Directors
                    </li>
                    <li class="list-group-item">
                      PAN card, Aadhar card and Passport (if any) is mandatory
                      for all directors and subscribers
                    </li>
                    <li class="list-group-item">
                      DSC (Digital Signature Certificate)
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="section-eight__requirements-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">FOR REGISTERED OFFICE</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      Proof of Address (Electricity Bill in the name of Owner
                      not older than 2 months)
                    </li>
                    <li class="list-group-item">
                      NOC (No Objection Certificate) from the owner in the name
                      of any director
                    </li>
                    <li class="list-group-item">
                      If Rented then rent agreement
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="section-eight__requirements-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">ADDITIONAL INFORMATION REQUIRED</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      DIN No. of the Director (If available and already having)
                    </li>
                    <li class="list-group-item">
                      Nationality of directors and shareholders
                    </li>
                    <li class="list-group-item">
                      Occupation and Educational qualifications of directors and
                      shareholders
                    </li>
                    <li class="list-group-item">
                      Email Id and Phone no of directors and shareholders
                    </li>
                    <li class="list-group-item">
                      Place of Birth of directors and shareholders
                    </li>
                    <li class="list-group-item">
                      Duration of stay at present address of directors and
                      shareholders (in years and months)
                    </li>
                    <li class="list-group-item">
                      Proposed names for the company in order of preference
                    </li>
                    <li class="list-group-item">
                      Total proposed Capital Contribution (in lakhs)
                    </li>
                    <li class="list-group-item">
                      Percentage of Share Holding among proposed subscribers
                    </li>
                    <li class="list-group-item">
                      Proposed Business activity in Brief (4-5 lines)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-eight__compliance">
        <div className="section-eight__compliance-header">
          <h1>COMPLIANCE</h1>
        </div>
        <div className="section-eight__compliance-content">
          <span className="private-limited__compliance-content-about">
            <p>
              As there is a saying precaution is better than cure same applies
              in the case of companies do what is right not what is easy. All
              companies registered in India in any form like Private Limited
              Company, One Person Company, Limited Company, Section 8 Company
              etc are subject to the different statutory and regulatory
              compliances. They are required to comply with the various annual
              legal compliances laid down by the corporate laws such as the
              Companies Act, 2013, they must comply with quarterly filings,
              annual return filings and income tax returns every year. The
              obligatory compliance and provisions that are meant to be complied
              with and adhered to on an annual basis for every registered entity
              in India under the governance of Ministry of Corporate Affairs are
              summarised as follows:
            </p>
          </span>
          <Timeline data={Compliance} />
        </div>
      </section>
      <section className="section-eight__faqs">
        <div className="section-eight__faqs-header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="section-eight__faqs-content">
          <FAQs />
        </div>
      </section>
      <CompanyDifferences />
    </section>
  );
}

export default SectionEightDetails;
