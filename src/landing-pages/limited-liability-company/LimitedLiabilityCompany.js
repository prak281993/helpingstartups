import React from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import LimitedLiabilityContent from "./LimitedLiabilityContent";

function LimitedLiabilityCompany() {
  return (
    <div>
      <BackgroundImage imageUrl={"/assets/limited-liability-company-bg.png"} />
      <LandingPagesHeader startingPrice='5,999' companyType={"Limited Liability Company"} />
      <LimitedLiabilityContent />
      <FeedbackAndServices />
    </div>
  );
}

export default LimitedLiabilityCompany;
