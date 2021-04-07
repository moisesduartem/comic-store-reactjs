import React, { Fragment } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Fragment>
        <div id="app">
          <Routes />
        </div>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
