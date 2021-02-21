import React from "react";
import OnePersonCompanyDetails from "./OnePersonCompanyDetails";
import "./OnePersonCompanyContent.scss";
import QueryForm from "../../common/header/QueryForm";

function OnePersonCompanyContent({ formRef, isFixedForm, contentDivRef }) {
  return (
    <main>
      <div className="one-person-content">
        <div className="container-fluid">
          <div className="row one-person-container">
            <div ref={contentDivRef} className="col-md-8 col-12">
              <OnePersonCompanyDetails />
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

export default OnePersonCompanyContent;
