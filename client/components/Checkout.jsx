import { PayPalButtons } from "@paypal/react-paypal-js";

const Checkout = ({ total, purchase }) => {
  const style = { color: "silver", shape: "pill" };
  console.log(purchase);
  
  // const item_array = [];
  // purchase.forEach(book => {
  //   <div>
      
  //   </div>
    
  // })
  

  return (
    <div className="flex-col justify-center">
      <p>Total: ${total}</p>
      <p>Your Purchase:</p>
      <p>Title: {purchase[0][0]}</p>
      <p>Author: {purchase[0][1]}</p>
      <img src={purchase[0][2]} />
      <p>Description: {purchase[0][3]}</p>
      <br/>
      <p>Title: {purchase[1][0]}</p>
      <p>Author: {purchase[1][1]}</p>
      <img src={purchase[1][2]} />
      <p>Description: {purchase[1][3]}</p>
      
      
      <div>
        <PayPalButtons
          style={style}
          fundingSource="paypal"
          createOrder={(data, actions) => {
            console.log("Paypal createOrder");
            return actions.order.create({
              purchase_units: [{ amount: { value: total } }]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture()
              .then(response => {
                console.log(response);
                return response;
              });
          }}
          onCancel={() => alert("Order cancelled!")}
          onError={error => console.log("Paypal onError", error)}
        />
      </div>
    </div>
  );
};

export default Checkout;
