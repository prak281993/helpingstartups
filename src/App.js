import React from "react";
import HomePage from "./home-page/HomePage";
import Navbar from "./common/Navbar";
import FeedbackAndServices from "./common/FeedbackAndServices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateLimited from "./landing-pages/private-limited/PrivateLimited";
import OnePersonCompany from "./landing-pages/one-person-company/OnePersonCompany";
import LimitedLiabilityCompany from "./landing-pages/limited-liability-company/LimitedLiabilityCompany";
import SectionEight from "./landing-pages/section-eight/SectionEight";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div class="main-container">
      <Router>
        <Navbar />
        <ScrollToTop>
          <Switch>
            <Route path="/private-limited" component={PrivateLimited} />
            <Route
              path="/limited-liability"
              component={LimitedLiabilityCompany}
            />
            <Route path="/one-person-company" component={OnePersonCompany} />
            <Route path="/section-eight-company" component={SectionEight} />
            <Route path="/" component={HomePage} />
          </Switch>
        </ScrollToTop>
        <FeedbackAndServices />
      </Router>
    </div>
  );
}

export default App;
