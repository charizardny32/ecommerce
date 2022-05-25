import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = ({ cart }) => {
  const style = { color: "silver", shape: "pill" };

  return (
    <div className="flex-col justify-center">
      <div>
        <PayPalButtons
          style={style}
          fundingSource="paypal"
          createOrder={(data, actions) => {
            console.log("Paypal createOrder");
            return actions.order.create({
              purchase_units: [{ amount: { value: "101.99" } }]
            });
          }}
          onApprove={(data, actions) => {
            console.log(cart);
            // capture buyer data actions.order.capture()...
            return;
          }}
          onCancel={() => console.log("Paypal onCancel")}
          onError={error => console.log("Paypal onError", error)}
        />
      </div>
    </div>
  );
};

export default Checkout;
