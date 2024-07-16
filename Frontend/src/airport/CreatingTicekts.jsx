import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select';

function CreateTicket() {
  const [input, setInput] = useState({
    booking_id: '',
    seat_number: '',
    class: '',
  });

  const classOptions = [
    { value: 'economy', label: 'Economy' },
    { value: 'business', label: 'Business' },
    { value: 'first', label: 'First' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleClassChange = (selectedOption) => {
    setInput((prevInput) => ({
      ...prevInput,
      class: selectedOption.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/tickets', input)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Booking ID
          <input type="text" name="booking_id" value={input.booking_id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Seat Number
          <input type="text" name="seat_number" value={input.seat_number} onChange={handleChange} />
        </label>
        <br />
        <label>
          Class
          <Select options={classOptions} onChange={handleClassChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateTicket;
