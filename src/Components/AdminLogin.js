import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Credentials = [
    { email: process.env.REACT_APP_ADMIN_EMAIL_1, password: process.env.REACT_APP_ADMIN_PASSWORD_1 },
    { email: process.env.REACT_APP_ADMIN_EMAIL_2, password: process.env.REACT_APP_ADMIN_PASSWORD_2 },
    { email: process.env.REACT_APP_ADMIN_EMAIL_3, password: process.env.REACT_APP_ADMIN_PASSWORD_3 },
    { email: process.env.REACT_APP_ADMIN_EMAIL_4, password: process.env.REACT_APP_ADMIN_PASSWORD_4 },
    { email: process.env.REACT_APP_ADMIN_EMAIL_5, password: process.env.REACT_APP_ADMIN_PASSWORD_5 },
];

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const isValid = Credentials.some(
            (cred) => cred.email === email && cred.password === password
        );

        if (isValid) {
            alert('Login successful!');
        } else {
            console.log('Invalid credentials');
            alert('Invalid email or password');
        }
    };

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#f0f0f0' 
        }}>
            <form 
                onSubmit={handleLogin} 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '350px', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                    backgroundColor: '#ffffff'
                }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ 
                        marginBottom: '15px', 
                        padding: '12px', 
                        fontSize: '16px', 
                        borderRadius: '4px', 
                        border: '1px solid #ccc' 
                    }}
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ 
                        marginBottom: '20px', 
                        padding: '12px', 
                        fontSize: '16px', 
                        borderRadius: '4px', 
                        border: '1px solid #ccc' 
                    }}
                    required
                />
                <button 
                    type="submit" 
                    style={{ 
                        padding: '12px', 
                        fontSize: '16px', 
                        cursor: 'pointer', 
                        backgroundColor: '#ff8c00', 
                        color: '#ffffff', 
                        border: 'none', 
                        borderRadius: '4px' 
                    }}
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default AdminLogin;