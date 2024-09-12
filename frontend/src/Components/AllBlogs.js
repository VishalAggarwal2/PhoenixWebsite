import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/users/ZXPRLQNUTKgetBlogs'); // Update with your API endpoint
        setBlogs(response.data);
      } catch (error) {
        setError('Failed to fetch blogs.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/users/ZXPRLQNUTKdeleteBlog/${id}`); // Update with your API endpoint for deletion
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove the deleted blog from the list
    } catch (error) {
      setError('Failed to delete the blog.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All Blogs</h1>
      <div style={styles.blogList}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.blogItem}>
            <h2 style={styles.blogTitle}>{blog.title}</h2>
            <p style={styles.blogDescription}>{blog.description}</p>
            {blog.images && <img src={blog.images} alt={blog.title} style={styles.blogImage} />}
            <button 
              onClick={() => handleDelete(blog.id)} 
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
    fontSize: '2rem',
    marginBottom: '1.5rem',
  },
  blogList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  blogItem: {
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    position: 'relative', // For positioning the delete button
  },
  blogTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  blogDescription: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  blogImage: {
    maxWidth: '50%', // Fixed image width issue
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

export default AllBlogs;
