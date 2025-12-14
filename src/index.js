import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext'; // <--- Importujemy!
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Owijamy App w Provider */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);