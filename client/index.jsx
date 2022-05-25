import React from 'react';
import { createRoot } from 'react-dom/client';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import App from './App';
import './index.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <PayPalScriptProvider options={{ "client-id": "test", currency: "USD" }}>
    <App />
  </PayPalScriptProvider>
);
