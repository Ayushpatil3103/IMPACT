import React, { useState } from 'react';
import Profiledashboard from '../VolDashboard/Dashvol';

function Navbar({ user }) {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Your logo image */}
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="profile">
        <button onClick={toggleProfile}>Profile</button>
        {showProfile && (
          <div className="profile-info">
            <p>Name: {user.Name}</p>
            <p>City: {user.City}</p>
            <p>Aadhar Number: {user['Aadhar number']}</p>
            <p>Phone Number: {user['Phone number']}</p>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
