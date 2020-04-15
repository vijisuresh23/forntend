import React from "react";
import PropTypes from "prop-types";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import {CURRENCY_SYMBOL} from "../../Constants";
import styles from "./styles/ShowsSectionStyles"

const ShowsSection = ({name, shows}) => {
    const classes = styles();
    const numberOfShows = shows.length;

    const dividerIfPresent = (index) => {
        if (index !== (numberOfShows - 1)) {
            return <Divider variant="middle"/>
        }
    };

    return (
        <>
            <Typography variant='h5' className={classes.sectionHeader}>
                {name}
            </Typography>
            <Divider/>
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
        </>
    );
};

ShowsSection.propTypes = {
    name: PropTypes.string.isRequired,
    shows: PropTypes.array.isRequired
};

export default ShowsSection;
