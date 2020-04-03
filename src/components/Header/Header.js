import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import MovieIcon from '@material-ui/icons/Movie';
import styles from "./HeaderStyles";

export default () => {
    const classes = styles();
    return (
        <AppBar position={"sticky"}>
            <Toolbar className={classes.toolbar}>
                <MovieIcon className={classes.headerIcon}/>
                <Typography className={classes.headerLogo} variant="h5">
                    SkyFox Cinema
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
