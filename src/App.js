import React from "react";
import HomePage from "./home-page/HomePage";
import Navbar from "./common/Navbar";
import FeedbackAndServices from "./common/FeedbackAndServices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateLimited from "./landing-pages/private-limited/PrivateLimited";

function App() {
  return (
    <div class="main-container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/private-limited" component={PrivateLimited} />
          <Route path="/" component={HomePage} />
        </Switch>
        <FeedbackAndServices />
      </Router>
    </div>
  );
}

export default App;
