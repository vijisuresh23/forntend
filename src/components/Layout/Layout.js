import React from 'react';
import { Box, Container, Paper } from "@material-ui/core";
import Header from "../Header/Header";
import styles from "./LayoutStyles";
import RootRouter from "../../router/root.router";

const Layout = () => {
    const classes = styles();
    return (
        <Box>
            <Header />
            <Container maxWidth={"lg"} className={classes.container}>
                <Paper className={classes.paper}>
                    <RootRouter />
                </Paper>
            </Container>

        </Box>
    )
}

export default Layout;