import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DetailsView, HomeView, ErrorView } from "../Views";

class Component extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/details/:id" component={DetailsView} />
          <Route path="*" exact component={ErrorView} />
        </Switch>
      </Router>
    );
  }
}

export default Component;
