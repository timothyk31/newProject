import React, { useState } from 'react';
import axios from 'axios'
import { useGetUserID } from '../hooks/useGetUserID';

const PassForm = () => {
  const [formData, setFormData] = useState({
    opponent: '',
    year: '',
    quantity: '',
    price: '',
    guestPass: false,
    phoneNumber: '',
  });

  const opponentOptions = ['LA-MONROE','AUBURN','ALABAMA','SOUTH CAROLINA', 'MS STATE', 'ACU']; // Replace with your array of opponent options
  const classificationOptions= ['Freshman', 'Sophomore', 'Junior', 'Senior+']

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
        ...formData,
        [name]: newValue,
    });
    console.log(formData)
  };
  const userID = useGetUserID();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., send the data to the server.
    try {
        await axios.post(`http://localhost:${5000}/pass/passes`, {
            Opponent: formData.opponent, 
            year: formData.year, 
            quantity: formData.quantity,
            price: formData.price,
            guest: formData.guestPass,
            phoneNumber: formData.phoneNumber,
            userId: userID
        });
    } catch (err) {
        console.log(err);
    }
    console.log('Form Data:', formData);
  };

  return (
    <div className='form'>
      <h2>List Sports Pass</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="opponent">Opponent:</label>
          <select
            id="opponent"
            name="opponent"
            value={formData.opponent}
            onChange={handleChange}
            className='dropdown-menu'
          >
            <option value="" className='dropdown-option'>Select an opponent</option>
            {opponentOptions.map((option, index) => (
              <option key={index} value={option} className='dropdown-option'>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="Classification">Classification:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className='dropdown-menu'
          >
            <option value="" className='dropdown-option'>Classification</option>
            {classificationOptions.map((option, index) => (
              <option key={index} value={option} className='dropdown-option' onChange={handleChange}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            className='form--input'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            className='form--input'
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            className='form--input'
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="guestPass"
              checked={formData.guestPass}
              onChange={handleChange}
            />
            Guest Pass
          </label>
        </div>
        <button type="submit" className='form--submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default PassForm;
