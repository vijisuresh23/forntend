import Dialog from "@material-ui/core/Dialog/Dialog";
import Paper from "@material-ui/core/Paper/Paper";
import FormControl from "@material-ui/core/FormControl";
import {Button, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, {useRef, useState} from "react";
import styles from "./styles/showsStyles"
import bookingService from "./services/bookingService";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Alert from "@material-ui/lab/Alert/Alert";

export default function CustomerDetail({seats, show}) {
  const [showCustomerDetails, setShowCustomerDetails] = useState(true);
  const [success, setSuccess] = useState(null);
  const classes = styles();
  const inputName = useRef();
  const inputNumber = useRef();

  const handleBook = () => {
    let today = new Date().toISOString().split("T")[0];
    const payload = {
      date: today,
      showId: show.id,
      customer: {
        name: inputName.current.value,
        phoneNumber: inputNumber.current.value
      },
      noOfSeats: seats
    };
    bookingService.create(payload)
      .then(() => {
        setSuccess(true);
      }).catch(() => {
      setSuccess(false);
    }).finally(() => {
      setShowCustomerDetails(false);
    })

  };
  return (
    <>
      <Dialog open={showCustomerDetails}>
        <Paper className={classes.paper}>
          <FormControl>
            <Typography variant="subtitle1" className={classes.slotTime}>
              Enter Customer Details
            </Typography>
            <TextField inputRef={inputName} label="Name" />
            <TextField inputRef={inputNumber} label="Phone Number" />
            <Button variant="contained" style={{marginTop: 20}} color="primary" onClick={handleBook}>Book</Button>
          </FormControl>
        </Paper>
      </Dialog>

      <Snackbar open={success} autoHideDuration={2000} onClose={() => setSuccess(null)}>
        <Alert severity="success">
          Seats booked successfully!
        </Alert>
      </Snackbar>

      <Snackbar open={success === false} autoHideDuration={2000} onClose={() => setSuccess(null)}>
        <Alert severity="error">
          Sorry, seats could not be booked!
        </Alert>
      </Snackbar>
    </>
  )
}
