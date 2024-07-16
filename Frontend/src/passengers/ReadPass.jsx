import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Read.css'; // Import the new CSS file

function ReadPass() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container-read'>
      <h1 className='title'>Read Passenger</h1>
      <div className='links'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/createPass' className='link'>Create Passenger</Link>
      </div>
      {
        users.length > 0 ? (
          users.map((user, index) => (
            <div key={index} className='user-card'>
              <ul>
                <li><strong>User ID:</strong> {user.user_id}</li>
                <li><strong>Username:</strong> {user.username}</li>
                <li><strong>Password:</strong> {user.password}</li>
                <li><strong>Email:</strong> {user.email}</li>
                <li><strong>First Name:</strong> {user.first_name}</li>
                <li><strong>Last Name:</strong> {user.last_name}</li>
                <li><strong>Date of Birth:</strong> {new Date(user.date_of_birth).toLocaleDateString()}</li>
                <li><strong>Role:</strong> {user.role}</li>
              </ul>
              <Link to={`/select/${user.user_id}`} className='choose-link'>Choose</Link>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )
      }
    </div>
  );
}

export default ReadPass;
