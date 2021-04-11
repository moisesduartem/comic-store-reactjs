import React, { Fragment } from 'react';

import { GlobalStyle } from './globalStyles';
import { ApplicationContextProvider } from './store/context';

import Routes from './routes';

function App() {
  return (
    <ApplicationContextProvider>
      <Fragment>
        <div id="app">
          <Routes />
        </div>
        <GlobalStyle />
      </Fragment>
    </ApplicationContextProvider>
  );
}

export default App;
