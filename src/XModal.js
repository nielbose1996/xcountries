import React, { useState } from 'react';
import './XModal.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [errors, setErrors] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({});
  };

  const validateAndSubmit = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Please fill out this field.";
    }

    if (!email) {
      newErrors.email = "Please fill out this field.";
    } else if (!email.includes('@')) {
      newErrors.email = `Please include an '@' in the email address. '${email}' is missing an '@'.`;
    }

    if (!phone) {
      newErrors.phone = "Please fill out this field.";
    } else if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!dob) {
      newErrors.dob = "Please fill out this field.";
    } else {
      const dobDate = new Date(dob);
      if (dobDate > new Date()) {
        alert("Invalid date of birth. Date of birth cannot be in the future.");
        return;
      }
    }

    setErrors(newErrors);

    // If there are no errors, handle successful form submission here
    // Close the modal
    if (Object.keys(newErrors).length === 0) {
      closeModal();
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');
    }
  };

  return (
    <div className="App">
      <h2>User Details Modal</h2>
      <button className="submit-button" onClick={openModal}>Open Form</button>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Fill Details</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            {errors.username && <p className="error-message">{errors.username}</p>}

            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required pattern="[0-9]{10}" />
            {errors.phone && <p className="error-message">{errors.phone}</p>}

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} required />
            {errors.dob && <p className="error-message">{errors.dob}</p>}

            <button className="submit-button" onClick={validateAndSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
