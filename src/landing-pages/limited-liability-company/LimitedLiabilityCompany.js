import React from "react";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import LimitedLiabilityContent from "./LimitedLiabilityContent";

function LimitedLiabilityCompany() {
  return (
    <div>
      <BackgroundImage imageUrl={"/assets/limited-liability-company-bg.png"} />
      <LandingPagesHeader companyType={"Limited Liability Company"} />
      <LimitedLiabilityContent />
    </div>
  );
}

export default LimitedLiabilityCompany;
