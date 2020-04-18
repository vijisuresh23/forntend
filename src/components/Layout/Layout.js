import React from 'react';
import {Box, Card, Container} from "@material-ui/core";
import Header from "../Header/Header";
import styles from "./styles/LayoutStyles";
import RootRouter from "../../router/RootRouter";

export default () => {
    const classes = styles();
    return (
        <Box>
            <Header/>
            <Container maxWidth={false} className={classes.container}>
                <Card>
                    <RootRouter/>
                </Card>
            </Container>

        </Box>
    )
};
