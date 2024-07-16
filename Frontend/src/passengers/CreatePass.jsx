import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import "./Read.css"


function CreatePass() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    date_of_birth: '',
    role: '',
  });

  const options = [
    { value: 'admin', label: 'admin' },
    { value: 'customer', label: 'customer' },
    { value: 'staff', label: 'staff' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput(prevInput => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleRoleChange = (selectedOption) => {
    setInput(prevInput => ({
      ...prevInput,
      role: selectedOption.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8000/users", input)
      .then(res => console.log(res), location.reload())
      .catch(err => console.log(err));
  };

  return (
    <div className='form-container'>
      <h2 className='text-red-500'>Create Passenger</h2>
      <Link to='/' className='home-link'>Home</Link>
      <form onSubmit={handleSubmit} className='form'>
        <label className='form-label'>
          Enter your Username
          <input type="text" name="username" value={input.username} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Password
          <input type="password" name="password" value={input.password} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Enter your Email
          <input type="email" name="email" value={input.email} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Enter your First Name
          <input type="text" name="first_name" value={input.first_name} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Enter your Last Name
          <input type="text" name="last_name" value={input.last_name} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Enter your Date of Birth
          <input type="date" name="date_of_birth" value={input.date_of_birth} onChange={handleChange} className='form-input' />
        </label>
        <br />
        <label className='form-label'>
          Select your Role
          <Select options={options} onChange={handleRoleChange} className='form-select' />
        </label>
        <br />
        <input type="submit" value="Submit" className='form-submit' />
      </form>
    </div>
  );
}

export default CreatePass;
