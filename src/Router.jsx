import { useState, useEffect } from 'react';
import { useNavigate, Routes, Route, Link, Navigate, BrowserRouter } from 'react-router-dom';
import PayPal from './Components/PayPal.jsx';
import OurStory from './OurStory.jsx';
import ContactForm from './Components/LoginSignUp/ContactForm.jsx';
import ProductPage from './ikko-active-buds.jsx';
import Login from './Components/LoginSignUp/Login.jsx';
import SignUpForm from './Components/LoginSignUp/SignUpForm.jsx';
import Account from './Account.jsx';
import Cart from './Cart.jsx';
import RefundPolicy from './RefundPolicy.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import ShippingPolicy from './ShippingPolicy.jsx';
import TermsOfService from './TermsOfService.jsx';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/App" element={<Home />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpForm handleLogin={handleLogin} />} />
        <Route path="/ikko-active-buds" element={<ProductPage />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/OurStory" element={<OurStory />} />
        <Route path="/Account" element={isLoggedIn ? <Account /> : <Navigate to="/signup" />} />
        <Route path="/Cart" element={isLoggedIn ? <Cart /> : <Navigate to="/signup" />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
