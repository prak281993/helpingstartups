import React from "react";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import SectionEightContent from "./SectionEightContent";

function SectionEight() {
  return (
    <div>
      <BackgroundImage imageUrl={"/assets/section-eight-company.jpg"} />
      <LandingPagesHeader companyType={"Section 8 Company"} />
      <SectionEightContent />
    </div>
  );
}

export default SectionEight;
