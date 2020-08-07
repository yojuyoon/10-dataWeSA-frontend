import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoronaVirus from "./Pages/CoronaVirus";
import Nav from "./Components/Nav/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={CoronaVirus} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
