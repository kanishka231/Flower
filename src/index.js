import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./LoginScreen";
import Dashboard from "./Dashboard";
import Calculator from './Calculator';
import reportWebVitals from './reportWebVitals';
import Notification from './Notification';
import UploadPhoto from './UploadPhoto';
import Text from './Text';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/uploadPhoto" element={<UploadPhoto />} />
        <Route path="/text" element={<Text />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
