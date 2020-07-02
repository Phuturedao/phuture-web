import "styles/app.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./containers/home.container";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
