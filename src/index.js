import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LineContextProvider } from './contexts/LineContext';
import { StageContextProvider } from './contexts/StageContext';
import { AllDataContextProvider } from './contexts/AllDataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AllDataContextProvider>
      <StageContextProvider>
        <LineContextProvider>
          <App />
        </LineContextProvider>
      </StageContextProvider>
    </AllDataContextProvider>
  </React.StrictMode>
);
