import {useEffect, useState} from 'react';
import showsService from "../services/showsService";

export default (setShowsLoading) => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        showsService.fetchAll()
            .then(shows => {
                setShowsLoading(false);
                setShows(shows);
            });
    }, [setShowsLoading]);

    const handleAddShow = (showData) => {
        setShows(shows.concat(showData));
    };

    const runningShows = shows
        .filter(show => show.status === "RUNNING");

    const upcomingShows = shows
        .filter(show => show.status === "UPCOMING");

    return {
        handleAddShow: handleAddShow,
        runningShows: runningShows,
        upcomingShows: upcomingShows
    };
}
