import React, {useState} from "react";
import {
    Avatar,
    Backdrop,
    Button,
    CircularProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import styles from "./styles/showsStyles"
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useShows from "./hooks/useShows";
import queryString from "query-string";
import moment from "moment";
import {HEADER_DATE_FORMAT, INR_SYMBOL, QUERY_DATE_FORMAT} from "../../Constants"

export default ({location, history}) => {
    const classes = styles();

    const searchString = location.search;
    let showDate;
    if (searchString && ("date" in queryString.parse(searchString))) {
        showDate = moment(queryString.parse(searchString).date);
    } else {
        showDate = moment();
    }

    const [showsLoading, setShowsLoading] = useState(true);
    const shows = useShows(setShowsLoading, showDate);

    const handleNextDay = () => {
        const nextDateFormatted = showDate.add(1, 'days').format(QUERY_DATE_FORMAT);
        history.push({
            ...location,
            search: `?date=${nextDateFormatted}`
        });
    };

    const handlePreviousDay = () => {
        const previousDateFormatted = showDate.subtract(1, 'days').format(QUERY_DATE_FORMAT);
        history.push({
            ...location,
            search: `?date=${previousDateFormatted}`
        });
    };

    return (
        <>
            <Typography variant="h4" className={classes.cardHeader}>
                Shows ({showDate.format(HEADER_DATE_FORMAT)})
            </Typography>
            <List className={classes.listRoot}>
                {
                    shows.map(show => (
                        <div key={show.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMoviesIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={show.movie.name} secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.slotTime}
                                            color="textPrimary"
                                        >
                                            {show.slot.startTime}
                                        </Typography>
                                    </>
                                }/>
                                <ListItemText primary={`${INR_SYMBOL}${show.cost}`} className={classes.price}
                                              primaryTypographyProps={{variant: 'h6', color: 'secondary'}}
                                />
                            </ListItem>
                        </div>
                    ))
                }
            </List>
            <div className={classes.buttons}>
                <Button
                    onClick={handlePreviousDay}
                    startIcon={<ArrowBackIcon/>}
                    color="primary"
                    className={classes.navigationButton}
                >
                    Previous Day
                </Button>
                <Button
                    onClick={handleNextDay}
                    endIcon={<ArrowForwardIcon/>}
                    color="primary"
                    className={classes.navigationButton}
                >
                    Next Day
                </Button>
            </div>
            <Backdrop className={classes.backdrop} open={showsLoading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
};
