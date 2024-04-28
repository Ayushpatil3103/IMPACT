import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase';
import './signup-styles.css';

function OrganizationSignup() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    password: '',
    type: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
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
        console.log('Sign-up successful:', data);
      
        navigate('/signin');
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
    <div className="container centered-form">
      <h2 className="signup-heading">Organization SignUp</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className='input-field'>
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
