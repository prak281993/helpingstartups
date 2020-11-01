import React from "react";
import CompanyDifferences from "../../common/CompanyDifferences";
import FAQs from "../../components/faq-section/FAQs";
import Timeline from "../../components/Timeline";
import llpStepsData from "./LLPSteps.json";
import TimeTaken from "./TimeTaken.json";

function LimitedLiabilityDetails() {
  return (
    <section className="limited-liability__allcontents">
      <section className="limited-liability__about">
        <div className="limited-liability__about-header">
          <h1>LIMITED LIABILITY PARTNERSHIP</h1>
        </div>
        <div className="limited-liability__about-content">
          <p>
            Limited Liability Partnership (LLP) was introduced in India as a
            legal entity under the Limited Liability Partnership Act, 2008 under
            the guidelines of the Ministry of Corporate Affairs. Advantage of
            LLP over traditional Partnership, is that the liability is limited
            in nature whereas the liability is unlimited in case of partnership
            firm and the main advantage of a Limited Liability Partnership over
            a traditional partnership firm is that in LLP, one partner is not
            liable for the acts of the other partners. It acts as a middle
            ground between a Company and a Partnership as it gives you the
            advantages of a Company with the flexibility of a Partnership.
            Corporate Customers, Vendors and Govt. Organisations prefer to deal
            with LLP instead of proprietorship or normal partnerships.
          </p>
          <p>
            Recently, it has become one of the most preferred forms of legal
            entities in India because of its easy incorporate process, easily
            manageable and simple compliance formalities in an organized form
            like audit is also not required for LLPs if capital investment is
            below INR 25(twenty-five) lakhs having turnover less than INR
            40(forty) lakhs, that is why it is largely preferred by
            Professionals, Micro and Small businesses that are closely-held.
          </p>
          <p>
            In Limited Liability Partnership all partners feel secured from the
            debts of the LLP as LLP is the separate legal entity in the eye of
            law and the partners are not liable for any debt or loan taken by
            the LLP. They enjoy a form of protection like the shareholders of a
            Private Limited Company.
          </p>
        </div>
      </section>
      <section className="limited-liability__features">
        <div className="limited-liability__features-header">
          <h1>FEATURES OF LIMITED LIABILITY PARTNERSHIP</h1>
        </div>
        <div className="limited-liability__features-content">
          <ul>
            <li>
              <div>
                A minimum of 2 designated partners required to form a LLP as per
                the LLP Act, 2008. No maximum limit for the number of partners
                in the LLP.
              </div>
            </li>
            <li>
              <div>
                Out of 2 designate partners at least one Designated Partner
                should be a resident of India and a Foreign National can also
                become a partner in the LLP.
              </div>
            </li>
            <li>
              <div>
                Any entity registered under the law can be converted into a LLP
                and yes, LLP can also be converted to any other entity except
                into a Sole Proprietorship and LLP can also become a member in
                another Company.
              </div>
            </li>
            <li>
              <div>
                Any Director of a Private Limited Company or OPC can be a
                designated Partner in LLP even if he is already in an
                employment. There are no such restrictions. But one must ensure
                that your employment agreement or appointment letter does not
                contain any restrictions for you to become a Director of any
                other company or a Partner in LLP.
              </div>
            </li>
            <li>
              <div>
                The 100% FDI in the LLP is granted to foreign companies who
                operate in activities or sectors where 100% FDI is considered
                permissible through the channels of the automatic route.
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="limited-liability__benefits">
        <div className="limited-liability__benefits-header">
          <h1>BENEFITS OF LLP REGISTRATION</h1>
        </div>
        <div className="limited-liability__benefits-content">
          <ul>
            <li>
              <span>Limited liability of its partners</span>
            </li>
            <li>
              <span>Separate legal Entity from its Partners</span>
            </li>
            <li>
              <span>Less Incorporation Charges</span>
            </li>
            <li>
              <span>No complexity in Compliance</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="limited-liability__factors">
        <div className="limited-liability__benefits-header">
          <h1>FACTORS TO CONSIDER FOR YOUR LLP NAME</h1>
        </div>
        <div className="limited-liability__factors-content">
          <ul>
            <li>
              <span>The name must be distinctive and unique</span>
            </li>
            <li>
              <span>The name should have the word ‘LLP’ as suffix</span>
            </li>
            <li>
              <span>The name should be suggestive of the LLP’s business</span>
            </li>
            <li>
              <span>The name should follow the guidelines of MCA</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="limited-liability__steps">
        <div className="limited-liability__steps-header">
          <h1>STEPS TO FORM A LIMITED LIABILITY PARTNERSHIP</h1>
        </div>
        <div className="limited-liability__steps-content">
          <Timeline data={llpStepsData} />
        </div>
      </section>
      <section className="limited-liability__documents">
        <div className="limited-liability__documents-header">
          <h1>DOCUMENTS REQUIRED FOR LLP REGISTRATION</h1>
        </div>
        <div className="limited-liability__documents-content">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="limited-liability__documents-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">Documents of Partners</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">PAN Card OF All partners</li>
                    <li class="list-group-item">
                      ID Proof of the Partners (anyone of these voter id/
                      driving license/ passport(if any))
                    </li>
                    <li class="list-group-item">
                      Address Proof of the partners (anyone of these electricity
                      bill/ bank statement/ mobile bill (not older than 2
                      months))
                    </li>
                    <li class="list-group-item">Passport size Photograph</li>
                    <li class="list-group-item">
                      Passport (in mandatory in every case Indian nation(if
                      having)/ Foreign Nationals/ NRIs)
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="limited-liability__documents-content-card card">
                  <div class="card-body">
                    <h5 class="card-title">Documents of LLP</h5>
                  </div>
                  <ul class="list-group">
                    <li class="list-group-item">
                      Proof of Registered Office Address(if rented then rent
                      agreement and a no objection certificate from the landlord
                      along with electricity bill (not older than 2 months) in
                      the name of owner)
                    </li>
                    <li class="list-group-item">
                      Digital Signature Certificate
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="limited-liability__timetaken">
        <div className="limited-liability__timetaken-header">
          <h1>HOW LONG DOES IT TAKE?</h1>
        </div>
        <div className="limited-liability__timetaken-content">
          <Timeline data={TimeTaken} />
        </div>
      </section>
      <section className="limited-liability__faqs">
        <div className="limited-liability__faqs-header">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="limited-liability__faqs-content">
          <FAQs />
        </div>
      </section>
      <CompanyDifferences />
    </section>
  );
}

export default LimitedLiabilityDetails;
