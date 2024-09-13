import React, { useState, useEffect } from "react";
import axios from "axios";

const AllSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all subscribers from the API
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get("/api/users/ZXPRLQNUTKsubscribers"); // Update with your API endpoint
        setSubscribers(response.data);
      } catch (error) {
        setError("Failed to fetch subscribers.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []); // Empty dependency array means this effect runs once on mount

  // Function to handle deleting a subscriber
  const deleteSubscriber = async (id) => {
    try {
      await axios.delete(`/api/users/ZXPRLQNUTKdeleteSubscribers/${id}`); // Assuming this is the API endpoint to delete a subscriber
      setSubscribers(subscribers.filter((subscriber) => subscriber.id !== id)); // Update the state to remove the deleted subscriber
    } catch (error) {
      console.error("Failed to delete subscriber:", error);
      setError("Failed to delete subscriber.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>All Subscribers</h1>
      <div style={styles.subscriberList}>
        {subscribers.map((subscriber) => (
          <div key={subscriber.id} style={styles.subscriberItem}>
            <h2 style={styles.subscriberName}>{subscriber.name}</h2>
            <p style={styles.subscriberEmail}>{subscriber.email}</p>
            <button
              onClick={() => deleteSubscriber(subscriber.id)}
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
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    fontSize: "1.5rem", // Smaller header font size
    marginBottom: "1rem",
  },
  subscriberList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem", // Smaller gap between subscriber items
  },
  subscriberItem: {
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    maxWidth: "300px", // Limit the width of each subscriber item
    margin: "0 auto", // Center align subscriber items
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Subtle shadow for better visual separation
  },
  subscriberName: {
    fontSize: "1.2rem", // Smaller font size for the subscriber name
    marginBottom: "0.5rem",
  },
  subscriberEmail: {
    fontSize: "1rem", // Font size for the subscriber email
    marginBottom: "0.5rem",
  },
  deleteButton: {
    backgroundColor: "#ff4d4f", // Red color for delete button
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    marginTop: "0.5rem",
  },
};

export default AllSubscribers;
