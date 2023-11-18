// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

// Styles
import './utils/styles/styles.scss'

// Pages
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Logistics from './pages/Logistics';
import Location from './pages/Location';
import Resources from './pages/Resources';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Logistics" element={<Logistics />} />
      <Route path="/Resources" element={<Resources />} />
    </Routes>
  </HashRouter>
);
