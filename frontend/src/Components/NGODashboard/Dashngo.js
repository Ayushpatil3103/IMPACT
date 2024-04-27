import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import './ngodash.css';
import logo from "../Home/images/2-removebg-preview 1.png"
function NgoProfileDashboard({ user }) {
  const [formData, setFormData] = useState({
    activityName: '',
    Description: '',
    Date: '',
    Time: '',
    Location: ''
  });

  const [postedActivities, setPostedActivities] = useState([]);

  const fetchPostedActivities = async () => {
    try {
      const { data: activities, error } = await supabase
        .from('Activities')
        .select('*')
        .eq('Organization_id', user.id);

      if (error) {
        throw error;
      }

      // Fetch applications for each activity
      for (const activity of activities) {
        const { data: applications, error } = await supabase
          .from('Applications')
          .select('*')
          .eq('activity_id', activity.aid);

        if (error) {
          throw error;
        }

        // Add applications to the activity object
        activity.applications = applications;
      }

      setPostedActivities(activities);
    } catch (error) {
      console.error('Error fetching posted activities:', error.message || error);
    }
  };

  useEffect(() => {
    fetchPostedActivities();
  }, [user.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data, error } = await supabase
        .from('Activities')
        .insert([
          {
            'Activity Name-BY NGO': formData.activityName,
            Description: formData.Description,
            Date: formData.Date,
            Time: formData.Time,
            Location: formData.Location,
            Organization_id: user.id,
          },
        ])
        .single();

      if (error) {
        throw error;
      }

      console.log('Activity created successfully:', data);
      setFormData({
        activityName: '',
        Description: '',
        Date: '',
        Time: '',
        Location: ''
      });
      fetchPostedActivities();
    } catch (error) {
      console.error('Error creating activity:', error.message || error);
    }
  };

  const handleAccept = async (applicationId) => {
    try {
      const { error } = await supabase
        .from('Applications')
        .update({ Status: true })
        .eq('id', applicationId);

      if (error) {
        throw error;
      }

      console.log('Application accepted successfully');
      fetchPostedActivities();
    } catch (error) {
      console.error('Error accepting application:', error.message || error);
    }
  };

  const handleReject = async (applicationId) => {
    try {
      const { error } = await supabase
        .from('Applications')
        .update({ Status: false })
        .eq('id', applicationId);

      if (error) {
        throw error;
      }

      console.log('Application rejected successfully');
      fetchPostedActivities();
    } catch (error) {
      console.error('Error rejecting application:', error.message || error);
    }
  };

  const handleDelete = async (activityId) => {
    try {
      const { error } = await supabase
        .from('Activities')
        .delete()
        .eq('aid', activityId);

      if (error) {
        throw error;
      }

      console.log('Activity deleted successfully');
      fetchPostedActivities();
    } catch (error) {
      console.error('Error deleting activity:', error.message || error);
    }
  };

  return (
    <div className='Ngonav'>
    <img src= {logo}></img>
      <p>Name: {user.Name}</p>
      <p>City: {user.City}</p>
      <p>Type: {user.Type}</p>

      <div>
      <h2>Welcome, {user.Email}!</h2>
  <h3>Create New Activity</h3>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="activityName">Activity Name:</label>
      <input
        type="text"
        id="activityName"
        name="activityName"
        value={formData.activityName}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="Description">Description:</label>
      <textarea
        id="Description"
        name="Description"
        value={formData.Description}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="Date">Date:</label>
      <input
        type="date"
        id="Date"
        name="Date"
        value={formData.Date}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="Time">Time:</label>
      <input
        type="time"
        id="Time"
        name="Time"
        value={formData.Time}
        onChange={handleChange}
      />
    </div>
    <div>
      <label htmlFor="Location">Location:</label>
      <input
        type="text"
        id="Location"
        name="Location"
        value={formData.Location}
        onChange={handleChange}
      />
    </div>
    <button type="submit">Create Activity</button>
  </form>
</div>


      <div>
        <h3>Posted Activities</h3>
        <table>
          <thead>
            <tr>
              {/* Table headers */}
            </tr>
          </thead>
          <tbody>
  {postedActivities.map(activity => (
    <tr key={activity.aid}>
      {/* Display activity details */}
      <td>
        <p><strong>Activity Name:</strong> {activity.activityName}</p>
        <p><strong>Description:</strong> {activity.Description}</p>
        <p><strong>Date:</strong> {activity.Date}</p>
        <p><strong>Time:</strong> {activity.Time}</p>
        <p><strong>Location:</strong> {activity.Location}</p>
      </td>
      {/* Display volunteers who applied for the activity */}
      <td>
        {activity.applications.map(application => (
          <div key={application.id}>
            {/* Display volunteer's name */}
            <p><strong>Volunteer Name:</strong> {application.volunteer_name}</p>
            {/* Add Accept and Reject buttons */}
            {!application.Status && (
              <div>
                <button onClick={() => handleAccept(application.id)}>Accept</button>
                <button onClick={() => handleReject(application.id)}>Reject</button>
              </div>
            )}
          </div>
        ))}
      </td>
      {/* Add Delete button for the activity */}
      <td><button onClick={() => handleDelete(activity.aid)}>Delete</button></td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default NgoProfileDashboard;
