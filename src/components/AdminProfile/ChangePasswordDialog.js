import * as React from 'react';
import {Button} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {DialogTitle} from '@material-ui/core';
import FormOfPasswordChange from './Services/ChangePasswordServices';
import styles from './Styles/ProfileStyles';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes=styles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.loginButton}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
        <div className="ChangePassword">
          <FormOfPasswordChange/>
        </div>
          </DialogContent>
          {/* <DialogActions>  <Button type="submit">Change Password</Button></DialogActions> */}
      </Dialog>
    </div>
  );
}
