import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Website</h1>
      <p style={styles.description}>Join us today and explore amazing features!</p>
      <div style={styles.links}>
        <Link to="/addEvent" style={styles.link}>Add Event</Link>
        <Link to="/addBlog" style={styles.link}>Add Blog</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#666',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '200px',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
    marginRight:'20px',
  },
  linkHover: {
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  pageHeader: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  pageDescription: {
    fontSize: '1rem',
    color: '#666',
  },
};

export default AdminDashboard;