import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Login from './user/login';
import Register from './user/register';
import reportWebVitals from './reportWebVitals';
// import Calculator from './tasks/calculator';
import FetchData from './tasks/fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Calculator/> */}
    {/* <FetchData /> */}
    <Register/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
