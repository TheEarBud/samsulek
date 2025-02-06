import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../src/Components/LoginSignUp/firebase";
import { signOut } from "firebase/auth"; // Import signOut
import "bootstrap/dist/css/bootstrap.css";
import "./Account.css";

const Account = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) {
        navigate("/login");
        return;
      }

      // Fetch user data
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUserInfo(userDoc.data());
        setCartItems(userDoc.data().cartItems || []); // Initialize cart items from user data
      }
    };

    fetchData();
  }, [navigate]);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      localStorage.removeItem('isLoggedIn'); // Remove login status
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!userInfo) return <div className="text-center mt-5 loading">Loading...</div>;

  return (
    <div className="container-fluid containero">
      {/* Account Information */}
      <div className="p-4 w-100">
        <h2 className="text-center mb-4 text-primary">Account Info</h2>
        <div className="profile-info">
          {userInfo.imageUrl && (
            <img
              src={userInfo.imageUrl}
              alt="Profile"
              className="rounded-circle mb-3"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          )}
          <div>
            <p className="fs-5 mb-2">
              <strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}
            </p>
            <p className="fs-5">
              <strong>Email:</strong> {userInfo.email}
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Cart Items */}
      <div className="p-4 w-100">
        <h2 className="text-center mb-4 text-primary">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item, index) => (
              <li key={index} className="list-group-item">
                <div>
                  <strong>{item.title}</strong> - Color: {item.color} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Account;
