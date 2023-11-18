// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import './utils/styles/styles.scss'

// Styles
import { createTheme, ThemeProvider } from "@mui/material";

// Pages
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Logistics from "./pages/Logistics";
import Resources from "./pages/Resources";

const theme = createTheme({
  typography: {
    fontFamily: "Futura PT, sans-serif",
    fontSize: 13,
    lineHeight: 1.3
  },
  palette: {
    background: {
      paper: "#1a1d1f"
    },
    primary: {
      main: "#ea21ad"
    },
    secondary: {
      main: "#919295"
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ThemeProvider theme={theme}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Resources" element={<Resources />} />
      </Routes>
    </HashRouter>
  // </ThemeProvider>
);
