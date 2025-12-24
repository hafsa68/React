import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TopNabBar from './components/TopNabBar';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNabBar/>
    <App />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
