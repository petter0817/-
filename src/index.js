import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store'
import { Provider } from "react-redux";
import App from './App';
const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)


