import React from "react";
import QueryForm from "../../common/header/QueryForm";
import "./TrademarkObjectionContent.scss";
import TrademarkObjectionDetails from "./TrademarkObjectionDetails";

export default function TrademarkObjectionContent({
  contentDivRef,
  isFixedForm,
  formRef,
}) {
  return (
    <div className="trademark-objection-content">
      <div className="container-fluid">
        <div className="row trademark-objection-container">
          <div ref={contentDivRef} className="col-md-8 col-12">
            <TrademarkObjectionDetails />
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
