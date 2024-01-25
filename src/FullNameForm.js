import React, { useState } from 'react';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [showError, setShowError] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (firstName && lastName) {
      const newFullName = `${firstName} ${lastName}`;
      setFullName(newFullName);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        {showError && <span style={{ color: 'yellow' }}>Please fill out this field.</span>}
        <br />
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div>
          <p>Full Name: "{firstName}" "{lastName}"</p>
        </div>
      )}
    </div>
  );
};

export default FullNameForm;
