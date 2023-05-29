import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

// This should already be declared in your API file
//var express = require('express');
//var app = express();

// ADD THIS
//var cors = require('cors');
//App.use(cors());

export const API_URL = "https://127.0.0.1:8000/api/students/"

export const API_STATIC_MEDIA = "https://127.0.0.1:8000/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//const express = require('express');
//const cors = require('cors');

//const app = express();

// 👇️ configure CORS
//app.use(cors());

//app.get('/products/:id', function (req, res, next) {
 // res.json({msg: 'This is CORS-enabled for all origins!'});
//});

//const PORT = 3456;

//app.listen(PORT, function () {
//  console.log(`CORS-enabled web server listening on port ${PORT}`);
//});
