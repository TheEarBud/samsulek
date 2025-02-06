import React, { useState, useEffect } from "react";
import { auth, db } from "../src/Components/LoginSignUp/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const cart = userDoc.data().cartItems || [];
          const cleanedCart = cart.map((item) => ({
            ...item,
            price: item.price ?? 0,
            quantity: item.quantity ?? 1,
            totalPrice: (item.price ?? 0) * (item.quantity ?? 1),
          }));

          setCartItems(cleanedCart);
          calculateTotal(cleanedCart);
        }
      }
    };

    fetchCartData();
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);
    setTotalPrice(total);
  };

  const updateQuantity = async (index, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    updatedCart[index].totalPrice = updatedCart[index].price * newQuantity;

    setCartItems(updatedCart);
    calculateTotal(updatedCart);

    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), { cartItems: updatedCart });
    }
  };

  const removeItem = async (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    calculateTotal(updatedCart);

    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), { cartItems: updatedCart });
    }
  };

  const clearCart = async () => {
    setCartItems([]);
    setTotalPrice(0);

    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), { cartItems: [] });
    }
  };

  return (
    <div className="container py-5">

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="card mb-3 shadow-sm p-3">
                <div className="row align-items-center">
                  <div className="col-md-3 text-center">
                    <img src={item.image} alt={item.title} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-6">
                    <h5>{item.title}</h5>
                    <p className="text-muted">Color: {item.color}</p>
                    <p className="fw-bold text-success">${item.price.toFixed(2)}</p>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-sm btn-outline-primary" onClick={() => updateQuantity(index, item.quantity - 1)}>
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => updateQuantity(index, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 text-end">
                    <p className="fw-bold text-success">Total: ${item.totalPrice.toFixed(2)}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => removeItem(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        {cartItems.length > 0 && (
          <div className="col-lg-4">
            <div className="card p-3 shadow-sm">
              <h4 className="mb-3">Order Summary</h4>
              <p className="fw-bold">Subtotal: ${totalPrice.toFixed(2)}</p>
              <p>Delivery: <span className="text-success">Free</span></p>
              <h4 className="fw-bold">Total: ${totalPrice.toFixed(2)}</h4>
              <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
                <PayPalButtons
                  style={{ layout: "vertical", color: "blue", display: "block" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{ amount: { value: totalPrice.toFixed(2) } }],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(() => {
                      alert("Payment Successful!");
                      clearCart();
                    });
                  }}
                  onError={() => {
                    alert("Payment failed. Please try again.");
                  }}
                />
              </PayPalScriptProvider>
              <button className="btn btn-danger mt-3 w-100" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
