import { PayPalButtons } from "@paypal/react-paypal-js";


function App() {
	
	return (
		<>
			<PayPalButtons
				fundingSource="paypal"
				createOrder={(data, actions) => {
					console.log("order creation", data, actions);
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: "11.99"
								}
							}
						]
					});
				}}
				onApprove={(data, actions) => {
					console.log("approved");
					const name = actions.order.capture().then(details => details);
					console.log("name:", name);
					return name;
				}}
				onCancel={(data, actions) => {
					const details = actions.order.capture().then(response => response);
					console.log("order cancelled", details);
					return "order cancelled";
				}}
				onError={() => {
					console.log("order error");
					return "order error";
				}}
			/>
		</>
	);
}

export default App;
