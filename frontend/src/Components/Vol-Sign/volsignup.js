import React, { useState } from 'react';
import { supabase } from '../../supabase';
import './vol-signup-styles.css';
import { useNavigate } from 'react-router-dom';

function VolunteerSignup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    aadharNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from('Volunteers')
        .insert([
          {
            Name: formData.name,
            City: formData.city,
            'Aadhar number': formData.aadharNumber,
            'Phone number': formData.phoneNumber,
            email: formData.email,
            password: formData.password,
          },
        ])
        .select();

      if (error) {
        setError(error.message || 'An error occurred while signing up.');
      } else {
        console.log('Sign-up successful:', data);
        // Redirect to the sign-in page after successful signup
        navigate('/vol/signin');
      }
    } catch (error) {
      setError(error.message || 'An error occurred while signing up.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
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
          <label htmlFor="aadharNumber">Aadhar Number:</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default VolunteerSignup;
