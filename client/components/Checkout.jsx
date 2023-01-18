import { PayPalButtons } from "@paypal/react-paypal-js";
import RemoveFromCartButton from './RemoveFromCartButton';

const Checkout = ({ total, purchase, setTotal, setPurchase }) => {
  const style = { color: "silver", shape: "pill" };
  //console.log('purchase from Checkout ', purchase);
  
  const item_array = [];
  purchase.forEach(book => {
    item_array.push(<div key={book}>
        <p>Title: {book[0]} | Author: {book[1]}</p>
        <img src={book[2]}/>
        <RemoveFromCartButton total={total} purchase={purchase} setTotal={setTotal} book={book} setPurchase={setPurchase}/>
    </div>) 
  })
  
  return (
    <div className="flex-col justify-center">
      <p>Total: ${total}</p>
      {item_array}

      <div>
        <h4>Check out with</h4>
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
