import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home.js';
import Art from './pages/art.js';
import Photos from './pages/photos.js';
import Projects from './pages/projects.js';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/nav.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}> 
          <Route index element={<Home/>}/>
          <Route path="art" element={<Art/>}/>
          <Route path="photos" element={<Photos/>}/>
          <Route path="projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();