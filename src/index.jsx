import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './reducers/store';
import { ThemeProvider } from '@mui/material/styles';

import { THEME } from './muitheme.js';
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

