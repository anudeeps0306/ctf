import React, { useState } from "react";
import "./login.css";




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    axios.post('/api/login', { username, password })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        // Redirect to dashboard or home page
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };
  return (
    <>
      <div className="login">
        <div className="login_main">
          <div className="login_main_title">
            <h1>Welcome Back!</h1>
          </div>

          <div className="login_main_title2">
            <div className="login-line"></div>
            <div>
              <h1 className="login-sign-heading">Sign In with your Email</h1>
            </div>
            <div className="login-line"></div>
          </div>

          <div className="login-button-handle">
            <div className="login-heading">
              <h1 className="login-heading-title">Email Address</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your email"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              ></input>
            </div>
            <div className="login-heading">
              <h1 className="login-heading-title">Password</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              ></input>
            </div>
          </div>
          {error && <p>{error}</p>}
          <div className="login-button">
            <button className="login-button-signup" onClick={handleLogin}>Login In</button>
            <div className="login-button-signin">
              <h1 className="login-button-heading">Don't have an account?</h1>
              <a className="login-register-heading" href="#">
                Register
              </a>
            </div>
          </div>
        </div>
        <div className="login_empty"></div>
      </div>
    </>
  );
};

export default Login;
