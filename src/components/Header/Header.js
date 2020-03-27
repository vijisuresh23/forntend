import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from "./HeaderStyles";

const Header = () => {
  const classes = styles();
  return (
    <AppBar position={"sticky"}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.headerLogo} variant="h5">
          SkyFox Cinema
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
