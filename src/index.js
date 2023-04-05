import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App7  from './DaySeven';
import ProductList from './DaySix';
import App from './App';
import Day8 from './DayEight';
import Day9 from './day9/DayNine';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <BrowserRouter>
 <Day9/><br/><br/>
 </BrowserRouter>
 <App7/><br/><br/>
 <Day8/><br/><br/>
 <ProductList/><br/><br/><br/><br/>
 <App/>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
