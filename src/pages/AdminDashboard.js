import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Website</h1>
      <p style={styles.description}>Join us today and explore amazing features!</p>
      <div style={styles.links}>
        <Link to="/ZXPRLQNUTKaddEvent" style={styles.link}>Add Event</Link>
        <Link to="/ZXPRLQNUTKaddBlog" style={styles.link}>Add Blog</Link>
        <Link to="/ZXPRLQNUTKgetJoinUs" style={styles.link}>Join Us Data</Link>
      </div>
      <div style={styles.stats}>
        <Link to="/ZXPRLQNUTKsubscribers" style={styles.statLink}>Subscribers</Link>
        <Link to="/ZXPRLQNUTKgetEvents" style={styles.statLink}>Events</Link>
        <Link to="/ZXPRLQNUTKgetBlogs" style={styles.statLink}>Blogs</Link>
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
    padding: '0 2rem',
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
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  link: {
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    border: '1px solid #007BFF',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
  stats: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    gap: '1rem',
  },
  statLink: {
    textDecoration: 'none',
    color: '#28A745',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    border: '1px solid #28A745',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default AdminDashboard;
