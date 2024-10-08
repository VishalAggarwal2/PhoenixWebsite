import React, { useState } from 'react';
import axios from 'axios';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field to state
    message: '',
  });

  const { name, email, phone } = formData;

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
      await axios.post("/api/users/joinUs", { name, email, phone }); // Included phone in the submission
      alert('Submission successful');
      setFormData({
        name: '',
        email: '',
        phone: '', // Reset phone field
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
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2rem', color: '#333' }}>Join Our Team</h1>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' }}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Why do you want to join us?"
          style={{ width: '95%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px', height: '100px' }}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#fa8241', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>Submit</button>
      </form>
    </div>
  );
};

export default JoinUs;
