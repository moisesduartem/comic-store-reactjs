import React, { Fragment } from 'react';

import { GlobalStyle } from './globalStyles';
import { ToastContainer } from "react-toastify";

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
        <ToastContainer />
      </Fragment>
    </ApplicationContextProvider>
  );
}

export default App;
