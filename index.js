import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthProvider';

window.onload = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
   </React.StrictMode>
  );
  };
// To start measuring performance in the app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
