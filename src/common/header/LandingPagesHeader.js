import React from "react";
import "./LandingPagesHeader.scss";
import QueryForm from "./QueryForm";

export default function LandingPagesHeader({ headerRef }) {
  return (
    <div ref={headerRef} className="landing-page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="landing-page-header__about">
              <span className="landing-page-header__about--title">
                Trademark Registration
              </span>
              <span className="landing-page-header__about--description">
                Trademark is an asset that can be protected under the Indian
                law. To protect a trademark from being copied by others, the
                inventor of the word or symbol must apply for trademark
                registration.
              </span>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="landing-page-header__form-container">
              <QueryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
