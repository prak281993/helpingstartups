import React from "react";
import PrivateLimitedDetails from "./PrivateLimitedDetails";
import PrivateLimitedPackages from "./PrivateLimitedPackages";
import "./PrivateLimitedContent.scss";
import QueryForm from "../../common/header/QueryForm";

function PrivateLimitedContent({ contentDivRef, isFixedForm, formRef }) {
  return (
    <main>
      <PrivateLimitedPackages />
      <div className="private-limited-content">
        <div className="container-fluid">
          <div className="row private-limited-container">
            <div ref={contentDivRef} className="col-md-8 col-12">
              <PrivateLimitedDetails />
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

export default PrivateLimitedContent;
