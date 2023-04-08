import React from "react";
import "./login.css";
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="login_main">
          <div className="login_main_title">
            <h1>Join Us!</h1>
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
              ></input>
            </div>
            <div className="login-heading">
              <h1 className="login-heading-title">Username</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your username"
              ></input>
            </div>
            <div className="login-heading">
              <h1 className="login-heading-title">Password</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your password"
              ></input>
            </div>
          </div>

          <div className="login-button">
            <button className="login-button-signup">Sign Up</button>
            <div className="login-button-signin">
              <h1 className="login-button-heading">Don't have an account?</h1>
              <a className="login-register-heading" href="#">Register</a>
            </div>
          </div>
        </div>
        <div className="login_empty"></div>
      </div>
    </>
  );
};

export default Login;
