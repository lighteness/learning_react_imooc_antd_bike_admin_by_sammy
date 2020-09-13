import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "./App";

import Admin from "./admin";
import Home from "./pages/home";

export default class ERouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route
              path="/"
              render={() => (
                <Admin>
                  <Switch>
                    <Route path="/home" component={Home} />

                    <Redirect to="/home" />
                    {/* <Route component={NoMatch} /> */}
                  </Switch>
                </Admin>
              )}
            />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
