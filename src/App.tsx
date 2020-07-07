import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AllIndexes from "containers/all-indexes/all-indexes.container";
import ComingSoon from "containers/coming-soon/coming-soon.container";
import Faq from "containers/faq/faq.container";
import Home from "containers/home/home.container";
import React from "react";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/all-indexes">
            <AllIndexes />
          </Route>
          <Route path="/how-it-works">
            <Faq />
          </Route>
          <Route path="/">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
