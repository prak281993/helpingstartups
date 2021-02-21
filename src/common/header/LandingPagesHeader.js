import React, { useState } from "react";
import Toast from "../../components/Toast";
import "./LandingPagesHeader.scss";
import QueryForm from "./QueryForm";

export default function LandingPagesHeader({
  headerRef,
  headerTitle,
  headerDesc,
}) {
  const [displayToast, setDisplayToast] = useState(false);
  const handleToast = (isOpen) => {
    setDisplayToast(isOpen);
    setTimeout(() => setDisplayToast(false), 3000);
  };
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
              <QueryForm handleToast={handleToast} />
            </div>
          </div>
        </div>
      </div>
      {displayToast && <Toast message={"Your query has been submitted"} />}
    </div>
  );
}
