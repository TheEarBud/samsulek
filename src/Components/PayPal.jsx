import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const Paypal = () => {
  // Set total price as a local variable (example: replace this with actual cart total)
  const [totalPrice] = useState(199.99); // Example total price, update dynamically if needed

  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
      <div className="paypal-container">
        <PayPalButtons
          style={{ layout: "vertical", color: "blue" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(() => {
              alert("Payment Successful!");
            });
          }}
          onError={() => {
            alert("Payment failed. Please try again.");
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default Paypal;
