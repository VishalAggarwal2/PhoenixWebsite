import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
    const [blogName, setblogName] = useState('');
    const [blogInfo, setblogInfo] = useState('');
    const [images, setImages] = useState('');  // Comma-separated URLs

    const handleURLChange = (e) => {
        setImages(e.target.value);  // Update state with comma-separated URLs
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await axios.post('/api/users/addBlog',{blogName,blogInfo,images});
            
            console.log('Blog added successfully:', response.data);
            //2Optionally reset form fields
            setblogName('');
            setblogInfo('');
            setImages('');
        } catch (error) {
            console.error('Error adding Blog:', error);
        }
    };

    return (
        <div className="add-blog-container" style={containerStyle}>
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputGroupStyle}>
                    <label htmlFor="blogName" style={labelStyle}>Blog Name:</label>
                    <input
                        type="text"
                        id="blogName"
                        value={blogName}
                        onChange={(e) => setblogName(e.target.value)}
                        placeholder="Enter Blog name"
                        required
                        style={inputStyle}
                    />
                </div>

                <div style={inputGroupStyle}>
                    <label htmlFor="blogInfo" style={labelStyle}>Blog Info:</label>
                    <textarea
                        id="blogInfo"
                        value={blogInfo}
                        onChange={(e) => setblogInfo(e.target.value)}
                        placeholder="Enter Blog details"
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
                <button type="submit" style={buttonStyle}>Add Blog</button>
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

export default AddBlog;