import React from "react";
import Header from "./Header";
import './HomePage.scss';
import BackgroundVideo from '../components/BackgroundVideo';
import HomePageContent from './HomePageContent';
import TrademarkServices from "./TrademarkServices";
import CompanyBenefits from "./CompanyBenefits";
import PictureDescription from "./PictureDescription";
import FeedbackAndServices from "../common/FeedbackAndServices";

function HomePage() {
  return (
    <div>
      <BackgroundVideo />
      <Header />
      <HomePageContent />
      <TrademarkServices />
      <CompanyBenefits />
      <PictureDescription />
      <FeedbackAndServices />
    </div>
  );
}

export default HomePage;
