import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@Redux/redux-store';
import App from './App';

const root = document.createElement('div');
const backdropRoot = document.createElement('div');

root.setAttribute('id', 'app');
backdropRoot.setAttribute('id', 'backdrop-root');
document.body.appendChild(backdropRoot);
document.body.appendChild(root);

const webAppRoot = createRoot(root);
webAppRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
