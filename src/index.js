import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
// import Swiper from 'swiper';

// You can use these libraries directly if needed
$(document).ready(function() {
  console.log('jQuery is ready');
});

// // Initialize Swiper if needed
// const swiper = new Swiper('.swiper-container', {
//   // Swiper options
// });

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
