import React, { useEffect, useState } from "react";
import { auth, db, updateCartItems, getCartData } from "../src/Components/LoginSignUp/firebase"; // Ensure you have configured Firebase correctly
import { doc, onSnapshot } from "firebase/firestore";
import "./App.css";
import "./ProductPage.css";

function ProductPage() {
  const title = "The Ear Bud™ ikko active buds";
  const description = `
Advanced Smart System with AMOLED Touchscreen
- Seamlessly pairs via High-Bitrate Bluetooth for crystal-clear high-resolution wireless audio across devices like earphones, speakers, and smartphones.

Key Features – Completely Free:
- AI Voice Assistant (powered by ChatGPT-4o)
- Real-Time Translation in 62 languages
- Frequent OTA Updates for both the system and earphones
- Expanding App Library with regular enhancements
- [New Addition] AI Voice Recorder: ChatGPT-powered, supporting 57 languages—record, transcribe, and summarize voice memos instantly with state-of-the-art AI technology!

Always Connected:
- Wi-Fi
- 4G-ready SIM card slot
- Bluetooth 5.3

Award-Winning Design:
Recipient of the iF Design Award 2024

Important Note:
Due to the high demand for ActiveBuds, orders will be processed on a first-come, first-served basis. Your order will be shipped within 14 business days of confirmation.`;

  const images = [
    "../ikko-black.jpg",
    "../ikko_activebuds_3.webp",
    "../ikko_activebuds_4.webp",
    "../ikko_activebuds_5.webp",
    "../ikko_activebuds_6.webp",
    "../ikko_activebuds_7.webp",
    "../ikko_activebuds_8.webp",
    "../ikko_activebuds_9.webp",
    "../ikko_activebuds_10.webp",
    "../ikko_activebuds_11.webp",
    "../ikko_active_buds_12.webp",
    "../ikko_active_buds_13.webp",
    "../ikko_active_buds_14.webp",
    "../ikko_active_buds_15.webp",
    "../ikko_active_buds_16.webp",
    "../ikko_active_buds_17.webp",
    "../ikko_active_buds_18.webp",
    "../ikko_active_buds_19.webp",
  ];

  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [basePrice] = useState(199.99);
  const [baseOriginalPrice] = useState(349.99);
  const [mainImage, setMainImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(basePrice);
  const [selectedColor, setSelectedColor] = useState("#000");

  const handleColorChange = (color) => {
    setSelectedColor(color);

    // Update the image based on the selected color
    let newImage = mainImage;
    if (color === "#000") {
      newImage = "./ikko-black.jpg"; // Update with correct path
    } else if (color === "#ffc0cb") {
      newImage = "./ikko-softpink.jpg"; // Update with correct path
    } else if (color === "#FF1787") {
      newImage = "./ikko-pinkparade.jpg"; // Update with correct path
    }
    setMainImage(newImage); // Set the new image
  };

  // Listen for authentication changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        fetchCartData(authUser.uid);
      } else {
        setUser(null);
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch cart data from Firestore
  const fetchCartData = async (userId) => {
    const cartData = await getCartData(userId);
    setCartItems(cartData);
  };

  // Listen for real-time updates in Firestore
  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const unsubscribe = onSnapshot(userRef, (docSnap) => {
        if (docSnap.exists()) {
          setCartItems(docSnap.data().cartItems || []);
        }
      });

      return () => unsubscribe();
    }
  }, [user]);

  // Update total price when quantity changes
  useEffect(() => {
    setTotalPrice(basePrice * quantity);
  }, [quantity, basePrice]);

  // Handle image click
  const handleImageClick = (image) => {
    setMainImage(image);
  };

  // Increment quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement quantity (minimum of 1)
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  // Add to cart function
  const addToCart = async () => {
    if (user) {
      const updatedCart = [...cartItems];
      const existingItemIndex = updatedCart.findIndex(
        (item) => item.title === title && item.color === selectedColor
      );

      if (existingItemIndex !== -1) {
        updatedCart[existingItemIndex].quantity += quantity;
        updatedCart[existingItemIndex].price =
          updatedCart[existingItemIndex].quantity * basePrice;
      } else {
        updatedCart.push({
          title,
          price: basePrice * quantity,
          originalPrice: baseOriginalPrice * quantity,
          quantity,
          color: selectedColor,
          image: mainImage,
        });
      }

      setCartItems(updatedCart);

      // Save to Firestore
      await updateCartItems(user.uid, updatedCart);

      alert("Item successfully added to cart!");
    } else {
      alert("Please log in to add items to the cart!");
    }
  };

  return (
    <div className="product-page">
      <div className="product-images">
        <div className="main-image">
          <img src={mainImage} alt={title} />
        </div>
        <div className="thumbnail-images">
          {images.slice(0, 19).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={mainImage === image ? "active" : ""}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>

      <div className="product-details">
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>

        <div className="price-section">
          <div className="original-price">${baseOriginalPrice.toFixed(2)}</div>
          <div className="discounted-price">${totalPrice.toFixed(2)}</div>
        </div>

        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <p className="quantity-display">{quantity}</p>
          <button onClick={incrementQuantity}>+</button>
        </div>

        <div className="color-selector colors">
  {["#000", "#ffc0cb", "#FF1787"].map((color) => (
    <button
      key={color}
      className={`color-button ${selectedColor === color ? "selected" : ""}`}
      style={{
        backgroundColor: color,
        outline: selectedColor === color ? "3px solid #000" : "none",
      }}
      onClick={() => handleColorChange(color)}
    ></button>
  ))}
  <p>
    Selected Color:{" "}
    <span
      style={{
        color:
          selectedColor === "#000"
            ? "#000"
            : selectedColor === "#ffc0cb"
            ? "#ffc0cb"
            : "#FF1787",
      }}
    >
      {selectedColor === "#000"
        ? "Black"
        : selectedColor === "#ffc0cb"
        ? "Soft Pink"
        : "Pink Parade"}
    </span>
  </p>
</div>


        <button onClick={addToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
