import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { createRoot } from 'react-dom/client';
import App from './App';


const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <PayPalScriptProvider options={{ "client-id": "test", currency: "USD" }}>
    <App />
  </PayPalScriptProvider>
);
