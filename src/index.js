import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Navigate, Route } from "react-router-dom";
import Dashboard from '../src/App.js';
import reportWebVitals from './reportWebVitals';
import Error from '../src/Components/Error/Index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route exact path='/' element= {<Dashboard />}/>
        <Route exact path="/:userId/" element={<Dashboard />}/>
        <Route path="*" element={<Error />} /> 
        <Route path= "/" element={<Navigate replace to = "/" />} />
      </Routes>
    </HashRouter>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
