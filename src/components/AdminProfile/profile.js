import React from "react";
import {TextField} from "@material-ui/core";
import styles from './Styles/ProfileStyles';
import FormDialog from "./ChangePasswordDialog";


const Profile=()=>{
    const classes = styles();
    
    return (
       <div className={classes.loginContainer}>
        
         <form className={classes.form}>
         <h1>User details</h1>
         <div className={classes.nameDiv}>
            <label>Name:</label>
            <TextField required margin="dense" name="name" disabled/>
            </div>
            <div className={classes.nameDiv}>
            <label>Username:</label>
            <TextField required margin="dense" name="username" disabled/>
            </div>
            <FormDialog/>
        </form>
        
        </div>
    );
};
export default Profile;