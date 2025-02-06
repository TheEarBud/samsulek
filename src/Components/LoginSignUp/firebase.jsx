import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOeUlNvCul_-Eka5dMi0Txrnz_nYHyoek",
  authDomain: "jeelee-fish.firebaseapp.com",
  projectId: "jeelee-fish",
  storageBucket: "jeelee-fish.appspot.com",
  messagingSenderId: "738229480834",
  appId: "1:738229480834:web:0ebfedfd8045079f41339b",
  measurementId: "G-5Y0K46H78R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Firebase Authentication instance

// Fetch user data including cart items
const getUserData = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? userDoc.data() : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Function to save or update user data including cart items
const saveUserData = async (userId, userData) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, userData, { merge: true });
    console.log("User data saved successfully.");
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

// Function to fetch cart items for a specific user
const getCartData = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? (userDoc.data().cartItems || []) : [];
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return [];
  }
};

// Function to update cart items for a specific user
const updateCartItems = async (userId, cartItems) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { cartItems });
    console.log("Cart items updated successfully.");
  } catch (error) {
    console.error("Error updating cart items:", error);
  }
};

// Exporting functions
export { db, auth, getUserData, saveUserData, getCartData, updateCartItems };
