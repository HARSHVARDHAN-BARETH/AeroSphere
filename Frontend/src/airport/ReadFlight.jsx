import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Flight.css"

function ReadFlight() {
    const [flights, setFlight] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/flights")
        .then(res=>setFlight(res.data))
        .catch(err=>console.log(err))
    }, [])
  return (
    <div className='flightcontainer'>
      <div className='nav-links'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/createFlight' className='link'>Create Flight</Link>
        <Link to='/ReadAircraft' className='link'>Aircrafts</Link>
      </div>

      <h1 className='title'>Flight Information</h1>
      {flights.length > 0 ? (
        <ul className='flight-list'>
          {flights.map((flight) => (
            <li key={flight.flight_id} className='flight-item'>
              <strong>Flight Number:</strong> {flight.flight_number}
              <br />
              <strong>Origin:</strong> {flight.origin}
              <br />
              <strong>Destination:</strong> {flight.destination}
              <br />
              <strong>Departure Time:</strong> {flight.departure_time}
              <br />
              <strong>Arrival Time:</strong> {flight.arrival_time}
              <br />
              <strong>Status:</strong> {flight.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No flights found</p>
      )}
    </div>
  )
}

export default ReadFlight
