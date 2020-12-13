import React, { useEffect, useState, createContext } from "react";
import HomePage from "./home-page/HomePage";
import Navbar from "./common/Navbar";
import FeedbackAndServices from "./common/FeedbackAndServices";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateLimited from "./landing-pages/private-limited/PrivateLimited";
import OnePersonCompany from "./landing-pages/one-person-company/OnePersonCompany";
import LimitedLiabilityCompany from "./landing-pages/limited-liability-company/LimitedLiabilityCompany";
import SectionEight from "./landing-pages/section-eight/SectionEight";
import ScrollToTop from "./ScrollToTop";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import { onAuthUIStateChange } from "@aws-amplify/ui-components";
import "./App.css";
import { Auth } from "aws-amplify";

export const UserContext = createContext(null);

function App() {
  const [authState, setAuthState] = useState();
  const [authData, setAuthData] = useState();
  const [user, setUser] = useState();

  const handleClick = () => {
    console.log("signed in");
  };

  useEffect(async () => {
    const session = await Auth.currentAuthenticatedUser();
    if (session) {
      setAuthData(session);
      const user = {
        email: session?.attributes.email,
        phoneNumber: session?.attributes.phone_number,
      };
      if (user.email) setUser(user);
    }
  }, []);

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setAuthData(authData);
      const user = {
        email: authData?.attributes.email,
        phoneNumber: authData?.attributes.phone_number,
      };
      if (user.email) setUser(user);
    });
  }, []);

  return (
    <div class="main-container">
      <Router>
        <UserContext.Provider value={user}>
          <Navbar />
          <ScrollToTop>
            <Switch>
              <Route path="/private-limited">
                <PrivateLimited />
              </Route>
              <Route
                path="/limited-liability"
                component={LimitedLiabilityCompany}
              />
              <Route path="/one-person-company" component={OnePersonCompany} />
              <Route path="/section-eight-company" component={SectionEight} />
              <Route exact path="/signin">
                {!authData ? (
                  <AmplifyAuthenticator>
                    <AmplifySignIn handleSubmit={handleClick} />
                  </AmplifyAuthenticator>
                ) : (
                  <HomePage />
                )}
              </Route>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </ScrollToTop>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
