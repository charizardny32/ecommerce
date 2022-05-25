import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import App from './App';
import './assets/style/styles.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<BrowserRouter>
  <PayPalScriptProvider options={{ "client-id": "test", currency: "USD" }}>
    <App />
  </PayPalScriptProvider>
</BrowserRouter>
);
