import React from "react";
import QueryForm from "../../common/header/QueryForm";
import ProprietorshipDetails from "./ProprietorshipDetails";
import "./ProprietorshipContent.scss";

export default function ProprietorshipContent({
  contentDivRef,
  isFixedForm,
  formRef,
}) {
  return (
    <div className="proprietorship-content">
      <div className="container-fluid">
        <div className="row proprietorship-container">
          <div ref={contentDivRef} className="col-md-8 col-12">
            <ProprietorshipDetails />
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
  );
}
