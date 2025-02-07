import React, { useState } from "react";
import { db } from "./firebase";
import './ContactForm.css';
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save data to Firestore
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id);

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="name-email-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{color: "black"}}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            style={{color: "black"}}
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            style={{color: "black"}}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{color: "black"}}
          ></textarea>
        </div>
        <button type="submit">
          Send →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
