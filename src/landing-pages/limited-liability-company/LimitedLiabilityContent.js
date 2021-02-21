import React from "react";
import LimitedLiabilityDetails from "./LimitedLiabilityDetails";
import "./LimitedLiabilityContent.scss";
import QueryForm from "../../common/header/QueryForm";

function LimitedLiabilityContent({ contentDivRef, isFixedForm, formRef }) {
  return (
    <main>
      <div className="limited-liability-content">
        <div className="container-fluid">
          <div className="row limited-liability-container">
            <div ref={contentDivRef} className="col-md-8 col-12">
              <LimitedLiabilityDetails />
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

export default LimitedLiabilityContent;
