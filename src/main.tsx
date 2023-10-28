// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import './services/styles/GlobalStyle.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
