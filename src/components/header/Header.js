import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import MovieIcon from '@material-ui/icons/Movie';
import Person from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from "./styles/headerStyles";
import PropTypes from "prop-types";


const Header = ({onLogout, isAuthenticated}) => {
    const classes = styles();

    const profileSection =() =>{
        if(isAuthenticated){
            return(
                <div className={classes.profile}>
                    <Typography lassName={classes.headerLogo} variant="body1"> 
                    Welcome Admin!
                    </Typography>
                    <a href="/profile"><Person/></a>
                    
                </div>
            );
        }
    };
    const logoutSection = () => {
        if (isAuthenticated) {
            return (
                <div onClick={onLogout} className={classes.logoutLink}>
                    <ExitToAppIcon/>
                    <Typography className={classes.headerLogo} variant="body1">
                        Logout
                    </Typography>
                </div>
            
            );
        }
    };

    return (
        <AppBar position={"sticky"}>
            <Toolbar className={classes.toolbar}>
                <a href="/" className={classes.headerLink}>
                    <MovieIcon className={classes.cinemaLogoIcon}/>
                    <Typography className={classes.headerLogo} variant="h5">
                        SkyFox Cinema
                    </Typography>
                </a>
                {profileSection()}
                {logoutSection()}
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    onLogout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default Header;
