import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
  import { createBrowserHistory } from "history";
  import React from "react";
  import Shows from "../components/Shows/Shows";

  
  export const history = createBrowserHistory();
  
  const RootRouter = () => {
    return (
      <Router history={history}>
        <Switch>
          <Redirect path="/" exact to="/shows" />
          <Route exact path="/shows" component={Shows} />
        </Switch>
      </Router>
    );
  };
  
  export default RootRouter;
  