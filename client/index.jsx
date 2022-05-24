import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import style sheet?

const container = document.getElementById('app');
console.log('inside index.jsx');
const root = createRoot(container);
root.render(<App />);
