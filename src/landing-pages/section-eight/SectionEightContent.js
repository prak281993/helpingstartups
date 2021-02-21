import React from "react";
import QueryForm from "../../common/header/QueryForm";
import "./SectionEightContent.scss";
import SectionEightDetails from "./SectionEightDetails";
import SectionEightPackages from "./SectionEightPackages";

function SectionEightContent({ formRef, isFixedForm, contentDivRef }) {
  return (
    <main>
      <SectionEightPackages />
      <div className="one-person-content">
        <div className="container-fluid">
          <div className="row one-person-container">
            <div ref={contentDivRef} className="col-md-8 col-12">
              <SectionEightDetails />
            </div>
            <div className="col-md-4 d-none d-md-block">
              <QueryForm
                formRef={formRef}
                isFixedForm={isFixedForm}
                fromBody={true}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SectionEightContent;
