import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import './dashvol.css';
import logo from "../Home/images/2-removebg-preview 1.png";

function Profiledashboard({ user }) {
  const [activities, setActivities] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [appliedActivities, setAppliedActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const { data, error } = await supabase.from('Activities').select('*');
        if (error) {
          throw error;
        }
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error.message || error);
      }
    }

    fetchActivities();
  }, []);

  const handleApply = async (activityName) => {
    try {
      const volunteerId = user.volid;
      const volunteerName = user.Name;
      
      // Insert into Applications table
      const { error } = await supabase.from('Applications').insert([
        {
          Volunteer_id: volunteerId,
          Volunteer_name: volunteerName,
          Activity_name: activityName
        }
      ]);
      
      if (error) {
        throw error;
      }

      
      setAppliedActivities(prevAppliedActivities => [...prevAppliedActivities, activityName]);

      console.log('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error.message || error);
    }
  };
  
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="profile-dashboard">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="profile-button">
          <button onClick={toggleProfile}>Your Profile</button>
        </div>
      </div>
      {showProfile && (
        <div className="sidebar">
          <h3>User Details</h3>
          <p>Name: {user.Name}</p>
          <p>City: {user.City}</p>
          <p>Aadhar Number: {user['Aadhar number']}</p>
          <p>Phone Number: {user['Phone number']}</p>
        </div>
      )}
      <div className="main-content">
        <h2 style={{ textAlign: 'center', color:'#fff',fontSize:'64px' }}>Welcome, {user.Name}!</h2>
        <br/>
        <br/>
        <div className="activities-table" style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
          <h3>Activities</h3>
          <br/>
          <table>
            <thead>
              <tr>
                <th>Activity Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity['Activity Name-BY NGO']}>
                  <td>{activity['Activity Name-BY NGO']}</td>
                  <td>{activity.Description}</td>
                  <td>{activity.Date}</td>
                  <td>{activity.Time}</td>
                  <td>{activity.Location}</td>
                  <td>
                  <button 
  style={appliedActivities.includes(activity['Activity Name-BY NGO']) ? { backgroundColor: 'green',  } : null}
  onClick={() => handleApply(activity['Activity Name-BY NGO'])}
>
  {appliedActivities.includes(activity['Activity Name-BY NGO']) ? 'Applied' : 'Apply'}
</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profiledashboard;
