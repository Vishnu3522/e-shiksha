import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log(`Logged in with username: ${username} and password: ${password}`);
  };

  return (
  
    <div className="login-container">
      <h1>Login</h1>
      <hr />
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <div className="input-wrapper">
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="input-wrapper">
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <button className="login-button mb-2" type="button" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup here</Link>.</p>
    </div>
    
  );
};

export default Login;
