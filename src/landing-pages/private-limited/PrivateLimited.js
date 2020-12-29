import React, { useContext } from "react";
import { StickyContainer } from "react-sticky";
import FeedbackAndServices from "../../common/FeedbackAndServices";
import LandingPagesHeader from "../../common/LandingPagesHeader";
import BackgroundImage from "../../components/BackgroundImage";
import PrivateLimitedContent from "./PrivateLimitedContent";

function PrivateLimited() {
  return (
    <StickyContainer>
      <BackgroundImage imageUrl={"/assets/private-limited-bg.jpg"} />
      <LandingPagesHeader
        startingPrice="5,499"
        companyType={"Private Limited Company"}
      />
      <PrivateLimitedContent />
      <FeedbackAndServices />
    </StickyContainer>
  );
}

export default PrivateLimited;
