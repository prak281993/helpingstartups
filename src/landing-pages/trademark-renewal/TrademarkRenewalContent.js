import React from "react";
import QueryForm from "../../common/header/QueryForm";
import "./TrademarkRenewalContent.scss";
import TrademarkRenewalDetails from './TrademarkRenewalDetails';

export default function TrademarkRenewalContent({
  contentDivRef,
  isFixedForm,
  formRef,
}) {
  return (
    <div className="trademark-renewal-content">
      <div className="container-fluid">
        <div className="row trademark-renewal-container">
          <div ref={contentDivRef} className="col-md-8 col-12">
            <TrademarkRenewalDetails />
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
