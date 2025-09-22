// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { BackgroundProvider } from './context/BackgroundContext';
import { AuthProvider } from './context/AuthContext'; // <- Importar

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* <- Envolver com o AuthProvider */}
        <BackgroundProvider>
          <App />
        </BackgroundProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);