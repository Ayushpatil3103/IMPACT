import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabase';
import './ngodash.css';
import logo from "../Home/images/2-removebg-preview 1.png";

function NgoProfileDashboard({ user }) {
  const [formData, setFormData] = useState({
    activityName: '',
    Description: '',
    Date: '',
    Time: '',
    Location: ''
  });

  const [postedActivities, setPostedActivities] = useState([]);
  const [volunteerData, setVolunteerData] = useState([]);
  const [displayProfile, setDisplayProfile] = useState(false); // State to control profile display

  const fetchPostedActivities = async () => {
    try {
      const { data: activities, error } = await supabase
        .from('Activities')
        .select('*')
        .eq('Organization_id', user.id);

      if (error) {
        throw error;
      }

      setPostedActivities(activities);
    } catch (error) {
      console.error('Error fetching posted activities:', error.message || error);
    }
  };

  const fetchVolunteerData = async () => {
    try {
      const { data, error } = await supabase
        .from('Applications')
        .select('Activity_name, Volunteer_name');

      if (error) {
        throw error;
      }

      setVolunteerData(data);
    } catch (error) {
      console.error('Error fetching volunteer data:', error.message || error);
    }
  };

  useEffect(() => {
    fetchPostedActivities();
    fetchVolunteerData();
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

  const toggleProfileDisplay = () => {
    // Toggling profile display
    setDisplayProfile(!displayProfile);
  };

  // Filter volunteer data to include only entries with activity names matching posted activities
  const filteredVolunteerData = volunteerData.filter(entry =>
    postedActivities.some(activity => activity['Activity Name-BY NGO'] === entry.Activity_name)
  );

  return (
    <div className='ngo-profile-dashboard'>
      <div className='Ngonav'>
        <div className='logo'>
          <img src={logo} alt="NGO Logo" />
        </div>
        <div className='profile-button'>
          <button onClick={toggleProfileDisplay}> Your Profile</button>
        </div>
      </div>

      {/* Displaying profile section based on displayProfile state */}
      {displayProfile && (
        <div className="profile-section">
          <p>Name: {user.Name}</p>
          <p>City: {user.City}</p>
          <p>Type: {user.Type}</p>
        </div>
      )}

      {/* Create New Activity form */}
      <div className='create-activity-container'>
        <h3 className='ngo-head'>Create New Activity</h3>
        <form className='create-activity-form' onSubmit={handleSubmit}>
          <div className='ngo-activity'>
            <label htmlFor="activityName">Activity Name:</label>
            <input
              type="text"
              id="activityName"
              name="activityName"
              value={formData.activityName}
              onChange={handleChange}
            />
          </div>
          <div className='ngo-desc'>
            <label className='label-desc' htmlFor="Description">Description:</label>
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
          <div className='ngo-time'>
            <label htmlFor="Time">Time:</label>
            <input
              type="time"
              id="Time"
              name="Time"
              value={formData.Time}
              onChange={handleChange}
            />
          </div>
          <div className='ngo-loc'>
            <label htmlFor="Location">Location:</label>
            <input
              type="text"
              id="Location"
              name="Location"
              value={formData.Location}
              onChange={handleChange}
            />
          </div>
          <button style={{ width: '200px', height: '50px' }}  className='ngo-submit' type="submit">Create Activity</button>
        <br />
        <br />
        </form>
      </div>

      {/* Posted activities section */}
      <div>
        <h3 className='ngo-posted'>Posted Activities</h3>
        <table className='ngo-table'>
          <thead>
            <tr>
              <th>Activity Name</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {postedActivities.map(activity => (
              <tr key={activity.aid}>
                <td>{activity['Activity Name-BY NGO']}</td>
                <td>{activity.Date}</td>
                <td><button  onClick={() => handleDelete(activity.aid)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
<br/>
<br></br>
      {/* Volunteer data section */}
      <div className="center-table">
  <h3 className='volunteer-data'>Volunteer Data</h3>
  <br/>
  <br/>
  <table className='volunteer-table'>
    <thead>
      <tr>
        <th>Activity Name</th>
        <th>Volunteer Name</th>
      </tr>
    </thead>
    <tbody>
      {filteredVolunteerData.map(entry => (
        <tr key={`${entry.Activity_name}-${entry.Volunteer_name}`}>
          <td>{entry.Activity_name}</td>
          <td>{entry.Volunteer_name}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default NgoProfileDashboard;
