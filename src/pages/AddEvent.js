import React, { useState } from 'react';
import axios from 'axios';

const AddEvent = () => {
    const [eventName, setEventName] = useState('');
    const [eventInfo, setEventInfo] = useState('');
    const [images, setImages] = useState('');  // Comma-separated URLs

    const handleURLChange = (e) => {
        setImages(e.target.value);  // Update state with comma-separated URLs
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            
            const response = await axios.post('/api/users/addEvent',{eventName,eventInfo,images});
            
            console.log('Event added successfully:', response.data);
            //2Optionally reset form fields
            setEventName('');
            setEventInfo('');
            setImages('');
        } catch (error) {
            console.error('Error adding Event:', error);
        }
    };

    return (
        <div className="add-event-container" style={containerStyle}>
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputGroupStyle}>
                    <label htmlFor="eventName" style={labelStyle}>Event Name:</label>
                    <input
                        type="text"
                        id="eventName"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter Event name"
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label htmlFor="eventInfo" style={labelStyle}>Event Info:</label>
                    <textarea
                        id="eventInfo"
                        value={eventInfo}
                        onChange={(e) => setEventInfo(e.target.value)}
                        placeholder="Enter Event details"
                        required
                        style={{ ...inputStyle, height: '100px' }}
                    ></textarea>
                </div> 

                <div style={inputGroupStyle}>
                    <label htmlFor="images" style={labelStyle}>Image URLs (comma-separated):</label>
                    <input
                        type="text"
                        id="images"
                        value={images}
                        onChange={handleURLChange}
                        placeholder="Enter image URLs"
                        style={inputStyle}
                    />
                </div>
                <button type="submit" style={buttonStyle}>Add Event</button>
            </form>
        </div>
    );
};

const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    marginTop: '20vh',
    marginBottom: '250px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
};

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const inputGroupStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
};

const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '95%',
};

const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
};

export default AddEvent;