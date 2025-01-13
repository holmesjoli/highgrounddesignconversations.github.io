// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

// Styles
import './utils/styles/styles.scss';
import { createTheme, ThemeProvider } from "@mui/material";

// Pages
import Participants from './pages/Participants';
import History from './pages/History';
import Home from './pages/Home';
import Logistics from './pages/Logistics';
import Location from './pages/Location';
import PastParticipants from './pages/PastParticipants';
import Policies from './pages/Policies';
import ExternalResources from './pages/ExternalResources';
import Schedule from './pages/Schedule';
import InternalResources from './pages/InternalResources';

const theme = createTheme({
  typography: {
      fontFamily: "futura-pt, sans-serif",
      fontSize: 13
  },
  palette: {
    background: {
      paper: "#ffffff"
    },
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#4e5155"
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Routes>
        <Route path="/Participants" element={<Participants />} />
        <Route path="History" element={<History />} />
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Past-Participants" element={<PastParticipants />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/ExternalResources" element={<ExternalResources />} />
        <Route path="/InternalResources" element={<InternalResources />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
