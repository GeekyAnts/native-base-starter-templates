import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import StarterIntro from "./screens/StarterIntro";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <StarterIntro />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
