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
import History from './pages/History';
import Home from './pages/Home';
import Logistics from './pages/Logistics';
import Location from './pages/Location';
import Participants from './pages/Participants';
import PastParticipants from './pages/PastParticipants';
import Policies from './pages/Policies';
import Resources from './pages/Resources';
import Schedule from './pages/Schedule';

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
        <Route path="History" element={<History />} />
        <Route path="/" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Participants" element={<Participants />} />
        <Route path="/Past-Participants" element={<PastParticipants />} />
        <Route path="/Policies" element={<Policies />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </HashRouter>
  </ThemeProvider>
);
