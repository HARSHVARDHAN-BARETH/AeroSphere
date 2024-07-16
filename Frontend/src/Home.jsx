import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className='container mx-auto p-4'>
      <nav className=' nav flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg'>
        <Link to='/readPass' className='text-white hover:bg-gray-700 p-2 rounded'>Passengers</Link>
        <Link to='/readFlight' className='text-white hover:bg-gray-700 p-2 rounded'>Flights</Link>
        <Link to='/ReadBookings' className='text-white hover:bg-gray-700 p-2 rounded'>Read Booking</Link>
      </nav>
    </div>
  );
}

export default Home;
