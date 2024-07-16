import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Booking.css"
function ReadTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/tickets')
      .then(res => setTickets(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Link to='/'>Home</Link>
    <div className="bookingContainer">
    <h2>Read Tickets</h2>
      {
        tickets.length > 0 ? (
          tickets.map((ticket, index) => (
            <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <p><strong>Ticket ID:</strong> {ticket.ticket_id}</p>
              <p><strong>Booking ID:</strong> {ticket.booking_id}</p>
              <p><strong>Seat Number:</strong> {ticket.seat_number}</p>
              <p><strong>Class:</strong> {ticket.class}</p>
            </div>
          ))
        ) : (
          <p>No tickets found</p>
        )
      }
    </div>
    </div>
  );
}

export default ReadTickets;
