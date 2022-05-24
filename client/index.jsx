import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { createRoot } from 'react-dom/client';
import App from './App';


const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <PayPalScriptProvider options={{
    "client-id": "AQA9BFfPFPaFSpsp5BBLctmL5BMciKycnMf6s7quCwt4qt3hirbGNWXZDMKJOc4CoqYFRnF1yt7FEnKE",
    currency: "USD"
    }}
    >
    <App />
  </PayPalScriptProvider>
);
