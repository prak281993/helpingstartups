import React from "react";
import "./LandingPagesHeader.scss";
import QueryForm from "./QueryForm";

export default function LandingPagesHeader({
  headerRef,
  headerTitle,
  headerDesc,
}) {
  return (
    <div ref={headerRef} className="landing-page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="landing-page-header__about">
              <span className="landing-page-header__about--title">
                {headerTitle}
              </span>
              <span className="landing-page-header__about--description">
                {headerDesc}
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
