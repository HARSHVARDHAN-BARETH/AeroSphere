import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select';

function CreateBooking() {
  const [input, setInput] = useState({
    user_id: '',
    flight_id: '',
    booking_date: '',
    status: '',
  });

  const statusOptions = [
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'pending', label: 'Pending' },
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
    event.preventDefault();
    axios.post('http://localhost:8000/bookings', input)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
<div>
  <h2>Create Booking</h2>
  <form onSubmit={handleSubmit}>
    <label>
      User ID
      <input type="text" name="user_id" value={input.user_id} onChange={handleChange} />
    </label>
    <label>
      Flight ID
      <input type="text" name="flight_id" value={input.flight_id} onChange={handleChange} />
    </label>
    <label>
      Booking Date
      <input type="datetime-local" name="booking_date" value={input.booking_date} onChange={handleChange} />
    </label>
    <label>
      Status
      <Select options={statusOptions} onChange={handleStatusChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
</div>
  );
}

export default CreateBooking;
