import React from "react";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import SectionEightContent from "./SectionEightContent";

function SectionEight() {
  const awsSrc = process.env.REACT_APP_AWS_URL;
  return (
    <div>
      <BackgroundImage imageUrl={`${awsSrc}/section-eight-company.jpg`} />
      <LandingPagesHeader startingPrice='9,999' companyType={"Section 8 Company"} />
      <SectionEightContent />
      <FeedbackAndServices />
    </div>
  );
}

export default SectionEight;
