import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import styles from "./styles/ErrorStyles"
import PropTypes from "prop-types";

const Error = ({ErrorIcon, errorMessage}) => {
    const classes = styles();

    return (
        <div className={classes.errorContent}>
            <ErrorIcon className={classes.errorIcon}/>
            <Typography variant='h4'>
                {errorMessage}
            </Typography>
        </div>
    );
};

Error.propTypes = {
    ErrorIcon: PropTypes.objectOf(Component).isRequired,
    errorMessage: PropTypes.string.isRequired,
};

export default Error;
