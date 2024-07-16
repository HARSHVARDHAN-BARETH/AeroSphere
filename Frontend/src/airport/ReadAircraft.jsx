import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Flight.css"

function ReadAircraft() {
  const [aircrafts, setAircrafts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/aircrafts')
      .then(res => setAircrafts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='airContainer'>
      <Link to='/' className='home-link'>Home</Link>
      <h2>Read Aircraft</h2>
      {
        aircrafts.length > 0 ? (
          aircrafts.map((aircraft, index) => (
            <div key={index} className='aircraft-card'>
              <p><strong>Aircraft ID:</strong> {aircraft.aircraft_id}</p>
              <p><strong>Model:</strong> {aircraft.model}</p>
              <p><strong>Manufacturer:</strong> {aircraft.manufacturer}</p>
              <p><strong>Capacity:</strong> {aircraft.capacity}</p>
            </div>
          ))
        ) : (
          <p>No aircraft found</p>
        )
      }
    </div>
  );
}

export default ReadAircraft;
