import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NgoProfileDashboard from '../NGODashboard/Dashngo';
import { supabase } from '../../supabase';
import './signin-styles.css';

function NgoSignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // New state to track if logged in

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from('NGO')
        .select('*')
        .eq('Email', formData.email)
        .eq('Password', formData.password)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        // Save the logged-in user's data
        setLoggedInUser(data);
        setLoggedIn(true); // Set logged in state to true
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while signing in.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {!loggedIn && ( // Only render sign-in form if not logged in
        <div className="container">
          <div className="signin-content">
            <h2>NGO Sign In</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      )}
      {loggedIn && <NgoProfileDashboard user={loggedInUser} />} {/* Render dashboard if logged in */}
    </>
  );
}

export default NgoSignIn;
