import React, {useEffect, useState} from "react";
import {
    Avatar,
    Backdrop,
    CircularProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import ShowService from "./services/ShowService";
import styles from "./styles/ShowStyles"
import {CURRENCY_SYMBOL} from "../../Constants";
import AddShow from "./AddShow";

export default () => {
    const classes = styles();

    const [loading, setLoading] = useState(true);

    const [shows, setShows] = useState([]);
    useEffect(() => {
        ShowService.fetchAll()
            .then(shows => {
                setLoading(false);
                setShows(shows);
            })
    }, []);

    const handleAddShow = (showData) => {
        setShows(shows.concat(showData));
    };

    return (
        <>
            <Typography variant='h4'>
                Shows
            </Typography>
            <br/>
            <Typography variant='h5'>
                Current Runnning
            </Typography>
            <Divider/>
            <List className={classes.listRoot}>
                {
                    shows
                        .filter(show => show.status === "RUNNING")
                        .map(show => (
                        <div key={show.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMoviesIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={show.name} secondary={show.description} />
                                <ListItemText primary={`${CURRENCY_SYMBOL}${show.price}`} className={classes.price}
                                              primaryTypographyProps={{variant: 'h6', color: 'secondary'}}
                                />
                            </ListItem>
                            <Divider variant="middle"/>
                        </div>
                    ))
                }
            </List>
            <br/>

            <Typography variant='h5'>
                Upcoming
            </Typography>
            <List className={classes.listRoot}>
                {
                    shows
                        .filter(show => show.status === "UPCOMING")
                        .map(show => (
                        <div key={show.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMoviesIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={show.name} secondary={show.description} />
                                <ListItemText primary={`${CURRENCY_SYMBOL}${show.price}`} className={classes.price}
                                              primaryTypographyProps={{variant: 'h6', color: 'secondary'}}
                                />
                            </ListItem>
                            <Divider variant="middle"/>
                        </div>
                    ))
                }
            </List>
            <br/>
            <AddShow load={setLoading} onAddShow={handleAddShow}/>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
};
