import "primereact/resources/themes/viva-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import React, { createContext } from 'react';
import Home from "./components/Home";
import ContactDashBoard from "./components/ContactDashBoard";
import Program from "./components/Program";
import './App.scss';
import Contact from "./components/Contact";
import Reports from "./components/Reports";

export const ThemeContext = createContext('light');

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Router> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about/*" element={<ContactDashBoard />} />
            <Route path="/program" element={<Program />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
