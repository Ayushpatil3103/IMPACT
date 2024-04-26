import React, { useState } from 'react';
import { supabase } from '../../supabase';
import './signup-styles.css';
function OrganizationSignup() {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    password: '',
    type: '',
  });
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Insert data into the 'NGO' table
      const { data, error } = await supabase
        .from('NGO')
        .insert([
          {
            Name: formData.name,
            City: formData.city,
            Email: formData.email,
            Password: formData.password,
            Type: formData.type,
          },
        ])
        .select();
      
      if (error) {
        setError(error.message || 'An error occurred while signing up.');
      } else {
        // Handle successful sign-up
        console.log('Sign-up successful:', data);
      }
    } catch (error) {
      setError(error.message || 'An error occurred while signing up.');
    }
  };

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    
    <div className="centered-form"> {/* Added class for centering */}
      <h2  className="signup-heading">Organization Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
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
        <div>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default OrganizationSignup;
