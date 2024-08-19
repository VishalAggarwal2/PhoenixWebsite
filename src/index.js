import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function CreateUser() {
  useEffect(() => {
    fetch("http://localhost:3001/create-user", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log("User created:", data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return null;
}

root.render(
  <BrowserRouter>
    <App />
    <CreateUser />
  </BrowserRouter>
);