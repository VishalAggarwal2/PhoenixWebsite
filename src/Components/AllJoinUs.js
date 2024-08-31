import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllJoinUs = () => {
  const [joinUsData, setJoinUsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJoinUsData = async () => {
      try {
        const response = await axios.get('/api/users/getJoinUs');
        setJoinUsData(response.data);
      } catch (error) {
        setError('Failed to fetch "Join Us" data.');
      } finally {
        setLoading(false);
      }
    };

    fetchJoinUsData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/deleteJoinUs/${id}`);
      setJoinUsData(joinUsData.filter(entry => entry.id !== id));
    } catch (error) {
      setError('Failed to delete the entry. Please try again.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Join Us Entries</h1>
      <div style={styles.joinUsList}>
        {joinUsData.length === 0 ? (
          <p>No entries found.</p>
        ) : (
          joinUsData.map((entry) => (
            <div key={entry.id} style={styles.joinUsItem}>
              <h2 style={styles.joinUsName}>{entry.name}</h2>
              <p style={styles.joinUsEmail}>{entry.email}</p>
              <button 
                style={styles.deleteButton}
                onClick={() => handleDelete(entry.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  joinUsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  joinUsItem: {
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '300px',
    margin: '0 auto',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'relative',
  },
  joinUsName: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  joinUsEmail: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  deleteButton: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    padding: '0.3rem 0.6rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '0.8rem',
  },
};

export default AllJoinUs;
