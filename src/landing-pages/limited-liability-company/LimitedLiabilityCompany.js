import React from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import LimitedLiabilityContent from "./LimitedLiabilityContent";

function LimitedLiabilityCompany() {
  const awsSrc = process.env.REACT_APP_AWS_URL;
  return (
    <div>
      <BackgroundImage imageUrl={`${awsSrc}/limited-liability-company-bg.png`} />
      <LandingPagesHeader startingPrice='5,999' companyType={"Limited Liability Company"} />
      <LimitedLiabilityContent />
      <FeedbackAndServices />
    </div>
  );
}

export default LimitedLiabilityCompany;
