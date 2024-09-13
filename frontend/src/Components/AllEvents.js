import React, { useState } from 'react';
import EventsData from './Events/EventsData'; // Adjust the path as necessary

const AllEvents = () => {
  const [events, setEvents] = useState(EventsData); // Using the imported data
  const [error, setError] = useState(null);

  // Delete handler for local data
  const handleDelete = (id) => {
    try {
      setEvents(events.filter((event) => event.id !== id)); // Remove the deleted event from the list
    } catch (error) {
      setError('Failed to delete the event.');
    }
  };

  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All Events</h1>
      <div style={styles.eventList}>
        {events.map((event) => (
          <div key={event.id} style={styles.eventItem}>
            <h2 style={styles.eventTitle}>{event.title}</h2>
            <p style={styles.eventDescription}>{event.description}</p>
            {event.poster && <img src={event.poster} alt={event.title} style={styles.eventImage} />}
            <div style={styles.imageGallery}>
              {event.images.map((image, index) => (
                <img key={index} src={image} alt={`${event.title} - ${index}`} style={styles.eventImage} />
              ))}
            </div>
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
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  eventList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  eventItem: {
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '900px',
    margin: '0 auto',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  eventTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  eventDescription: {
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  eventImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  imageGallery: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
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
