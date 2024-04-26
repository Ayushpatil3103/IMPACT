import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';

function Profiledashboard({ user }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function fetchActivities() {
      try {
        // Fetch all activities from the 'Activities' table
        const { data, error } = await supabase.from('Activities').select('*');
        if (error) {
          throw error;
        }
        // Set the fetched activities to the state
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error.message || error);
      }
    }

    fetchActivities();
  }, []); // Run only once on component mount

  const handleApply = async (activityId) => {
    try {
      // Fetch volunteer's ID
      const volunteerId = user.volid; // Assuming user.volid is the volunteer's ID

      // Insert a new application into the 'Applications' table
      const { error } = await supabase.from('Applications').insert([
        {
          activity_id: activityId,
          Volunteer_id: volunteerId,
        }
      ]);
      if (error) {
        throw error;
      }
      console.log('Application submitted successfully');
      // Optionally, you can update the UI to reflect the application submission
    } catch (error) {
      console.error('Error submitting application:', error.message || error);
      // Handle error appropriately (e.g., display error message to the user)
    }
  };

  return (
    <div>
      <h2>Welcome, {user.email}!</h2>
      <p>Name: {user.Name}</p>
      <p>City: {user.City}</p>
      <p>Aadhar Number: {user['Aadhar number']}</p>
      <p>Phone Number: {user['Phone number']}</p>

      <h3>Activities</h3>
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
            <tr key={activity.id}>
              <td>{activity['Activity Name-BY NGO']}</td>
              <td>{activity.Description}</td>
              <td>{activity.Date}</td>
              <td>{activity.Time}</td>
              <td>{activity.Location}</td>
              <td>
                <button onClick={() => handleApply(activity.id)}>Apply</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profiledashboard;
