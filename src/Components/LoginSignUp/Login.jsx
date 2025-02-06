import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged In Successfully');
      localStorage.setItem('isLoggedIn', true); // Set login status
      navigate('/account'); // Redirect to the account page after successful login
    } catch (err) {
      console.error(err);
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="login-form border p-4 rounded shadow" onSubmit={handleSubmit}>
            <h2 className="text-black text-center mb-4">Login</h2>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Logging In...' : 'Login'}
            </button>

            <p className="mt-3 text-center">
              Don’t have an account? 
              <Link to="/signup"> Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
