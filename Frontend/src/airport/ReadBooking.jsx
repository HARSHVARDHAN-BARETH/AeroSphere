import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Booking.css"

function ReadBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/bookings')
      .then(res => setBookings(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to="/CreateBooking">Create Booking</Link>
      <Link to="/ReadTickets">Read Tickets</Link>
      <Link to="/CreateTicket">Create Ticket</Link>

     <div className="bookingContainer">
     <h2>Read Bookings</h2>
      {
        bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <p><strong>Booking ID:</strong> {booking.booking_id}</p>
              <p><strong>User ID:</strong> {booking.user_id}</p>
              <p><strong>Flight ID:</strong> {booking.flight_id}</p>
              <p><strong>Booking Date:</strong> {new Date(booking.booking_date).toLocaleString()}</p>
              <p><strong>Status:</strong> {booking.status}</p>
            </div>
          ))
        ) : (
          <p>No bookings found</p>
        )
      }
     </div>
    </div>
  );
}

export default ReadBookings;
