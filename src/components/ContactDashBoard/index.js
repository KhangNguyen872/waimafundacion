import { Routes, Route } from 'react-router-dom';
import React, { createContext } from 'react';
import DashBoardLayout from './DashBoardLayout';
import DashBoardContact from "./DashBoardContact";
import DashBoardObjective from "./DashBoardObjective";

export const ThemeContext = createContext('light');

const ContactDashBoard = () => {
    return (
        <ThemeContext.Provider value="dark">
            <Routes>
                <Route path="/" element={<DashBoardLayout />}>
                    <Route index element={<DashBoardContact />} />
                    <Route path="objective" element={<DashBoardObjective />} />
                </Route>
            </Routes>
        </ThemeContext.Provider>
    );
};

export default ContactDashBoard;
