import React from 'react';
import ReactDOM from 'react-dom/client';
import {nanoid} from "nanoid";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = [];

for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
        continue;
    }
    DATA.push({id: key, data: JSON.parse(localStorage.getItem(key))})
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
