import {useEffect, useState} from 'react';
import showsService from "../services/showsService";
import {QUERY_DATE_FORMAT} from "../../../Constants";

const useShows = (setShowsLoading, showDate) => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const formattedDate = showDate.format(QUERY_DATE_FORMAT);
        showsService.fetchAll(formattedDate)
            .then(shows => {
                setShowsLoading(false);
                setShows(shows);
            });
    }, [setShowsLoading, showDate]);

    return shows;
}

export default useShows;
