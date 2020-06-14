import {useEffect, useState} from "react";
import {QUERY_DATE_FORMAT} from "../../../Constants";
import showsService from "../services/showsService";

const useShowsRevenue = (showsDate) => {
    const [showsRevenueLoading, setShowsRevenueLoading] = useState(true);
    const [showsRevenue, setShowsRevenue] = useState(0);

    useEffect(() => {
        const formattedDate = showsDate.format(QUERY_DATE_FORMAT);
        showsService.getRevenue(formattedDate)
            .then(showsRevenue => {
                setShowsRevenueLoading(false);
                setShowsRevenue(showsRevenue);
            });
        // eslint-disable-next-line
    }, []);

    return {
        showsRevenue: showsRevenue,
        showsRevenueLoading: showsRevenueLoading
    };
};

export default useShowsRevenue;
