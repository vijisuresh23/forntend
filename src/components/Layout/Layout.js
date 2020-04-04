import React from 'react';
import {Box, Container, Paper} from "@material-ui/core";
import Header from "../Header/Header";
import styles from "./LayoutStyles";
import RootRouter from "../../router/RootRouter";

export default () => {
    const classes = styles();
    return (
        <Box>
            <Header/>
            <Container maxWidth={"lg"} className={classes.container}>
                <Paper className={classes.paper}>
                    <RootRouter/>
                </Paper>
            </Container>

        </Box>
    )
};
