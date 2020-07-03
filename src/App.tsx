import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ComingSoon from "containers/coming-soon/coming-soon.container";
import Home from "containers/home.container";
import React from "react";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
