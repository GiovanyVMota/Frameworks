// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { BackgroundProvider } from './context/BackgroundContext';
import { AuthProvider } from './context/AuthContext';
import GlobalStyle from './styles/GlobalStyle'; 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle /> 
    <BrowserRouter>
      <AuthProvider>
        <BackgroundProvider>
          <App />
        </BackgroundProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);