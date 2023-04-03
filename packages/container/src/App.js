import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "container--",
});

const App = () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/pricing" component={MarketingApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </div>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
