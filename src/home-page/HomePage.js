import React from "react";
import Header from "./Header";
import './HomePage.scss';
import HomePageContent from './HomePageContent';
import FeedbackAndServices from "../common/FeedbackAndServices";

function HomePage() {
  return (
    <>
      <Header />
      <HomePageContent />
      <FeedbackAndServices />
    </>
  );
}

export default HomePage;
