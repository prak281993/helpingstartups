import React from "react";
import CompanyBenefits from "./CompanyBenefits";
import PictureDescription from "./PictureDescription";
import ServiceIcons from "./ServiceIcons";
import ServiceRegistration from "./ServiceRegistration";
import TrademarkServices from "./TrademarkServices";

function HomePageContent() {
  return (
    <main>
      <ServiceIcons />
      <ServiceRegistration />
      <TrademarkServices />
      <CompanyBenefits />
      <PictureDescription />
    </main>
  );
}

export default HomePageContent;
