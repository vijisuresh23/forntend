// noinspection ES6CheckImport
import {Redirect, Route} from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({component: Component, path, isAuthenticated, ...rest}) => {

    const renderedComponent = (props) => {
        return isAuthenticated
            ? (<Component {...props}/>)
            : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {
                            referrer: path
                        }
                    }}
                />
            );
    };

    return (
        <Route
            path={path}
            {...rest}
            render={renderedComponent}
        />
    );
}

ProtectedRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
