import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './FullNameForm';
import App4 from './Counter'
import Calculator from './Calculator';
import XState from './XState';
import Login from './Login.js';
import XCountries from './XCountries.js'
import CounterAppClass from './CounterClass.js';
import Pagination from './Pagination.js';
import Dictionary from './Dictionary.js';
import Xweather from './XWeather.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Xweather />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
