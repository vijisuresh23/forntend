// noinspection ES6CheckImport
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Shows from "../shows/Shows";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BlockIcon from '@material-ui/icons/Block';
import {Error} from "../common";
import {Login, ProtectedRoute} from "../login";
import PropTypes from "prop-types";
import moment from "moment";
import Profile from "../AdminProfile/profile";
import FormDialog from "../AdminProfile/ChangePasswordDialog"

const RootRouter = ({isAuthenticated, onLogin}) => {
    const todayDate = moment().format("YYYY-MM-DD");

    return (
        <Router>
            <Switch>
                <Redirect path="/" exact to={`/shows?date=${todayDate}`}/>
                <ProtectedRoute exact path="/shows" component={Shows} isAuthenticated={isAuthenticated}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/changePassword" component={FormDialog}/>
                <Route exact path="/login"
                       component={(props) => <Login isAuthenticated={isAuthenticated} onLogin={onLogin} {...props}/>}/>

                <Route exact path="/error" component={
                    () => <Error errorIcon={ErrorOutlineIcon} errorMessage={"Oops..Something went wrong"}/>
                }
                />

                <Route component={
                    () => <Error errorIcon={BlockIcon} errorMessage={"Not Found"}/>
                }/>

            </Switch>
        </Router>
    );
};

RootRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};

export default RootRouter;
