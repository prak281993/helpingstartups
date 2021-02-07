import React from "react";
import Timeline from "../../components/Timeline";
import TrademarkRegistrationCompliance from "./TrademarkRegistrationCompliance.json";

export default function TrademarkRegistrationDetails() {
  return (
    <section className="trademark-registration__allcontents">
      <section className="trademark-registration__about">
        <div className="trademark-registration__about-header">
          <h1>TRADEMARK REGISTRATION</h1>
        </div>
        <div className="trademark-registration__about-content">
          <p>
            Trademarks are special unique signs that are used to identify goods
            or services from a certain company. They can be visual symbol which
            may be a word, name, device, label or numeral, designs, pictures,
            signs or even expressions. It is important because it differentiates
            your products from the competitions. It can be associated with your
            brand or product. Trademarks are registered under the Trademark Act,
            1999 and give the trademark owner the power to sue for losses when
            infringements of trademarks happen.
          </p>
          <p>
            Trademark is an asset that can be protected under the Indian law. To
            protect a trademark from being copied by others, the inventor of the
            word or symbol must apply for trademark registration.
          </p>
          <p>
            A trademark application can be filed by any person or legal entity
            in India. The mark does not necessarily have to be used before
            applying for registration although a prior used mark improves the
            chances of registration. Foreign nationals and foreign entities can
            also file trademark applications in India and secure registration
            without additional requirements.
          </p>
        </div>
      </section>
      <section className="trademark-registration__benefits">
        <div className="trademark-registration__benefits-header">
          <h1>BENEFITS</h1>
        </div>
        <div className="trademark-registration__benefits-content">
          <Timeline data={TrademarkRegistrationCompliance} />
        </div>
      </section>
      <section className="trademark-registration__documents">
        <div className="trademark-registration__documents-header">
          <h1>DOCUMENTS REQUIRED</h1>
        </div>
        <div className="trademark-registration__documents-content">
          <span>
            Trademark filing is a simple, online process which can be completed
            within 24 hours. There are a certain set of documents that need to
            be signed, scanned and sent to us. The list is given below.
          </span>
          <ul>
            <li>
              Signed Form 48- Form 48 is used to provide attorney with
              authorisation to file your trademark application.
            </li>
            <li>
              Identity proof of the trademark owner- It can be PAN card,
              passport or Aadhar card.
            </li>
            <li>Incorporation certificate (if it’s a company or LLP)</li>
            <li>
              Udyam Registration Certificate (MSME Certificate) if any, it
              reduces the government fees of Trademark in some cases.
            </li>
            <li>
              Logo, word, name, device, label or numeral, designs, pictures,
              signs or even expressions if any applicable and available.
            </li>
            <li>Address proof.</li>
          </ul>
        </div>
      </section>
      <section className="trademark-registration__process">
        <div className="trademark-registration__process-header">
          <h1>TRADEMARK REGISTRATION PROCESS</h1>
        </div>
        <div className="trademark-registration__process-content">
          <span>
            The process of trademark begins with a trademark search. The
            government trademark search tool can also be used to find identical
            or similar trademarks under the same class. Once the search is
            complete, you will proceed with the trademark application based on
            the details of identical or similar trademark applications already
            filed with the government.
          </span>
          <span className="trademark-registration__process-allcontent">
            <header>1. Trademark application allotment</header>
            <main>
              Once the trademark registration application is filed with the
              trademark registrar, a trademark application allotment number is
              provided within one or two working days. The application can then
              be tracked online through the online trademark search facility. On
              obtaining the allotment number, the owner of the trademark can
              affix the TM symbol next to the logo.
            </main>
            <header>2. Vienna codification</header>
            <main>
              The Vienna codification established under the Vienna agreement
              (1973) is an international classification of the figurative
              elements of marks. Once the application is filed, the trademark
              registrar will apply the Vienna classification to the trademark
              based on the figurative elements of marks. While this work is in
              progress, the trademark application status usually reflects as
              "sent for Vienna codification".
            </main>
            <header>3. Trademark Examination</header>
            <main>
              Once the Vienna codification is complete, the trademark
              registration application will be allotted to an officer in the
              trademark registrar office. The trademark officer would then
              review the trademark application for correctness and issue a
              trademark examination report. The officer will either accept the
              application and allow for journal publication or object the same.
            </main>
            <header>4. Objection</header>
            <main>
              If the trademark registration application is objected by the
              Trademark Officer, the trademark applicant has the right to appear
              before the officer and address the objections. If the officer is
              satisfied with the justifications of the trademark applicant, the
              trademark would be allowed for trademark journal publication. In
              case the officer is not satisfied with the justifications, the
              trademark applicant has the right to appeal the decision of the
              Trademark officer before the Intellectual Property Appellate
              Board.
            </main>
            <header>5. Journal Publication</header>
            <main>
              Once the trademark registration application is accepted by the
              registrar, the proposed mark is published in the trademark
              journal. The trademark journal is published weekly and contains
              all the trademarks that have been accepted by the registrar. Once
              it is published, the public have an opportunity to object to a
              particular registration, if they believe their business will be
              damaged by that registration. If there are no objections filed
              within 90 days of that publication, the mark will typically be
              registered within 12 weeks’ time. <br />
              If the trademark registration application is opposed by a
              third-party, a hearing will be called for by the trademark hearing
              officer. Both the applicant and the opposing party have the chance
              to appear at the hearing and provide justifications for
              registration or rejection of the trademark application. Based on
              the hearings and the evidence presented, the hearing officer will
              determine if the application should be accepted or rejected. The
              decision of the hearing officer can also be challenged by
              escalating it to the Intellectual Property Appellate Board.
            </main>
            <header>6. Trademark Registration</header>
            <main>
              If there are no objections or oppositions to the application, the
              trademark manuscript and trademark registration certificate will
              be prepared. Once the trademark registration certificate is
              issued, the mark is considered to be a registered trademark of the
              owner, granting the owner exclusive use of the mark. The symbol
              can now be placed next to the logo.
            </main>
          </span>
        </div>
      </section>
      <section className="trademark-registration__symbols">
        <div className="trademark-registration__symbols-header">
          <h1>TRADEMARK SYMBOLS AND THEIR USES</h1>
        </div>
        <div className="trademark-registration__symbols-content">
          <header>1. “R” Symbol</header>
          <main>
            “R” symbol represents that you have filed the trademark application
            for registration. This symbol helps protect the trademark from
            getting copied by others.
          </main>
          <header>2. “TM” Symbol</header>
          <main>
            When the trademark got registered the trademark owner can use this
            as suffix after your barnd name on the top it warn the others from
            copying your logo, name or symbol.
          </main>
          <header>3. “C” Symbol</header>
          <main>
            <p>
              The C symbol stands for contents which do not have any copyright
              issues. The symbol is mandatory in many countries for copyright
              claims. This includes:
            </p>
            <p>– Artwork - Photography</p>
            <p>– Videography</p>
            <p>– Literary Works</p>
            <p>– Software</p>
          </main>
          <header>4. “SM” Symbol</header>
          <main>
            The service industry uses this symbol. The symbol is applicable for
            classes from 35 to 45. It is also not guaranteed protection against
            copyright issues.
          </main>
        </div>
      </section>
      <section className="trademark-registration__facts">
        <div className="trademark-registration__facts-header">
          <h1>
            TOP 8 THINGS YOU NEED TO KNOW REGARDING TRADEMARK REGISTRATION
          </h1>
        </div>
        <div className="trademark-registration__facts-content">
          <span>
            <p>
              The Trademark Act, 1999, governs the laws related to trademarks
              and their registration. The trademarks in India are registered by
              the Controller General of Patents, Designs and Trademarks, (Office
              of the Registrar of Trademarks), Ministry of Industry and
              Commerce, Government of India.
            </p>
            <p>
              Take a look at the top 8 things you need to know about trademark
              registration:
            </p>
          </span>
          <span className="trademark-registration__facts-allcontent">
            <header>1. A Visual Representation</header>
            <main>
              <p>
                The types of trademarks you can get registered are quite varied.
                Here are a few types:
              </p>
              <p>– Word Marks</p>
              <p>– Service Marks</p>
              <p>– Logos and Symbols</p>
              <p>– Shape of Goods</p>
              <p>– Series Marks</p>
              <p>– Collective Trademarks</p>
              <p>– Certification Mark</p>
              <p>– Geographical Indicators</p>
              <p>– Pattern Marks</p>
              <p>– Sound Marks</p>
              <p>– Colour Marks</p>
              <p>– Three Dimensional Marks</p>
            </main>
            <header>2. An Intangible Asset</header>
            <main>
              Consider the fact that your business builds a reputed name and
              turns out a successful brand. A trademark, being a type of
              intellectual property, brings heaps of benefits to the company.
              Once a trademark is registered, it becomes an intangible asset
              that can be traded, franchised, commercially contracted and
              distributed.
            </main>
            <header>
              3. Protection Against Infringement and Other Legal Protection
            </header>
            <main>
              The owner of a registered trademark can exercise his legal rights
              in case there is any infringement with regard to the owner’s logo,
              brand, a slogan that has an active trademark against it. The owner
              has the right to sue any third party that uses the trademark
              without the prior permission of the owner of the trademark.
            </main>
            <header>4. Trademark Search</header>
            <main>
              A trademark search is usually carried out to check if a particular
              trademark already exists. The search can be conducted through the
              government’s Indian Trademark Registry database or a third-party
              service provider website.
            </main>
            <header>5. Class Selection</header>
            <main>
              The goods and services here are classified into 45 different
              sectors. Each sector is referred to as a class. Every logo or
              brand name is to be registered under the appropriate class at the
              time of application. Out of the 45 different classes, 34 of those
              classes comprise of product classes, and the remaining 11 are for
              service.
            </main>
            <header>6. Voluntary, not Compulsory Registration</header>
            <main>
              The registration of a trademark is done on a voluntary basis.
              However, if a trademark is registered, it holds concrete evidence
              that the ownership of the trademark belongs to the person who has
              taken the effort to register it. All legal decisions will be in
              favour of the party that had the trademark registered.
            </main>
            <header>7. Validity</header>
            <main>
              A registered trademark has a period of validity that stretches up
              to 10 years before it has to be renewed again. However, the
              renewal process may be initiated only within one year before the
              expiry of the registered trademark. If one fails to do so, the
              trademark will be removed. Even on removal, the trademark can be
              reinstated through what is known as restoration of the trademark
              in the prescribed form.
            </main>
          </span>
        </div>
      </section>
    </section>
  );
}
