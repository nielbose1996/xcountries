import React, { useState } from 'react';
import './Login.css'; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setErr("");
      setIsSubmitted(true);
    } else {
      setErr("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isSubmitted ? (
        <div>
          <p>Welcome, {username}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="login-form">
          {err && <p className='err'>{err}</p>}
          <div className="input-group">
            <label htmlFor='username'>Username</label>
            <input
              id="username"
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor='password'>Password</label>
            <input
              id="password"
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button type='submit' className="submit-button">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}
