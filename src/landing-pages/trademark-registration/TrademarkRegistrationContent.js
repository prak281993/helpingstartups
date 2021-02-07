import React, { useEffect, useRef, useState } from "react";
import QueryForm from "../../common/header/QueryForm";
import TrademarkRegistrationDetails from "./TrademarkRegistrationDetails";
import "./TrademarkRegistrationContent.scss";

export default function TrademarkRegistrationContent({
  contentDivRef,
  isFixedForm,
  formRef,
}) {
  return (
    <div className="trademark-registration-content">
      <div className="container-fluid">
        <div className="row trademark-registration-container">
          <div ref={contentDivRef} className="col-md-8 col-12">
            <TrademarkRegistrationDetails />
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
