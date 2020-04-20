import React from "react";
import PropTypes from "prop-types";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import {CURRENCY_SYMBOL} from "../../Constants";
import styles from "./styles/showsSectionStyles"
import {EmptyShows} from "../common";

const ShowsSection = ({name, shows, emptyMessage}) => {
    const classes = styles();
    const numberOfShows = shows.length;

    const dividerIfPresent = (index) => {
        if (index !== (numberOfShows - 1)) {
            return <Divider variant="middle"/>
        }
    };

    const sectionContent = () => {
        if (numberOfShows === 0) {
            return (
                <EmptyShows emptyShowsMessage={emptyMessage}/>
            );
        }
        return (
            <List className={classes.listRoot}>
                {
                    shows.map((show, index) => (
                        <div key={show.id}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMoviesIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={show.name} secondary={show.description}/>
                                <ListItemText primary={`${CURRENCY_SYMBOL}${show.price}`} className={classes.price}
                                              primaryTypographyProps={{variant: 'h6', color: 'secondary'}}
                                />
                            </ListItem>
                            {dividerIfPresent(index)}
                        </div>
                    ))
                }
            </List>
        );
    };

    return (
        <>
            <Typography variant='h5' className={classes.sectionHeader}>
                {name}
            </Typography>
            <Divider/>
            {sectionContent()}
        </>
    );
};

ShowsSection.propTypes = {
    name: PropTypes.string.isRequired,
    shows: PropTypes.array.isRequired,
    emptyMessage: PropTypes.string.isRequired
};

export default ShowsSection;
