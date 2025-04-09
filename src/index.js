import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';

createRoot(
  document.getElementById("root")
).render(
    <PrimeReactProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </PrimeReactProvider>
);

// Measure performance and log results (e.g., console.log or send to an analytics endpoint)
reportWebVitals();