import React from "react";
import "./PictureDescription.scss";

function PictureDescription() {
  const awsSrc = process.env.REACT_APP_AWS_URL;
  const picture1 = {
    background: `linear-gradient(to right bottom,rgb(255 255 255 / 90%),rgb(255 255 255 / 90%)),
          url(${awsSrc}/business-associate.jpg) no-repeat center`,
  };
  const picture2 = {
    backgroundImage: `url(${awsSrc}/handshake.jpg)`,
  };
  const picture3 = {
    background: `linear-gradient(to right bottom,rgb(8 6 6 / 80%),rgb(66 63 63 / 80%)),
      url(${awsSrc}/bookshelf.jpg) no-repeat center 50%`,
  };
  const picture4 = {
    background: `linear-gradient(to right bottom,rgb(255 255 255 / 70%),rgb(255 255 255 / 70%)),
      url(${awsSrc}/lawbook.jpg) no-repeat center`,
    backgroundSize: "100%",
  };
  return (
    <section className="section-picture-description">
      <div className="section__picture-description">
        <div style={picture1} className="section__picture-description--1">
          <div className="section__picture-heading">
            <span className="section__picture-heading--main-1">
              Become An Associate?
            </span>
            <span className="section__picture-heading--sub-1">
              Sign up today to earn commission on every lead shared.
            </span>
          </div>
          <div className="section__picture-content-1">
            <span>
              Join HelpingStartup's ‘Become an Associate’ program if you’re a
              CA/ CS ,CMAs, Lawyers, Angel Funds, Startups Hubs, Corporates,
              Business Consultants, Investor. We work on a client revenue share
              model with professionals by sharing warm leads
            </span>
          </div>
          <div className="section__picture-button">
            <a href="" className="custom-btn custom-btn--green">
              Join
            </a>
          </div>
        </div>
        <div style={picture2} className="section__picture-description--2"></div>
        <div style={picture3} className="section__picture-description--3">
          <div className="section__picture-heading">
            <span className="section__picture-heading--main-3">
              KNOWLEDGE BASE
            </span>
            <span className="section__picture-heading--sub-3">
              Know every single detail about business and startups
            </span>
          </div>
          <div className="section__picture-content-3">
            <span>
              Helping business by sharing the knowledge on how to start and
              manage your business.
            </span>
          </div>
          <div className="section__picture-button">
            <a href="" className="custom-btn custom-btn--green">
              View
            </a>
          </div>
        </div>
        <div style={picture4} className="section__picture-description--4"></div>
      </div>
    </section>
  );
}

export default PictureDescription;
