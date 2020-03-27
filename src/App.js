import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Layout from "./components/Layout/Layout";
import Theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
