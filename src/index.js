import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'index.css';

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from 'redux/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LoaderBlock from 'components/Loaders/LoaderBlock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={<LoaderBlock/>} persistor={persistor} >
      <BrowserRouter 
      basename="goit-react-hw-08-phonebook"
      >
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);