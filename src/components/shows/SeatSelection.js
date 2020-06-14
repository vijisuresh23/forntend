import Dialog from "@material-ui/core/Dialog/Dialog";
import Paper from "@material-ui/core/Paper/Paper";
import Grid from "@material-ui/core/Grid";
import {Avatar, Button, Typography} from "@material-ui/core";
import LocalMoviesIcon from "@material-ui/core/SvgIcon/SvgIcon";
import TextField from "@material-ui/core/TextField";
import React, {useState} from "react";
import styles from "./styles/showsStyles"
import CustomerDetail from "./CustomerDetail";

export default function SeatSelection({selectedShow}) {
  const [showSeatSelection, setShowSeatSelection] = useState(true);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [seats, setSeats] = useState(1);
  const classes = styles();

  return (
    <>
    <Dialog open={showSeatSelection}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>
              <LocalMoviesIcon/>
            </Avatar>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {selectedShow.movie.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {selectedShow.movie.plot}
                </Typography>
                <Typography variant="body2" color="textPrimary" className={classes.slotTime}>
                  {selectedShow.movie.duration}
                </Typography>
              </Grid>
              <Grid item>
                <TextField type="number" label="Seats" defaultValue="1"
                           inputProps={{step: "1", min: "1", max: "15"}} onChange={(e) => setSeats(e.target.value)}/>
                <Button variant="contained" color="primary" style={{marginLeft: 20, verticalAlign: "bottom"}}
                        onClick={() => {
                          setShowSeatSelection(false);
                          setShowCustomerDetails(true);
                        }}>
                  NEXT
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">&#8377;{(selectedShow.cost * seats).toFixed(2)}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
      {showCustomerDetails && <CustomerDetail seats={seats} show={selectedShow}/>}
  </>);
}
