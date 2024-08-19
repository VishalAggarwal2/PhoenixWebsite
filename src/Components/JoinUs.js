import React, { useState } from 'react';
import axios from 'axios';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/users/joinUs", { name, email });
      alert('Submission successful');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <form style={{ maxWidth: '400px', width: '100%', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2rem', color: '#333' }}>Join Us</h1>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
          value={email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Why do you want to join us?"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px', height: '100px' }}
          value={message}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#fa8241', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>Submit</button>
      </form>
    </div>
  );
};

export default JoinUs;