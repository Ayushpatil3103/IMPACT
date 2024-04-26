import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NgoProfileDashboard from '../NGODashboard/Dashngo';
import { supabase } from '../../supabase';

function NgoSignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

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
    <div>
      <h2>NGO Sign In</h2>
      {error && <p>{error}</p>}
      {loggedInUser ? (
        <NgoProfileDashboard user={loggedInUser} />
      ) : (
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
      )}
    </div>
  );
}

export default NgoSignIn;
