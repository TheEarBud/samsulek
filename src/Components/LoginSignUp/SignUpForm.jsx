import React, { useState } from 'react';
import './SignUpForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from './firebase'; 
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result); // Store image URL for display
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user info in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
        imageUrl,
        uid: user.uid,
      });

      // Redirect to the account page after successful signup
      navigate('/account');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use. Please use a different email.');
      } else {
        setError('Failed to create account. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <form className="signup-form border p-4 rounded shadow bg-white" onSubmit={handleSubmit}>
            <h2 className="text-black text-center mb-4">Sign Up</h2>

            {/* Profile Image Upload */}
            <div className="text-center mb-3">
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <label
                htmlFor="image"
                className="rounded-circle border d-flex justify-content-center align-items-center mx-auto"
                style={{
                  width: '120px',
                  height: '120px',
                  cursor: 'pointer',
                  backgroundColor: '#f8f9fa',
                  overflow: 'hidden',
                }}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Profile"
                    className="img-fluid rounded-circle"
                  />
                ) : (
                  <span className="text-secondary">Upload Image</span>
                )}
              </label>
            </div>

            {/* First Name Input */}
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            {/* Last Name Input */}
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>

            <p className="mt-3 text-center">
              Already have an account? 
              <Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
