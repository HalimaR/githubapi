import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App';
import {BrowserRouter , Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
