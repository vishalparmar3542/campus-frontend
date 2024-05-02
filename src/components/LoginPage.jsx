// LoginPage.js

import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";
import { useEffect } from 'react';
import "../styles/LoginPage.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  useEffect(() => {
    // Check for token in local storage
    const token = localStorage.getItem('token');
    if (token) {
      console.log("navigating to product")
      navigate('/Products'); // Redirect to dashboard if token exists
    }
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://backend-compass.bhanupratap-12212215.workers.dev/v1/auth/login', {
        username,
        password,
      });
      
      // Assuming backend returns a token upon successful login
      const token = response.data.token;
      console.log('Login successful. Token:', token);
      localStorage.setItem('token', token);
      navigate('/Products');
      // Perform further actions like setting user as authenticated and redirecting
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='Login-container'>
      <Link to="/Register">
                                Sign up
                            </Link>
      <h2 className='Login-title'>Login</h2>
      <form onSubmit={handleLogin} className='LoginPage-form'>
        <div>
          <label className='Login-label' htmlFor="username">Username:</label>
          <input
            className='Login-input'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className='Login-label'  htmlFor="password">Password:</label>
          <input
          className='Login-input'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className='Login-error' style={{ color: 'red' }}>{error}</div>}
        <button className='Login-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
