import React from 'react';
import { Box, Container, Paper } from "@material-ui/core";
import Header from "../Header/Header";
import styles from "./LayoutStyles";

const Layout = () => {
    const classes = styles();
    return (
        <Box>
            <Header />
            <Container maxWidth={"lg"} className={classes.container}>
                <Paper className={classes.paper}>
                </Paper>
            </Container>

        </Box>
    )
}

export default Layout;