import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CandidatesContextProvider } from './context/CandidatesContext';
import { AuthContextProvider } from './context/AuthContext';
import { VotersContext, VotersContextContextProvider } from './context/VotersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CandidatesContextProvider>
        <VotersContextContextProvider>
          <App />
        </VotersContextContextProvider>
      </CandidatesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
