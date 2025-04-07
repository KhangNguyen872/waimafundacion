import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import { AuthProvider } from '../src/context/AuthContext.js';

createRoot(
  document.getElementById("root")
).render(
    <AuthProvider>
      <PrimeReactProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </PrimeReactProvider>
    </AuthProvider>
);

// Measure performance and log results (e.g., console.log or send to an analytics endpoint)
reportWebVitals();