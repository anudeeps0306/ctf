import React,{useState} from "react";
import "./sign.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleemailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  // const handleSignup = () => {
  //   axios.post('/api/login', { email,username, password })
  //     .then(response => {
  //       const token = response.data.token;
  //       localStorage.setItem('token', token);
  //       // Redirect to dashboard or home page
  //     })
  //     .catch(error => {
  //       setError(error.response.data.message);
  //     });
  // };
  const handleSignup = (e) => {
    e.preventDefault();
    const data = { email: email,username:username, password: password ,confirmPassword:confirmPassword};
    fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
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
              <h1 className="login-sign-heading">Sign Up with your Email</h1>
            </div>
            <div className="login-line"></div>
          </div>

          <div className="login-button-handle">
            <div className="login-heading">
              <h1 className="login-heading-title">Email Address</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your email"
                name="email"
                value={email}
                onChange={handleemailChange}
              ></input>
            </div>
            <div className="login-heading">
              <h1 className="login-heading-title">Username</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your username"
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
            <div className="login-heading">
              <h1 className="login-heading-title">Conform Password</h1>
              <input
                className="login-heading-input"
                placeholder="Insert your password again"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              ></input>
            </div>
          </div>

          <div className="login-button">
            <button className="login-button-signup " onClick={handleSignup}>Sign Up</button>
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
