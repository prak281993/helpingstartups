import React from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import SectionEightContent from "./SectionEightContent";

function SectionEight() {
  return (
    <div>
      <BackgroundImage imageUrl={"/assets/section-eight-company.jpg"} />
      <LandingPagesHeader startingPrice='9,999' companyType={"Section 8 Company"} />
      <SectionEightContent />
      <FeedbackAndServices />
    </div>
  );
}

export default SectionEight;
