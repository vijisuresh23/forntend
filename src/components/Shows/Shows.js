import React, {useEffect, useState} from "react";
import {Backdrop, CircularProgress, Typography} from "@material-ui/core";
import ShowService from "./services/ShowService";
import styles from "./styles/ShowStyles"
import AddShow from "./AddShow";
import ShowsSection from "./ShowsSection";

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

    const runningShows = shows
        .filter(show => show.status === "RUNNING");

    const upcomingShows = shows
        .filter(show => show.status === "UPCOMING");

    return (
        <>
            <Typography variant="h4" className={classes.cardHeader}>
                Shows
            </Typography>
            <div className={classes.showsContent}>
                <ShowsSection name={"Screening Now"} shows={runningShows}/>
                <ShowsSection name={"Coming Soon"} shows={upcomingShows}/>
                <AddShow load={setLoading} onAddShow={handleAddShow}/>
            </div>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
};
