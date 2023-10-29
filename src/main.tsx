// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import './services/styles/GlobalStyle.scss'
import { Provider } from "react-redux";
import { store } from './services/store/store.ts';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
