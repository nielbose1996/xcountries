import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [errors, setErrors] = useState({ firstName: false, lastName: false });

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setErrors({ ...errors, firstName: false });
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setErrors({ ...errors, lastName: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (firstName && lastName) {
      const newFullName = `${firstName} ${lastName}`;
      setFullName(newFullName);
    } else {
      // Update the errors state to show error messages
      setErrors({
        firstName: !firstName,
        lastName: !lastName,
      });
    }
  };

  return (
    <div>
      <h2>Full Name Display</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={handleFirstNameChange}
          error={errors.firstName}
          helperText={errors.firstName && 'Please fill out this field.'}
        />
        <br />
        <TextField
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={handleLastNameChange}
          error={errors.lastName}
          helperText={errors.lastName && 'Please fill out this field.'}
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      {fullName && (
        <div>
          <p>Full Name: {firstName} {lastName}</p>
        </div>
      )}
    </div>
  );
};

export default FullNameForm;
