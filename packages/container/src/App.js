import React, { useState, useEffect, lazy, Suspense } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Loader from "./components/Loader";

const AuthApp = lazy(() => import("./apps/AuthApp"));
const MarketingApp = lazy(() => import("./apps/MarketingApp"));
const DashboardApp = lazy(() => import("./apps/DashboardApp"));

const history = createBrowserHistory();

const generateClassName = createGenerateClassName({
  productionPrefix: "container--",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            isSignedIn={isSignedIn}
            onSignOut={() => setIsSignedIn(false)}
          />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn ? (
                  <Redirect to="/auth/signin" />
                ) : (
                  <DashboardApp />
                )}
              </Route>
              <Route path="/" component={MarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
