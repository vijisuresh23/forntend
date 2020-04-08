// noinspection ES6CheckImport
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Shows from "../components/Shows/Shows";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BlockIcon from '@material-ui/icons/Block';
import Error from "../components/Common/Error";

export default () => {
    return (
        <Router>
            <Switch>
                <Redirect path="/" exact to="/shows"/>
                <Route exact path="/shows" component={Shows}/>
                <Route exact path="/error" component={
                    () => <Error ErrorIcon={ErrorOutlineIcon} errorMessage={"Oops..Something went wrong"}/>
                }
                />
                <Route component={
                    () => <Error ErrorIcon={BlockIcon} errorMessage={"Not Found"}/>
                }/>
            </Switch>
        </Router>
    );
};
