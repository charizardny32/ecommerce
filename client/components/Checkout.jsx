import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = ({ style, fundingSource }) => {

  return (
    <div>
      <h1>Checkout Page!!!</h1>
      <div>
        {/* <PayPalButtons style={style} fundingSource={fundingSource} /> */}
      </div>
    </div>
  );
};

export default Checkout;