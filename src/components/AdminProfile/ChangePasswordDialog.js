import * as React from 'react';
import {Button, FormControl,InputLabel, Input} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
        <div className="ChangePassword">
          <form initialValues={initialValues}
                    validationSchema={formSchema}>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">old Password</InputLabel>
              <Input id="standard-adornment-oldpassword"
            type={values.showPassword ? 'text' : 'password'}
            onChange={handleChange('password')}
            endAdornment={<IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
          >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>}>
              </Input>
            </FormControl>
            <br/>
            <FormControl sx={{ m: 1, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-newpassword">New Password</InputLabel>
              <Input id="standard-adornment-newpassword"
            type={values.showPassword ? 'text' : 'password'}
            onChange={handleChange('password')}
            endAdornment={<InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>}>
              </Input>
            </FormControl>
            <br/>
            <FormControl sx={{ m: 2, width: '40ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
              <Input 
              id="standard-adornment-oldpassword"
            type={values.showPassword ? 'text' : 'password'}
            onChange={handleChange('password')}
            endAdornment={<InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>}>
              </Input>
            </FormControl>
          </form>
        </div>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Change Password</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
