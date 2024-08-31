import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all events from the API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/users/getEvents'); // Update with your API endpoint
        setEvents(response.data);
      } catch (error) {
        setError('Failed to fetch events.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/deleteEvent/${id}`); // Update with your API endpoint for deletion
      setEvents(events.filter((event) => event.id !== id)); // Remove the deleted event from the list
    } catch (error) {
      setError('Failed to delete the event.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All Events</h1>
      <div style={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} style={styles.eventItem}>
            <h2 style={styles.eventTitle}>{event.title}</h2>
            <p style={styles.eventDescription}>{event.description}</p>
            {event.images && <img src={event.images} alt={event.title} style={styles.eventImage} />}
            <button 
              onClick={() => handleDelete(event.id)} 
              style={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    fontSize: '1.5rem', // Smaller header font size
    marginBottom: '1rem',
  },
  eventList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem', // Smaller gap between event items
  },
  eventItem: {
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '900px', // Limit the width of each event item
    margin: '0 auto', // Center align event items
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for better visual separation
    position: 'relative', // For positioning the delete button
  },
  eventTitle: {
    fontSize: '1.2rem', // Smaller font size for the event title
    marginBottom: '0.5rem',
  },
  eventDescription: {
    fontSize: '0.9rem', // Smaller font size for the event description
    marginBottom: '0.5rem',
  },
  eventImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  deleteButton: {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#d9534f',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};

export default AllEvents;
