import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import Layout from "./components/Layout/Layout";
import Theme from './Theme';

export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline/>
            <Layout/>
        </ThemeProvider>
    );
};
