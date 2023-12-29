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
import History from './pages/History';
import Home from './pages/Home';
import Logistics from './pages/Logistics';
import Location from './pages/Location';
import Participants from './pages/Participants';
import PastParticipants from './pages/PastParticipants';
import Resources from './pages/Resources';
import Schedule from './pages/Schedule';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="History" element={<History />} />
      <Route path="/" element={<Home />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Logistics" element={<Logistics />} />
      <Route path="/Participants" element={<Participants />} />
      <Route path="/Past-Participants" element={<PastParticipants />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/Schedule" element={<Schedule />} />
    </Routes>
  </HashRouter>
);
