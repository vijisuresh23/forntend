import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Shows from "../components/Shows/Shows";

export default () => {
    return (
        <Router>
            <Switch>
                <Redirect path="/" exact to="/shows"/>
                <Route exact path="/shows" component={Shows}/>
            </Switch>
        </Router>
    );
};
