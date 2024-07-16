import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./App.css"

function Select() {
    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/select/${id}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
                setUser(null); // Optionally reset user state on error
            });
    }, [id]);

    return (
        <div className='user-container'>
        {user ? (
          <div className='user-info'>
            <h1 className='user-detail'>{user.username}</h1>
            <h1 className='user-detail'>{user.email}</h1>
            <h1 className='user-detail'>{user.first_name}</h1>
            <h1 className='user-detail'>{user.last_name}</h1>
            <h1 className='user-detail'>{user.role}</h1>
          </div>
        ) : (
          <h1 className='user-not-found'>User not found</h1>
        )}
      </div>
      );
}

export default Select;
