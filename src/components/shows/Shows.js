import React, {useState} from "react";
import {Backdrop, CircularProgress, Typography} from "@material-ui/core";
import styles from "./styles/showStyles"
import AddShow from "./AddShow";
import ShowsSection from "./ShowsSection";
import useShows from "./hooks/useShows";

export default () => {
    const classes = styles();

    const [showsLoading, setShowsLoading] = useState(true);

    const {handleAddShow, runningShows, upcomingShows} = useShows(setShowsLoading);

    return (
        <>
            <Typography variant="h4" className={classes.cardHeader}>
                Shows
            </Typography>
            <div className={classes.showsContent}>
                <ShowsSection name="Screening Now" shows={runningShows} emptyMessage="No shows screening now"/>
                <ShowsSection name="Coming Soon" shows={upcomingShows} emptyMessage="No shows coming soon"/>
                <AddShow loadShow={setShowsLoading} onAddShow={handleAddShow}/>
            </div>
            <Backdrop className={classes.backdrop} open={showsLoading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </>
    );
};
