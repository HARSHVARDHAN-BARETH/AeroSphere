import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if used
import "../App.css"
import Select from 'react-select';

function CreateFlight() {
  const [input, setInput] = useState({
    flight_number: '',
    origin: '',
    destination: '',
    departure_time: '',
    arrival_time: '',
    status: '',
  });

  const statusOptions = [
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'delayed', label: 'Delayed' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'departed', label: 'Departed' },
    { value: 'arrived', label: 'Arrived' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleStatusChange = (selectedOption) => {
    setInput((prevInput) => ({
      ...prevInput,
      status: selectedOption.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    formData.append('flight_number', input.flight_number);
    formData.append('origin', input.origin);
    formData.append('destination', input.destination);
    formData.append('departure_time', input.departure_time);
    formData.append('arrival_time', input.arrival_time);
    formData.append('status', input.status);

    axios.post('http://localhost:8000/flights', formData)
      .then((res) => {
        console.log(res);
        // Optionally, redirect or show success message after successful submission
      })
      .catch((err) => {
        console.log(err);
        // Handle error state or display error message
      });
  };

  return (
    <div className='form-container'>
      <Link to='/' className='home-link'>Home</Link>
      <h2>Create Flight</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label className='form-label'>
          Flight Number
          <input type="text" name="flight_number" value={input.flight_number} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Origin
          <input type="text" name="origin" value={input.origin} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Destination
          <input type="text" name="destination" value={input.destination} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Departure Time
          <input type="datetime-local" name="departure_time" value={input.departure_time} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Arrival Time
          <input type="datetime-local" name="arrival_time" value={input.arrival_time} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Status
          <Select options={statusOptions} onChange={handleStatusChange} className='form-select' />
        </label>
        <br />
        <input type="submit" value="Submit" className='form-submit' />
      </form>
    </div>
  );
}

export default CreateFlight;
